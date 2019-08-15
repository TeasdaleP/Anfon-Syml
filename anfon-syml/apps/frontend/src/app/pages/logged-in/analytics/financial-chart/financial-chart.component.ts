import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CraigDavigService } from 'apps/frontend/src/app/services/craig-david.service';

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

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Email Cost' },
    { data: [40, 55, 56, 61, 80, 32, 65], label: 'SMS Cost' }
  ];

  constructor(public craigdavid: CraigDavigService) { }

  ngOnInit() {
    this.barChartLabels = this.craigdavid.lastSevenDays();
    this.barChartType = 'line';
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}
