import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGridComponent } from './view/table-grid/table-grid.component';
import { MaterialModule } from './material.module';
import { CardUserComponent } from './view/card-user/card-user.component';

@NgModule({
  declarations: [
    TableGridComponent,
    CardUserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
    TableGridComponent,
    CardUserComponent,
  ]
})
export class SharedModule { }
