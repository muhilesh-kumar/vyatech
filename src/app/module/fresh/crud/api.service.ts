import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/crud';
  constructor(private http:HttpClient) { }
    getdata(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
