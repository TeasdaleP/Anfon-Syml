import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: "anfon-syml-logged-out",
  templateUrl: "./logged-out.component.html",
  styleUrls: ["./logged-out.component.css"]
})
export class LoggedOutComponent implements OnInit {
  public title: string;
  public id: number;
  public loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor (
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit () {
    this.title = "Logged out!";
    this.id = 1001;
  }

  public login() {
    if(this.loginForm.value.email === 'email'){
      if(this.loginForm.value.password === 'password'){
        this.router.navigate(['logged-in/', this.id]);
      }else{
        console.log('Password is incorrect!')
      }
    }else{
      console.log('Email is incorrect!')
    }
  }
}
