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

  user$ = this.store.pipe(select(selectSelectedUser));

  constructor(
    private store: Store<IAppState>,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.store.dispatch(new GetUser(this.route.snapshot.params.id));
  }
}
