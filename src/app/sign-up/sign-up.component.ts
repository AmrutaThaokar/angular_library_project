import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Templedrive(form: any){
    console.log("firstname: " + form.firstname);
    console.log("lastname: " + form.lastname);
     console.log("email: " + form.email);
     console.log("phoneno: " + form.phoneno);
     console.log("address: " + form.address);
     console.log("createpassword: " + form.createpassword);
     console.log("retypepassword: " + form.retypepassword);

  }
  login(){
    this.router.navigate(['login-page']);
  }
}
