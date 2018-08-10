import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { map, filter, catchError } from 'rxjs/operators';

class DataResponse {
}

@Injectable()
export class HandleHttpResponseInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const request = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });

    return next.handle(request)
      .pipe(
        filter((event: HttpEvent<any>) => {
          return event instanceof HttpResponse;
        }),
        map((event: HttpResponse<any>) => {
          // if (event.ok && event.status === 200) {
          //
          //   const responseBody: DataResponse = {
          //     status: 200,
          //     statusText: 'OK',
          //     data: event.body
          //   };
          //   return event.clone({body: responseBody});
          // }
          return event;
        }),
        catchError(error => {
          return of(error);
        })
      );
  }
}
