import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  constructor(private authService: AuthService, route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl({ value: '', disabled: false }, [Validators.minLength(5), Validators.required])
    });
  }
  get _getEmail() {
    return this.form.get('email');
  }

  get _getPassword() {
    return this.form.get('password');
  }

  submit() {
    this.authService.login(this.form.value).subscribe((r) => {
      this.form.reset();
    });
  }
}
