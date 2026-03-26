import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Shared/Navbar/Component/navbar';
import { Footer } from './Shared/Footer/Component/footer';
import { Loader } from './Core/Loader/Component/loader';
import { LoaderService } from './Core/Loader/Service/loader';
import { CommonModule } from '@angular/common';
import { Toast } from './Core/Toast/Component/toast/toast';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Loader,
    Navbar,
    Footer,
    Toast
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private loaderSvc:LoaderService = inject(LoaderService);

  loading$ = this.loaderSvc.isLoading$;
}
