import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { UsernameService } from '../../services/username.service';
import { Observable } from 'rxjs';

@Component({
  selector: "anfon-syml-logged-in",
  templateUrl: "./logged-in.component.html",
  styleUrls: ["./logged-in.component.css"]
})
export class LoggedInComponent implements OnInit {
  public firstname: string;
  public surname: string;
  public date: any;

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private reference: UsernameService
  ) {}

  ngOnInit() {
    this.router.navigate([{outlets:{auth:['overview']}}] ,{relativeTo:this.route});
    // this.db.object(this.reference.getUser()).snapshotChanges().subscribe(actions => {
    //   const firstname = actions.payload.child('firstname').val();
    //   const surname = actions.payload.child('surname').val();
    //   this.firstname = firstname;
    //   this.surname = surname;
    // });
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

}
