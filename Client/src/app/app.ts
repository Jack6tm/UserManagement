import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './Shared/Navbar/Component/navbar';
import { Footer } from './Shared/Footer/Component/footer';
import { Loader } from './Core/Loader/Component/loader';
import { Observable } from 'rxjs';
import { LoaderService } from './Core/Loader/Service/loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CommonModule,
    Navbar,
    Footer,
    Loader
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Client');

  constructor(private loaderSvc: LoaderService) {}

  public onIsLoading(): Observable<Boolean> {
      return this.loaderSvc.isLoading$;
    }
}
