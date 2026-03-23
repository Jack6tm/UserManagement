import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AsideMenu } from '../../../Shared/AsideMenu/Component/aside-menu/aside-menu';
import { Observable } from 'rxjs';
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
export class Dashboard implements OnInit{
  public usersCount$!: Observable<Number>;

  constructor(private userSvc: UserService){}

  ngOnInit(): void {
    this.userSvc.getAll().subscribe();
    this.usersCount$ = this.userSvc.usersCount$;
  }
}
