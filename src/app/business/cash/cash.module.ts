import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import {CashRoutersModule} from './cash.routers.module';

@NgModule({
  imports: [
    CommonModule,
    CashRoutersModule
  ],
  declarations: [CashComponent]
})
export class CashModule { }
