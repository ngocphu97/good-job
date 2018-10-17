import { Component, OnInit } from '@angular/core';
declare var FB: any;

@Component({
    selector: 'app-analytics-detail',
    templateUrl: './analytics-detail.component.html',
    styleUrls: ['./analytics-detail.component.scss']
})
export class AnalyticsDetailComponent implements OnInit {

    constructor() {
        // FB.AppEvents.logPageView();
    }

    ngOnInit() {
    }
}
