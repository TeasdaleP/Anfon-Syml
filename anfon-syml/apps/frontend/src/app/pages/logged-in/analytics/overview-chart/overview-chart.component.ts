import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MonthlyTextTotalService } from 'apps/frontend/src/app/services/monthly-text-count.service';
import { MonthlyEmailTotalService } from 'apps/frontend/src/app/services/monthly-email-count.service';

@Component({
  selector: "anfon-syml-overview-chart",
  templateUrl: "./overview-chart.component.html",
  styleUrls: ["./overview-chart.component.css"]
})

export class OverviewChartComponent implements OnInit {
  public smsArray: Array<number>;
  public emailArray: Array<number>;
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
  public duplicate: number;

  constructor(
    private sms: MonthlyTextTotalService,
    private email: MonthlyEmailTotalService
  ) {
    this.duplicate = 0;
  }

  ngOnInit() {
    this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.barChartType = 'bar';
    if(this.duplicate < 1) {
      this.barChartData = this.chartData();
    }
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  private chartData(): any {
    this.duplicate = this.duplicate+1;
    return [
      { data: [ 
        this.email.january(),
        this.email.february(),
        this.email.march(),
        this.email.april(),
        this.email.may(),
        this.email.june(),
        this.email.july(),
        this.email.august(),
        this.email.september(),
        this.email.october(),
        this.email.november(),
        this.email.december()
      ], label: 'Email' },
      { data: [ 
        this.sms.january(),
        this.sms.february(),
        this.sms.march(),
        this.sms.april(),
        this.sms.may(),
        this.sms.june(),
        this.sms.july(),
        this.sms.august(),
        this.sms.september(),
        this.sms.october(),
        this.sms.november(),
        this.sms.december() 
      ], label: 'SMS' }
    ];
  }
}
