import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  templateUrl: 'about-me.component.html'
})
export class AboutMeComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
