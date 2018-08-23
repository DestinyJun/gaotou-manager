import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  public clicks = 0;
  cols: any[];

  constructor() { }

  ngOnInit() {
  }

  public count() {
    this.clicks++;
  }

}
