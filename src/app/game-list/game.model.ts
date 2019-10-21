import {HttpClient} from '@angular/common/http';

export class Game {
  imagePath: string;
  thumbnailPath: string;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;

  constructor(
    public id: string,
    public name: string,
    private http: HttpClient) {
    this.collectInformation();
  }

  private collectInformation() {
    const parser = new DOMParser();
    const linkToFetch = 'https://www.boardgamegeek.com/xmlapi2/thing?id=' + this.id;
    this.http.get(linkToFetch, {responseType: 'text'}).subscribe(
      x => {
        this.imagePath = parser.parseFromString(x, 'application/xml').getElementsByTagName('image').item(0).innerHTML;
        this.thumbnailPath = parser.parseFromString(x, 'application/xml').getElementsByTagName('thumbnail').item(0).innerHTML;

        this.minPlayers = +parser.parseFromString(x, 'application/xml').getElementsByTagName('minplayers').item(0).getAttribute('value');
        this.maxPlayers = +parser.parseFromString(x, 'application/xml').getElementsByTagName('maxplayers').item(0).getAttribute('value');
        this.playingTime = +parser.parseFromString(x, 'application/xml').getElementsByTagName('playingtime').item(0).getAttribute('value');
      });
  }
}
