import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import {CrudEmployeeService} from '../../../secondary/services/crud-employee.service';
import {Observable} from 'rxjs';
import {CrudEmployeeDTO} from '../../../../application/ports/secondary/dto/crud-employee.dto';

@Component({
  selector: 'lib-crud-employee',
  styleUrls: ['./crud-employee.component.scss'],
  templateUrl: './crud-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudEmployeeComponent {
  constructor(private _crudEmployeeService: CrudEmployeeService) {
  }

  crudEmployee$: Observable<CrudEmployeeDTO[]> =
    this._crudEmployeeService.getAll();

  onDeleteEmployeeClicked(id: string) {
    this._crudEmployeeService.delete(id).subscribe()
  }
}
