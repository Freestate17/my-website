import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EnvironmentsComponent } from './components/environments/environments.component';
import { AboutComponent } from './components/about/about.component';

// define routes here
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'environments', component: EnvironmentsComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
