import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import {SystemRoutersModule} from './system.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutersModule,
    SharedModule
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
