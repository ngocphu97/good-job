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
  access_token = 'EAANQlAVxZBd4BADbPTPS7kZCjuyE8Xjz0YxIuF8buvvvaixTNDZAiunpWkDtbOmbkUwwQDy7ZBMdaHlB65YeQfQo5eAJKmJqZAGXlRZB9y5ZADlUsq0uRsUSni8Pq6dxSOHtXGHUzYu2coyZA9VPZCBvGr1m0i3B1P9yKfBIukgsDYgtY8ln9fBrGxW1YCg4YQLpbKiNcUqsMCgZDZD';

  feeds: Feed[] = [];

  constructor(private http: HttpClient) { }

  getFeeds(): Feed[] {
    const token = this.access_token;
    const feeds = this.feeds;

    FB.api(`/me`, 'GET',
      {
        access_token: token,
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
        if (response.error) {
          console.log(response.error);
        }
      }
    );
  }

  getPaidReach() {
    const token = this.access_token;
    const id = '1415019512144250_2047932125519649';

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        fields: 'insights.metric(post_impressions_paid_unique){values}'
      }, (response) => {
        const insights = response.insights.data;
        const value = insights[0].values[0].value;
        if (response.error) {
          console.log(response.error);
        }
      }
    );
  }

  getEngagement() {

    // thiếu shared + comments on post
    const token = this.access_token;
    const id = '1415019512144250_2047932125519649';
    const values = [];

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        // tslint:disable-next-line:max-line-length
        fields: 'insights.metric(post_reactions_like_total,post_reactions_love_total,post_reactions_wow_total,post_reactions_haha_total,post_reactions_sorry_total,post_reactions_anger_total){title,values}'
      }, (response) => {
        let totalEngagement = 0;
        for (let i = 0; i < response.insights.data.length; i++) {
          const value = response.insights.data[i].values[0].value;
          values.push(value);
          totalEngagement = totalEngagement + value;
        }
        if (response.error) {
          console.log(response.error);
        }
      }
    );
  }

  getCTR() {
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
  }

  getNegative() {
    const token = this.access_token;
    const id = '1415019512144250_2047932125519649';

    FB.api(`/${id}`, 'GET',
      {
        access_token: token,
        fields: 'insights.metric(post_negative_feedback){title,values}'
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
