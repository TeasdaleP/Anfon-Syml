import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { TotalCountService } from 'apps/frontend/src/app/services/total-count.service';

@Component({
  selector: "anfon-syml-overview-chart",
  templateUrl: "./overview-chart.component.html",
  styleUrls: ["./overview-chart.component.css"]
})

export class OverviewChartComponent implements OnInit {
  public a: any;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: { datalabels: { anchor: 'end', align: 'end' }
    }
  };
  public barChartLabels: Label[];
  public barChartType: ChartType;
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartDataSets[];

  constructor(private total: TotalCountService) { }

  ngOnInit() {
    this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.barChartType = 'bar';
    this.barChartData = [
      { data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], label: 'Email' },
      { data: [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1], label: 'SMS' }
    ];
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }
}
