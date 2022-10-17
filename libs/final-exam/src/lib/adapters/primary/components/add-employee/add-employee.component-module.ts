import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './add-employee.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [AddEmployeeComponent],
  providers: [],
  exports: [AddEmployeeComponent]
})
export class AddEmployeeComponentModule {
}
