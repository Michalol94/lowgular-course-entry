import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CrudEmployeeDTO } from '../../../application/ports/secondary/dto/crud-employee.dto';
import { CrudEmployeeResponse } from './crud-employee.response';
import { CrudApiResponse } from './crud-api.response';

@Injectable()
export class CrudEmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<CrudEmployeeDTO[]> {
    return this._httpClient
      .get<CrudApiResponse<CrudEmployeeResponse[]>>(
        'https://dummy.restapiexample.com/api/v1/employees'
      )
      .pipe(
        map((response: CrudApiResponse<CrudEmployeeResponse[]>) => {
          return response.data.map((employeeResponse: CrudEmployeeResponse) => {
            return {
              id: employeeResponse.id,
              name: employeeResponse.employee_name,
              salary: employeeResponse.employee_salary,
            };
          });
        })
      );
  }

  create(employee: CrudEmployeeDTO): Observable<void> {
    return this._httpClient
      .post('https://dummy.restapiexample.com/api/v1/create', employee)
      .pipe(map(() => void 0));
  }

  delete(id: string): Observable<void> {
    return this._httpClient
      .delete(
        'https://dummy.restapiexample.com/public/api/v1/delete/2' + id,
        undefined
      )
      .pipe(map((_) => void 0));
  }
}
