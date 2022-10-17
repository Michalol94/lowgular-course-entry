import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EmployeeService } from '../../services/employee.service';
import { PeopleModel } from '../../model/people.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  // datas$: Observable<EmployeeModel[] | null> = of(null)
  // data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');

  readonly data$: Observable<PeopleModel[]> = this._employeeService.getAll();

  data = [{ name: 'Jacek' }, { name: 'Stefan' }];

  remove(id: string) {
    this._employeeService.delete(id).subscribe();
  }

  constructor(
    private _httpClient: HttpClient,
    private _employeeService: EmployeeService
  ) {}
}
