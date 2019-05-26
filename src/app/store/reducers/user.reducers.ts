import { EUserActions, UserActions } from '../actions/user.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { IUser } from '../../models/user.interface';


export interface IUserState extends EntityState<IUser> {
  allUsersLoaded: boolean;
}

export const adapter: EntityAdapter<IUser> = createEntityAdapter<IUser>();


export const initialUserState: IUserState = adapter.getInitialState({
  allUsersLoaded: false
});


export function userReducers (state = initialUserState, action: UserActions): IUserState {
  switch (action.type) {
    case EUserActions.GetUsersSuccess:
      return adapter.addAll(action.payload.users, {...state, allUsersLoaded: true});

    case EUserActions.GetUserSuccess:
      return adapter.addOne(action.payload.user, state);

    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal

} = adapter.getSelectors();
