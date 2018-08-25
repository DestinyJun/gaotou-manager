import { Component, OnInit } from '@angular/core';
import {RouterList} from '../../../common/model/limit-model';
import {LimitService} from '../../../common/services/limit.service';

@Component({
  selector: 'app-limit-router',
  templateUrl: './limit-router.component.html',
  styleUrls: ['./limit-router.component.css']
})
export class LimitRouterComponent implements OnInit {
  public routerLists: RouterList[];
  public selectedRouter: string[] = [];
  constructor(
    public limitService: LimitService
  ) { }

  ngOnInit() {
    this.uploadRouterData();
  }
  public uploadRouterData(): void {
    this.limitService.getRouters().subscribe(
      (value) => {
        this.routerLists = value;
      }
    );
  }
  public addRoleWindow(): void {}
}
