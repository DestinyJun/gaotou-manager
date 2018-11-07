import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { CompanyService } from '../../common/services/company.service';
import { CompanyComponent } from './company.component';
import {CompanyRoutersModule} from './company.routers.module';
import {SharedModule} from '../../common/shared.module';
import {
  CalendarModule,
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule, InputTextareaModule,
  MessageModule, MessageService,
  MessagesModule,
  ProgressSpinnerModule, ScrollPanelModule,
  TreeModule
} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';
@NgModule({
  imports: [
    CommonModule,
    CompanyRoutersModule,
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
    DropdownModule,
    InputTextareaModule,
    CalendarModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyService, MessageService, ConfirmationService, DatePipe]
})
export class CompanyModule { }
