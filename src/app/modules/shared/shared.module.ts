import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableGridComponent } from './view/table-grid/table-grid.component';
import { UserDitailComponent } from './view/user-ditail/user-ditail.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [TableGridComponent, UserDitailComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule
  ]
})
export class SharedModule { }
