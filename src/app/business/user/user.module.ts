import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user.component';
import {UserRoutersModule} from './user.routers.module';
import {TableModule} from 'primeng/table';
import {SharedModule} from '../../common/shared.module';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';


@NgModule({
  imports: [
    CommonModule,
    UserRoutersModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    TableModule,
    CheckboxModule,
    DialogModule,
  ],
  declarations: [UserComponent]
})
export class UserModule { }
