import { Component } from '@angular/core';
import { Retro } from './models/retro.model';
import { RetroService } from './services/retro.service';

@Component({
  selector: 'retro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'retro';
}
