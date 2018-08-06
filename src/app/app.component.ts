import {Component} from '@angular/core';
import {ReqService} from './common/services/req.service';
import {GlobalService} from './common/services/global.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private req: ReqService,
    public localSessionStorage: GlobalService
  ) {
  }

}
