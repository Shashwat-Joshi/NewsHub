import { Component, OnInit } from '@angular/core';
import { AppSettings } from '../../../core/constants/settings';
import { News } from '../../../core/models/news.model';
import { NewsService } from '../../../core/services/news.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['../crypto/crypto.component.scss', './politics.component.scss'],
})
export class PoliticsComponent implements OnInit {
  isLoading: boolean = true;
  categoryData = AppSettings.newsCategories[3];
  articles: News[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService
      .getNewsByCategory(this.categoryData.name, true)
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
