import { Injectable } from '@angular/core';

import * as PptxGenJS from 'pptxgenjs';

@Injectable({
  providedIn: 'root'
})
export class ExportFileService {

  pptx = new PptxGenJS();

  constructor() { }

  quickStart() {
    const slide = this.pptx.addNewSlide();
    slide.addText('Hello World!', { x: 1.5, y: 1.5, fontSize: 18, color: '363636' });
    this.pptx.save('Sample Presentation 123 hehe');
  }

  exportChart() {
    const dataChartAreaLine = [
      {
        name: 'Actual Sales',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121]
      },
      {
        name: 'Projected Sales',
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121]
      }
    ];
    const slide = this.pptx.addNewSlide();
    slide.addChart(this.pptx.charts.LINE, dataChartAreaLine,
      {
        x: 0.0,
        y: 0.0,
        w: 10,
        h: 6
      });
    this.pptx.save('Export Chart Service Demo');
  }

  slide11() {
    const gOptsTextL = { color: '9F9F9F', margin: 3, border: [0, 0, { pt: '1', color: 'CFCFCF' }, 0] };
    const gOptsOptsR = { color: '9F9F9F', margin: 3, border: [0, 0, { pt: '1', color: 'CFCFCF' }, 0], align: 'right' };
    const gOptsTabOpts = { x: 0.4, y: 0.13, w: 12.5, colW: [9, 3.5] };
    const gOptsTextR = { text: 'PptxGenJS', options: gOptsOptsR };
    const MONS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const slide = this.pptx.addNewSlide();
    slide.addTable([[{ text: 'Chart Examples: Area Chart', options: gOptsTextL }, gOptsTextR]], gOptsTabOpts);

    const arrDataTimeline2ser = [
      {
        name: 'Actual Sales',
        labels: MONS,
        values: [1500, 4600, 5156, 3167, 8510, 8009, 6006, 7855, 12102, 12789, 10123, 15121]
      },
      {
        name: 'Proj Sales',
        labels: MONS,
        values: [1000, 2600, 3456, 4567, 5010, 6009, 7006, 8855, 9102, 10789, 11123, 12121]
      }
    ];

    // TOP-LEFT
    const optsChartLine1 = {
      x: 0.5, y: 0.6, w: '45%', h: 3,
      catAxisLabelRotate: 45,
      catAxisOrientation: 'maxMin', valAxisOrientation: 'maxMin'
    };
    slide.addChart(this.pptx.charts.AREA, arrDataTimeline2ser, optsChartLine1);

    // TOP-RIGHT
    const optsChartLine2 = {
      x: 7, y: 0.6, w: '45%', h: 3,
      chartColors: ['0088CC', '99FFCC'],
      chartColorsOpacity: 25,
      valAxisLabelRotate: 5,
      dataBorder: { pt: 2, color: 'FFFFFF' },
      fill: 'D1E1F1'
    };
    slide.addChart(this.pptx.charts.AREA, arrDataTimeline2ser, optsChartLine2);

    // BOTTOM-LEFT
    const optsChartLine3 = {
      x: 0.5, y: 4.0, w: '45%', h: 3,
      chartColors: ['0088CC', '99FFCC'],
      chartColorsOpacity: 50,
      valAxisLabelFormatCode: '#,K'
    };
    slide.addChart(this.pptx.charts.AREA, arrDataTimeline2ser, optsChartLine3);

    // BOTTOM-RIGHT
    const optsChartLine4 = {
      x: 7, y: 4.0, w: '45%', h: 3,
      chartColors: ['CC8833', 'CCFF69'],
      chartColorsOpacity: 75
    };
    slide.addChart(this.pptx.charts.AREA, arrDataTimeline2ser, optsChartLine4);

    this.pptx.save('Chart Demo');
  }
}
