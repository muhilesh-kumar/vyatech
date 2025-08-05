import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  baseURL: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }

  getitems(): Observable<any> {
    return this.http.get(this.baseURL);
  }
  createUser(users: any): Observable<any> {
    return this.http.post(this.baseURL, users);
  }
  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, user);
  }
  //delete 
  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
  //fetch data
  fetchdata(id: number) {
    return this.http.get(`${this.baseURL}/${id}`);
  }
   deletedata(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}