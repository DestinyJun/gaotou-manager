import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import {OrgRoutersModule} from './org.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    OrgRoutersModule,
    SharedModule
  ],
  declarations: [OrgComponent]
})
export class OrgModule { }
