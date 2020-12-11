import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatacomponantService } from '../datacomponant.service';
import { UserFetch } from '../user-fetch';
import { Users } from '../users';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public route: ActivatedRoute, public router: Router, public rs: DatacomponantService) { }
val: any;
users: Users[] =[];
  user!: UserFetch;
  ngOnInit(): void {
    let sub= this.route.params.subscribe(params =>{
this.val = params['id'];
    });
    console.log("id: " + this.val);
    this.rs.getUpdateUser(this.val).subscribe(data =>{
      this.user = data;
    });
  }
add(){
  this.rs.addUser(this.user).subscribe(data =>{

  });
  this.getUsers();
  this.router.navigate(['data']);
}
getUsers(){
  this.rs.getUsers().subscribe((Response) => {
    this.users = Response;
  });
}
Previous(){
  this.rs.previousUser(this.user).subscribe(data =>{

  });
  this.getUsers();
  this.router.navigate(['data']);

}
}
