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

@NgModule({
  declarations: [AppComponent],
  imports: [
    EmployeeServiceModule,
    ProjectComponentModule,
    ProjectServiceModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmployeeListComponentModule,
    ImagesComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
