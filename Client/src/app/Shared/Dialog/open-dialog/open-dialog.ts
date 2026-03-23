import { ChangeDetectionStrategy, Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogContent } from '../dialog-content/dialog-content';

@Component({
  selector: 'app-open-dialog',
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './open-dialog.html',
  styleUrl: './open-dialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenDialog {
  @Input() name!: string;
  @Input() user!: Number;

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      data: {name: this.name, user: this.user},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
