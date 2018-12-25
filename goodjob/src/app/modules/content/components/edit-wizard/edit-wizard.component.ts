import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CalendarEvent } from 'angular-calendar';

import { ContentService } from '../../services/content.service';
import { Group } from '../../models/group';
import { AddGroupFormComponent } from '../add-group-form/add-group-form.component';
import { Client } from '../../models/client';

declare var FB: any;

@Component({
  selector: 'app-edit-wizard',
  templateUrl: './edit-wizard.component.html',
  styleUrls: ['./edit-wizard.component.scss']
})
export class EditWizardComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  GJ_access_token = 'EAANQlAVxZBd4BAH8WrjbS68oXuflByJKec5pNXvH0XlscoKL79tRyarPKjF5VL86ZCP0I6ou8BQvqDWvSgbqa92IGYSqTj9aFtAm8wwmckS4KfJ1O2gsN1Yf3OZAGc7bDWujvE8iQ7Cmy3aZCltZBd1F1sQ6FNqtGBcpm6UQoNmLWq3uITv3FEPYI2YlSjD0ZD';
  selectedFile = null;
  multiSelectedFile = [];

  isLinear = false;
  color = 'accent';
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  content = '';
  base64textString = [];
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

  constructor(
    private _formBuilder: FormBuilder,
    private service: ContentService,
    private dialog: MatDialog) { }

  ngOnInit() {
    this.getInfo();

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onAccept(evt) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      this.multiSelectedFile.push(file);
      console.log(file);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(AddGroupFormComponent, {
      width: '1000px',
      data: this.clients
    });

    dialogRef.afterClosed().subscribe(result => {
      const g: Group = {
        id: '1',
        groupName: result[0].groupName,
        clients: result[0].clients
      };
      this.groups.push(g);
      console.log(this.groups);
    });
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + window.btoa(e.target.result));
  }

  onDeleteImgPreview(item) {
    const index = this.base64textString.indexOf(item);
    this.base64textString.splice(index, 1);
  }

  getInfo() {
    this.clients = this.service.getInfo();
  }

  selectGroup(group: Group) {
    this.selectedGroup = this.groups.find(function (g) {
      return g.groupName === group.groupName;
    });
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
