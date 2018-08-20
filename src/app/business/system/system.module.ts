import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SystemComponent } from './system.component';
import {SystemRoutersModule} from './system.routers.module';

@NgModule({
  imports: [
    CommonModule,
    SystemRoutersModule
  ],
  declarations: [SystemComponent]
})
export class SystemModule { }
