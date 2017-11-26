import { NgModule } from '@angular/core';
import { ContentComponent } from './content.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent } from './item/item.component';
import { FormComponent } from './modal/form.component';

@NgModule({
  declarations: [
    ContentComponent,
    ItemComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ContentComponent
  ],
  entryComponents: [
    FormComponent
  ]
})
export class ContentModule {}
