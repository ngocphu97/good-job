import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviorSubject } from 'rxjs';

@Component({
    selector: 'app-analytics-detail',
    templateUrl: './analytics-detail.component.html',
    styleUrls: ['./analytics-detail.component.scss']
})
export class AnalyticsDetailComponent implements OnInit {

    data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    temp: any;

    doughnutChartLabels = ['MALE (%)', 'FEMALE (%)'];
    doughnutChartType = 'doughnut';
    doughnutChartData = [];
    datasets: any[] = [
        {
            data: this.doughnutChartData,
            backgroundColor: [
                '#FFCE56',
                '#FF6384'
            ],
        }];
    colors: Array<any> = [{}];

    constructor(private service: AnalyticsService) {
    }

    ngOnInit() {
        this.service
            .getPageImpressionsByAgeGenderUnique()
            .subscribe(
                (datas) => {
                    if (!datas || datas.length < 1) {
                        return;
                    }
                    this.initDoughnutChart(datas.data);
                    this.data$.next(datas);
                }
            );
    }

    // Doughnut chart
    initDoughnutChart(data) {
        const dataPipe = Object.keys(data)
            .map(function (k) {
                return {
                    name: k,
                    value: data[k]
                };
            });

        let maleTotal = 0;
        let femaleTotal = 0;

        dataPipe.forEach(d => {
            const gender = d.name.split('.');
            if (gender[0] === 'M') {
                maleTotal = maleTotal + d.value;
            }
            if (gender[0] === 'F') {
                femaleTotal = femaleTotal + d.value;
            }
        });

        const total = maleTotal + femaleTotal;
        const malePersent = Math.round((maleTotal / total * 100) * 100) / 100;
        const femalePersent = Math.round((femaleTotal / total * 100) * 100) / 100;

        this.doughnutChartData = [malePersent, femalePersent];
    }
}
