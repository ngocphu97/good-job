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
    GJ_access_token = 'EAAFiVT3Gv5EBALed6ZCZCNuC6sm3zoSSkuHwYaj5QFP2OZADEootMzKOC4GCurtV5noVI6f3ysu0C7m47usf14PYvdUzggYzInIGXboE1ZCX2wQ8MMwvrlEBska0YjB4DqfYFTjwgSkUhcNH3gcb696Q3q6cDc9D1XDYUhO206S7Tk2euKmTTEQuhBYscZCZCXuaojEEsN1gZDZD';

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
            console.log(this.multiSelectedFile.length);
        }
    }

    uploadMultiPhotos(message: string, pageToken: string) {
        const files = this.multiSelectedFile;
        const token = this.GJ_access_token;
        this.service.onUploadMuiltiPhotos(message, files, token);
    }

    onUploadMuiltiPhotos(message: string) {
        console.log(this.multiSelectedFile);
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
                    formData.append('message', 'status message');
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

    onVideoChange(event) {
        const fileReader = new FileReader();
        const videoFile = event.target.files[0];
        // const path = videoFile.path;
        console.log(videoFile);

        // if (videoFile) {
        //     fileReader.onloadend = async () => {
        //         const token = this.GJ_access_token;
        //         const formData = new FormData();
        //         const videoname = videoFile.name;

        //         formData.append('access_token', token);
        //         formData.append('upload_phase', 'start');
        //         formData.append('file_size', '152043520');

        //         let response: any = await fetch(`https://graph-video.facebook.com/249376455821855/videos`, {
        //             body: formData,
        //             method: 'POST',
        //         });

        //         response = await response.json();

        //         this.tranferSession(response, videoname);
        //     };
        //     fileReader.readAsArrayBuffer(videoFile);
        // }
    }


    // innitalizeSession(event) {
    //     const file = event.target.files[0];
    //     const videoname = file.name;
    //     const SIZE = file.size;
    //     const token = this.GJ_access_token;

    //     FB.api(`https://graph-video.facebook.com/249376455821855/videos`, 'POST',
    //         {
    //             access_token: token,
    //             source: event
    //         }, (response) => {
    //             console.log(response);
    //         }
    //     );
    // }
    // tranferSession(file, videoname, upload_session_id) {
    //     const session = this.blobFile(file);
    //     const token = this.GJ_access_token;
    //     console.log(session);

    //     FB.api(`https://graph-video.facebook.com/249376455821855/videos`, 'POST',
    //         {
    //             access_token: token,
    //             source: file
    //         }, (response) => {
    //             console.log(response);
    //         }
    //     );
    // FB.api(`https://graph-video.facebook.com/249376455821855/videos`, 'POST',
    //     {
    //         access_token: token,
    //         upload_phase: 'finish',
    //         upload_session_id: upload_session_id
    //     }, (res) => {
    //         console.log(res);
    //     }
    // );

    // }

    // finishSession(id) {
    //     const token = this.GJ_access_token;
    //     FB.api(`https://graph-video.facebook.com/249376455821855/videos`, 'POST',
    //         {
    //             access_token: token,
    //             upload_phase: 'finish',
    //             upload_session_id: id
    //         }, (response) => {
    //             console.log(response);
    //         }
    //     );
    //     console.log('finish');
    // }

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

    uploadVideoToFacebooFromFile(event) {
        const file = event.target.files[0];
        const token = this.GJ_access_token;
        this.intall(file, token);
    }

    intall(file, token) {
        const file_size = file.size;
        const upload_phase = 'start';

        FB.api(`https://graph-video.facebook.com/v3.1/249376455821855/videos`, 'POST',
            {
                access_token: token,
                description: 'Upload video to facebook from file',
                upload_phase: upload_phase,
                file_size: file_size
            }, (response) => {
                console.log(response);
                if (response.upload_session_id) {
                    console.log('install done');
                    this.transfer(file, response);
                }
            }
        );
    }

    transfer(file, response: any) {
        const token = this.GJ_access_token;
        const upload_phase = 'transfer';
        const bytes_per_chunk = response.end_offset;
        const splitSession = this.blobFile(file, bytes_per_chunk);
        const data = {
            content_type: 'multipart/form-data',
            start_offset: 0,
            video_file_chunk: 0
        };
        const upload_session_id = response.upload_session_id;

        const fileReader = new FileReader();

        console.log(file.size);

        if (file) {
            fileReader.onloadend = async () => {
                const videoData = new Blob(
                    [fileReader.result],
                    {
                        type: 'multipart/form-data',
                    }
                );

                const a = this.blobFile(videoData, response.end_offset);
                console.log(a);
                const formData = new FormData();

                formData.append('access_token', token);
                formData.append('data', a[2]);
                formData.append('message', 'status message');
                formData.append('upload_session_id', upload_session_id);
                formData.append('start_offset', '0');
                formData.append('upload_phase', upload_phase);

                let r = await fetch(`https://graph-video.facebook.com/249376455821855/videos`, {
                    body: formData,
                    method: 'POST',
                });

                r = await r.json();
                console.log(r);
                console.log('transfer done');
            };
            fileReader.readAsArrayBuffer(file);
        }

    }

    blobFile(file, bytes_per_chunk) {
        const splitSession = [];
        const blob = file;
        const BYTES_PER_CHUNK = bytes_per_chunk;
        const SIZE = blob.size;
        let start = 0;
        let end = 0;
        while (start < SIZE) {
            start = end;
            end = start + BYTES_PER_CHUNK;
            const slide = blob.slice(start, end, 'multipart/form-data');
            splitSession.push(slide);
        }
        return splitSession;
    }

    finish() {
        const upload_phase = 'finish';
        console.log('finish');
    }

    video(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('myFile', file);
        formData.append('Content-Type', 'multipart / form - data');
        formData.append('access_token', this.GJ_access_token);
        formData.append('description', 'hello');

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://graph-video.facebook.com/v3.1/249376455821855/videos');
        xhr.send(formData);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                console.log(xhr.response);
            }
        };
    }

}

