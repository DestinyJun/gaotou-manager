import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoutersModule} from './user.routers.module';
import {TableModule} from 'primeng/table';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutersModule,
    TableModule,
    SharedModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
