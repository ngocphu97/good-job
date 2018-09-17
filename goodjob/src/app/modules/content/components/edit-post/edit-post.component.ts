import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContentService } from '../../services/content.service';

declare var FB: any;

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  selectedFile = null;

  // tslint:disable-next-line:max-line-length
  GJ_access_token = 'EAAFiVT3Gv5EBAOrMzSjxoR8wSPZBTgw40v0Py2c50pA4TRWbgbsTSpBSChQ0cdklw95mGqq6ab6LwoF45JiafE3OVkUAECnB6D5EfKrItpKIf3hwdZA80ZClT6zjYj5K1Ezrh0bsby77gICVLZBXKovKZBA9ZBMoK1B8mx6TTvY0rZCLyyWd0ZBK0Q6ZBKATYktAZD';

  constructor(private http: HttpClient, private service: ContentService) {
  }

  ngOnInit() {
  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUploadOnePhotoFromLocal() {
    const fileReader = new FileReader();
    const file = this.selectedFile;

    fileReader.onloadend = async () => {
      const token = this.GJ_access_token;
      const photoData = new Blob([fileReader.result], { type: 'image/jpg' });
      const formData = new FormData();

      formData.append('access_token', token);
      formData.append('source', photoData);
      formData.append('message', 'status message');

      let response = await fetch(`https://graph.facebook.com/249376455821855/photos`, {
        body: formData,
        method: 'POST',
      });

      response = await response.json();
      console.log(response);
    };

    fileReader.readAsArrayBuffer(file);
  }

  // post single photo to album
  postSinglePhoto() {
    const token = this.GJ_access_token;
    FB.api(
      '/me/photos',
      'POST',
      {
        access_token: token,
        caption: 'post single photo to albumn',
        url: 'https://i.ytimg.com/vi/s9n0z-mrU1I/maxresdefault.jpg'
      },
      (response) => {
        console.log(response);
        if (response && !response.error) {
          /* handle the result */
        }
        return response;
      }
    );
  }

  // post multi photo
  postMultiPhotosUnpublish() {
    const token = this.GJ_access_token;
    const urls = [
      'https://i.ytimg.com/vi/s9n0z-mrU1I/maxresdefault.jpg',
      'https://i.ytimg.com/vi/AT46yodjkNA/maxresdefault.jpg',
      'https://i.ytimg.com/vi/AuyNNQqpTSc/hqdefault.jpg',
    ];
    const fbMediaId = [];
    urls.forEach(u => {
      const a = fbMediaId;
      const l = urls.length;
      FB.api(
        '/me/photos',
        'POST',
        {
          access_token: token,
          caption: 'post multi photo to albumn with unpublish',
          published: false,
          url: u
        },
        (response) => {
          a.push(
            { media_fbid: response.id }
          );
          if (a.length === l) {
            FB.api(
              '/me/feed',
              'POST',
              {
                access_token: token,
                message: 'post multi photo to albumn',
                attached_media: a
              },
              (res) => {
                if (res && !res.error) { }
                return res;
              }
            );
          }
        });
    });
  }
}
