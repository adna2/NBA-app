import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesPageComponent } from './pages/games-page/games-page.component';
import { TeamsPageComponent } from './pages/teams-page/teams-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';

const routes: Routes = [
  { path: 'games', component: GamesPageComponent },
  { path: 'teams', component: TeamsPageComponent },
  { path: '', redirectTo: 'games', pathMatch: 'full' },
  { path: 'team/:teamID', component: TeamPageComponent },
  { path: 'game/:gameID', component: GamePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
