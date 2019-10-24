import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'board-game-chooser-app';
  private duration: number;
  private playerCount: number;
  private didFilter = false;
  private username: string;

  setDurationFilter($event: number) {
    this.duration = $event;
    this.didFilter = true;
  }

  setPlayerCountFilter($event: number) {
    this.playerCount = $event;
    this.didFilter = true;
  }

  setUsername($event: string) {
    this.username = $event;
  }
}
