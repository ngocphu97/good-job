import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  // tslint:disable-next-line:max-line-length
  access_token = 'EAANQlAVxZBd4BAEl4mVkRKZCSmCdZA01tuKmhXLvD43OYhHxIpjz6wwZAZClIk1in5GGXBhYIPv7apEOA6ekW9eDd92VFiUpnZARXfziiiJTxs5ISdZASyDi5eyIl5FoBNH8HUGAWLbbb9GwgIUZBGz42GSaPbX47mnZCNZBai5r06ZAZAIUqkD5WoNSrj977Y7W6lMZD';

  constructor(private http: HttpClient) { }

  getMemberInfoById(id): Observable<any> {
    const token = this.access_token;
    return new Observable((observer) => {
      FB.api(`/me?fields=picture,first_name,last_name`, 'GET',
        {
          access_token: token,
        }, (response) => {
          if (response.error) {
            observer.error(response.error);
            observer.complete();
          }
          const memberInfo = {
            id: response.id,
            name: response.first_name + ' ' + response.last_name,
            picture: response.picture.data.url
          };
          // const data = response.data[0].values;
          observer.next(memberInfo);
          observer.complete();
        });
    });
  }

  getMemberConnectAccout(): Observable<any> {
    const token = this.access_token;
    return new Observable((observer) => {
      FB.api(`me?fields=accounts{access_token,name,id,picture{url},tasks}`, 'GET',
        {
          access_token: token,
        }, (res) => {
          if (res.error) {
            observer.error(res.error);
            observer.complete();
          }
          observer.next(res.accounts.data);
          observer.complete();
        }
      );
    });
  }
}
