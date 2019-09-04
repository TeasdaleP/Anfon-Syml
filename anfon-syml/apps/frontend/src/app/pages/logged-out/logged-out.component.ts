import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { UsernameService } from '../../services/username.service';
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
  public id: number;
  users: any;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private reference: UsernameService,
    private data: AngularFirestore
  ) { }

  ngOnInit () {
    this.error = false;
    this.users = this.data.collection('users').valueChanges();
    this.data.collection('users').valueChanges().subscribe(users=> {
      users.forEach(function (user) {
        console.log(user);
      });
    });
  }

  public login() {
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.router.navigate(['logged-in/', 1001]);
    }
  }
}

















  // public login() {
  //   if(this.loginForm.touched){
  //     this.db.object(this.loginForm.value.username).snapshotChanges().subscribe(actions => {
  //       const password = actions.payload.child('password').val();
  //       const username = actions.payload.child('username').val();
  //       const id = actions.payload.child('id').val();

  //       if(this.loginForm.value.username === username){
  //         if(this.loginForm.value.password === password){
  //           this.reference.setUser(username);
  //           this.router.navigate(['logged-in/', id]);
  //         }else{
  //           this.error = true;
  //         }
  //       }else{
  //         this.error = true;
  //       }
  //     });
  //   }
  // }
