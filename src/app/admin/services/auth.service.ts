import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { User } from '../../interfaces/user';
import { environment } from "../../../environments/environment";
import { catchError, tap } from "rxjs/operators";

export class AuthService {
  private authToken: string = ''
  errorMessage$: Subject<string> = new Subject<string>()

  constructor(private http: HttpClient) { }

  login(user: User): Observable<any> {
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout(): Observable<any> {
    localStorage.removeItem('tokenAuth');
    return this.http.post('', {});
  }

  handleError(error: HttpErrorResponse) {

    const { message } = error.error.error;

    switch (message) {
      case 'INVALID_EMAIL':
        this.errorMessage$.next('Emailinvalid');
        break;
      case 'INVALID_PASSWORD':
        this.errorMessage$.next('Password invalid');
        break
      case 'EMAIL_NOT_FOUND':
        this.errorMessage$.next('Email not found');
        break
    }
    return throwError(error);
  }

  get token(): string {
    return localStorage.getItem('tokenAuth');
  }

  private setToken(response): string {
    localStorage.setItem('tokenAuth', response.idToken);
    this.authToken = response.idToken;
    return this.authToken;
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
