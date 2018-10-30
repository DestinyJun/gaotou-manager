import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './area.component';
import {AreaRoutersModule} from './area.routers.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {SharedModule} from '../../common/shared.module';
import {ConfirmationService, ConfirmDialogModule, DialogModule, MessageModule, MessageService, MessagesModule} from 'primeng/primeng';
import {AreaService} from '../../common/services/area.service';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AreaRoutersModule,
    TableModule,
    ButtonModule,
    FormsModule,
    SharedModule,
    DialogModule,
    DialogModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule
  ],
  declarations: [AreaComponent],
  providers: [AreaService, MessageService, ConfirmationService]
})
export class AreaModule { }
