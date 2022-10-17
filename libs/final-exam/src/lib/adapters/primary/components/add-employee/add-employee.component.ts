import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CrudEmployeeService } from '../../../secondary/services/crud-employee.service';
import { CrudEmployeeDTO } from '../../../../application/ports/secondary/dto/crud-employee.dto';

@Component({
  selector: 'lib-add-employee',
  styleUrls: ['./add-employee.component.scss'],
  templateUrl: './add-employee.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeeComponent {
  readonly crudEmployee: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    salary: new FormControl(null, Validators.required),
  });

  constructor(private _crudEmployeeService: CrudEmployeeService) {}

  onCreateEmployeeSubmit(form: CrudEmployeeDTO) {
    this._crudEmployeeService.create(form).subscribe();
  }
}
