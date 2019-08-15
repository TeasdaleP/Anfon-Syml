import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { CraigDavigService } from 'apps/frontend/src/app/services/craig-david.service';

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

  public barChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40, 35], label: 'Email' },
    { data: [28, 48, 40, 19, 86, 27, 90, 75], label: 'SMS' }
  ];;

  constructor(public craigdavid: CraigDavigService) { }

  ngOnInit() {
    this.barChartLabels = this.craigdavid.lastSevenDays();
    this.barChartType = 'bar';
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }
}
