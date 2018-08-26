import { Component, OnInit } from '@angular/core';
import {Store} from '../../common/model/store-model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  public stores: Store[];
  public selectedStore: string[] = [];
  constructor() { }

  ngOnInit() {
    this.update();
  }
  public update(): void {
    this.stores = [
      {
        id: 1, name: '王大妈烧烤店', phone: '15848784784', manner: '王大妈',
        address: '贵州省贵阳市修文县久长服务区', update: '2018-8-26 15:07',
        busiScope: '小吃', compactName: '《王大妈烧烤店跟服务区合同签订》',
        compactImage: 'home/store/imgages/1.jpg',
        compactStartTime: '2018-08-26', compactEndTime: '2019-08-26'
      }
    ];
  }
  public addStoreWindow(): void {}
}
