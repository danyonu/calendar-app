import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    if (email.trim().length === 0 || password.trim().length === 0) {
			return;
    }
    
    let requestBody = {
			query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `
    };

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:7000/graphql', requestBody, httpOptions)
      .pipe(
        //map((data: any) => data.data.login),
        catchError(this.handleError)
      );
  }

  createUser(email: string, password: string) {
    if (email.trim().length === 0 || password.trim().length === 0) {
			return;
    }
    
		let requestBody = {
			query: `
      mutation {
        createUser(userInput: {email: "${email}", password: "${password}"}) {
          _id
          email
        }
      }
    `
    };
    
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post('http://localhost:7000/graphql', requestBody, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    if (!error.ok){
      return throwError({message: 'some error message'}/*error.error.errors[0]*/);
    }
  }
}
