import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  headers: HttpHeaders = new HttpHeaders().set(
    'X-Api-Key',
    environment.XApiKey
  );

  constructor(private apiService: ApiService) {}

  getTopHeadlinesForHomePage(): Observable<any> {
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set(
      'Access-Control-Allow-Methods',
      'DELETE, POST, GET, OPTIONS'
    );
    this.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With'
    );
    return this.apiService.get(
      environment.baseUrl,
      '/top-headlines?country=in',
      new HttpParams(),
      this.headers
    );
  }

  getNewsByCategory(
    category: string,
    countrySpecific: boolean
  ): Observable<any> {
    this.headers.set('Access-Control-Allow-Origin', '*');
    this.headers.set(
      'Access-Control-Allow-Methods',
      'DELETE, POST, GET, OPTIONS'
    );

    this.headers.set(
      'Access-Control-Allow-Headers',
      'Content-Type, Authorization, X-Requested-With'
    );
    const params = new HttpParams().set('q', category);
    if (!countrySpecific) params.set('country', 'in');
    return this.apiService.get(
      environment.baseUrl,
      `/everything`,
      params,
      this.headers
    );
  }
}
