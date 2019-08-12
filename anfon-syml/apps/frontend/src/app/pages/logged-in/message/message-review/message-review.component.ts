import { Component, OnInit } from "@angular/core";

@Component({
  selector: "anfon-syml-message-review",
  templateUrl: "./message-review.component.html",
  styleUrls: ["./message-review.component.css"]
})

export class MessageReviewComponent implements OnInit {
  public title: string;

  constructor () {}

  ngOnInit() {
    this.title = "message review";
  }
}
