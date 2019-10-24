import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameCardComponent } from './game-list/game-card/game-card.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';
import { GameFilterFormComponent } from './game-filter-form/game-filter-form.component';
import { BggUsernameFormComponent } from './bgg-username-form/bgg-username-form.component';
import { GameInfoComponent } from './game-list/game-info/game-info.component';

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    HeaderComponent,
    GameFilterFormComponent,
    BggUsernameFormComponent,
    GameInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
