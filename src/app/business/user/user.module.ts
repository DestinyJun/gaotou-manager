import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user.component';
import {UserRoutersModule} from './user.routers.module';
import {TableModule} from 'primeng/table';
import {SharedModule} from '../../common/shared.module';
import {CheckboxModule} from 'primeng/checkbox';


@NgModule({
  imports: [
    CommonModule,
    UserRoutersModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    SharedModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
