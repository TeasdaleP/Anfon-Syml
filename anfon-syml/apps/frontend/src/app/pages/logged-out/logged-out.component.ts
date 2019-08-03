import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "anfon-syml-logged-out",
  templateUrl: "./logged-out.component.html",
  styleUrls: ["./logged-out.component.css"]
})
export class LoggedOutComponent implements OnInit {
  public title: string;
  public id: number;

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.title = "Logged out!";
    this.id = 1001;
  }

  public login() {
    this.router.navigate(['logged-in/', this.id])
  }
}
