import { createFeatureSelector, createSelector } from '@ngrx/store';

import { IUserState } from '../reducers/user.reducers';
import * as fromUser from '../reducers/user.reducers';

export const selectUsers = createFeatureSelector<IUserState>('users');

export const selectSelectedUser = (userId: number) => createSelector(
  selectUsers,
  state => state.entities[userId]
);

export const selectUserList = createSelector(
  selectUsers,
  fromUser.selectAll
);

export const allUsersLoaded = createSelector(
  selectUsers,
  state => state.allUsersLoaded
);


