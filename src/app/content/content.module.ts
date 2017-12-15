import { NgModule }                         from '@angular/core';
import { ContentComponent }                 from './content.component';
import { CommonModule }                     from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ItemComponent }                    from './item/item.component';
import { FormComponent }                    from './modal/form.component';
import { ProgressbarModule }                from 'ngx-bootstrap';

@NgModule({
  declarations: [
    ContentComponent,
    ItemComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressbarModule.forRoot()
  ],
  exports: [
    ContentComponent
  ],
  entryComponents: [
    FormComponent
  ]
})
export class ContentModule {}
