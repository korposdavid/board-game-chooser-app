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

@NgModule({
  declarations: [
    AppComponent,
    GameListComponent,
    GameCardComponent,
    HeaderComponent,
    GameFilterFormComponent
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
