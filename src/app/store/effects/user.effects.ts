import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetUsersSuccess,
  EUserActions,
  GetUserSuccess,
  GetUser,
  GetUsers
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { selectUserList } from '../selectors/user.selector';

@Injectable()
export class UserEffects {

  @Effect()
  getUser$ = this.actions$.pipe(
    ofType<GetUser>(EUserActions.GetUser),
    map(action => action.payload),
    withLatestFrom(this.store.pipe(select(selectUserList))),
    switchMap(([id, users]) => {
      if (!users) {
        return this.userService.getUser(id).pipe(
          switchMap((selectedUser: any) => of(new GetUserSuccess(selectedUser)))
        );
      } else {
        const selectedUser = users.filter(user => user.id === +id)[0];
        return of(new GetUserSuccess(selectedUser));
      }
    }
  ));

  @Effect()
  getUsers$ = this.actions$.pipe(
    ofType<GetUsers>(EUserActions.GetUsers),
    switchMap(() => this.userService.getUsers()),
    switchMap((userHttp: any) => of(new GetUsersSuccess(userHttp)))
  );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {
  }
}
