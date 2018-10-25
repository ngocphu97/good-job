import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Feed } from '../models/feed';
declare var FB: any;

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  // tslint:disable-next-line:max-line-length
  access_token = 'EAANQlAVxZBd4BANluWBfcSSiy14Xoh6w1bKKusWbM9jbql5WF6SuhvQvfbKPlDpuguUzPnV6ZC0Ma2jrXlfWHK7hpX2nkoQiZBoFZBZA3zuA3sVozOJF6g3W811mDQldnSt99z0ZBFdoAEHHTaTInrkZCtPrYwKVnVnxDv7ymsqkHkdOhUZBsXScIAUhyccPMDX685iFi6ZApYgZDZD';

  feeds: Feed[] = [];

  constructor(private http: HttpClient) { }

  getFeeds(): Feed[] {
    const token = this.access_token;
    const feeds = this.feeds;

    FB.api(`/me`, 'GET',
      {
        access_token: token,
        // tslint:disable-next-line:max-line-length
        fields: 'feed{id,link,message,created_time,is_published,picture.width(150).height(150)}'
      }, (response) => {
        const length = response.feed.data.length;
        for (let i = 0; i < length; i++) {
          const feed = {
            id: response.feed.data[i].id,
            message: response.feed.data[i].message,
            created_time: response.feed.data[i].created_time,
            picture: response.feed.data[i].picture
          };
          feeds.push(feed);
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
    return feeds;
  }

  getPostReach() {
    const token = this.access_token;
    const id = '1415019512144250_2047932125519649';

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        fields: 'insights.metric(post_impressions_unique){values}'
      }, (response) => {
        const insights = response.insights.data;
        const value = insights[0].values[0].value;
        console.log(value);
        if (response.error) {
          console.log(response.error);
        }
      }
    );

  }
}
