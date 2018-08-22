import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import {AreaRoutersModule} from './area.routers.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutersModule,
    TableModule,
    ButtonModule,
    SharedModule,
  ],
  declarations: [AreaComponent]
})
export class AreaModule { }
