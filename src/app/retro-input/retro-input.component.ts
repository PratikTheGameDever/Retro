import { Component, OnInit } from '@angular/core';
import { Retro } from '../models/retro.model';
import { RetroService } from '../services/retro.service';
import { Router } from '@angular/router';
import { Team } from '../models/team.model';

@Component({
  selector: 'retro-retro-input',
  templateUrl: './retro-input.component.html',
  styleUrls: ['./retro-input.component.css']
})
export class RetroInputComponent implements OnInit {

  good: Array<Retro> = [];
  bad: Array<Retro> = [];
  happiness: Array<Retro> = [];

  goodContent: string;
  badContent: string;
  happyContent: string;
  key: number = 0;
  teams: Array<Team> = [];

  constructor(private _service: RetroService, 
    private _router: Router){
      
  }

  ngOnInit(): void {
    this._service.getTeams().subscribe(
        data => {
          this.teams = data.json();
        },
        error => console.log(error)
      );
  }

  addContent(type: string){
    switch(type){
      case 'good': 
        this.good.push(new Retro(this.key++, this.goodContent)); 
        this._service.sendData('type=' + type + '&content=' + this.goodContent + '&key=' + this.key)
        .subscribe(
          data => console.log('success', data),
          err => console.log('error', err)
        );
        break;
      case 'bad': 
        this.bad.push(new Retro(this.key++, this.badContent)); 
        this._service.sendData('type=' + type + '&content=' + this.badContent + '&key=' + this.key)
        .subscribe(
          data => console.log('success', data),
          err => console.log('error', err)
        );
        break;
      case 'happiness': 
        this.happiness.push(new Retro(this.key++, this.happyContent)); 
        this._service.sendData('type=' + type + '&content=' + this.happyContent + '&key=' + this.key)
        .subscribe(
          data => console.log('success', data),
          err => console.log('error', err)
        );
        break;
      default :
         console.error("Retro type does not exist"); 
    }

  }

  getall(): void{
    if(this._service.teamName.trim().length > 0){
      this._router.navigate(['all']);
    }else{
      alert('Please choose a team');
    }
    
  }

}
