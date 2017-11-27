import { AppRoutingModule } from './app.routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { NavModule } from './nav/nav.module';
import { ContentModule } from './content/content.module';

import { AppComponent } from './app.component';
import { reducers } from './store/app.reducers';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthService } from './store/auth/auth.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NavModule,
    ContentModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
