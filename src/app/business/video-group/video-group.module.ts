import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGroupComponent } from './video-group.component';
import {VideoGroupRoutersModule} from './video-group.routers.module';
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
import { VideoGroupService } from '../../common/services/video-group.service';
import {SharedModule} from '../../common/shared.module';

@NgModule({
  imports: [
    CommonModule,
    VideoGroupRoutersModule,
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
  declarations: [VideoGroupComponent],
  providers: [VideoGroupService, MessageService, ConfirmationService]
  
})
export class VideoGroupModule { }
