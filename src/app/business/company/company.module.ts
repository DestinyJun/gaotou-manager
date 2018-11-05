import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../common/services/company.service';
import { CompanyComponent } from './company.component';
import {CompanyRoutersModule} from './company.routers.module';
import {SharedModule} from '../../common/shared.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule,
  MessageModule, MessageService,
  MessagesModule,
  ProgressSpinnerModule,
  TreeTableModule
} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutersModule,
    SharedModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ProgressSpinnerModule
  ],
  declarations: [CompanyComponent],
  providers: [CompanyService,MessageService,ConfirmationService]
})
export class CompanyModule { }
