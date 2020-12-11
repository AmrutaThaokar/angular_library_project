import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username: any;
  invalidLogin: boolean=false;
  
    errorMessage='Invalid Credentials'

  // username: string;
  // password: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  Templedrive(form: any){
    console.log("username:" + form.username);
    console.log("password:" + form.password);
    if(form.username=== 'Amruta@Admin' && form.password==='admin'){
      this.router.navigate(['data'])
            this.invalidLogin=false
      }
      else if(form.username=== 'amruta' && form.password==='thaokar'){
        this.router.navigate(['profile'])
        this.invalidLogin=false
      }
      else{
         this.invalidLogin=true
      }
        }
      //this.router.navigateByUrl("/data");
  }


