import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import {OrgRoutersModule} from './org.routers.module';
import {SharedModule} from '../../common/shared.module';
import {
  ButtonModule, ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule,
  MessageModule, MessageService,
  MessagesModule, ProgressSpinnerModule,
  TreeTableModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { OrgService } from '../../common/services/org.service';

@NgModule({
  imports: [
    CommonModule,
    OrgRoutersModule,
    SharedModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    TreeTableModule,
    TableModule,
    ButtonModule,
    FormsModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ProgressSpinnerModule


  ],
  declarations: [OrgComponent],
  providers: [OrgService, MessageService, ConfirmationService]
})
export class OrgModule { }
