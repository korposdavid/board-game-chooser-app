import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-bgg-username-form',
  templateUrl: './bgg-username-form.component.html',
  styleUrls: ['./bgg-username-form.component.css']
})
export class BggUsernameFormComponent implements OnInit {
  @Output() username = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  private addUser(form: NgForm) {
    const newUser = form.value.username;
    console.log(newUser);
    this.username.emit(newUser);
  }
}
