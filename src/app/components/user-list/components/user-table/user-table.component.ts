import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { User } from 'src/app/models/user.interface';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss'],
})
export class UserTableComponent implements OnChanges {
  @Input() filteredUsers: User[];

  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'gender'];

  tableUsers: MatTableDataSource<User>;

  @ViewChild(MatPaginator) private paginator: MatPaginator;
  @ViewChild(MatSort) private sort: MatSort;

  constructor() {}

  ngOnChanges({ filteredUsers }: SimpleChanges): void {
    if (filteredUsers.currentValue) {
      this.tableUsers = new MatTableDataSource<User>(this.filteredUsers);
      this.tableUsers.paginator = this.paginator;
      this.tableUsers.sort = this.sort;
    }
  }
}
