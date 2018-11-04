import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import {CashRoutersModule} from './cash.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  MessageModule,
  MessageService,
  MessagesModule, ScrollPanelModule, TreeModule
} from 'primeng/primeng';
import { CashService } from '../../common/services/cash.service';

@NgModule({
  imports: [
    CommonModule,
    CashRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    TreeModule,
    TableModule,
    DialogModule,
    ConfirmDialogModule,
    MessagesModule,
    MessageModule,
    ScrollPanelModule,
  ],
  declarations: [CashComponent],
  providers: [CashService, MessageService, ConfirmationService]
})
export class CashModule { }
