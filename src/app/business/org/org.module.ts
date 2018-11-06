import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import {OrgRoutersModule} from './org.routers.module';
import {SharedModule} from '../../common/shared.module';
import {
  ConfirmationService,
  ConfirmDialogModule,
  DialogModule,
  DropdownModule,
  MessageModule, MessageService,
  MessagesModule, ProgressSpinnerModule, RadioButtonModule, ScrollPanelModule, TreeModule,
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
    FormsModule,
    ReactiveFormsModule,

    TreeTableModule,
    ConfirmDialogModule,
    ProgressSpinnerModule,
    TreeModule,
    TableModule,
    DialogModule,
    MessageModule,
    MessagesModule,
    ScrollPanelModule,
    DropdownModule,
    RadioButtonModule
  ],
  declarations: [OrgComponent],
  providers: [OrgService, MessageService, ConfirmationService]
})
export class OrgModule { }
