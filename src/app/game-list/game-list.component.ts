import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
selector: 'app-game-list',
templateUrl: './game-list.component.html',
styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private games: string[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getGameList('dkorp');
  }

  private getGameList(id: string) {
    const parser = new DOMParser();
    let items: HTMLCollectionOf<Element>;
    const linkToFetch = 'https://www.boardgamegeek.com/xmlapi2/collection?username=' + id;
    this.http.get(linkToFetch, {responseType: 'text'}).subscribe(
      x => {
        items = parser.parseFromString(x, 'application/xml').getElementsByTagName('item');
        for (let i = 0; i < items.length; i++) {
          this.games.push(items.item(i).getAttribute('objectid'));
        }
      });
  }
}
