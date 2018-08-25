import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerareaComponent } from './serarea.component';
import {SerareaRoutersModule} from './serarea.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SerareaRoutersModule,
    SharedModule
  ],
  declarations: [SerareaComponent]
})
export class SerareaModule { }
