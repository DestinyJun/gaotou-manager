import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LimitComponent } from './limit.component';
import {LimitRoutersModule} from './limit.routers.module';
import {LimitMenuComponent} from './limit-menu/limit-menu.component';
import {LimitButtonComponent} from './limit-button/limit-button.component';
import {LimitRouterComponent} from './limit-router/limit-router.component';

@NgModule({
  imports: [
    CommonModule,
    LimitRoutersModule
  ],
  declarations: [
    LimitComponent,
    LimitMenuComponent,
    LimitButtonComponent,
    LimitRouterComponent
  ]
})
export class LimitModule { }
