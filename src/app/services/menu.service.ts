import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/uniface/wrd/';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) {}

  getNavlinks(): Observable<any> {
    return this.http.get(API_URL + 'WEBSVC.getNavlinks');
  }
}
