import { Component, OnInit } from '@angular/core';
import { selectUserList } from '../../../store/selectors/user.selector';
import { select, Store } from '@ngrx/store';
import { IAppState } from '../../../store/state/app.state';
import { Router } from '@angular/router';
import { GetUsers } from '../../../store/actions/user.actions';
import { IUser } from '../../../models/user.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  users$: Observable<IUser[]>;

  constructor(
    private store: Store<IAppState>,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.store.dispatch(new GetUsers());
    this.users$ = this.store.pipe(select(selectUserList));
  }

  navigateToUser(id: number) {
    this.router.navigate(['users', id]).then();
  }

}
