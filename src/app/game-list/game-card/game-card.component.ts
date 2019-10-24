import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Game} from '../game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() private game: Game;
  @Output() clickedGame = new EventEmitter<Game>();

  constructor() {
  }

  ngOnInit() {
  }

  emitGameId() {
    this.clickedGame.emit(this.game);
  }
}
