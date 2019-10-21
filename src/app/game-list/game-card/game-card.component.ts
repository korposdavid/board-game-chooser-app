import {Component, Input, OnInit} from '@angular/core';
import {Game} from '../game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {
  @Input() private game: Game;

  constructor() {
  }

  ngOnInit() {
  }
}
