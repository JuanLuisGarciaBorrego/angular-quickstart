import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Import my components
import { HolaMundoComponent } from './component/hola-mundo.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ HolaMundoComponent ],
  bootstrap: [ HolaMundoComponent ]
})
export class AppModule { }
