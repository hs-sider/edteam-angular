import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDemoComponent } from './material/material-demo/material-demo.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import {MarsComponent } from './mars/mars.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'material-demo', // http://localhost:4200/material-demo => Material-demo works!
    component: MaterialDemoComponent
    // children: []
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'mars',
    component: MarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
