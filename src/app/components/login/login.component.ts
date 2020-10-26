import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0}),
        animate('250ms', style({ opacity: 1})),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0}))
      ])
    ]),
  ]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  hidePassword = true;
  errorMessage: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  login() {
    const val = this.loginForm.value;

    if (val.username && val.password) {
      var loginData = new FormData();
      loginData.append("password", val.password);
      loginData.append("username", val.username);

      this.authService.login(loginData)
        .subscribe(data => {
          this.router.navigate(['/dashboard']);
        }, error => {
          console.log(error.error);
          this.errorMessage = error.error;
        });
    }
  }

  removeErrorMessage(): void {
    this.errorMessage = "";
  }

}
