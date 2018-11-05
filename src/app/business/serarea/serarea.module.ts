import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerareaComponent } from './serarea.component';
import {SerareaRoutersModule} from './serarea.routers.module';
import {SharedModule} from '../../common/shared.module';
import { SerareaSernumComponent } from './serarea-sernum/serarea-sernum.component';
import { SerareaFieldsComponent } from './serarea-fields/serarea-fields.component';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SerareaService } from '../../common/services/serarea.service';

@NgModule({
  imports: [
    CommonModule,
    SerareaRoutersModule,
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
  declarations: [SerareaComponent, SerareaSernumComponent, SerareaFieldsComponent],
  providers: [SerareaService, MessageService, ConfirmationService]
})
export class SerareaModule { }
