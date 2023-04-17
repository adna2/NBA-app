import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Game } from 'src/app/models/rest/api';
import { GameService } from 'src/app/services/http/game.service';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrls: ['./game-page.component.scss']
})
export class GamePageComponent implements OnInit {

  gameID: any;
  game?: Game;

  constructor(private gameService: GameService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gameID = this.route.snapshot.paramMap.get('gameID');

    this.gameService.getGameById(this.gameID)
      .subscribe(game => {
        this.game = game;
      });
  }

}
