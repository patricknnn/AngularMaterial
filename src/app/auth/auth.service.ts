import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { shareReplay, tap } from "rxjs/operators";

const API_URL = 'http://localhost:8080/uniface/wrd/AUTHSVC.';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Constructor
   * @param http HttpClient
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Login
   * @param data FormData to send with request
   */
  login(data: FormData) {
    return this.http.post<User>(API_URL + 'login', data)
      .pipe(
        tap(res => this.setSession(res)),
        shareReplay()
      )
  }

  /**
   * Set session
   * @param user User result from loginrequest
   */
  private setSession(user: User) {
    const expiresAt = this.parseApiDate(user.expiresAt);
    localStorage.setItem('username', user.username);
    localStorage.setItem('id_token', user.idToken);
    localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()));
    window.location.reload();
  }

  /**
   * Logout
   */
  public logout() {
    localStorage.removeItem("id_token");
    localStorage.removeItem("expires_at");
    window.location.reload();
  }

  /**
   * Logged in check
   */
  public isLoggedIn() {
    return new Date() < new Date(this.getExpiration());
  }

  /**
   * Logged out check
   */
  public isLoggedOut() {
    return !this.isLoggedIn();
  }

  /**
   * Get token expiration
   */
  public getExpiration() {
    const expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date(expiresAt);
  }

  /**
   * Get username
   */
  public getUsername(): string {
    return localStorage.getItem("username");
  }

  /**
   * Parse date returned from API
   * @param str Date string to parse
   */
  private parseApiDate(str: any) {
    var year = str.substring(0, 4);
    var month = str.substring(4, 6);
    var day = str.substring(6, 8);
    var hour = str.substring(8, 10);
    var minute = str.substring(10, 12);
    var second = str.substring(12, 14);
    return new Date(year, month - 1, day, hour, minute, second);
  }

}
