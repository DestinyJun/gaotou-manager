import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import {ApplyRoutersModule} from './apply.routers.module';

@NgModule({
  imports: [
    CommonModule,
    ApplyRoutersModule
  ],
  declarations: [ApplyComponent]
})
export class ApplyModule { }
