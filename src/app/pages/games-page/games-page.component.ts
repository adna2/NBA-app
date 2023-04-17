import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/rest/api';
import { GameService } from 'src/app/services/http/game.service';

@Component({
  selector: 'app-games-page',
  templateUrl: './games-page.component.html',
  styleUrls: ['./games-page.component.scss']
})
export class GamesPageComponent implements OnInit {

  games: Game[] = [];

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.getAllGames()
      .subscribe((games: Game[]) => {
        this.games = games;
      });
  }

}
