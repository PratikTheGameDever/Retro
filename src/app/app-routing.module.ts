import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RetroInputComponent } from './retro-input/retro-input.component';
import { AllStickiesComponent } from './all-stickies/all-stickies.component';
import {  AlwaysAuthGuard } from './authentication/alwaysauthguard';
import { OnlyLoggedInUsersGuard } from './authentication/onlyloggedInusersguard';
import { TeamSetupComponent } from './team-setup/team-setup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: 'login', component : LoginComponent, pathMatch: 'full'},
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'home' , component: TeamSetupComponent, pathMatch: 'full'},
    {path: 'input', component: RetroInputComponent, pathMatch: 'full'},
    {path: 'all', component: AllStickiesComponent, pathMatch: 'full' , canActivate: [OnlyLoggedInUsersGuard , AlwaysAuthGuard]},
    {path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}