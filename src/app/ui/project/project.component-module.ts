import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';

@NgModule({
  imports: [CommonModule],
  declarations: [ProjectComponent],
  providers: [],
  exports: [ProjectComponent]
})
export class ProjectComponentModule {
}
