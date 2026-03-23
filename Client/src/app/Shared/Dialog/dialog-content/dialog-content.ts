import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dialog-content',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule],
  templateUrl: './dialog-content.html',
  styleUrl: './dialog-content.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContent {
  readonly data = inject(MAT_DIALOG_DATA);
  public emailFormControl = new FormControl(this.data.user ? this.data.user.email : "", [Validators.required, Validators.email]);
}
