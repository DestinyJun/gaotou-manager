import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store.component';
import {StoreRoutersModule} from './store.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {
  CheckboxModule, ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  MessageModule,
  MessageService,
  MessagesModule,
  ProgressSpinnerModule
} from 'primeng/primeng';
import { StoreService } from '../../common/services/store.service';

@NgModule({
  imports: [
    CommonModule,
    StoreRoutersModule,
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
  declarations: [StoreComponent],
  providers: [StoreService, MessageService, ConfirmationService]
})
export class StoreModule { }
