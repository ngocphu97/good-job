import { Component, OnInit, ViewChild } from '@angular/core';
import { AnalyticsService } from '../../services/analytics.service';
import { BehaviorSubject } from 'rxjs';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
    selector: 'app-analytics-detail',
    templateUrl: './analytics-detail.component.html',
    styleUrls: ['./analytics-detail.component.scss']
})
export class AnalyticsDetailComponent implements OnInit {

    @ViewChild(MatSort) sort: MatSort;

    data$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
    temp: any;
    hightestGender = '';
    hightestByAge = '';
    hightestFansCity = '';
    hightestPercentFansCity = 0;
    maleTotal = 0;
    femaleTotal = 0;
    displayedColumns: string[] = ['city', 'fan', 'percent'];
    dataSource = new MatTableDataSource<any>();

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
        this.service
            .getPageFansCity()
            .subscribe(
                (data) => {
                    if (!data || data.length < 1) {
                        return;
                    }
                    console.log(data);
                    this.fansByCity(data);
                    this.dataSource.sort = this.sort;
                    this.data$.next(data);
                });
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


        dataPipe.forEach(d => {
            const gender = d.name.split('.');
            if (gender[0] === 'M') {
                this.maleTotal = this.maleTotal + d.value;
            }
            if (gender[0] === 'F') {
                this.femaleTotal = this.femaleTotal + d.value;
            }
        });

        const total = this.maleTotal + this.femaleTotal;
        const malePersent = Math.round((this.maleTotal / total * 100) * 100) / 100;
        const femalePersent = Math.round((this.femaleTotal / total * 100) * 100) / 100;

        if (this.maleTotal > this.femaleTotal) {
            this.hightestGender = 'NAM';
        } else {
            this.hightestGender = 'NỮ';
        }

        this.doughnutChartData = [malePersent, femalePersent];
    }

    pipeData(data, hightestGender) {
        let max = 0;
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
            femaleChartData.push(Math.round((dataPipe[i].value / this.femaleTotal * 100) * 100) / 100);
        }

        for (let i = 6; i <= 10; i++) {
            maleChartData.push(Math.round((dataPipe[i].value / this.maleTotal * 100) * 100) / 100);
        }

        if (hightestGender === 'NAM') {
            for (let i = 0; i <= 4; i++) {
                if (dataPipe[i].value > max) {
                    max = dataPipe[i].value;
                    this.hightestByAge = dataPipe[i].name.split('.')[1];
                }
            }
        }
        if (hightestGender === 'NỮ') {
            for (let i = 6; i <= 10; i++) {
                if (dataPipe[i].value > max) {
                    max = dataPipe[i].value;
                    this.hightestByAge = dataPipe[i].name.split('.')[1];
                }
            }
        }

        this.femaleChartData = femaleChartData;
        this.maleChartData = maleChartData;
    }

    fansByCity(data) {
        const fansByCityTemp = Object.keys(data)
            .map(function (t) {
                return {
                    name: t,
                    value: data[t]
                };
            });

        let totalFans = 0;
        fansByCityTemp.forEach(f => {
            totalFans = totalFans + f.value;
        });

        const fansByCity = Object.keys(data)
            .map(function (d) {
                return {
                    name: d,
                    value: data[d],
                    percent: Math.round((data[d] / totalFans * 100) * 100) / 100
                };
            });

        let conclusion = {
            name: '',
            percent: 0
        };

        fansByCity.forEach(f => {
            if (f.percent > conclusion.percent) {
                conclusion = f;
            }
        });

        this.hightestFansCity = conclusion.name;
        this.hightestPercentFansCity = conclusion.percent;

        console.log(conclusion);

        this.dataSource = new MatTableDataSource<any>(fansByCity);
    }
}
