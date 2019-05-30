import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class MyUserServService {

  constructor(private http: HttpClient) { }

  getIpAddress() {
      return this.http
            .get('http://ip-api.com/json?callback=?')
            .map(response => response || {});
  }

}
