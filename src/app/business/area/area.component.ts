import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../common/services/area.service';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {GlobalService} from '../../common/services/global.service';
import {AddArea, AreaList, Car} from '../../common/model/area-model';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  public province = []; // 省
  public cities = []; // 市
  public country = []; // 县
  // 数据相关
  public addDialog: boolean; // 增加弹窗
  public addArea: AddArea = new AddArea (); // 增加字段
  public areaList: AreaList[]; // 整个table数据
  public cols: any[]; // 表头
  public msgs: Message[] = []; // 消息弹窗
  public car1: any; // 接收选中的值
  public selectedCars3: Car[]; // 多选接受变量
  public cleanTimer: any; // 清除时钟
  constructor(
    private globalService: GlobalService,
    private areaService: AreaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  ngOnInit() {
    this.getDate();
    this.cols = [
      {field: 'areaName', header: '区域名称'},
      {field: 'areaCode', header: '区域编码'},
      {field: 'parentId', header: '上级区域'},
      {field: 'level', header: '区域级别'},
      {field: 'idt', header: '添加时间'},
    ];
  }
  public getDate(): void {
    // 获取生效的服务区
    this.areaService.searchList({page: '1', nums: '5'} , {}).subscribe(
      (value) => {
        console.log(value);
        this.areaList =  value.data.contents;
        value.data.contents.map((val) => {
          console.log(val);
        });
      }
    );

  }
  // 选中后赋值
  public onRowSelect(event): void {
    this.car1 = this.cloneCar(event.data);
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
  // 增加、保存增加
  public addClick(): void {
    this.addDialog = true;
  }
  public addsSave(): void {
    this.confirmationService.confirm({
      message: `确定要增加吗？`,
      header: '增加提醒',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.globalService.eventSubject.next({display: true});
        this.areaService.addList(this.addArea).subscribe(
          (value) => {
            console.log(value);
            if (value.status === '200') {
              setTimeout(() => {
                this.globalService.eventSubject.next({display: false});
                const carsSave = [...this.areaList];
                carsSave.push(this.addArea);
                this.areaList = carsSave;
                if (this.cleanTimer) {
                  clearTimeout(this.cleanTimer);
                }
                this.msgs = [];
                this.msgs.push({severity: 'success', summary: '增加提醒', detail: value.msg});
                this.cleanTimer = setTimeout(() => {
                  this.msgs = [];
                }, 3000);
                this.addDialog = false;
              }, 3000);
            } else {
              setTimeout(() => {
                this.globalService.eventSubject.next({display: false});
                if (this.cleanTimer) {
                  clearTimeout(this.cleanTimer);
                }
                this.msgs = [];
                this.msgs.push({severity: 'error', summary: '增加提醒', detail: '服务器处理失败'});
                this.cleanTimer = setTimeout(() => {
                  this.msgs = [];
                }, 3000);
              }, 3000);
            }
          },
          (err) => {
            setTimeout(() => {
              this.globalService.eventSubject.next({display: false});
              if (this.cleanTimer) {
                clearTimeout(this.cleanTimer);
              }
              this.msgs = [];
              this.msgs.push({severity: 'error', summary: '增加提醒', detail: '连接服务器失败'});
              this.cleanTimer = setTimeout(() => {
                this.msgs = [];
              }, 3000);
            }, 3000);
          }
        );
      },
      reject: () => {}
    });
  }
}
