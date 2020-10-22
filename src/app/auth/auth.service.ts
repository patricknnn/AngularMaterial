import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { shareReplay, tap } from "rxjs/operators";

const API_URL = 'http://localhost:8080/uniface/wrd/AUTHSVC.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: FormData) {
    return this.http.post<user>(API_URL + 'login', data)
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )
  }

  private setSession(authResult) {
    var str = authResult.expiresAt;
    var year = str.substring(0, 4);
    var month = str.substring(4, 6);
    var day = str.substring(6, 8);
    var hour = str.substring(8, 10);
    var minute = str.substring(10, 12);
    var second = str.substring(12, 14);

    const expiresAt = new Date(year, month - 1, day, hour, minute, second)

    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    window.location.reload();
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    window.location.reload();
  }

  public isLoggedIn() {
    return new Date() < new Date(this.getExpiration());
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date(expiresAt);
  }

}
