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
        if(data.body !== ''){
          this.allContent = data.json();
          this.good = [];
          this.bad = [];
          this.happiness = [];
          this.key = 0;
          for(let d of this.allContent){
            switch(d.type){
              case 'good': this.good.push(new Retro(this.key++, d.content)); break;
              case 'bad': this.bad.push(new Retro(this.key++, d.content)); break;
              case 'happiness': this.happiness.push(new Retro(this.key++, d.content)); break;
            }
          }
        }
        
        
      },
      err => console.log(err)
    )
  }

}
