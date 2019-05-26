import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { filter, first, tap } from 'rxjs/operators';
import { IUser } from '../models/user.interface';
import { IAppState } from '../store/state/app.state';
import { GetUser } from '../store/actions/user.actions';
import { selectSelectedUser } from '../store/selectors/user.selector';

@Injectable()
export class UserResolver implements Resolve<IUser> {

  constructor(
    private store: Store<IAppState>) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> {

    const userId = route.params['id'];

    return this.store
      .pipe(
        select(selectSelectedUser(userId)),
        tap(user => {
          if (!user) {
            this.store.dispatch(new GetUser({userId}));
          }
        }),
        filter(user => !!user),
        first()
      );

  }

}
