import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
declare var FB: any;
@Injectable({
  providedIn: 'root'
})
export class ConnectFacebookService {

  // tslint:disable-next-line: max-line-length
  access_token = 'EAANQlAVxZBd4BAPrelha2ZAjOhzGf7BqDVyYYH85lfOLmZCM0qnzkMwW0gx4ErdxCAGiHQZA6mNyQ77A3hEBbKdzIf0ztH6ZB7feTRwZBanBJzhTmW5bpZCVoHjK3TLYHRI2e6xcEIc0Dt7V5G7q8MYmygDLedF5tZBPR3ZBQyXWX9dwegur8BZC4leLsE5ZBm8X24ZD';

  constructor() { }

  getFacebookConnectAccount(): Observable<any> {
    let connectAccount = [];
    const token = this.access_token;

    return Observable.create((observer) => {
      FB.api(`/me`, 'GET',
        {
          access_token: token,
          fields: 'accounts{name, photos.width(150).height(150){picture}}'
        }, (response) => {
          if (response.error) {
            console.log(response.error);
            return;
          }

          connectAccount = response.accounts.data.map(item => {
            return {
              name: item.name,
              id: item.id,
              thumbnail: item.photos.data[0].picture
            };
          });
          observer.next(connectAccount);
          observer.complete();
        }
      );
    });
  }
}

