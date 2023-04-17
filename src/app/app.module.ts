import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { HeaderComponent } from './modules/shared/header/header.component';
import { FooterComponent } from './modules/shared/footer/footer.component';
import { FilterByDivisionPipe } from './pipes/filter-by-division.pipe';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsPageComponent,
    GamesPageComponent,
    HeaderComponent,
    FooterComponent,
    FilterByDivisionPipe,
    TeamPageComponent,
    GamePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
