import { Component, EventEmitter, Output } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Gender } from 'src/app/models/gender.interface';

@Component({
  selector: 'filter-users',
  templateUrl: './filter-users.component.html',
  styleUrls: ['./filter-users.component.scss'],
})
export class FilterUsersComponent {
  genders: Gender[] = [
    { value: '', viewValue: 'All' },
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' },
  ];

  initialSelectValue: string = 'All';

  @Output() filterEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  onFilterChange(filter: MatSelectChange): void {
    this.filterEvent.emit(filter.value);
  }
}
