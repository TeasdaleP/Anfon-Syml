import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: "anfon-syml-logged-out",
  templateUrl: "./logged-out.component.html",
  styleUrls: ["./logged-out.component.css"]
})

export class LoggedOutComponent implements OnInit {
  public loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  public error: boolean;

  constructor (
    private router: Router,
    private data: AngularFirestore
  ) { }

  ngOnInit () {
    this.error = false;
  }

  public login() {
    if(this.loginForm.valid && !this.loginForm.pristine){
      this.collection().subscribe(data => {
        data.forEach(user => {
          if(this.loginForm.value.username === user.username){
            if(this.loginForm.value.password === user.password){
              this.router.navigate(['logged-in/', user.id]);
            }else{
              this.error = true;
            }
          }else{
            this.error = true;
          }
        });
      })
    }
  }

  private collection(): Observable<any> {
    return this.data.collection('users').valueChanges();
  }
}
