import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(
    baseUrl: string,
    path: string,
    params: HttpParams = new HttpParams(),
    headers: HttpHeaders = new HttpHeaders()
  ): Observable<any> {
    return this.http
      .get(`${baseUrl}${path}`, {
        headers: headers,
        params: params,
      })
      .pipe(catchError(this.formatErrors));
  }

  post(baseUrl: string, path: string, body: string) {
    const url = `${baseUrl}${path}`;
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http
      .post(url, body, { headers })
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
