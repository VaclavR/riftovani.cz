import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NavModule } from './nav/nav.module';

import { AppComponent } from './app.component';
import { NavService } from './nav/nav.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
