import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { AsideMenu } from '../../../Shared/AsideMenu/Component/aside-menu/aside-menu';
import { UserService } from '../../../Core/User/Service/user-service';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AsideMenu
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard{
  public userSvc = inject(UserService);
  users$ = this.userSvc.getAll();
}
