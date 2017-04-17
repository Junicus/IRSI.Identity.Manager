import { Component } from '@angular/core';
import { IDashboardItem, DashboardItemType } from '../shared/models/dashboardItem.model';

@Component({
  selector: 'idm-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  items: IDashboardItem[];
  usersFilter = { type: DashboardItemType.User };
  clientsFilter = { type: DashboardItemType.Client };

  constructor() {
    this.items = [
      { text: 'Users', path: '/users', icon: 'fa fa-users', type: DashboardItemType.User },
      //{ text: 'Roles', path: '/roles', icon: 'fa fa-id-badge', type: DashboardItemType.User }
    ]
  }

  getUserItems(): IDashboardItem[] {
    return this.items.map((item) => {
      if (item.type === DashboardItemType.User) {
        return item;
      }
    });
  }

  getClientItems(): IDashboardItem[] {
    return this.items.map((item) => {
      if (item.type === DashboardItemType.Client) {
        return item;
      }
    });
  }
}
