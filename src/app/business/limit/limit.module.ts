import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitComponent } from './limit.component';
import {LimitRoutersModule} from './limit.routers.module';

@NgModule({
  imports: [
    CommonModule,
    LimitRoutersModule
  ],
  declarations: [LimitComponent]
})
export class LimitModule { }
