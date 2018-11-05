import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InterceptComponent } from './intercept.component';
import {InterceptRoutersModule} from './intercept.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {
  CheckboxModule,
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  MessageModule,
  MessageService,
  MessagesModule, ProgressSpinnerModule
} from 'primeng/primeng';
import { InterceptService } from '../../common/services/intercept.service';

@NgModule({
  imports: [
    CommonModule,
    InterceptRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
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
  declarations: [InterceptComponent],
  providers: [InterceptService, ConfirmationService, MessageService]
})
export class InterceptModule { }
