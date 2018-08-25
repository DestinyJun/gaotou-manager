import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {StoreRoutersModule} from './store.routers.module';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutersModule,
    SharedModule
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
