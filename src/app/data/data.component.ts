import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatacomponantService } from '../datacomponant.service';
import { Users } from '../users';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

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
  deleteRow(val){
    if(confirm(" Are you sure to delete? ")){
    this.rs.deleteUser(val).subscribe(data => {

    });
    this.rs.getUsers().subscribe((Response) =>{
      this.users = Response;
    })
  }
  }
update(id){
  this.router.navigate(['/update', id]);
}
add(id){
  this.router.navigate(['/add', id]);
}
getData(user):void{
  this.Book_title = user.Book_title;
  this.Book_auther = user.Book_auther;
  this.NumberOfBooks = user.NumberOfBooks;
  this.id = user.id;
  }
  logout(){
    if(window.confirm('Are you sure you want to logout?')){
      this.router.navigate(['/login-page']);
      }
  }
}