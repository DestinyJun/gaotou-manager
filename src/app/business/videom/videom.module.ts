import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideomComponent } from './videom.component';
import {VideomRoutersModule} from './videom.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CheckboxModule, DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    VideomRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CheckboxModule,
    DialogModule,
  ],
  declarations: [VideomComponent]
})
export class VideomModule { }
