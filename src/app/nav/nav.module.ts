import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavComponent } from './nav.component';
import { PasswordComponent } from './password/password.component';
import { AppRoutingModule } from '../app.routing.module';
import { AboutSiteComponent } from './modals/about-site.component';
import { AboutMeComponent } from './modals/about-me.component';
import { HelpComponent } from './modals/help.component';

@NgModule({
  declarations: [
    NavComponent,
    PasswordComponent,
    AboutSiteComponent,
    AboutMeComponent,
    HelpComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot()
  ],
  exports: [
    NavComponent,
    PasswordComponent
  ],
  entryComponents: [
    AboutSiteComponent,
    AboutMeComponent,
    HelpComponent
  ]
})

export class NavModule {}
