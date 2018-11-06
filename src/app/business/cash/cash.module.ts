import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CashComponent } from './cash.component';
import {CashRoutersModule} from './cash.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CashService } from '../../common/services/cash.service';
import {MessageModule} from 'primeng/message';
import {
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule, MessageService,
  MessagesModule,
  ProgressSpinnerModule,
  ScrollPanelModule,
  TreeModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    CashRoutersModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    TreeModule,
    TableModule,
    DialogModule,
    MessagesModule,
    ScrollPanelModule,
    DropdownModule
  ],
  declarations: [CashComponent],
  providers: [CashService, MessageService, ConfirmationService]
})
export class CashModule { }
