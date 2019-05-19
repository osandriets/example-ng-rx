import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsRoutingModule } from './errors-routing.module';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ErrorNotFoundComponent],
  imports: [
    CommonModule,
    SharedModule,
    ErrorsRoutingModule
  ]
})
export class ErrorsModule { }
