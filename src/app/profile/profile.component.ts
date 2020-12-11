import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatacomponantService } from '../datacomponant.service';
import { Users } from '../users';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  Book_title:any;
  users:Users[]=[];
  Book_auther: any;
  NumberOfBooks: any;
  id: any;
  constructor(public rs: DatacomponantService,private router:Router) { }
  
  ngOnInit(): void {
    this.rs.getUsers().subscribe((response)=>{
      this.users=response;
    });
    this.rs.getDetails().subscribe(data => {
      console.log(data);
      this.users=data;
     })
  }
  Search(){
    if(this.Book_title==""){
      this.ngOnInit();
    }else{
      this.users= this.users.filter(res=>{
        return res.Book_title.toLocaleLowerCase().match(this.Book_title.toLocaleLowerCase());
      })
    }
  }
  logout(){
    if(window.confirm('Are you sure you want to logout?')){
      this.router.navigate(['/login-page']);
      }
  }
  addon(){
    
  }
}
