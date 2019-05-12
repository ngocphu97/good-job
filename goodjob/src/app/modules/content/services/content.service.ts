import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';

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
  access_token = 'EAAFiVT3Gv5EBANu7ggjWMXFVLV0F29oh3W3gMJpMzdfjPqzidSo3tqa6dXZBEQSU8sb8sA3L3lcFkbkuNMS87UHBGqYB5svztgsR7aYHka1ZAZCHaqPGHau24lZBT07u0JlpNEHB279G1dP9ZCSJ03OdcnJ71eewZD';
  connectAccount = [];
  colors: any = {
    red: {
      primary: '#707070',
      secondary: '#FAE3E3'
    },
    blue: {
      primary: '#556dd3',
      secondary: '#D1E8FF'
    },
    yellow: {
      primary: '#ffe100',
      secondary: '#FDF1BA'
    }
  };

  constructor(private http: HttpClient) { }

  // ==========================

  getProjectById(projectId): Observable<any> {
    const url = `https://www.jsonstore.io/9e2c377d376c4655f5d20a0d9275b4e4c623770a618b32be0c53c54fb32c2f16/projects/${projectId}`;
    return this.http.get(url);
  }

  getSelectedPageInfoById(pageId) {
    const token = this.access_token;
    FB.api(`/${pageId}`, 'GET',
      {
        access_token: token,
        fields: 'accounts{access_token}'
      },
      response => {
        if (response.error) {
          console.log(response);
        }
        console.log(response);
      }
    );
  }

  getFeedsByPageId(clientName, pageId): CalendarEvent[] {
    const token = this.access_token;
    const events = this.events;
    // this.getScheduledPost(clientName, access_token);
    console.log(clientName, pageId);

    FB.api(
      `/${pageId}/feed`,
      'GET',
      {
        access_token: token,
        fields: `
          link,
          message,
          created_time,
          is_published,
          picture.width(150).height(150),
          full_picture,
          name,
          photos.width(150).height(150){picture}
        `
      },
      response => {
        if (response.error) {
          console.log(response.error);
        }

        response.data.forEach(d => {
          // console.log(d);
          this.addCalendarEvent(d, clientName, 'info');
        });

      }
    );
    return events;
  }
  // =============================

  convertDate(date: Date): string {
    const hh = date.getHours();
    const m = date.getMinutes();
    const result = hh + ':' + m;
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

  getScheduledPost(clientName, access_token) {
    const token = access_token;
    const eventColors = this.colors;
    const events = this.events;

    FB.api(
      `/me`,
      'GET',
      {
        access_token: token,
        fields: `scheduled_posts{
            id,
            full_picture,
            message,
            story,
            created_time,
            link,
            name
        }
        `
      },
      response => {
        if (response.error) {
          throw new Error(response.error);
        } else {
          console.log(response.scheduled_posts);
          if (response.scheduled_posts !== undefined) {
            response.scheduled_posts.data.forEach(d => {
              const convertDateTime = new Date(d.created_time);
              const timeForTitle = this.convertDate(
                convertDateTime
              );
              const title = `<p class="scheduledPost">${timeForTitle}</p>`;
              const label = `
                      <i class="material-icons icon-week-custom-scheduled">schedule</i>
                      <img class="img-custom-week-view" src='${
                d.full_picture
                }'/>
                    `;

              const calendarEvent: CalendarEvent = {
                id: d.id,
                start: convertDateTime,
                title: title,
                color: eventColors.red,
                cssClass: 'my-custom-class',
                draggable: true,
                meta: {
                  type: 'secondary'
                },
                actions: [
                  {
                    label: label,
                    onClick: ({

                    }: {
                      event: CalendarEvent;
                    }): void => { }
                  }
                ]
              };

              const fbEvent = {
                message: d.message,
                story: d.story,
                clientName: clientName,
                is_published: false,
                link: d.link,
                thumbnail: d.full_picture
              };

              const event = { ...calendarEvent, fbEvent };

              events.push(event);
            });
          } else {
            console.log('Error');
          }
        }
      }
    );
    return events;
  }

  addCalendarEvent(feed, clientName, metaType) {
    let title = '';
    let label = '';
    let eventColor: any;
    let thumb = feed.full_picture;
    const convertDateTime = new Date(feed.created_time);
    const timeForTitle = this.convertDate(convertDateTime);

    if (thumb == null) {
      thumb = '';
    }

    if (feed.message == null) {
      feed.message = feed.name;
    }

    if (feed.is_published) {
      title = `<p class="publishedPost">${timeForTitle}</p>`;
      label = `
              <i class="material-icons icon-week-custom-done">check_circle_outline</i>
              <img class="img-custom-week-view" src='${feed.full_picture}'/>
            `;
      eventColor = this.colors.blue;
    } else {
      title = `<p class="scheduledPost">${timeForTitle}</p>`;
      label = `
                <i class="material-icons icon-week-custom-scheduled">schedule</i>
                <img class="img-custom-week-view" src='${feed.full_picture}'/>
              `;
    }

    const calendarEvent: CalendarEvent = {
      id: feed.id,
      start: convertDateTime,
      title: title,
      color: eventColor,
      cssClass: 'my-custom-class',
      draggable: false,
      meta: {
        type: metaType
      },
      actions: [
        {
          label: label,
          onClick: ({ }: { event: CalendarEvent }): void => { }
        }
      ]
    };

    const fbEvent = {
      message: feed.message,
      clientName: clientName,
      is_published: feed.is_published,
      link: feed.link,
      thumbnail: feed.full_picture
    };

    const event = { ...calendarEvent, fbEvent };
    this.events.push(event);
  }

  getFeedsByPageAccessToken(clientName, access_token): CalendarEvent[] {
    const token = access_token;
    const events = this.events;
    this.getScheduledPost(clientName, access_token);

    FB.api(
      `/me/feed`,
      'GET',
      {
        access_token: token,
        fields: `
          link,
          message,
          created_time,
          is_published,
          picture.width(150).height(150),
          full_picture,
          name,
          photos.width(150).height(150){picture}
        `
      },
      (response) => {
        console.log(response);
        response.data.forEach(d => {
          this.addCalendarEvent(d, clientName, 'info');
        });

        if (response.error) {
          console.log(response.error);
          // alert(response.error);
        }
      }
    );
    return events;
  }

  getInfo(): Client[] {
    const token = this.access_token;
    FB.api(`/me`, 'GET',
      {
        access_token: token,
        fields: 'accounts{access_token,name,photos.width(150).height(150){picture}}'
      },
      response => {
        if (response.error) {
          console.log(response);
        } else {
          console.log(response);
          response.accounts.data.forEach(r => {
            const c = this.addClient(r);
            this.connectAccount.push(c);
          });
        }
      }
    );
    return this.connectAccount;
  }

  addClient(response) {
    const id = response.id;
    const avatar = response.photos.data[0].picture;
    const data = response.name;
    const access_token = response.access_token;
    const feed = [];

    const client: Client = {
      id: id,
      name: data,
      image: avatar,
      access_token: access_token,
      feed: feed
    };
    return client;
  }

  onUploadMuiltiPhotos(
    message: string,
    multiSelectedFile: any,
    pageToken: string
  ) {
    const files = multiSelectedFile;
    const fbMediaId: any = [];
    const lenght = multiSelectedFile.length;

    files.forEach(file => {
      const fileReader = new FileReader();
      if (file) {
        fileReader.onloadend = async () => {
          const token = pageToken;
          const photoData = new Blob([fileReader.result], {
            type: 'image/jpeg'
          });
          const formData = new FormData();
          const published = 'false';

          formData.append('access_token', token);
          formData.append('source', photoData);
          formData.append('message', 'status message');
          formData.append('published', published);

          let response: any = await fetch(
            `https://graph.facebook.com/249376455821855/photos`,
            {
              body: formData,
              method: 'POST'
            }
          );
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
              res => {
                if (res && !res.error) {
                }
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
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
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
      method: 'POST'
    });

    return (response = await response.json());
  }

  getImageFormS3(): Observable<any> {
    const url = 'http://localhost:3000/getImages';
    return this.http.get(url);
  }
}
