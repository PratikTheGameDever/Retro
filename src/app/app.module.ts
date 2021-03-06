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
import { AppRoutingModule }     from './app-routing.module';
import { AlwaysAuthGuard } from './authentication/alwaysauthguard';
import { OnlyLoggedInUsersGuard } from './authentication/onlyloggedInusersguard';
import { UserService } from './services/user.service';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamSetupComponent } from './team-setup/team-setup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    StickyComponent,
    AllStickiesComponent,
    RetroInputComponent,
    TeamListComponent,
    TeamSetupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    RetroService,
    UserService,
    AlwaysAuthGuard,
    OnlyLoggedInUsersGuard],
    
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
 
 }
