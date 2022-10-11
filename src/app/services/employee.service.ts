import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../model/employee.model';
import { Observable } from 'rxjs';
import { PeopleModel } from '../model/people.model';

@Injectable()
export class EmployeeService {
  constructor(private _httpClient: HttpClient) {}

  getAll(): Observable<PeopleModel[]> {
    return this._httpClient.get<PeopleModel[]>('assets/data/people.json');
  }
}
