import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from './game.model';

@Component({
selector: 'app-game-list',
templateUrl: './game-list.component.html',
styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  private games: Game[] = [];
  constructor(private http: HttpClient) {
  }
  ngOnInit() {
    this.getGameList('dkorp');
  }

  private getGameList(username: string) {
    const parser = new DOMParser();
    let items: HTMLCollectionOf<Element>;
    const linkToFetch = 'https://www.boardgamegeek.com/xmlapi2/collection?excludesubtype=boardgameexpansion&username=' + username;
    this.http.get(linkToFetch, {responseType: 'text'}).subscribe(
      x => {
        items = parser.parseFromString(x, 'application/xml').getElementsByTagName('item');
        for (let i = 0; i < items.length; i++) {
          const gameId = items.item(i).getAttribute('objectid');
          const name = items.item(i).getElementsByTagName('name').item(0).innerHTML;
          this.games.push(new Game(gameId, name, this.http));
        }
      });
  }
}
