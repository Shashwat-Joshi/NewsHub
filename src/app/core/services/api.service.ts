import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  headers: HttpHeaders = new HttpHeaders().set(
    'X-Api-Key',
    environment.XApiKey
  );

  constructor(private http: HttpClient) {}

  get(
    baseUrl: string,
    path: string,
    params: HttpParams = new HttpParams()
  ): Observable<any> {
    return this.http
      .get(`${baseUrl}${path}`, {
        headers: this.headers,
        params: params,
      })
      .pipe(catchError(this.formatErrors));
  }

  post(baseUrl: string, path: string, body: string) {
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    return this.http
      .post(`${baseUrl}${path}`, body, { headers })
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: any) {
    return throwError(error.error);
  }
}
