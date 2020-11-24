import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  baseUrl = 'https://mtruck-api.herokuapp.com/';

  constructor(private http: HttpClient) {}

  get(url: string): Promise<any> {
    return this.http.get(this.baseUrl + url).toPromise();
  }

  post(url: string, obj: any): Promise<any> {
    return this.http.post(this.baseUrl + url, obj).toPromise();
  }

  put(url: string, obj: any): Promise<any> {
    return this.http.put(this.baseUrl + url, obj).toPromise();
  }

  patch(url: string, obj: any): Promise<any> {
    return this.http.patch(this.baseUrl + url, obj).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.http.delete(this.baseUrl + url).toPromise();
  }

  getRoute() {
    const corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:4200/',
    });
    return this.http
      .get(
        'https://maps.googleapis.com/maps/api/directions/json?origin=S%C3%A3o%20Paulo&destination=S%C3%A3o%20Caetano&key=AIzaSyB_uySgUU0Wv99vO5whZfjTWRl_NNTqmC8',
        { headers: corsHeaders }
      )
      .toPromise();
  }
}
