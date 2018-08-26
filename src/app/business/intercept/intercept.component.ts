import { Component, OnInit } from '@angular/core';
import {Intercept} from '../../common/model/intercept-model';

@Component({
  selector: 'app-intercept',
  templateUrl: './intercept.component.html',
  styleUrls: ['./intercept.component.css']
})
export class InterceptComponent implements OnInit {
  public intercepts: Intercept[];
  public selectedIntercept: string[] = [];
  constructor() { }

  ngOnInit() {
    this.updateInterceptData();
  }
  public updateInterceptData(): void {
    this.intercepts = [
      {id: 1, address: '贵州省贵阳市修文县久长服务区', deviceID: 'GSDF56454GD', updateTime: '2018-08-26 15:30'}
    ];
  }
  public addInterceptWindow(): void {}

}
