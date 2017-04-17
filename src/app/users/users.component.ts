import { Component, OnInit } from '@angular/core';
import { IUser } from '../shared/models/user.model';
import { UsersService } from './users.service';
import { ConfigurationService } from '../shared/services/configuration.service';

@Component({
  selector: 'idm-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: IUser[];

  constructor(private service: UsersService, private configurationService: ConfigurationService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }
}
