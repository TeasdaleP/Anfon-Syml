import { Component, OnInit } from "@angular/core";
import { TotalCountService } from '../../../services/total-count.service';

@Component({
  selector: "anfon-syml-analytics",
  templateUrl: "./analytics.component.html",
  styleUrls: ["./analytics.component.css"]
})

export class AnalyticsComponent implements OnInit {
  public title: string;
  public daily: number;
  public monthly: number;
  public yearly: number;

  constructor (private total: TotalCountService) {}

  ngOnInit() {
    this.title = "analytics";
    this.daily = this.total.getDailyTotal();
    this.monthly = this.total.getMonthlyTotal();
    this.yearly = this.total.getYearlyTotal();
  }
}
