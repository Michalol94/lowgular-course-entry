import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImagesComponentModule } from './ui/images/images.component-module';
import { EmployeeListComponentModule } from './ui/employee-list/employee-list.component-module';
import { EmployeeServiceModule } from './services/employee.service-module';
import { ProjectComponentModule } from './ui/project/project.component-module';
import { ProjectServiceModule } from './services/project.service-module';
import { FormComponentModule } from './ui/form/form.component-module';
import { TestFormComponentModule } from './ui/test-form/test-form.component-module';
import { TaskFormComponentModule } from './ui/task-form/task-form.component-module';
import {
  AddEmployeeComponentModule,
  CrudEmployeeComponentModule,
  CrudEmployeeServiceModule,
} from '@final-exam';

@NgModule({
  declarations: [AppComponent],
  imports: [
    EmployeeServiceModule,
    ProjectComponentModule,
    CrudEmployeeComponentModule,
    CrudEmployeeServiceModule,
    ProjectServiceModule,
    AddEmployeeComponentModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    ImagesComponentModule,
    FormComponentModule,
    TestFormComponentModule,
    TaskFormComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
