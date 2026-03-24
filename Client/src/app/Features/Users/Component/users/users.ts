import { Component, inject, OnInit } from '@angular/core';
import { AsideMenu } from '../../../../Shared/AsideMenu/Component/aside-menu/aside-menu';
import { CommonModule } from '@angular/common';
import { UserService } from '../../../../Core/User/Service/user-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPen, faRecycle } from '@fortawesome/free-solid-svg-icons';
import { OpenDialog } from '../../../../Shared/Dialog/open-dialog/open-dialog';
import { UsersTable } from '../../../../Shared/Table/users-table/users-table';

@Component({
  selector: 'app-users',
  imports: [AsideMenu, CommonModule, OpenDialog, FontAwesomeModule, UsersTable],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users {
  private userSvc = inject(UserService);
  users$ = this.userSvc.getAll();

  faPen = faPen;
  faDelete = faRecycle;

}
