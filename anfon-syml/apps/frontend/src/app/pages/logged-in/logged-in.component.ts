import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsernameService } from '../../services/username.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: "anfon-syml-logged-in",
  templateUrl: "./logged-in.component.html",
  styleUrls: ["./logged-in.component.css"]
})
export class LoggedInComponent implements OnInit {
  public username: string;
  public firstname: string;
  public surname: string;
  public date: any;
  private collection: AngularFirestoreCollection;
  user$: Observable<any[]>;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private reference: UsernameService,
    private data: AngularFirestore
  ) {}

  ngOnInit() {
    this.router.navigate([{outlets:{auth:['overview']}}] ,{relativeTo:this.route});
    this.collection = this.data.collection('users');
    this.user$ = this.collection.valueChanges();
    this.date = new Date;
  }

  public overview() {
    this.router.navigate([{outlets:{auth:['overview']}}] ,{relativeTo:this.route});
  }

  public message() {
    this.router.navigate([{outlets:{auth:['message']}}] ,{relativeTo:this.route});
  }

  public analytics() {
    this.router.navigate([{outlets:{auth:['analytics']}}] ,{relativeTo:this.route});
  }

  public customer() {
    this.router.navigate([{outlets:{auth:['customer']}}] ,{relativeTo:this.route});
  }

  public template() {
    this.router.navigate([{outlets:{auth:['template']}}] ,{relativeTo:this.route});
  }

  public profile() {
    this.router.navigate([{outlets:{auth:['profile']}}] ,{relativeTo:this.route});
  }

}
