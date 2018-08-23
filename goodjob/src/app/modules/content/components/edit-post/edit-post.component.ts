import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ContentService } from '../../services/content.service';

import { User } from '@app/core/services/navigate/model/user.model';
import { IgxCalendarComponent } from 'igniteui-angular';

import { Client } from '../../models/client';
import { Event } from '../../models/event';
import * as moment from 'moment';


declare var FB: any;

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  @ViewChild('calendar') public calendar: IgxCalendarComponent;

  // remove user type
  clients: User[] = [];

  clientsSelected: Array<Client> = [];
  currentDateTime = new Date();
  selectedDateTime = new Date();

  events: Array<Event> = [];
  eventsByDate: Array<Event> = [];
  eventsByMonth: Array<Event> = [];

  content = '';
  imgPreview = '';
  url: '';
  result: any;
  files: any;
  base64textString = [];

  private exportTime = {
    hour: this.currentDateTime.getHours(),
    minute: this.currentDateTime.getMinutes(),
    meriden: this.currentDateTime.getHours() >= 12 ? 'PM' : 'AM',
    format: 12
  };
  private exportTime24 = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  clientControl = new FormControl();
  timeControl = new FormControl();
  postControl = new FormControl();

  imgs = [
    'http://d24w6bsrhbeh9d.cloudfront.net/photo/agydwb6_460s.jpg',
    'https://cdn.techgyd.com/25-Labs-Facebook-Multiple-Group-Poster.png',
    'https://i.stack.imgur.com/3J699.jpg'
  ];

  connectAccount = new Array<Client>();

  // tslint:disable-next-line:max-line-length
  access_token = 'EAAFiVT3Gv5EBAHvvGCnfSKPe8jivwGgHUbfmTuCdNFaeuzc1yDo4IhniZCFe2OE3TxHgr7sQj0wzZBPwXZB5xZBwF9LLBKlnsHRFAGpdKbN7UUuIX6a3RYiDTnMModxCWoSFmDbD00IGQw5SXMyJW84pcuoVrXfCzpgjY1NrxC18HlNiQkgQHeiPyi5T54WI38rYfYelYBa6lbgjgGZBjjA3u08WzKrcZD';

  constructor(
    private datepipe: DatePipe,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private postForm: FormBuilder,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.getInfo();
    this.firstFormGroup = this.postForm.group({
      clientControl: ['', [Validators.required]]
    });
    this.secondFormGroup = this.postForm.group({
      dateControl: ['', []],
    });
    this.thirdFormGroup = this.postForm.group({
      postControl: ['', []]
    });
  }

  checkClient(clients) {
    this.clientsSelected = clients;
    if (this.clientsSelected.length === 0) {
      this.isLinear = true;
      this.openDialog();
    }
  }

  checkDateTime(selectedDateTime) {
    this.selectedDateTime = selectedDateTime;
  }

  checkPost(post) {
    this.content = post;
  }

  onAccept(evt) {
    const file = evt.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  handleReaderLoaded(e) {
    this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
  }

  onDeleteImgPreview(item) {
    const index = this.base64textString.indexOf(item);
    this.base64textString.splice(index, 1);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Not yet choose',
        message: 'You must choose at leat one to continue ',
        confirmButtonText: 'Ok'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onSelectedDate(event: any) {
    this.currentDateTime = event.value;
  }

  onRevert() {
    this.snackBar.open(`Revert time to ${this.exportTime24.hour}:${this.exportTime24.minute} ${this.exportTime24.meriden}`, null, {
      duration: 500,
    });
  }

  onSubmitTime(time: any) {
    this.snackBar.open(`Saved time ${this.exportTime.hour}:${this.exportTime.minute} ${this.exportTime.meriden}`, null, {
      duration: 500,
    });

    if (this.exportTime.meriden === 'PM') {
      this.selectedDateTime.setHours(this.exportTime.hour + 12);
    } else {
      this.selectedDateTime.setHours(this.exportTime.hour);
    }

    this.selectedDateTime.setMinutes(this.exportTime.minute);
    this.selectedDateTime.setSeconds(0);
  }

  getEventsByDate(date: string) {
    const dateConvert = date.toString().substring(0, 15);
    const result = this.events.filter(e =>
      (e.created_time.indexOf(dateConvert) > -1 && e.message.length !== 0));

    if (this.eventsByDate.length > 0) {
      this.eventsByDate = [];
      result.forEach(ele => {
        this.eventsByDate.push(ele);
      });
    } else {
      result.forEach(ele => {
        this.eventsByDate.push(ele);
      });
    }
    console.log(this.eventsByDate);
  }

  // getEventsByMonth(date: string) {
  //   // substring to month and year to find feed in that month
  //   const dateConvert = date.toString().substring(0, 15);
  //   const result = this.events.filter(e =>
  //     (e.created_time.indexOf(dateConvert) > -1 && e.message.length !== 0));

  //   if (this.eventsByMonth.length > 0) {
  //     this.eventsByDate = [];
  //     result.forEach(ele => {
  //       this.eventsByMonth.push(ele);
  //     });
  //   } else {
  //     result.forEach(ele => {
  //       this.eventsByMonth.push(ele);
  //     });
  //   }
  //   console.log(this.eventsByMonth);
  // }

  getInfo() {
    const token = this.access_token;
    const array = this.connectAccount;
    const events = this.events;
    FB.api(`/me`, 'GET',
      {
        // tslint:disable-next-line:max-line-length
        access_token: token,
        fields: 'accounts{feed,access_token, name, photos.width(150).height(150){picture}}'
      }, (response) => {
        const length = response.accounts.data.length;
        for (let i = 0; i < length; i++) {
          const id = response.accounts.data[i].id;
          const photo = response.accounts.data[i].photos;
          const avatar = photo.data[0].picture;
          const data = response.accounts.data[i].name;
          const access_token = response.accounts.data[i].access_token;
          const feed = response.accounts.data[i].feed;
          const client: Client = {
            id: id,
            name: data,
            image: avatar,
            access_token: access_token,
            feed: feed.data,
          };
          array.push(client);

          for (let j = 0; j < client.feed.length; j++) {
            if (client.feed[j].message == null) {
              client.feed[j].message = '';
            }
            if (client.feed[j].story == null) {
              client.feed[j].story = '';
            }
            const converDateTime = new Date(client.feed[j].created_time).toString();
            const event: Event = {
              id: client.feed[j].id,
              clientName: data,
              created_time: converDateTime,
              story: client.feed[j].story,
              message: client.feed[j].message
            };
            this.events.push(event);
          }
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
  }


  createAlbum(albumName: string): any {
    const token = this.access_token;
    FB.api(
      '/249376455821855/albums',
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: token,
        message: 'tesst tesst testt testt 123345456',
        name: '## feed feed feed feed feed feed ##'
      },
      function (response) {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
        return response;
      }
    );
  }

  postToFeedAlbum() {
    const token = this.access_token;
    FB.api(
      `/me/feed`,
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: token,
        // tslint:disable-next-line:max-line-length
        message: 'You can upload an unpublished photo without publishing a story to the /user-id/photos or /page-id/photos edge by making a similar call as described in the single photo post section but by adding the argument published=false. Publishing user photos requires a user access token with user_photos permission. Publishing page photos requires a page access token with manage_pages and publish_pages permissions.'

      },
      function (response) {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
      }
    );
  }

  post(content: string, img: string) {
    const token = this.access_token;
    FB.api(
      `/me/photos`,
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: token,
        message: content,
        url: img
      },
      function (response) {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
      }
    );
  }

  postMultiPhoto() {
    const token = this.access_token;
    const imgs = [
      {
        url: 'http://d24w6bsrhbeh9d.cloudfront.net/photo/agydwb6_460s.jpg',
        published: false
      },
      {
        url: 'https://i.stack.imgur.com/3J699.jpg',
        published: false
      },
      {
        url: 'https://cdn.techgyd.com/25-Labs-Facebook-Multiple-Group-Poster.png',
        published: false
      }
    ];

    const result = FB.api(`/me/photos`, 'POST', {
      // tslint:disable-next-line:max-line-length
      access_token: token,
    }, function (response) {
      console.log(response);
      if (response && !response.error) {
        /* handle the result */
      }
    }
    );

    const multiPhotoId = result.getDecodedBody();

  }

  post1(f: any) {
    const token = this.access_token;
    const fileReader = new FileReader();
    // const file = document.getElementById('file').files[0];

    fileReader.onloadend = async () => {
      const photoData = new Blob([fileReader.result], { type: 'image/jpg' });
      const formData = new FormData();

      formData.append('access_token', token);
      formData.append('source', photoData);
      formData.append('message', 'some status message');

      let response = await fetch(`https://graph.facebook.com/249376455821855/photos`, {
        body: formData,
        method: 'post'
      });
      response = await response.json();
      console.log(response);
    };
    fileReader.readAsArrayBuffer(f);
  }

  onSubmit(mess: string, img: string) {

    this.post(mess, img);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Submit',
        message: 'Your post is saved to database ',
        confirmButtonText: 'Ok'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
