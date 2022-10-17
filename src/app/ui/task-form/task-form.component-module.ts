import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TaskFormComponent } from './task-form.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [TaskFormComponent],
  providers: [],
  exports: [TaskFormComponent]
})
export class TaskFormComponentModule {
}
