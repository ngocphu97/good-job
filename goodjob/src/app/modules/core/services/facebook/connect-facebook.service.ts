import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
declare var FB: any;
@Injectable({
  providedIn: 'root'
})
export class ConnectFacebookService {

  // tslint:disable-next-line: max-line-length
  access_token = 'EAAFiVT3Gv5EBANu7ggjWMXFVLV0F29oh3W3gMJpMzdfjPqzidSo3tqa6dXZBEQSU8sb8sA3L3lcFkbkuNMS87UHBGqYB5svztgsR7aYHka1ZAZCHaqPGHau24lZBT07u0JlpNEHB279G1dP9ZCSJ03OdcnJ71eewZD';

  constructor(private http: HttpClient) { }

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

  addProject(project): Observable<any> {
    const url = `https://www.jsonstore.io/9e2c377d376c4655f5d20a0d9275b4e4c623770a618b32be0c53c54fb32c2f16/projects/${project.id}`;
    return this.http.post(url, project);
  }

  getProjects(): Observable<any> {
    const url = `https://www.jsonstore.io/9e2c377d376c4655f5d20a0d9275b4e4c623770a618b32be0c53c54fb32c2f16/projects/`;
    return this.http.get(url);
  }
}

