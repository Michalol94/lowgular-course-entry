import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TestFormComponent } from './test-form.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [TestFormComponent],
  providers: [],
  exports: [TestFormComponent],
})
export class TestFormComponentModule {}
