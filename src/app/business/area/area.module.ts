import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import {AreaRoutersModule} from './area.routers.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutersModule,
    TableModule,
    ButtonModule
  ],
  declarations: [AreaComponent]
})
export class AreaModule { }
