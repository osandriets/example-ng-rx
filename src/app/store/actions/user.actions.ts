import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

export enum EUserActions {
  GetUsers = '[User] Get Users',
  GetUsersSuccess = '[User] Get Users Success',
  GetUser = '[User] Get User',
  GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action {
  readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
  public readonly type = EUserActions.GetUsersSuccess;
  constructor(public payload: {users: IUser[]}) {}
}

export class GetUser implements Action {
  public readonly type = EUserActions.GetUser;
  constructor(public payload: {userId: number}) {}
}

export class GetUserSuccess implements Action {
  public readonly type = EUserActions.GetUserSuccess;
  constructor(public payload: {user: IUser}) {}
}

export type UserActions =
  GetUsers
  | GetUsersSuccess
  | GetUser
  | GetUserSuccess;



