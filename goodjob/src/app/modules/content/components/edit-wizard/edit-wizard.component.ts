import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';

import { ContentService } from '../../services/content.service';
import { Client } from '../../models/client';
import { Group } from '../../models/group';

import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';

declare var FB: any;

@Component({
  selector: 'app-edit-wizard',
  templateUrl: './edit-wizard.component.html',
  styleUrls: ['./edit-wizard.component.scss']
})
export class EditWizardComponent implements OnInit {

  selectedFile = null;
  multiSelectedFile = [];

  isLinear = false;
  color = 'accent';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  content = '';
  imagesPreview = [];
  groups: Group[] = [];
  events: CalendarEvent[] = [];
  clients: Client[] = [];

  selectedGroup: Group = {
    id: '',
    groupName: '',
    clients: [],
    created_time: ''
  };

  onPostSuccess = true;
  onPostFalse = false;

  loading = true;

  constructor(
    private _formBuilder: FormBuilder,
    private service: ContentService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.getInfo();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  getInfo() {
    this.clients = this.service.getInfo();
    console.log(1, this.clients);
  }

  onAccept(evt) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      this.multiSelectedFile.push(file);
    }
  }

  openDialog() {
    console.log('open');
  }

  // openDialog(): void {
  //   if (this.clients.length === 0) {
  //     const dialogRef = this.dialog.open(ConfirmDialogComponent, {
  //       width: '1000px',
  //       data: {
  //         title: 'Login again',
  //         message: 'Your token out of time',
  //         confirmButtonText: 'OK',
  //       }
  //     });
  //     dialogRef.afterClosed().subscribe(result => {
  //       this.router.navigateByUrl('/');
  //     });
  //   } else {
  //     const dialogRef = this.dialog.open(AddGroupFormComponent, {
  //       width: '1000px',
  //       data: this.clients
  //     });

  //     dialogRef.afterClosed().subscribe(result => {
  //       console.log(result);
  //       const g: Group = {
  //         id: '1',
  //         groupName: result[0].groupName,
  //         clients: result[0].clients
  //       };
  //       this.groups.push(g);
  //     });
  //   }
  // }

  selectGroup(group: Group) {
    this.selectedGroup = this.groups.find(function (g) {
      return g.groupName === group.groupName;
    });
  }

  handleReaderLoaded(e) {
    this.imagesPreview
      .push('data:image/png;base64,' + window.btoa(e.target.result));
  }

  onDeleteImgPreview(item) {
    const index = this.imagesPreview.indexOf(item);
    this.imagesPreview.splice(index, 1);
  }

  onUploadMuiltiPhotos(message: string) {
    console.log('preparing your post ...');
    const files = this.multiSelectedFile;
    const fbMediaId: any = [];
    const _length = this.multiSelectedFile.length;

    console.log('uploading your post ...');
    this.selectedGroup.clients.forEach(c => {
      const pageId = c.id;
      const _token = c.access_token;

      files.forEach(file => {
        const fileReader = new FileReader();
        if (file) {
          fileReader.onloadend = async () => {
            const token = _token;
            const photoData = new Blob([fileReader.result], { type: 'image/jpeg' });
            const formData = new FormData();
            const published = 'false';

            formData.append('access_token', token);
            formData.append('source', photoData);
            formData.append('message', message);
            formData.append('published', published);

            let response: any = await fetch(`https://graph.facebook.com/${pageId}/photos`, {
              body: formData,
              method: 'POST',
            });
            response = await response.json();

            fbMediaId.push({
              media_fbid: response.id
            });

            if (fbMediaId.length === _length) {
              const mess = message;
              FB.api(
                '/me/feed',
                'POST',
                {
                  access_token: token,
                  message: mess,
                  attached_media: fbMediaId
                }, (res) => {
                  console.log(res);
                  console.log('your post is posted successfull ...');
                  if (res && !res.error) {
                    // catch error here
                  }
                  return res;
                });
            }
          };
          fileReader.readAsArrayBuffer(file);
        }
      });
    });
  }

  onUploadVideo(message) {
    this.selectedGroup.clients.forEach(c => {
      console.log('preparing your post ....');

      const pageId = c.id;
      const token = c.access_token;

      const file = this.multiSelectedFile[0];
      // const time = new Date('2018.09.28').getTime() / 1000;
      const formData = new FormData();

      formData.append('my video', file);
      formData.append('Content-Type', 'multipart / form - data');
      formData.append('access_token', token);
      formData.append('description', message);
      formData.append('published', 'true');

      console.log('uploading your post ....');

      const xhr = new XMLHttpRequest();
      xhr.open('POST', `https://graph-video.facebook.com/v3.1/${pageId}/videos`);
      xhr.send(formData);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          const res = xhr.response;
          console.log('res xhr: ', res);
          console.log('Your post is posted successfull');
        }
      };

    });
  }
}
