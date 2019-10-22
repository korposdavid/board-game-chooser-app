import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-game-filter-form',
  templateUrl: './game-filter-form.component.html',
  styleUrls: ['./game-filter-form.component.css']
})
export class GameFilterFormComponent implements OnInit {
  @Output() duration = new EventEmitter<number>();
  @Output() playerCount = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.duration.emit(form.value.duration);
    this.playerCount.emit(form.value.count);
  }
}
