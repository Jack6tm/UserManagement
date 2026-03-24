import { Component, inject, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { UserService } from '../../../Core/User/Service/user-service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { UserElement } from '../../../Core/User/Interface/user-element';
import { OpenDialog } from '../../Dialog/open-dialog/open-dialog';


@Component({
  selector: 'app-users-table',
  imports: [MatTableModule, MatButtonModule, OpenDialog],
  templateUrl: './users-table.html',
  styleUrl: './users-table.css',
})
export class UsersTable implements OnInit {

  private userSvc = inject(UserService);
  public displayedColumns: string[] = ['id', 'name', 'first_name', 'company_position', 'email', "role", "actions"];
  public dataSource: UserElement[] = [];

  @Input() user!: UserElement[];

  ngOnInit(): void {
    this.dataSource = this.user.map((element) => ({
      id: element.id,
      name: element.name,
      first_name: element.first_name,
      email: element.email,
      company_position: element.company_position,
      role: element.role?.[0]?.name ?? null
    }));
  }

  public onDeleteItem(id: Number): void {
    this.userSvc.delete(id).subscribe();
  }
}
