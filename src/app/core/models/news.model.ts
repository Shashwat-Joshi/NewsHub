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
    let imageUrl: string =
      json.urlToImage ??
      'https://i.pinimg.com/564x/74/89/44/748944eb4559a3db7eb5058d29e5887c.jpg';
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
