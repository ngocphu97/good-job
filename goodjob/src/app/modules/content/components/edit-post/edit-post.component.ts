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
import { HttpClient } from '@angular/common/http';

declare var FB: any;
declare var $: any;

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
  access_token = 'EAAFiVT3Gv5EBAEVTP9qZC0Mlhnhu3gRwu50yEQbH7bKM150nbVyztMucVyOZBipxqEZAg8ZCfxKxiLarDvkSHw3TZCr7L9H7MnTUmTtftd1uppTYvLUW4BXy0Cd9KoXNygvZBVS7YShxx05I5fNuDOUBtZBia37vGfSZALdwe4kOC67JhZBKdTH03X3ZBnvLggWLtJTeHKqxkJsdweLfQaKXpFZASRvuFEZCCboZD';

  constructor(
    private datepipe: DatePipe,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private postForm: FormBuilder,
    private contentService: ContentService,
    private http: HttpClient
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

    this.schedule(this.access_token, 'test thoi gian: Saturday, August 25, 2018 10:38:28 PM GMT+07:00', '1535211508');
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
    this.base64textString.push('data:image/png;base64,' + window.btoa(e.target.result));
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
    // tslint:disable-next-line:max-line-length
    const token = 'EAAFiVT3Gv5EBAKaLaKa9KtcmIAcaNWZAqZCveFM7LdM6tH5LBWJqqJ9Y4e3HeUmQRyMzAWIb9gMiVm6lSPNiDzHkOBH0VQge8VtSBLLFgNSxrZBXf6kjY6Hyw24LDeOUjFUfSA8Njg5ppfY9ZBNXcDPQSKQSzwcnZA22l3urbWvCVmnYGqwaLFS1LrcKHnYi2dVbjkBPizetUyvMNqOyc';
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

  post(text: string) {
    // tslint:disable-next-line:max-line-length
    const clientToken = 'EAAFiVT3Gv5EBAI7CXjsYpVF9jJZB17TAz2NqrqyTGhmxYbYPUI9Q4sbg0kNlb2UecSY7z5mjFd81YdMjuVf1cbny3NYP7nHsKIIa9ZAOiGLIFwrzi5RZC5hItRNLmvG3mpOGNXnVYAZCUlsioglj8XAy8Ti1ydJyF6SHuxX5yIlINQHcZBJCVAzujZAhP2hgudMIRCZCZC3m6u7DTVDCZAOSD';
    const content = text;
    const imgUrl = 'https://images-na.ssl-images-amazon.com/images/I/81MQcUJi-UL._SY355_.jpg';
    FB.api(
      `/249376455821855/photos`,
      'POST',
      {
        access_token: clientToken,
        message: content,
        url: imgUrl,
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

  schedule(pageToken: string, content: string, time: string) {
    const token = pageToken;
    const message = content;
    const scheudle_time = time;
    FB.api(
      `/me/feed`,
      'POST',
      {
        access_token: token,
        published: false,
        message: message,
        scheduled_publish_time: scheudle_time
      },
      function (response) {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
      }
    );
  }

  onSubmit(content: string, image: string) {

    // this.post(content);

    this.contentService.connectToServer().subscribe(data => {
      console.log(data);
    });

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

  getAllCats() {
    return this.contentService.getAllCats().subscribe(data => {
      console.log(data);
    });
  }

  getCatByName(name: string) {
    return this.contentService.getCat(name).subscribe(data => {
      console.log(data);
    });
  }

  // insertCat(cat: any) {
  //   return this.contentService.insertCat(cat).subscribe(res => {
  //     console.log(res);
  //   });
  // }

  insertcat(catName: string) {
    const cat = {
      name: catName
    };
    return this.contentService.insertCat(cat).subscribe(data => console.log(data));
  }

  deleteCat(cat: any) {
    return this.contentService.deleteCat(cat).subscribe(res => {
      console.log(res);
    });
  }

  // postNow() {
  //   return this.contentService.postNow().subscribe(res => {
  //     console.log(res);
  //   });
  // }

  postNow(value: string) {
    this.http.get('http://localhost:3000/post').subscribe(res => {
      console.log(res);
    });
  }
}
