export class News {
  author: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: Date;

  constructor(
    author: string,
    title: string,
    desc: string,
    url: string,
    imageUrl: string,
    publishedAt: Date
  ) {
    this.author = author;
    this.title = title;
    this.description = desc;
    this.url = url;
    this.imageUrl = imageUrl;
    this.publishedAt = publishedAt;
  }

  static fromJson(json: any): News {
    let author: string = json.source.name ?? 'Unknown';
    // TODO: SHOW DEFAULT IMAGE
    let imageUrl: string = json.urlToImage ?? '';
    return new News(
      author,
      json.title,
      json.description,
      json.url,
      imageUrl,
      json.publishedAt
    );
  }
}
