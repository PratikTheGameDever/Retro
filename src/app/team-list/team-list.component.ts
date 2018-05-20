import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team.model';
import { RetroService } from '../services/retro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'retro-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() teams: Array<string> = [];
  selectedTeam:string;
  constructor(private _service: RetroService, private _router: Router) { }

  ngOnInit() {
    this.selectedTeam = this._service.teamName;
  }

  setTeam(team: string){
    this._service.teamName = team;
    this._router.navigate(['input']);
  }

}
