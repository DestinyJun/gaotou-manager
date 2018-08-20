import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {StoreRoutersModule} from './store.routers.module';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutersModule
  ],
  declarations: [StoreComponent]
})
export class StoreModule { }
