import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AsideMenu } from '../../../Shared/AsideMenu/Component/aside-menu/aside-menu';

@Component({
  selector: 'app-dashboard',
  imports: [
    CommonModule,
    AsideMenu
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {}
