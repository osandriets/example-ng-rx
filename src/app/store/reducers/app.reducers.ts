import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';
import { environment } from '../../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

export const appReducers: ActionReducerMap<IAppState, any> = {
  router: routerReducer,
  config: configReducers
};

export const metaReducers: MetaReducer<IAppState>[] =
  !environment.production ? [storeFreeze] : [];
