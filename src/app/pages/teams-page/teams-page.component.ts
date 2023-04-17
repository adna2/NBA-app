import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/models/rest/api';
import { TeamService } from 'src/app/services/http/team.service';

@Component({
  selector: 'app-teams-page',
  templateUrl: './teams-page.component.html',
  styleUrls: ['./teams-page.component.scss']
})
export class TeamsPageComponent implements OnInit {

  teams: Team[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams()
      .subscribe((teams: Team[]) => {
        this.teams = teams;
      });
  }

}
