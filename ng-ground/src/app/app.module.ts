import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlgorithmsComponent } from './components/algorithms/algorithms.component';
import { AlgorithmsZeroComponent } from './components/algorithms-zero/algorithms-zero.component';

@NgModule({
  declarations: [
    AppComponent,
    AlgorithmsComponent,
    AlgorithmsZeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
