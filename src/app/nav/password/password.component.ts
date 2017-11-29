import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.css']
})
export class PasswordComponent implements OnInit {
  adminForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.adminForm = new FormGroup({
      'password': new FormControl(null, [Validators.required])
    });
  }

  onInput() {
    if (this.adminForm.valid && this.adminForm.value.password.length === 6) {
      this.adminForm.reset();
    }
  }

}
