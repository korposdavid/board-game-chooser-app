import {HttpClient} from '@angular/common/http';

export class Game {
  imagePath: string;
  thumbnailPath: string;
  minPlayers: number;
  maxPlayers: number;
  playingTime: number;
  minAge: number;
  yearPublished: number;
  description: string;

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
        const parsedXML = parser.parseFromString(x, 'application/xml');
        this.imagePath = parsedXML.getElementsByTagName('image').item(0).innerHTML;
        this.thumbnailPath = parsedXML.getElementsByTagName('thumbnail').item(0).innerHTML;
        this.description = parsedXML.getElementsByTagName('description').item(0).textContent;

        const newParsed = parser.parseFromString(
          '<!doctype html><body>' + x,
          'text/html');
        this.description = newParsed.getElementsByTagName('description').item(0).textContent;
        this.minPlayers = +parsedXML.getElementsByTagName('minplayers').item(0).getAttribute('value');
        this.maxPlayers = +parsedXML.getElementsByTagName('maxplayers').item(0).getAttribute('value');
        this.playingTime = +parsedXML.getElementsByTagName('playingtime').item(0).getAttribute('value');
        this.minAge = +parsedXML.getElementsByTagName('minage').item(0).getAttribute('value');
        this.yearPublished = +parsedXML.getElementsByTagName('yearpublished').item(0).getAttribute('value');
      });
  }
}
