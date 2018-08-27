import { Component, OnInit } from '@angular/core';
import {Video} from '../../common/model/video-model';

@Component({
  selector: 'app-videom',
  templateUrl: './videom.component.html',
  styleUrls: ['./videom.component.css']
})
export class VideomComponent implements OnInit {
  public videos: Video[];
  public selectedVideo: string[] = [];
  constructor() { }

  ngOnInit() {
    this.updateVideoDate();
  }
  public updateVideoDate(): void {
    this.videos = [
      {id: 1, videoNumber: 'num0001', windowPosition: '1', videoPosition: '一楼楼梯口', videoUrl: 'https://www.baidu.com'}
    ];
  }
  public addVideoWindow(): void {}

}
