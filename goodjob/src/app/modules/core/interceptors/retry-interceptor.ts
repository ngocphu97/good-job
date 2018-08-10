import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { retryWhen, flatMap, scan, takeWhile, delay, concat } from 'rxjs/operators';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next
      .handle(req).pipe(
        retryWhen(error => {
          return error.pipe(
            flatMap((err: any) => {
              if (err.status === 500 || err.status === 503) {
                return of(err.status);
              }
              return Observable.throw(err);
            }),
            scan((count) => {
              return count + 1;
            }, 0),
            takeWhile(count => count < 3),
            delay(1000),
            concat(of(`Sorry, some thing is wrong...`))
          );

        })
      );

  }
}


