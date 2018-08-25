import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import {CashRoutersModule} from './cash.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CashRoutersModule,
    SharedModule
  ],
  declarations: [CashComponent]
})
export class CashModule { }
