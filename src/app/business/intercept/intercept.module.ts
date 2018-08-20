import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptComponent } from './intercept.component';
import {InterceptRoutersModule} from './intercept.routers.module';

@NgModule({
  imports: [
    CommonModule,
    InterceptRoutersModule
  ],
  declarations: [InterceptComponent]
})
export class InterceptModule { }
