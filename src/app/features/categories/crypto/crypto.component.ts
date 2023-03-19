import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../core/constants/settings';
import { News } from '../../../core/models/news.model';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.scss'],
})
export class CryptoComponent implements OnInit {
  isLoading: boolean = true;
  categoryData = AppSettings.newsCategories[0];
  articles: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService
      .getNewsByCategory(this.categoryData.name, false)
      .subscribe((json) => {
        this.articles = json.articles.map((article: any) =>
          News.fromJson(article)
        );
        if (this.articles.length > 20)
          this.articles = this.articles.slice(0, 20);
        this.isLoading = false;
      });
  }
}
