import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { News } from '../models/news.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private apiService: ApiService) {}

  getTopHeadlinesForHomePage(): Observable<any> {
    let result: any;
    let newsList: News[] = [];
    // return this.apiService.get(
    //   '/top-headlines?country=in&apiKey=75f8bb3e82c746bb9c413ce214a83317'
    // );
    return this.apiService.get('/data');
  }
}
