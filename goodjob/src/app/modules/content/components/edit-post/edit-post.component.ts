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
    multiSelectedFile = [];
    clients: any = [];

    // tslint:disable-next-line:max-line-length
    GJ_access_token = 'EAAFiVT3Gv5EBAOA6WrZBud09aTGb6rbUqeZAPVo454CZAh9SJ2DAtlJZCNox7t96IZBIgyEMJCSoIXAJ05OiMZAwu3Iz9WN0QBcoHV2FuDHgXr62MTe4GcFI2RKy5qKVhZBmQrBRORRUHfXNNzezMshEoo4HqBpZBPkVl87Jc3fKZB0Gwj6iWXN9o2dQB5lZBfLhJrsYobYZC6vOgZDZD';

    constructor(private http: HttpClient, private service: ContentService) {
    }

    ngOnInit() {
    }

    getInfo() {
        this.clients = this.service.getInfo();
    }

    onFileChanged(event) {
        this.selectedFile = event.target.files[0];
    }

    onUploadOnePhotoFromLocal() {
        const fileReader = new FileReader();
        const file = this.selectedFile;
        if (file) {
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
    }

    // select multi photos from input
    onAccept(evt) {
        const file = evt.target.files[0];
        if (file) {
            this.multiSelectedFile.push(file);
        }
    }

    uploadMultiPhotos(message: string, pageToken: string) {
        const files = this.multiSelectedFile;
        const token = this.GJ_access_token;
        this.service.onUploadMuiltiPhotos(message, files, token);
    }

    onUploadMuiltiPhotos(message: string) {
        const files = this.multiSelectedFile;
        const fbMediaId: any = [];
        const lenght = this.multiSelectedFile.length;
        files.forEach(file => {
            const fileReader = new FileReader();
            if (file) {
                fileReader.onloadend = async () => {
                    const token = this.GJ_access_token;
                    const photoData = new Blob([fileReader.result], { type: 'image/jpeg' });
                    const formData = new FormData();
                    const published = 'false';

                    formData.append('access_token', token);
                    formData.append('source', photoData);
                    formData.append('message', message);
                    formData.append('published', published);

                    let response: any = await fetch(`https://graph.facebook.com/249376455821855/photos`, {
                        body: formData,
                        method: 'POST',
                    });
                    response = await response.json();

                    fbMediaId.push({
                        media_fbid: response.id
                    });

                    if (fbMediaId.length === lenght) {
                        const mess = message;
                        FB.api(
                            '/me/feed',
                            'POST',
                            {
                                access_token: token,
                                message: mess,
                                attached_media: fbMediaId
                            },
                            (res) => {
                                console.log(res);
                                if (res && !res.error) { }
                                return res;
                            }
                        );
                    }

                };

                fileReader.readAsArrayBuffer(file);
            }
        });
    }

    uploadVideoToFacebookUsingURL() {
        const url = 'https://s20.onlinevideoconverter.com/download?file=d3e4e4b1i8i8f5d3';
        const token = this.GJ_access_token;

        FB.api(`https://graph-video.facebook.com/v3.1/249376455821855/videos`, 'POST',
            {
                access_token: token,
                file_url: url
            }, (response) => {
                console.log(response);
            }
        );
    }

    video(event) {
        const file = event.target.files[0];
        const time = new Date('2018.09.28').getTime() / 1000;
        const formData = new FormData();

        formData.append('my video', file);
        formData.append('Content-Type', 'multipart / form - data');
        formData.append('access_token', this.GJ_access_token);
        formData.append('description', 'Shedule post with video');
        formData.append('published', 'false');
        formData.append('scheduled_publish_time', time.toString());

        const response: any = fetch(`https://graph-video.facebook.com/v3.1/249376455821855/videos`, {
            body: formData,
            method: 'POST',
        });
        response.then(res => {
            console.log('res fetch', res);
        });

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://graph-video.facebook.com/v3.1/249376455821855/videos');
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                const res = xhr.response;
                console.log('res xhr: ', res);
            }
        };
    }

    schedulePost() {
        const token = this.GJ_access_token;
        FB.api(`https://graph.facebook.com/v3.1/me/feed`, 'POST',
            {
                access_token: token,
                message: 'shedule post video ne',
                published: false,
                scheduled_publish_time: 'tomorrow',
            }, (response) => {
                console.log(response);
            }
        );
    }

    getSchedulePost() {
        const token = this.GJ_access_token;
        FB.api(
            'me/scheduled_posts', 'GET',
            {
                access_token: token,
            }, (response) => {
                console.log('Schedule posts get from FB: ');
                console.log(response);
            }
        );
    }

    editSchedulePost(postId) {
        const token = this.GJ_access_token;
        const id = postId;
        const time = new Date('2018.10.30').getTime() / 1000;

        FB.api(`https://graph.facebook.com/v3.1/${id}`, 'POST',
            {
                access_token: token,
                published: false,
                message: 'This one is edited 2',
                scheduled_publish_time: time,
            }, (response) => {
                console.log(response);
            }
        );
    }

    logAn() {
        FB.AppEvents.logPageView();
    }
}

