import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { selectSelectedUser } from '../../../store/selectors/user.selector';
import { IAppState } from '../../../store/state/app.state';
import { ActivatedRoute } from '@angular/router';
import { GetUser } from '../../../store/actions/user.actions';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  user$ = this._store.pipe(select(selectSelectedUser));

  constructor(
    private _store: Store<IAppState>,
    private _route: ActivatedRoute
  ) {}

  ngOnInit() {
    this._store.dispatch(new GetUser(this._route.snapshot.params.id));
  }

}
