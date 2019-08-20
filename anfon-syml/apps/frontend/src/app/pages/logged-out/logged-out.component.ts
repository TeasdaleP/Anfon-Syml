import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "anfon-syml-logged-out",
  templateUrl: "./logged-out.component.html",
  styleUrls: ["./logged-out.component.css"]
})
export class LoggedOutComponent implements OnInit {
  public error: boolean;
  public id: number;
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.error = false;
    this.id = 1001;
  }

  public login() {
    if(this.loginForm.value.username === 'teasdale'){
      if(this.loginForm.value.password === 'password'){
        this.router.navigate(['logged-in/', this.id]);
      }else{
        this.error = true;
      }
    }else{
      this.error = true;
    }
  }
}
