import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  CalendarEvent, CalendarEventAction
} from 'angular-calendar';

import { Client } from '../models/client';
import { Group } from '../models/group';

declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  groups: Group[] = [];
  events: CalendarEvent[] = [];
  clients: Client[] = [];

  // tslint:disable-next-line:max-line-length
  access_token = 'EAANQlAVxZBd4BANA4ZBrCf35WFKzMWkACbptczKYr6Swtmr9WSoRwatTumZA0VBXUefHbJrfqb4k5Piq9utRcSYTttkNFLkf4fc08QM9OMMu7ZBOvAx3exgvDwRhEwK4NwccnvZBJSehsWqkFDkeZCL8BzJscdqIPYAi9982KQAbBXJtpcrUdE36y7j0c1x0u8B3vgmwozEveYjDySXwOjZC8JEDWwcYXQZD';

  connectAccount = [];

  colors: any = {
    red: {
      primary: '#e41c77',
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
        fields: 'accounts{feed{link,message,created_time,is_published,picture.width(150).height(150)}, name, photos.width(150).height(150){picture}}'
      }, (response) => {
        console.log(response);
        const length = response.accounts.data.length;
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
          console.log(response.error);
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
        fields: 'accounts{feed,access_token, name, photos.width(150).height(150){picture}}'
      }, (response) => {
        console.log('response', response);
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
          connectAccount.push(client);
        }

        console.log(this.connectAccount);
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

}
