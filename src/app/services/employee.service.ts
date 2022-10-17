import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PeopleModel } from '../model/people.model';
import { CreateEmployeeModel } from '../model/create-employee.model';
import { ApiResponse } from './api.response';
import { EmployeeResponse } from './employee.response';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  // getAll(): Observable<PeopleModel[]> {
  //   return this._httpClient.get<PeopleModel[]>('assets/data/people.json');
  // }

  getAll(): Observable<PeopleModel[]> {
    return this._httpClient
      .get<ApiResponse<EmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: ApiResponse<EmployeeResponse[]>) => {
          return response.data.map((employeeResponse: EmployeeResponse) => {
            return {
              name: employeeResponse.employee_name,
              personalNumber: employeeResponse.id,
              img: employeeResponse.profileImage,
              mail: '',
              surname: '',
            };
          });
        })
      );
  }

  create(employee: CreateEmployeeModel): Observable<void> {
    return this._httpClient
      .post('https://dummy.restapiexample.com/api/v1/create', employee)
      .pipe(map((_) => void 0));
  }

  delete(id: string): Observable<void> {
    return this._httpClient
      .delete('https://dummy.restapiexample.com/api/v1/delete/' + id, undefined)
      .pipe(map((_) => void 0));
  }
}
