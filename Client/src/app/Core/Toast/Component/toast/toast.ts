import { Component, inject } from '@angular/core';
import { Toast as ToastService } from '../../Service/toast';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-toast',
  imports: [FontAwesomeModule],
  templateUrl: './toast.html',
  styleUrl: './toast.css',
})
export class Toast {
  private toastSvc: ToastService = inject(ToastService);

  public show = this.toastSvc.show;
  public message = this.toastSvc.message;
  public faClose = faClose;

  public onHide(): void {
    this.toastSvc.show.set(false);
  }
}
