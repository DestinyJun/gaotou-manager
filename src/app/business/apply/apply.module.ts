import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplyComponent } from './apply.component';
import {ApplyRoutersModule} from './apply.routers.module';
import {TableModule} from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {
  ConfirmationService,
  ConfirmDialogModule,
  MessageModule,
  MessageService,
  MessagesModule,
  ProgressSpinnerModule
} from 'primeng/primeng';
import {ApplyService } from '../../common/services/apply.service';

@NgModule({
  imports: [
    CommonModule,
    ApplyRoutersModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
  ],
  declarations: [ApplyComponent],
  providers: [ApplyService, MessageService, ConfirmationService]
})
export class ApplyModule {}
