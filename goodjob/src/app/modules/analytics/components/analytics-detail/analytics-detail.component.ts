import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviorSubject } from 'rxjs';
import { IgxLeftButtonStyleDirective } from 'igniteui-angular';

@Component({
    selector: 'app-analytics-detail',
    templateUrl: './analytics-detail.component.html',
    styleUrls: ['./analytics-detail.component.scss']
})
export class AnalyticsDetailComponent implements OnInit {

    data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    temp: any;
    hightestGender = '';
    hightestByAge = '';

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


    // bar chart
    barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    barChartLabels = [
        '13 - 17',
        '18 - 24',
        '25 - 34',
        '35 - 44',
        '45 - 54',
    ];
    barChartType = 'horizontalBar';
    barChartLegend = true;
    femaleChartData = [];
    maleChartData = [];

    barChartMaleData: any[] = [
        {
            data: this.maleChartData,
            label: 'Male',
            backgroundColor: [
                '#FFCE56',
                '#FFCE56',
                '#FFCE56',
                '#FFCE56',
                '#FFCE56'
            ]
        }
    ];

    barChartFemaleData: any[] = [
        {
            data: this.femaleChartData,
            label: 'Female',
            backgroundColor: [
                '#FF6384',
                '#FF6384',
                '#FF6384',
                '#FF6384',
                '#FF6384'
            ]
        }
    ];

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
                    this.pipeData(datas.data, this.hightestGender);
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

        if (maleTotal > femaleTotal) {
            this.hightestGender = 'MALE';
        } else {
            this.hightestGender = 'FEMALE';
        }

        this.doughnutChartData = [malePersent, femalePersent];
    }

    pipeData(data, hightestGender) {
        let max = 0;
        console.log(hightestGender);
        const dataPipe = Object.keys(data)
            .map(function (k) {
                return {
                    name: k,
                    value: data[k]
                };
            });
        const femaleChartData = [];
        const maleChartData = [];

        for (let i = 0; i <= 4; i++) {
            femaleChartData.push(dataPipe[i].value);
        }

        for (let i = 6; i <= 10; i++) {
            maleChartData.push(dataPipe[i].value);
        }

        if (hightestGender === 'MALE') {
            for (let i = 0; i <= 4; i++) {
                if (dataPipe[i].value > max) {
                    max = dataPipe[i].value;
                    this.hightestByAge = dataPipe[i].name;
                }
            }
        }
        if (hightestGender === 'FEMALE') {
            for (let i = 6; i <= 10; i++) {
                if (dataPipe[i].value > max) {
                    max = dataPipe[i].value;
                    this.hightestByAge = dataPipe[i].name;
                }
            }
        }

        this.femaleChartData = femaleChartData;
        this.maleChartData = maleChartData;
    }
}
