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
  err : any;
  queryParam : string;

  constructor(private _service: RetroService, 
    private _router: Router){
  }

  addContent(type: string){
    switch(type){
      case 'good': 
        this.good.push(new Retro(this.key++, this.goodContent)); 
        this.queryParam = 'type='+type+'&content='+this.goodContent+'&key='+this.key;
        break;
      case 'bad': 
        this.bad.push(new Retro(this.key++, this.badContent)); 
        this.queryParam = 'type='+type+'&content='+this.badContent+'&key='+this.key;
         break;
      case 'happiness': 
        this.happiness.push(new Retro(this.key++, this.happyContent)); 
        this.queryParam = 'type='+type+'&content='+this.happyContent+'&key='+this.key;
        break;
      default :
         console.error("Retro type does not exist"); 
    }
    this._service.sendData(this.queryParam).subscribe(
      data => console.log('success: ', data),
      this.handleErr
    );

  }

  handleErr(err) {
    this.err = err;
    console.log('Error ', err);
  }
  getall(): void{
    this._router.navigate(['all']);
  }

}
