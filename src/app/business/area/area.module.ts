import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import {AreaRoutersModule} from './area.routers.module';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutersModule
  ],
  declarations: [AreaComponent]
})
export class AreaModule { }
