import { Component, OnInit } from '@angular/core';
import {Field} from '../../../common/model/serarea-model';

@Component({
  selector: 'app-serarea-fields',
  templateUrl: './serarea-fields.component.html',
  styleUrls: ['./serarea-fields.component.css']
})
export class SerareaFieldsComponent implements OnInit {
  public serFileds: Field[];
  public selectedFileds: string[] = [];
  constructor() { }

  ngOnInit() {
    this.uploadFieldDate();
  }
  public uploadFieldDate(): void {
    this.serFileds = [
      {id: 1, fieldName: '服务区名称', fieldCoding: 'serviceName', uploadTime: '2018-08-26 13:06'},
      {id: 17, fieldName: '服务区所属', fieldCoding: 'serviceAdress', uploadTime: '2018-08-26 13:06'},
      {id: 18, fieldName: '始建时间', fieldCoding: 'SetTime', uploadTime: '2018-08-26 13:06'},
      {id: 2, fieldName: '占地面积', fieldCoding: 'floorArea', uploadTime: '2018-08-26 13:06'},
      {id: 3, fieldName: '运营时间', fieldCoding: 'serviceTime', uploadTime: '2018-08-26 13:06'},
      {id: 4, fieldName: '保洁人员', fieldCoding: 'cleanerNum', uploadTime: '2018-08-26 13:06'},
      {id: 5, fieldName: '安保人员', fieldCoding: 'serviceManager', uploadTime: '2018-08-26 13:06'},
      {id: 7, fieldName: '大车车位', fieldCoding: 'trucksPark', uploadTime: '2018-08-26 13:06'},
      {id: 8, fieldName: '小车车位', fieldCoding: 'carPark', uploadTime: '2018-08-26 13:06'},
      {id: 9, fieldName: '客车车位', fieldCoding: 'coachPark', uploadTime: '2018-08-26 13:06'},
      {id: 10, fieldName: '供电账户', fieldCoding: 'eleAccount', uploadTime: '2018-08-26 13:06'},
      {id: 11, fieldName: '上次交电费时间', fieldCoding: 'payEleTime', uploadTime: '2018-08-26 13:06'},
      {id: 13, fieldName: '用水量', fieldCoding: 'WaterAmount', uploadTime: '2018-08-26 13:06'},
      {id: 14, fieldName: '上次交水费时间', fieldCoding: 'payWaterTime', uploadTime: '2018-08-26 13:06'},
      {id: 15, fieldName: '服务区管理人员', fieldCoding: 'serviceManager', uploadTime: '2018-08-26 13:06'},
      {id: 16, fieldName: '管理人电话', fieldCoding: 'serviceManagerPhoone', uploadTime: '2018-08-26 13:06'},
    ];
  }
  public addSerFieldWindow(): void {}
}
