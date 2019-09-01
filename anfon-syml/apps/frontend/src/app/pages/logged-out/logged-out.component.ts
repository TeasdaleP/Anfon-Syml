import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormGroup, FormControl } from '@angular/forms';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { UsernameService } from '../../services/username.service';

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

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private db: AngularFireDatabase,
    private reference: UsernameService
  ) { }

  ngOnInit () {
    this.error = false;
  }

  public login() {
    if(this.loginForm.touched){
      this.db.object(this.loginForm.value.username).snapshotChanges().subscribe(actions => {
        const password = actions.payload.child('password').val();
        const username = actions.payload.child('username').val();
        const id = actions.payload.child('id').val();

        if(this.loginForm.value.username === username){
          if(this.loginForm.value.password === password){
            this.reference.setUser(username);
            this.router.navigate(['logged-in/', id]);
          }else{
            this.error = true;
          }
        }else{
          this.error = true;
        }
      });
    }
  }
}
