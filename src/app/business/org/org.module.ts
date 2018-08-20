import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import {OrgRoutersModule} from './org.routers.module';

@NgModule({
  imports: [
    CommonModule,
    OrgRoutersModule
  ],
  declarations: [OrgComponent]
})
export class OrgModule { }
