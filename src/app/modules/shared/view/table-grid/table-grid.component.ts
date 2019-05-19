import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IUser } from '../../../../models/user.interface';

@Component({
  selector: 'app-table-grid',
  templateUrl: './table-grid.component.html',
  styleUrls: ['./table-grid.component.scss']
})
export class TableGridComponent implements OnInit {
  @Input()
  users: IUser[];
  @Output()
  userSelected: EventEmitter<number> = new EventEmitter();

  displayedColumns: string[] = ['id', 'name', 'email'];

  constructor() {}

  ngOnInit() {
  }

  navigateToUser(id: number) {
    this.userSelected.emit(id);
  }

}
