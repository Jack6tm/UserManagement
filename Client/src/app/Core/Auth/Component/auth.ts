import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { finalize } from 'rxjs';
import { AuthService } from '../Service/auth';
import { CommonModule } from '@angular/common';
import { LoaderService } from '../../Loader/Service/loader';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  private authSvc: AuthService = inject(AuthService);
  private loaderSvc: LoaderService = inject(LoaderService);
  private router: Router = inject(Router);

  public loginForm: FormGroup;
  public error = signal<string>('');
  public loading = false;

  constructor() {
    this.loginForm = new FormGroup({
      email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required] }),
    });
  }

  onSubmitLogin() {
    if (this.loginForm.invalid || this.loading) {
      return;
    }
    this.loading = true;
    this.error.set('');
    const { email, password } = this.loginForm.value;
    this.authSvc.login(email, password)
      .pipe(finalize(() => this.loading = false)
      )
      .subscribe({
        next: (res) => {
          this.router.navigate(['/']);
        },
        error: (err) => {
          this.error.set(err?.status == 401 ? 'Erreur de crédential' : '');
        }
      });
  }
}
