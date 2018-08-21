import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerareaComponent } from './serarea.component';
import {SerareaRoutersModule} from './serarea.routers.module';

@NgModule({
  imports: [
    CommonModule,
    SerareaRoutersModule
  ],
  declarations: [SerareaComponent]
})
export class SerareaModule { }
