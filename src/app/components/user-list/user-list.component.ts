import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { UsersService } from './sevices/users.service';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];

  constructor(private usersService: UsersService) {}

  async ngOnInit(): Promise<void> {
    this.users = await this.usersService.getUsers();
    this.filteredUsers = this.users;
  }

  filterEventHandler(filter: string): void {
    this.filteredUsers = this.usersService.filterUsers(this.users, filter);
  }
}
