import { Component, OnInit, Input } from '@angular/core';
import { Retro } from '../models/retro.model';
import { trigger, transition, query, style, stagger, keyframes, animate } from '@angular/animations';

@Component({
  selector: 'retro-sticky',
  templateUrl: './sticky.component.html',
  styleUrls: ['./sticky.component.css'],
  animations: [
    trigger('stickies', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]), {optional: true}),

        query(':leave', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-75%)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class StickyComponent implements OnInit {

  @Input() igood: Array<Retro> = [];
  @Input() ibad: Array<Retro> = [];
  @Input() ihappiness: Array<Retro> = [];

  constructor() { }

  ngOnInit() {
  }

  deleteMe(type: string, key: number): void {
    switch(type){
      case 'good': this.deleteFrom(this.igood, key);  break;
      case 'bad':  this.deleteFrom(this.ibad, key); break;
      case 'happiness':  this.deleteFrom(this.ihappiness, key); break;
    }
  }


  deleteFrom(group: Array<Retro>, key: number){
    let index = 0, count = 0;
    group.forEach(element => {
      if(element.key === key){
        index = count;
      }
      count++;
    });
    group.splice(index, 1);
  }
  
}
