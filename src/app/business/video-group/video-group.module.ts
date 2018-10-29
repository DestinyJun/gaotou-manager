import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoGroupComponent } from './video-group.component';
import {VideoGroupRoutersModule} from './video-group.routers.module';

@NgModule({
  imports: [
    CommonModule,
    VideoGroupRoutersModule
  ],
  declarations: [VideoGroupComponent]
})
export class VideoGroupModule { }
