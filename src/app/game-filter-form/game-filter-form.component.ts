import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-game-filter-form',
  templateUrl: './game-filter-form.component.html',
  styleUrls: ['./game-filter-form.component.css']
})
export class GameFilterFormComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const playerCount = form.controls.count.value;
    const duration = form.controls.duration.value;
    console.log(form.controls.duration.value);
    console.log(form.controls.count.value);
  }
}
