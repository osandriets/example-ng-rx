import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { throwError } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, filter } from 'rxjs/operators';

import { IAppState } from '../state/app.state';
import {
  GetUsersSuccess,
  EUserActions,
  GetUser,
  GetUsers, GetUserSuccess
} from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { allUsersLoaded } from '../selectors/user.selector';

@Injectable()
export class UserEffects {

  @Effect()
  getUser$ = this.actions$
    .pipe(
      ofType<GetUser>(EUserActions.GetUser),
      mergeMap(action => this.userService.getUser(action.payload.userId)),
      map(user => new GetUserSuccess({user})),
      catchError(err => {
        console.log('error loading user ', err);
        return throwError(err);
      })
    );

  @Effect()
  getUsers$ = this.actions$
    .pipe(
      ofType<GetUsers>(EUserActions.GetUsers),
      withLatestFrom(this.store.pipe(select(allUsersLoaded))),
      filter(([action, allUsersLoaded]) => !allUsersLoaded),
      mergeMap(() => this.userService.getUsers()),
      map(users => new GetUsersSuccess({users})),
      catchError(err => {
        console.log('error loading all users ', err);
        return throwError(err);
      })
    );

  constructor(
    private userService: UserService,
    private actions$: Actions,
    private store: Store<IAppState>
  ) {
  }
}
