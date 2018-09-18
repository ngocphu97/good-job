import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {
  CalendarEvent
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
  access_token = 'EAAFiVT3Gv5EBAM5gms7Lcj8okt9x2zRB1n1vXJtdXblZBjOZAXGcB78XKj8VNCWZBPUhNxhAFqZCy7qXiEE51grEwtro55W8n9UpUwCnJ3L2DdKQDcseXukw00HtU9jvoeE9K5GVYKGMPSiDv349k9gzPH9slnLsuk95uT2mgLkeMwWLZCPFAut0sEhnlZBdIZD';
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

          for (let j = 0; j < client.feed.length; j++) {
            let t = '';
            for (let k = 0; k < feed.data.length; k++) {
              t = feed.data[k].picture;
              if (t == null) {
                t = '';
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
              thumbnail: t,
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

  post() {
    const token = this.access_token;
    FB.api(`/me/photos`, 'POST',
      {
        access_token: token,
      }, (response) => {
        console.log(response);
      }
    );
  }

  postPhotoAlbum() {
    const urls = [
      'https://comps.canstockphoto.com/hello-drawing_csp0965504.jpg',
      'https://i.ytimg.com/vi/rjsGDAScZTw/maxresdefault.jpg',
      'https://i.ytimg.com/vi/Esl9RTOax84/maxresdefault.jpg',
      'https://i.ytimg.com/vi/qdy_2GS4Yrs/hqdefault.jpg'
    ];
    const albumId = '304023537023813';

    FB.api(`/${albumId}/photos`, 'POST',
      {
        url: '',
        published: false
      },
      (response) => {
        if (response && !response.error) {
          console.log(response);
        }
      }
    );
  }

}
