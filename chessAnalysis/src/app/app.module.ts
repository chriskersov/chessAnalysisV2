import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RoutingModule } from './app-routing.module'; // If you have routing
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'; // Import your HomeComponent

@NgModule({
    imports: [BrowserModule, RoutingModule],
    declarations: [
       AppComponent,
       HomeComponent,
    ],
    bootstrap: [AppComponent],
 })
 export class AppModule {}