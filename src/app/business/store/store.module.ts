import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {StoreRoutersModule} from './store.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {CheckboxModule, DialogModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    CheckboxModule,
    DialogModule,
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
