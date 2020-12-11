import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logincun } from './logincun';

@Injectable({
  providedIn: 'root'
})
export class LoginserService {

  constructor(private http:HttpClient) {​​​​​​​​ }​​​​​​​​
   
  url:string="http://localhost:3000/credential";
   
  getUsers(){​​​​​​​​
   
  return this.http.get<Logincun[]>(this.url);
    }​​​​​​​​
}
