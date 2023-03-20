import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private apiService: ApiService) {}

  getTopHeadlinesForHomePage(): Observable<any> {
    return this.apiService.getNews(
      `${environment.baseUrl}/top-headlines`,
    );
  }

  getNewsByCategory(
    category: string,
    countrySpecific: boolean
  ): Observable<any> {
    return this.apiService.get(
      `${environment.baseUrl}/category`,
      '',
      new HttpParams().set('category', category)
    );
  }
}
