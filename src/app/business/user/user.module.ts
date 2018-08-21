import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoutersModule} from './user.routers.module';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    UserRoutersModule,
    TableModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
