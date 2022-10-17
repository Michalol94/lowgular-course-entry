import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormComponent {
  readonly taskEmployeeForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    age: new FormControl(null, [Validators.required]),
    salary: new FormControl(null, [Validators.required]),
  });

  onSubmitClicked(form: { name: string; age: number; salary: number }) {
    alert(
      'User was succesfully added to the base. Name: ' +
        form.name +
        'Age ' +
        form.age +
        'Salary ' +
        form.salary
    );
  }
}
