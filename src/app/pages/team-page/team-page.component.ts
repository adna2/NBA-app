import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from 'src/app/models/rest/api';
import { TeamService } from 'src/app/services/http/team.service';

@Component({
  selector: 'app-team-page',
  templateUrl: './team-page.component.html',
  styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent implements OnInit {

  teamID: any;
  team?: Team;

  constructor(private teamService: TeamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.teamID = this.route.snapshot.paramMap.get('teamID');

    this.teamService.getTeamById(this.teamID)
      .subscribe(team => {
        this.team = team;
      });
  }

}
