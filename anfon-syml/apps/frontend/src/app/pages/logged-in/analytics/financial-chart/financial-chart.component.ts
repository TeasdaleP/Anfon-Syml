import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { MonthlyTextTotalService } from 'apps/frontend/src/app/services/monthly-text-count.service';
import { MonthlyEmailTotalService } from 'apps/frontend/src/app/services/monthly-email-count.service';

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
  public duplicate: number;

  constructor(
    private sms: MonthlyTextTotalService,
    private email: MonthlyEmailTotalService
  ) {
    this.duplicate = 0;
  }

  ngOnInit() {
    this.barChartType = 'line';
    this.barChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    if(this.duplicate < 1){
      this.barChartData = this.chartData();
    }
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    ///console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    //console.log(event, active);
  }

  private chartData(): any {
      this.duplicate = this.duplicate+1;
      return [
        { data: [ 
          this.email.january()*0.025,
          this.email.february()*0.025,
          this.email.march()*0.025,
          this.email.april()*0.025,
          this.email.may()*0.025,
          this.email.june()*0.025,
          this.email.july()*0.025,
          this.email.august()*0.025,
          this.email.september()*0.025,
          this.email.october()*0.025,
          this.email.november()*0.025,
          this.email.december()*0.025
        ], label: 'Email' },
        { data: [ 
          this.sms.january()*0.10,
          this.sms.february()*0.10,
          this.sms.march()*0.10,
          this.sms.april()*0.10,
          this.sms.may()*0.10,
          this.sms.june()*0.10,
          this.sms.july()*0.10,
          this.sms.august()*0.10,
          this.sms.september()*0.10,
          this.sms.october()*0.10,
          this.sms.november()*0.10,
          this.sms.december()*0.10 
        ], label: 'SMS' }
      ]
  }
}
