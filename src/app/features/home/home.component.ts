import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../core/services/news.service';
import { News } from '../../core/models/news.model';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { AppSettings } from '../../core/constants/settings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [NgbCarouselConfig],
})
export class HomeComponent implements OnInit {
  primaryColor: string = AppSettings.PRIMARY_COLOR;
  categoryList = AppSettings.newsCategories;

  newsList: News[] = [];
  topHeadlines: News[] = [];
  homeArticles: News[] = [];
  isLoading: boolean = true;

  constructor(private newsService: NewsService, config: NgbCarouselConfig) {
    config.interval = 6000;
    config.keyboard = true;
    config.pauseOnHover = false;
    config.pauseOnFocus = false;
  }

  ngOnInit() {
    this.newsService.getTopHeadlinesForHomePage().subscribe((json) => {
      this.newsList = json.articles.map((article: any) =>
        News.fromJson(article)
      );
      this.topHeadlines = this.newsList.slice(0, 5);
      this.homeArticles = this.newsList.slice(5);
      this.isLoading = false;
    });
  }
}
