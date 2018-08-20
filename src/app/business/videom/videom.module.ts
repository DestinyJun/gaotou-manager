import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideomComponent } from './videom.component';
import {VideomRoutersModule} from './videom.routers.module';

@NgModule({
  imports: [
    CommonModule,
    VideomRoutersModule
  ],
  declarations: [VideomComponent]
})
export class VideomModule { }
