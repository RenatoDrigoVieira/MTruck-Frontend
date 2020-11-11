import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}

  get(url: string): Promise<any> {
    return this.http.get(url).toPromise();
  }

  post(url: string, obj: any): Promise<any> {
    return this.http.post(url, obj).toPromise();
  }

  put(url: string, obj: any): Promise<any> {
    return this.http.put(url, obj).toPromise();
  }

  patch(url: string, obj: any): Promise<any> {
    return this.http.patch(url, obj).toPromise();
  }

  delete(url: string): Promise<any> {
    return this.http.delete(url).toPromise();
  }
}
