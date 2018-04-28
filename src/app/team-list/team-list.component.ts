import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../models/team.model';

@Component({
  selector: 'retro-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  @Input() teams: Array<Team> = [];

  constructor() { }

  ngOnInit() {
  }

}
