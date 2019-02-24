import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { CalendarEvent } from 'angular-calendar';

import { Client } from '../models/client';
import { Group } from '../models/group';
import { throwError, Observable } from 'rxjs';


declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  groups: Group[] = [];
  events: CalendarEvent[] = [];
  clients: Client[] = [];

  // use access_token(get when login)
  // tslint:disable-next-line:max-line-length
  access_token = 'EAANQlAVxZBd4BANKiPrxGnwjKWPajkdXqldBxkDgXIowfXSJklik7l5RdgFNJI2xh9AXNdOVPMQ6Ve8NhQ4UZCZClIYLmQlB6DtVqikh8Mr0vnuzHS8jtZACqYxP0V1o2znCCONXKWewVIvGOWumV73pf11ZAousS1MEaJiUadM79m4HWUCzfB7dMrk9WdMEZD';

  connectAccount = [];

  colors: any = {
    red: {
      primary: '#F06F5F',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#1e90ff',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#e3bc08',
      secondary: '#FDF1BA'
    }
  };

  constructor(private http: HttpClient) { }

  convertDate(date: Date): string {
    const dd = date.getDate();
    const mm = date.getMonth();
    const yyyy = date.getFullYear();
    const hh = date.getHours();
    const m = date.getMinutes();
    const result = dd + ':' + mm + ':' + yyyy + ':' + '-' + hh + ':' + m;
    return result;
  }

  addGroup(groupName: string, clients: Client[]): Group[] {
    const g: Group = {
      id: '1',
      groupName: groupName,
      clients: clients
    };
    this.groups.push(g);
    return this.groups;
  }

  getFeeds(): CalendarEvent[] {
    const token = this.access_token;
    const eventColors = this.colors;
    const events = this.events;

    FB.api(`/me`, 'GET',
      {
        access_token: token,
        // tslint:disable-next-line:max-line-length
        fields: 'feed{link,message,created_time,is_published,picture.width(150).height(150)}, name, photos.width(150).height(150){picture}'
      }, (response) => {
        const length = response.feed.data.length;


        for (let i = 0; i < length; i++) {
          const id = response.accounts.data[i].id;

          // page logo
          const photo = response.accounts.data[i].photos;
          const avatar = photo.data[0].picture;

          // page name
          const data = response.accounts.data[i].name;

          // page access_token
          const access_token = response.accounts.data[i].access_token;

          // page feeds
          const feed = response.accounts.data[i].feed;

          const client: Client = {
            id: id,
            name: data,
            image: avatar,
            access_token: access_token,
            feed: feed.data,
          };

          for (let j = 0; j < client.feed.length; j++) {
            let thumb = '';
            for (let k = 0; k < feed.data.length; k++) {
              thumb = feed.data[k].picture;
              if (thumb == null) {
                thumb = '';
              }
            }
            if (client.feed[j].message == null) {
              client.feed[j].message = 'This post has no message!!';
            }
            if (client.feed[j].message.length > 50) {
              client.feed[j].message
                = client.feed[j].message.substring(0, 50) + ' ...';
            }
            if (client.feed[j].story == null) {
              client.feed[j].story = '';
            }
            const convertDateTime = new Date(client.feed[j].created_time);
            const timeForTitle = this.convertDate(convertDateTime);
            const title = data + ' - ' + timeForTitle + ' - ' + client.feed[j].message;

            const event: CalendarEvent = {
              id: client.feed[j].id,
              start: convertDateTime,
              title: title,
              color: eventColors.red,
              cssClass: `my-custom-class`,
              draggable: true,
              message: client.feed[j].message,
              story: client.feed[j].story,
              clientName: data,
              is_published: client.feed[j].is_published,
              link: client.feed[j].link,
              thumbnail: feed.data[j].picture,
              actions: [{
                label: `<img class="img-custom" src='${feed.data[j].picture}' style='width:30px'/>`,
                onClick: ({ }: { event: CalendarEvent }): void => {
                }
              }]
            };
            events.push(event);
          }
        }
        if (response.error) {
        }
      }
    );
    return events;
  }

  getFeedsByPageAccessToken(clientName, access_token): CalendarEvent[] {
    const token = access_token;
    const eventColors = this.colors;
    const events = this.events;

    FB.api(`/me/feed`, 'GET',
      {
        access_token: token,
        fields: `
          link,
          message,
          created_time,
          is_published,
          picture.width(150).height(150),
          name,
          photos.width(150).height(150){picture}
        `
      }, (response) => {
        console.log(response);
        const length = response.data.length;
        let client: Client;

        for (let i = 0; i < length; i++) {
          const id = response.data[i].id;
          // page logo
          // const photo = response.data[i].photos;
          // const avatar = photo.data[0].picture;
          const avatar = response.data[i].picture;

          // page name
          const data = response.data[i].name;

          // page feeds
          const feed = response.data;

          client = {
            id: id,
            name: data,
            image: avatar,
            access_token: access_token,
            feed: feed,
          };

        }

        for (let j = 0; j < length; j++) {

          let thumb = client.feed[j].picture;
          if (thumb == null) {
            thumb = '';
          }

          if (client.feed[j].message == null) {
            client.feed[j].message = client.feed[j].name;
          }

          let shortMessage = '';
          if (client.feed[j].message.length > 50) {
            shortMessage = client.feed[j].message.substring(0, 50) + ' ...';
          }

          if (client.feed[j].story == null) {
            client.feed[j].story = '';
          }
          const convertDateTime = new Date(client.feed[j].created_time);
          const timeForTitle = this.convertDate(convertDateTime);
          const title = timeForTitle + ' - ' + shortMessage;

          const event: CalendarEvent = {
            id: client.feed[j].id,
            start: convertDateTime,
            title: title,
            color: eventColors.red,
            cssClass: 'my-custom-class',
            draggable: true,
            message: client.feed[j].message,
            story: client.feed[j].story,
            clientName: clientName,
            is_published: client.feed[j].is_published,
            link: client.feed[j].link,
            thumbnail: client.feed[j].picture,
            actions: [{
              label: `<img class="img-custom" src='${client.feed[j].picture}' style='width:30px'/>`,
              onClick: ({ }: { event: CalendarEvent }): void => {
              }
            }]
          };
          events.push(event);
        }

        if (response.error) {
        }
      }
    );
    return events;
  }

  getInfo(): Client[] {
    const token = this.access_token;
    const connectAccount = this.connectAccount;

    FB.api(`/me`, 'GET',
      {
        access_token: token,
        fields: 'accounts{access_token,name,photos.width(150).height(150){picture}}'
      }, (response) => {
        const length = response.accounts.data.length;
        for (let i = 0; i < length; i++) {
          const id = response.accounts.data[i].id;
          const photo = response.accounts.data[i].photos;
          const avatar = photo.data[0].picture;
          const data = response.accounts.data[i].name;
          const access_token = response.accounts.data[i].access_token;
          // const feed = response.accounts.data[i].feed;
          // const feed = this.getFeedsByPageAccessToken(access_token);
          const feed = [];
          const client: Client = {
            id: id,
            name: data,
            image: avatar,
            access_token: access_token,
            feed: feed,
          };
          connectAccount.push(client);

        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
    return connectAccount;
  }

  onUploadMuiltiPhotos(message: string, multiSelectedFile: any, pageToken: string) {
    const files = multiSelectedFile;
    const fbMediaId: any = [];
    const lenght = multiSelectedFile.length;

    files.forEach(file => {
      const fileReader = new FileReader();
      if (file) {
        fileReader.onloadend = async () => {
          const token = pageToken;
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

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  saveArticle(article): Observable<any> {
    const url = 'http://localhost:3000/addArticle';
    return this.http.post<any>(url, article);
  }

  async uploadImage(photoData) {
    const url = 'http://localhost:3000/uploadimage';
    const formData = new FormData();

    formData.append('image', photoData);

    let response = await fetch(url, {
      body: formData,
      method: 'POST',
    });

    return response = await response.json();
  }

  getImageFormS3(): Observable<any> {
    const url = 'http://localhost:3000/getImages';
    return this.http.get(url);
  }

}
