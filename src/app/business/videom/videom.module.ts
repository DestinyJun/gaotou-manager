import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideomComponent } from './videom.component';
import {VideomRoutersModule} from './videom.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    VideomRoutersModule,
    SharedModule
  ],
  declarations: [VideomComponent]
})
export class VideomModule { }
