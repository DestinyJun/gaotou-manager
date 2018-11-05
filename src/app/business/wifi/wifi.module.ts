import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WifiComponent } from './wifi.component';
import {WifiRoutersModule} from './wifi.routers.module';
import { WifiService } from '../../common/services/wifi.service';
import {ConfirmationService, MessageService} from 'primeng/api';
import {ConfirmDialogModule, DialogModule, MessageModule, MessagesModule, ProgressSpinnerModule} from 'primeng/primeng';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TableModule} from 'primeng/table';

@NgModule({
  imports: [
    CommonModule,
    WifiRoutersModule,
    TableModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    ProgressSpinnerModule
  ],
  declarations: [WifiComponent],
  providers: [WifiService, MessageService, ConfirmationService]
})
export class WifiModule { }
