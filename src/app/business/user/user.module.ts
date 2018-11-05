import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './user.component';
import {UserRoutersModule} from './user.routers.module';
import {TableModule} from 'primeng/table';
import {SharedModule} from '../../common/shared.module';
import {CheckboxModule} from 'primeng/checkbox';
import {DialogModule} from 'primeng/dialog';
import {SystemService} from '../../common/services/system.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {UserService} from '../../common/services/user.service';
import {ConfirmDialogModule, MessageModule, MessagesModule, ProgressSpinnerModule} from 'primeng/primeng';


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
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ProgressSpinnerModule
  ],
  declarations: [UserComponent],
  providers: [UserService, MessageService, ConfirmationService]
})
export class UserModule { }
