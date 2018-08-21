import { Component, OnInit } from '@angular/core';
import {Car} from '../../common/model/user-model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {
  public cars: Car[];
  cols: any[];

  constructor() { }

  ngOnInit() {
  }
  export class ButtonDemo {

  clicks: number = 0;

  count() {
    this.clicks++;
  }
}
}
