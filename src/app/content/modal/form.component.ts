import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormGroup } from '@angular/forms';

@Component({
  templateUrl: 'form.component.html'
})
export class FormComponent {
  workItemsForm: FormGroup;
  constructor(public bsModalRef: BsModalRef) {}
}
