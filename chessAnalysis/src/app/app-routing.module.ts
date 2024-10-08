import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

const routes: Routes = [  // Define your routes here

  {path: 'home', component: HomeComponent},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class RoutingModule {}
