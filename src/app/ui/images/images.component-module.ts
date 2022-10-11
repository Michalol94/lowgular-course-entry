import { NgModule } from '@angular/core';
import { ImagesComponent } from './images.component';
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [ImagesComponent],
  providers: [],
  exports: [ImagesComponent]
})
export class ImagesComponentModule {
}
