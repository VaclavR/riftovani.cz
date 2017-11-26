import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  templateUrl: 'about-site.component.html'
})
export class AboutSiteComponent {
  constructor(public bsModalRef: BsModalRef) {}
}
