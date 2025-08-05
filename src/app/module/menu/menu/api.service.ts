import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:3000/menu"; 

  constructor(private http: HttpClient) { }
  create(menu: any): Observable<any> {
      return this.http.post(this.baseUrl, menu);
    }
  getAll(): Observable<any> {
  return this.http.get(this.baseUrl);
}
update(id: number, payload: any) {
    return this.http.put(`${this.baseUrl}/${id}`, payload);
  }
deleteuser(id: number): Observable<any> { 
    return this.http.delete(`${this.baseUrl}/${id}`);
  } 
}
