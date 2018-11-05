import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideomComponent } from './videom.component';
import {VideomRoutersModule} from './videom.routers.module';
import {SharedModule} from '../../common/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
import {
  CheckboxModule,
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule, MessageModule,
  MessageService, MessagesModule,
  ProgressSpinnerModule
} from 'primeng/primeng';
import { VideomService } from '../../common/services/videom.service';

@NgModule({
  imports: [
    CommonModule,
    VideomRoutersModule,
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
  declarations: [VideomComponent],
  providers: [VideomService, MessageService, ConfirmationService]
})
export class VideomModule { }
