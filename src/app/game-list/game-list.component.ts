import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Game} from './game.model';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnChanges {
  @Input() private durationFilter: number;
  @Input() private countFilter: number;
  @Input() private filtered: boolean;
  @Input() private username: string;
  @Input() private clickedGame: Game;
  private games: Game[] = [];
  private filteredGames: Game[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.sortGameList();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.countFilter || changes.durationFilter) {
      this.filterGameList();
    } else if (changes.username) {
      this.games = [];
      this.getGameList();
    }
  }

  private getGameList() {
    const parser = new DOMParser();
    let items: HTMLCollectionOf<Element>;
    const linkToFetch = 'https://www.boardgamegeek.com/xmlapi2/collection?excludesubtype=boardgameexpansion&username=' + this.username;
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

  private sortGameList() {
    this.games.sort((a, b) => {
      return a.playingTime > b.playingTime ? -1 : a.playingTime < b.playingTime ? 1 : 0;
    });
  }

  private filterGameList() {
    this.sortGameList();
    this.filteredGames = [];
    for (const game of this.games) {
      if (game.minPlayers <= this.countFilter && game.maxPlayers >= this.countFilter && game.playingTime <= this.durationFilter * 60) {
        this.filteredGames.push(game);
      }
    }
  }

  setClickedGame($event: Game) {
    this.clickedGame = $event;
    console.log(this.clickedGame);
  }
}
