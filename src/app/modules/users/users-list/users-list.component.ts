import { Component, OnInit } from '@angular/core';
import { selectUserList } from '../../../store/selectors/user.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { Router } from '@angular/router';
import { GetUsers } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$ = this._store.pipe(select(selectUserList));

  constructor(
    private _store: Store<IAppState>,
    private _router: Router) {
  }

  ngOnInit() {
    this._store.dispatch(new GetUsers());
  }

  navigateToUser(id: number) {
    this._router.navigate(['users', id]);
  }

}
