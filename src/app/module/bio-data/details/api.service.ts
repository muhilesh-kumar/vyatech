import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:3000/bio-data"; 
  
  constructor(private http: HttpClient) { }

  

get(limit: number): Observable<any> {
  return this.http.get(this.baseUrl, { params: { limit } });
}


  create(biodata: any): Observable<any> {
    return this.http.post(this.baseUrl, biodata);
  }

  deleteuser(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  fetchdata(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateUser(id: number, biodata: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, biodata);
  }
  uploadExpenses(biodata: any): Observable<any> {
    return this.http.post(this.baseUrl, biodata);
  }
}