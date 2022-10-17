import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [FormComponent],
  providers: [],
  exports: [FormComponent]
})
export class FormComponentModule {
}
