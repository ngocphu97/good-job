import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Feed } from '../models/feed';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  // tslint:disable-next-line:max-line-length
  access_token = 'EAANQlAVxZBd4BAKm4AKhBF7m8Alo5qhgmuHDjUrP9rbI9hRb4GZBXFBJqGANcN1svPQeB7hfDtAYe4UJZCa6e46ZBgBmwFGiaZCbz3xwGY1kQsEXjpIlsHgu126WZBgma2RUXufpIc9SK3AZAQ9vyua4Hd4G337VZA6H6SBHUExFWH0wrKElZA3mLZBAOKzgD11HP7ZAZCL6EYucwgZDZD';

  feeds: Feed[] = [];

  constructor(private http: HttpClient) { }

  // Return kieu Promise
  getFeeds(): Promise<Array<any>> {
    const token = this.access_token;

    return new Promise(function (resolve, reject) {
      FB.api(`/me`, 'GET',
        {
          access_token: token,
          fields: 'feed{id,link,message,created_time,is_published,picture.width(150).height(150)}'
        }, (response) => {
          if (response.error) {
            reject(response.error);
            console.log(response.error);
          }

          const feeds: Array<any> = response.feed.data;
          feeds.forEach(feed => {
            if (feed.message === undefined) {
              feed.message = 'No messages';
            }
          });
          // console.log(feeds);
          resolve(feeds);
        }
      );
    });
  }

  getFeedsObservable(): Observable<Array<any>> {
    const token = this.access_token;

    return new Observable((observer) => {
      FB.api(`/me`, 'GET',
        {
          access_token: token,
          fields: 'feed{id,link,message,created_time,is_published,picture.width(150).height(150)}'
        }, (response) => {
          if (response.error) {
            // observable execution
            observer.error(response.error);
            observer.complete();
          }

          const feeds: Array<any> = response.feed.data;
          feeds.forEach(feed => {
            if (feed.message === undefined) {
              feed.message = 'No messages';
            }
          });

          // observable execution
          observer.next(feeds);
          observer.complete();
          observer.unsubscribe();
        }
      );
    });
  }

  // getSharesComments(postId: string): Observable<Array<any>> {
  //   const token = this.access_token;
  //   const id = postId;

  //   return new Observable((observer) => {
  //     FB.api(`/${id}`, 'GET',
  //       {
  //         access_token: token,
  //         fields: 'shares,comments.summary(true).limit(0)'
  //       }, (response) => {
  //         if (response.error) {
  //           console.log(response.error);
  //         }
  //         console.log(response);

  //         const feeds: Array<any> = response;
  //         feeds.forEach(feed => {
  //           // if (feed.message === undefined) {
  //           //   feed.message = 'No messages';
  //           // }
  //           console.log(feed);
  //         });

  //         // observable execution
  //         observer.next(feeds);
  //         observer.complete();
  //         observer.unsubscribe();
  //       }
  //     );

  //   });
  // }
  getSharesComments(postId: string): Observable<Array<any>> {
    const token = this.access_token;
    const id = postId;
    const data = [];

    return new Observable((observer) => {
      FB.api(`/${id}`, 'GET',
        {
          access_token: token,
          fields: 'shares,comments.summary(true).limit(0)'
        }, (response) => {
          if (response.error) {
            console.log(response.error);
          }
          // console.log(response);
          observer.next(response);
          observer.complete();
          observer.unsubscribe();
        }
      );
    });
  }

  getPostReach(postId: string): Observable<number> {
    const token = this.access_token;
    const id = postId;
    let value = 0;

    return new Observable((observer) => {
      FB.api(`/${id}`, 'GET',
        {
          access_token: token,
          fields: 'insights.metric(post_impressions_unique){values}'
        }, (response) => {
          if (response.error) {
            console.log(response.error);
          }

          value = response.insights.data[0].values[0].value;

          observer.next(value);
          observer.complete();
          observer.unsubscribe();
        }
      );
    });
  }

  getPaidReach(postId: string) {
    const token = this.access_token;
    const id = postId;
    let value = 0;

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        fields: 'insights.metric(post_impressions_paid_unique){values}'
      }, (response) => {
        value = response.insights.data[0].values[0].value;
        if (response.error) {
          console.log(response.error);
        }
      }
    );
    return value;
  }

  getEngagement(postId: string): Observable<number> {
    const token = this.access_token;
    const id = postId;
    const values = [];
    let totalEngagement = 0;

    return new Observable((observer) => {
      FB.api(`/${id}`, 'GET',
        {
          access_token: token,
          // tslint:disable-next-line:max-line-length
          fields: 'insights.metric(post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total,post_reactions_haha_total,post_reactions_sorry_total,post_reactions_anger_total){title,values},shares,comments.summary(true).limit(0)'
        }, (response) => {
          if (response.error) {
            console.log(response.error);
          }
          totalEngagement = 0;
          for (let i = 0; i < response.insights.data.length; i++) {
            const value = response.insights.data[i].values[0].value;
            values.push(value);
            totalEngagement = totalEngagement + value;
            // them vo day
          }
          // console.log(values);
          // console.log(totalEngagement);
          observer.next(totalEngagement);
          observer.complete();
          observer.unsubscribe();
        }
      );
    });

  }

  getCTR(): any {
    const token = this.access_token;
    const id = '1415019512144250_2047932125519649';
    const values = [];

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        fields: 'insights.metric(post_impressions,post_impressions_organic){title,values}'
      }, (response) => {
        for (let i = 0; i < response.insights.data.length; i++) {
          const value = response.insights.data[i].values[0].value;
          values.push(value);
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
    return values;
  }

  getNegative(): any {
    const token = this.access_token;
    const id = '1415019512144250_2047932125519649';
    let value = 0;

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        fields: 'insights.metric(post_negative_feedback){title,values}'
      }, (response) => {
        console.log(response);
        value = response.insights.data[0].values[0].value;
        if (response.error) {
          console.log(response.error);
        }
      }
    );
    return value;
  }

  getDataFromPostId(postId): Observable<any> {
    const token = this.access_token;
    const id = postId;
    const data = [];

    let totalReaction = 0;

    let reach = 0;
    let paidReach = 0;
    let organicReach = 0;
    let engagement = 0;
    let click = 0;
    let ctr = 0;
    let negative = 0;

    return new Observable((observer) => {
      // làm quần gì đó

      FB.api(`/${id}`, 'GET',
        {
          access_token: token,
          // reach, paid_reach, reaction, negative
          // tslint:disable-next-line:max-line-length
          fields: 'insights.metric(post_impressions_unique, post_impressions_paid_unique, post_reactions_like_total, post_reactions_love_total, post_reactions_wow_total, post_reactions_haha_total, post_reactions_sorry_total, post_reactions_anger_total, post_negative_feedback){title,values},shares,comments.summary(true).limit(0)'
        }, (response) => {
          // console.log(response);

          // post reach
          reach = response.insights.data[0].values[0].value;

          // paid reach
          paidReach = response.insights.data[1].values[0].value;

          // organic reach
          organicReach = reach - paidReach;

          // total reaction
          for (let i = 2; i <= 7; i++) {
            totalReaction = totalReaction + response.insights.data[i].values[0].value;
          }

          // engagement
          engagement = totalReaction;

          // click
          click = 0;

          // ctr
          ctr = 0;

          // negative
          negative = response.insights.data[8].values[0].value;

          const dataFromFb = {
            reach: reach,
            paidReach: paidReach,
            organicReach: organicReach,
            engagement: engagement,
            click: click,
            ctr: ctr,
            negative: negative,
          };

          if (response.error) {
            console.log(response.error);
          }

          observer.next(dataFromFb);
          observer.complete();
          observer.unsubscribe();
        }
      );
    });
  }


}
