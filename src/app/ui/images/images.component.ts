import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../model/employee.model';
import { HttpClient } from '@angular/common/http';
import { PeopleModel } from '../../model/people.model';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImagesComponent {
  // data$: Observable<PeopleModel[]> = this._httpClient.get<PeopleModel[]>(
  //   'assets/data/employees.json'
  // );
  data$: Observable<PeopleModel[]> = this._employeeService.getAll();

  constructor(private _employeeService: EmployeeService) {}
}
