import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptComponent } from './intercept.component';
import {InterceptRoutersModule} from './intercept.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CheckboxModule, DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    InterceptRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CheckboxModule,
    DialogModule,
  ],
  declarations: [InterceptComponent]
})
export class InterceptModule { }
