import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifiComponent } from './wifi.component';
import {WifiRoutersModule} from './wifi.routers.module';

@NgModule({
  imports: [
    CommonModule,
    WifiRoutersModule
  ],
  declarations: [WifiComponent]
})
export class WifiModule { }
