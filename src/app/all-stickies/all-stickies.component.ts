import { Component, OnInit } from '@angular/core';
import { Retro } from '../models/retro.model';
import { RetroService } from '../services/retro.service';

@Component({
  selector: 'retro-all-stickies',
  templateUrl: './all-stickies.component.html',
  styleUrls: ['./all-stickies.component.css']
})
export class AllStickiesComponent implements OnInit {

  good: Array<Retro> = [];
  bad: Array<Retro> = [];
  happiness: Array<Retro> = [];
  allContent: Array<any> = [];
  key: number = 0;
  
  constructor(private _service: RetroService) { 
    
  }

  ngOnInit() {
    this._service.getData().subscribe(
      data => {
        const allContent = data.json();
        this.good = [];
        this.bad = [];
        this.happiness = [];
        this.key = 0;
        for(let data of allContent){
          switch(data.type){
            case 'good': this.good.push(new Retro(this.key++, data.content)); break;
            case 'bad': this.bad.push(new Retro(this.key++, data.content)); break;
            case 'happiness': this.happiness.push(new Retro(this.key++, data.content)); break;
          }
        }
      },
      err => console.log(err)
    )
  }

}
