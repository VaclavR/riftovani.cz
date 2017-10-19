import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NavComponent } from './nav.component';

@NgModule({
    declarations: [
        NavComponent
    ],
    imports: [
        CommonModule,
        BsDropdownModule.forRoot(),
        CollapseModule.forRoot()
    ]
})

export class NavModule {}
