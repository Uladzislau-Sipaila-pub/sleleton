import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected basePath = environment.basePath;

  constructor(
    protected http: HttpClient
  ) {}

  get(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.get(`${this.basePath}${url}`, {
      params
    });
  }

  post(url: string, body: any = {}, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.post(`${this.basePath}${url}`, body, {
      params
    });
  }

  delete(url: string, params: HttpParams = new HttpParams()): Observable<any> {
    return this.http.delete(`${this.basePath}${url}`, {
      params
    });
  }
}
