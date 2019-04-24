import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './dashboard/dashboard.component';
import { LandingComponent }   from './landing/landing.component';
import { GenieRecComponent } from './genierec/genierec.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProfileComponent } from './profile/profile.component';
import { ArchiveComponent } from './archive/archive.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/land', pathMatch: 'full' },
  { path: '', component: LandingComponent },
  { path: 'home', component: DashboardComponent },
  { path: 'rec', component: GenieRecComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'archive', component: ArchiveComponent },
  { path: 'reg', component: RegisterComponent },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
