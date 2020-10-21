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

  loginViaUrl(username: string, password: string) {
    return this.http.get<any>(API_URL + 'loginViaUrl?username=' + username + '&password=' + password)
    .pipe(
      tap(res => this.setSession(res)),
      shareReplay()
    )
  }

  login(username: string, password: string) {
    return this.http.post<user>(API_URL + 'login', {username, password})
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )
  }

  private setSession(authResult) {
    console.log(authResult);

    let date = new Date();
    const expiresAt = date.setSeconds(date.getSeconds() + authResult.exp);

    localStorage.setItem('id_token', authResult.jti);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
  }

  logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
  }

  public isLoggedIn() {
    return new Date() < this.getExpiration();
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }

  getExpiration() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date(expiresAt);
  }

}
