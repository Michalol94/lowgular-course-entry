import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProjectService} from '../../services/project.service';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  constructor(private _projectService: ProjectService) {
  }

  data$: Observable<ProjectModel[]> = this._projectService.getAll()
}
