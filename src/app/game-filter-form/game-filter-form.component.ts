import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-game-filter-form',
  templateUrl: './game-filter-form.component.html',
  styleUrls: ['./game-filter-form.component.css']
})
export class GameFilterFormComponent implements OnInit {
  playtimes: string[] = ['0-1 hour', '1-2 hours', '2+ hours'];
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {}
}
