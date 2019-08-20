import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "anfon-syml-template",
  templateUrl: "./template.component.html",
  styleUrls: ["./template.component.css"]
})

export class TemplateComponent implements OnInit {
  public title: string;
  public remaining: number;
  public templateForm = new FormGroup({
    title: new FormControl(''),
    channel: new FormControl(''),
    content: new FormControl('')
  })

  constructor () {}

  ngOnInit() {
    this.remaining = 170;
    this.title = "template builder";
  }

  public onSubmit() {
    console.log(this.templateForm.value);
  }
}
