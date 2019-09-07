import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MonthlyTotalService } from 'apps/frontend/src/app/services/monthly-count.service';
import { Channel } from 'apps/frontend/src/app/enums/channel.enum';

@Component({
  selector: "anfon-syml-financial-chart",
  templateUrl: "./financial-chart.component.html",
  styleUrls: ["./financial-chart.component.css"]
})

export class FinancialChartComponent implements OnInit {
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

  constructor(
    private count: MonthlyTotalService
  ) { }

  ngOnInit() {
    this.barChartType = 'line';
    this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.barChartData = [
      { data: [
        this.count.monthTotal(1, Channel.Email)* 0.02,
        this.count.monthTotal(2, Channel.Email)* 0.02,
        this.count.monthTotal(3, Channel.Email)* 0.02,
        this.count.monthTotal(4, Channel.Email)* 0.02,
        this.count.monthTotal(5, Channel.Email)* 0.02,
        this.count.monthTotal(6, Channel.Email)* 0.02,
        this.count.monthTotal(7, Channel.Email)* 0.02,
        this.count.monthTotal(8, Channel.Email)* 0.02,
        this.count.monthTotal(9, Channel.Email)* 0.02,
        this.count.monthTotal(10, Channel.Email)* 0.02,
        this.count.monthTotal(11, Channel.Email)* 0.02,
        this.count.monthTotal(12, Channel.Email)* 0.02
      ], label: 'Email' },
      { data: [
        this.count.monthTotal(1, Channel.SMS)* 0.05,
        this.count.monthTotal(2, Channel.SMS)* 0.05,
        this.count.monthTotal(3, Channel.SMS)* 0.05,
        this.count.monthTotal(4, Channel.SMS)* 0.05,
        this.count.monthTotal(5, Channel.SMS)* 0.05,
        this.count.monthTotal(6, Channel.SMS)* 0.05,
        this.count.monthTotal(7, Channel.SMS)* 0.05,
        this.count.monthTotal(8, Channel.SMS)* 0.05,
        this.count.monthTotal(9, Channel.SMS)* 0.05,
        this.count.monthTotal(10, Channel.SMS)* 0.05,
        this.count.monthTotal(11, Channel.SMS)* 0.05,
        this.count.monthTotal(12, Channel.SMS)* 0.05
      ], label: 'SMS' }
    ];
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    ///console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }
}
