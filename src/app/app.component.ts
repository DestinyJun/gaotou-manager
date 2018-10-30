import {Component, OnInit} from '@angular/core';
import {GlobalService} from './common/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public display: boolean;
  constructor(
    private globalService: GlobalService
  ) {}
  ngOnInit() {
    this.globalService.eventSubject.subscribe(
      (value) => {
        this.display = value.display;
      }
    );
  }
}
