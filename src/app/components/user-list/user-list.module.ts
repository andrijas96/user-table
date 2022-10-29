import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';

import { UserListComponent } from './user-list.component';
import { UserTableComponent } from './components/user-table/user-table.component';
import { FilterUsersComponent } from './components/filter-users/filter-users.component';

import { UsersService } from './sevices/users.service';

@NgModule({
  declarations: [UserListComponent, UserTableComponent, FilterUsersComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatToolbarModule,
  ],
  providers: [UsersService],
  exports: [UserListComponent],
})
export class UserListModule {}
