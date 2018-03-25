import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { RetroService } from './services/retro.service';
import { HttpModule } from '@angular/http';
import { StickyComponent } from './sticky/sticky.component';
import { AllStickiesComponent } from './all-stickies/all-stickies.component';
import { RouterModule } from '@angular/router';
import { RetroInputComponent } from './retro-input/retro-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    StickyComponent,
    AllStickiesComponent,
    RetroInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home', component: RetroInputComponent, pathMatch: 'full'},
        {path: 'all', component: AllStickiesComponent, pathMatch: 'full'},
        {path: '**', redirectTo: 'home'}
      ]
    ),
    BrowserAnimationsModule
  ],
  providers: [RetroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
