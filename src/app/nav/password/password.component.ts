import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../store/auth/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: 'password.component.html',
  styleUrls: ['password.component.css']
})
export class PasswordComponent implements OnInit {
  adminForm: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.adminForm = new FormGroup({
      'password': new FormControl(null, [Validators.required])
    });
  }

  onInput() {
    if (this.adminForm.valid && this.adminForm.value.password.length === 6) {
      this.authService.signupAdmin(this.adminForm.value.password);
      this.adminForm.reset();
    }
  }

}
