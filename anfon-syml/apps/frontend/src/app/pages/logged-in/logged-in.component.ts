import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "anfon-syml-logged-in",
  templateUrl: "./logged-in.component.html",
  styleUrls: ["./logged-in.component.css"]
})
export class LoggedInComponent implements OnInit {
  public username: string;
  public date: any;

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.username = "username";
    this.date = new Date;
  }

  public overview() {
    this.router.navigate([{outlets:{auth:['overview']}}] ,{relativeTo:this.route})
  }

  public message() {
    this.router.navigate([{outlets:{auth:['message']}}] ,{relativeTo:this.route})
  }

  public analytics() {
    this.router.navigate([{outlets:{auth:['analytics']}}] ,{relativeTo:this.route})
  }

  public customer() {
    this.router.navigate([{outlets:{auth:['customer']}}] ,{relativeTo:this.route})
  }

}
