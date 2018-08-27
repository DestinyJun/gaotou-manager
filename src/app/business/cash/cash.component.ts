import { Component, OnInit } from '@angular/core';
import {Cash} from '../../common/model/cash-model';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  public cashs: Cash[];
  constructor() { }

  ngOnInit() {
  }
  public updateCashDate(): void {
    this.cashs = [];
  }
  public addCashWindow(): void {}
}
