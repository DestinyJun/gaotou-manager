import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LimitComponent } from './limit.component';
import {LimitRoutersModule} from './limit.routers.module';
import {LimitMenuComponent} from './limit-menu/limit-menu.component';
import {LimitButtonComponent} from './limit-button/limit-button.component';
import {LimitRouterComponent} from './limit-router/limit-router.component';
import {SharedModule} from '../../common/shared.module';
import { LimitRoleComponent } from './limit-role/limit-role.component';
import {TableModule} from 'primeng/table';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {LimitService} from '../../common/services/limit.service';


@NgModule({
  imports: [
    CommonModule,
    LimitRoutersModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    CheckboxModule,
    DialogModule,
  ],
  declarations: [
    LimitComponent,
    LimitMenuComponent,
    LimitButtonComponent,
    LimitRouterComponent,
    LimitRoleComponent
  ],
  providers: [LimitService]
})
export class LimitModule { }
