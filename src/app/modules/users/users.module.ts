import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from '../../store/effects/user.effects';
import { userReducers } from '../../store/reducers/user.reducers';

@NgModule({
  declarations: [
    UsersListComponent,
    UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
    StoreModule.forFeature('users', userReducers),
    EffectsModule.forFeature([UserEffects])
  ]
})
export class UsersModule { }
