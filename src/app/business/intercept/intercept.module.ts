import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptComponent } from './intercept.component';
import {InterceptRoutersModule} from './intercept.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    InterceptRoutersModule,
    SharedModule
  ],
  declarations: [InterceptComponent]
})
export class InterceptModule { }
