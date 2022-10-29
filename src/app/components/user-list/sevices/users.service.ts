import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.interface';

const USERS_API = '/assets/db.json';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  async getUsers(): Promise<User[]> {
    return this.http.get(USERS_API).toPromise() as Promise<User[]>;
  }

  filterUsers(users: User[], filter: string): User[] {
    return users.filter((user: User) =>
      filter ? user.gender.toLowerCase() === filter.toLowerCase() : true
    );
  }
}
