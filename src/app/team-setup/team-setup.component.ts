import { Component, OnInit } from '@angular/core';
import { Team } from '../models/team.model';
import { RetroService } from '../services/retro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'retro-team-setup',
  templateUrl: './team-setup.component.html',
  styleUrls: ['./team-setup.component.css']
})
export class TeamSetupComponent implements OnInit {

  teams: Array<string> = [];
  teamName = '';
  
  constructor(private _service: RetroService, private _router: Router) { }

  ngOnInit() {
    this._service.getTeams().subscribe(
      data => {
        this.teams = data.json();
      }, error => console.log(error)
    );
  }

  setTeamName(val : string){
    if(val.trim().length > 1){
      this._service.setTeamName(val.trim()).subscribe();
      this._router.navigate(['input']);
    }
  }

}
