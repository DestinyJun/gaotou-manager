import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import {CashRoutersModule} from './cash.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CheckboxModule, DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CashRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CheckboxModule,
    DialogModule,
  ],
  declarations: [CashComponent]
})
export class CashModule { }
