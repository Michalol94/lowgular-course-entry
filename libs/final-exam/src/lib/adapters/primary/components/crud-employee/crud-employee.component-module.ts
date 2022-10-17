import { NgModule } from '@angular/core';
import { CrudEmployeeComponent } from './crud-employee.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [CrudEmployeeComponent],
  providers: [],
  exports: [CrudEmployeeComponent],
})
export class CrudEmployeeComponentModule {}
