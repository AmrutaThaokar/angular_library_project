import { Injectable } from '@angular/core';
import{HttpClient, HttpHeaders} from '@angular/common/http'
import { Users } from './users';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserFetch } from './user-fetch';

@Injectable({
  providedIn: 'root'
})
export class DatacomponantService {
  // previousUser(user: UserFetch) {
  //   throw new Error('Method not implemented.');
  // }
headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
httpOptions ={
  headers: this.headers
}
  constructor(private http:HttpClient) {​​​​​​​​ }​​​​​​​​
   
  url:string="http://localhost:3000/Users";
   
  getUsers(){​​​​​​​​
   
  return this.http.get<Users[]>(this.url);
    }​​​​​​​​
    deleteUser(id: number) {
      return this.http.delete(this.url + '/' + id);
    }
  getUpdateUser(id: number): Observable<Users>{
    //const url = '${this.url}/${id}';

    return this.http.get<Users>(this.url + '/' + id,this.httpOptions)
  }
  updateUser(user:UserFetch):Observable<Users>{
    const url='${this.url}/${user.id}';
    return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
      map(() => user)
    );
  }
  previousUser(user:UserFetch):Observable<Users>{
    const url='${this.url}/${user.id}';
    return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
      map(() => user)
    );
  } 
  addUser(user:Users){
    // const url='${this.url}/${user.id}';
    // return this.http.put<Users>(this.url + '/' + user.id ,user,this.httpOptions).pipe(
    //   map(() => user)
    // ); 
    return this.http.post(this.url, user);
}
getDetails() {
  return this.http.get<Users[]>(this.url);
}}