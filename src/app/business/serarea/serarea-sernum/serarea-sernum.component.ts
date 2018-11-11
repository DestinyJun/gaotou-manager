import { Component, OnInit } from '@angular/core';
import {SerareaService} from '../../../common/services/serarea.service';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {GlobalService} from '../../../common/services/global.service';
import {Apply} from '../../../common/model/apply-model';

@Component({
  selector: 'app-serarea-sernum',
  templateUrl: './serarea-sernum.component.html',
  styleUrls: ['./serarea-sernum.component.css']
})
export class SerareaSernumComponent implements OnInit {
  // table显示相关
  public SerAreas: Apply[]; // 整个table数据
  public cols: any[]; // 表头
  public SerArea: any; // 接收选中的值
  public selectedSerAreas: Apply[]; // 多个选择
  // 增加相关
  public addDialog: boolean; // 增加弹窗显示控制
  // 其他提示弹窗相关
  public cleanTimer: any; // 清除时钟
  public msgs: Message[] = []; // 消息弹窗
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private serareaService: SerareaService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.cols = [
      {field: 'id', header: '服务区id'},
      {field: 'name', header: '服务区名'},
      {appDesc: 'createUserName', header: '创建的用户名'},
      {appDesc: 'idt', header: '创建时间'},
    ];
    this.updateApplyListData();
  }
  public updateApplyListData(): void {
    this.serareaService.searchSerAraList({page: 1, nums: 1000}).subscribe(
      (value) => {
        console.log(value);
        this.SerAreas = value.data.contents;
      }
    );
  }
  // 选中后赋值
  public onRowSelect(event): void {
    console.log(event.data);
    this.SerArea = this.cloneCar(event.data);
  }
  // 遍历修改后的数据，并把它赋值给car1
  public cloneCar(c: any): any {
    const car = {};
    for (const prop in c) {
      if (c) {
        car[prop] = c[prop];
      }
    }
    return car;
  }
}
