import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { Client } from '../../models/client';
import { ConfirmDialogComponent } from '@app/shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ContentService } from '../../services/content.service';

import { User } from '@app/core/services/navigate/model/user.model';
import { IgxCalendarComponent } from 'igniteui-angular';

declare var FB: any;

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  @ViewChild('calendar') public calendar: IgxCalendarComponent;

  clients: User[] = [];
  events = [];
  clientsSelected: Array<Client> = [];
  currentDateTime = new Date();
  selectedDateTime = new Date();

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

  constructor(
    private datepipe: DatePipe,
    private dialog: MatDialog,
    public snackBar: MatSnackBar,
    private postForm: FormBuilder,
    private contentService: ContentService
  ) { }

  ngOnInit() {
    this.getClients();
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

  getClients() {
    this.contentService.getClients().subscribe((data) => {
      return this.clients = data;
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

  createAlbum(albumName: string): any {
    FB.api(
      '/249376455821855/albums',
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: 'EAAFiVT3Gv5EBAN035SPDeMdeTa1pwiQYrFaU900smX5UsoRVZB3Dc20a2BGb0y9Ez9ZBkwfMvZAYVUn9ZB7wHbS8PDAqH47C8mdUe5rJlTStYzJlzy2Gn29wzVeIaf8wvAbD6S99prFeZCZA6fs0FojkeQ6HxwYgNsHiIl3wdGZBMBSD4jRvMiZB9hz2t42sECcmNsoRyZBIUmAZDZD',
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

  postImagesToAlbumWithId(id: string) {

    const imgs = [
      // tslint:disable-next-line:max-line-length
      'http://3.bp.blogspot.com/-2w-4PPkcAm4/V2TS_2OYTWI/AAAAAAAADFI/_eylCqZZfwoKtuZct7CxhVhnle092GXiACHM/s1600/red-wolf-wallpapers-free-download-on-wallpapers-bros.jpg',
      // tslint:disable-next-line:max-line-length
      'https://cdn.vox-cdn.com/thumbor/zIH1nrau5uA1ajbKr8Qj3veh7Pg=/166x0:2833x2000/1200x800/filters:focal(166x0:2833x2000)/cdn.vox-cdn.com/uploads/chorus_image/image/55998769/1_3V8x0m62mBzUqEThApdtTg.0.jpeg',
      'https://newevolutiondesigns.com/images/freebies/cool-wallpaper-1.jpg',
      'https://media.giphy.com/media/3o85xopxIjnRKotn0c/giphy.gif'
    ];

    // this.post(mess, 'https://i.stack.imgur.com/3J699.jpg');
    imgs.forEach(element => {
      FB.api(
        `/304945553598278/photos`,
        'POST',
        {
          // tslint:disable-next-line:max-line-length
          access_token: 'EAAFiVT3Gv5EBAN035SPDeMdeTa1pwiQYrFaU900smX5UsoRVZB3Dc20a2BGb0y9Ez9ZBkwfMvZAYVUn9ZB7wHbS8PDAqH47C8mdUe5rJlTStYzJlzy2Gn29wzVeIaf8wvAbD6S99prFeZCZA6fs0FojkeQ6HxwYgNsHiIl3wdGZBMBSD4jRvMiZB9hz2t42sECcmNsoRyZBIUmAZDZD',
          url: element,
        },
        function (response) {
          console.log(response);
          if (response && !response.error) {
            /* handle the result */
          }
        }
      );
    });

  }

  postToFeedAlbum() {
    FB.api(
      `/me/feed`,
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: 'EAAFiVT3Gv5EBAN035SPDeMdeTa1pwiQYrFaU900smX5UsoRVZB3Dc20a2BGb0y9Ez9ZBkwfMvZAYVUn9ZB7wHbS8PDAqH47C8mdUe5rJlTStYzJlzy2Gn29wzVeIaf8wvAbD6S99prFeZCZA6fs0FojkeQ6HxwYgNsHiIl3wdGZBMBSD4jRvMiZB9hz2t42sECcmNsoRyZBIUmAZDZD',
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

  testUI() {
    FB.ui({
      method: 'feed',
      url: 'http://d24w6bsrhbeh9d.cloudfront.net/photo/agydwb6_460s.jpg'
    }, function (response) {
      console.log(response);
    });
  }

  post(content: string, img: string) {
    FB.api(
      `/me/photos`,
      'POST',
      {
        // tslint:disable-next-line:max-line-length
        access_token: 'EAAFiVT3Gv5EBAN035SPDeMdeTa1pwiQYrFaU900smX5UsoRVZB3Dc20a2BGb0y9Ez9ZBkwfMvZAYVUn9ZB7wHbS8PDAqH47C8mdUe5rJlTStYzJlzy2Gn29wzVeIaf8wvAbD6S99prFeZCZA6fs0FojkeQ6HxwYgNsHiIl3wdGZBMBSD4jRvMiZB9hz2t42sECcmNsoRyZBIUmAZDZD',
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

  onSubmit(mess: string, img: string) {

    const imgs = [
      'http://d24w6bsrhbeh9d.cloudfront.net/photo/agydwb6_460s.jpg',
      'https://cdn.techgyd.com/25-Labs-Facebook-Multiple-Group-Poster.png',
      'https://i.stack.imgur.com/3J699.jpg'
    ];

    // this.post(mess, 'https://i.stack.imgur.com/3J699.jpg');
    imgs.forEach(element => {
      this.post(mess, element);
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

  getEvents(dates: Date[]) {
    const date = this.datepipe.transform(this.calendar.value, 'MM/dd/yyy');

    this.contentService.getClientPostByClientDate(date).subscribe(result => {
      this.events = result;
    });
  }

  postMultiPhoto() {
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
      access_token: 'EAAFiVT3Gv5EBAGDgrkr5nGqz5e2kTNaWoDWOZCh3lTKjWFOHeZCNp4RCyTNZAKRSU2wINMGVxQ3XHe8vLncx51TVcrZArqHi4dqzMPrwDwsmZCM08wWhtHf3rYezh0bE9PFDcCZAxRX9bYubG6TvuITIsXBlYtUfGQJgdPY8uVEUti0PZAyO6FVNPzZCh9HLjxYZD',
    }, function (response) {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
      }
    );

    const multiPhotoId = result.getDecodedBody();

  }
}
