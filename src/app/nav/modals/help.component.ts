import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  templateUrl: 'help.component.html'
})
export class HelpComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
