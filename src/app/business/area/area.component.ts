import { Component, OnInit } from '@angular/core';
import {Car} from '../../common/model/user-model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  public cars: Car[];
  public clicks = 0;
  cols: any[];

  constructor() { }

  ngOnInit() {
  }

  public count() {
    this.clicks++;
  }

}
