import { Component, OnInit } from '@angular/core';
import { Retro } from '../models/retro.model';
import { RetroService } from '../services/retro.service';
import { Router } from '@angular/router';

@Component({
  selector: 'retro-retro-input',
  templateUrl: './retro-input.component.html',
  styleUrls: ['./retro-input.component.css']
})
export class RetroInputComponent implements OnInit {

  ngOnInit(): void {
    
  }
  good: Array<Retro> = [];
  bad: Array<Retro> = [];
  happiness: Array<Retro> = [];

  goodContent: string;
  badContent: string;
  happyContent: string;
  key: number = 0;

  constructor(private _service: RetroService, 
    private _router: Router){

  }

  addContent(type: string){
    switch(type){
      case 'good': 
        this.good.push(new Retro(this.key++, this.goodContent)); 
        this._service.sendData('type='+type+'&content='+this.goodContent)
        .subscribe(
          data => console.log('success: ', data),
          err => console.log('error: ', err)
        );
        break;
      case 'bad': 
        this.bad.push(new Retro(this.key++, this.badContent)); 
        this._service.sendData('type='+type+'&content='+this.badContent)
        .subscribe(
          data => console.log('success: ', data),
          err => console.log('error: ', err)
        );
        break;
      case 'happiness': 
        this.happiness.push(new Retro(this.key++, this.happyContent)); 
        this._service.sendData('type='+type+'&content='+this.happyContent)
        .subscribe(
          data => console.log('success: ', data),
          err => console.log('error: ', err)
        );
        break;
    }

  }

  getall(): void{
    this._router.navigate(['all']);
  }

}
