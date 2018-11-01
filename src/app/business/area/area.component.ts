import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../common/services/area.service';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {GlobalService} from '../../common/services/global.service';
import {AddArea, AreaList, Car, TreeNode} from '../../common/model/area-model';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  public province = []; // 省
  public cities = []; // 市
  public country = []; // 县
  // 树结构相关
  public areaTrees: TreeNode[];
  public areaTree: TreeNode;
  // 数据相关
  public addDialog: boolean; // 增加弹窗
  public areaDialog: boolean; // 区域弹窗
  public addArea: AddArea = new AddArea (); // 增加字段
  public areaList: AreaList[]; // 整个table数据
  public cols: any[]; // 表头
  public msgs: Message[] = []; // 消息弹窗
  public selectAreaItem: any; // 接收选中的值
  public selectAreaList: AreaList[]; // 多选接受变量
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
    this.areaService.searchList({page: '1', nums: '20'} , {}).subscribe(
      (value) => {
        console.log(value);
        this.areaList =  value.data.contents;
        this.areaList.map((val, index) => {
          val.level = this.areaService.levelEnu[val.level];
        });
      }
    );

  }
  // 选中后赋值
  public onRowSelect(event): void {
    this.selectAreaItem = this.cloneCar(event.data);
    console.log(this.selectAreaItem);
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
        this.areaService.addList(this.addArea.id).subscribe(
          (value) => {
            console.log(value);
            if (value.status === '200') {
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
            } else {
              this.globalService.eventSubject.next({display: false});
              if (this.cleanTimer) {
                clearTimeout(this.cleanTimer);
              }
              this.msgs = [];
              this.msgs.push({severity: 'error', summary: '增加提醒', detail: '服务器处理失败'});
              this.cleanTimer = setTimeout(() => {
                this.msgs = [];
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
  // 删除
  public deleteFirm(): void {
    if (this.selectAreaList === undefined || this.selectAreaList.length === 0) {
      if (this.cleanTimer) {
        clearTimeout(this.cleanTimer);
      }
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: '操作错误', detail: '请选择需要删除的项'});
      this.cleanTimer = setTimeout(() => {
        this.msgs = [];
      }, 3000);
    } else {
      this.confirmationService.confirm({
        message: `确定要删除这${this.selectAreaList.length}项吗？`,
        header: '删除提醒',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          if (this.selectAreaList.length === 1) {
            this.globalService.eventSubject.next({display: true});
            this.areaService.deleteItem(this.selectAreaList[0].id).subscribe(
              (value) => {
                if (value.status === '200') {
                  this.globalService.eventSubject.next({display: false});
                  this.selectAreaList.map((val, inx) => {
                    const index = this.areaList.indexOf(val);
                    this.areaList = this.areaList.filter((val1, i) => i !== index);
                  });
                  if (this.cleanTimer) {
                    clearTimeout(this.cleanTimer);
                  }
                  this.msgs = [];
                  this.selectAreaList = undefined;
                  this.msgs.push({severity: 'success', summary: '删除提醒', detail: value.msg});
                  this.cleanTimer = setTimeout(() => {
                    this.msgs = [];
                  }, 3000);
                } else {
                  setTimeout(() => {
                    this.globalService.eventSubject.next({display: false});
                    if (this.cleanTimer) {
                      clearTimeout(this.cleanTimer);
                    }
                    this.msgs = [];
                    this.msgs.push({severity: 'error', summary: '删除提醒', detail: '服务器处理失败'});
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
                  this.msgs.push({severity: 'error', summary: '删除提醒', detail: '连接服务器失败'});
                  this.cleanTimer = setTimeout(() => {
                    this.msgs = [];
                  }, 3000);
                });
              }
            );
          } else {
            const ids = [];
            this.selectAreaList.map((val) => {
              ids.push(val.id);
            });
            this.globalService.eventSubject.next({display: true});
            this.areaService.deleteList(ids).subscribe(
              (value) => {
                if (value.status === '200') {
                  this.globalService.eventSubject.next({display: false});
                  this.selectAreaList.map((val, inx) => {
                    const index = this.areaList.indexOf(val);
                    this.areaList = this.areaList.filter((val1, i) => i !== index);
                  });
                  if (this.cleanTimer) {
                    clearTimeout(this.cleanTimer);
                  }
                  this.msgs = [];
                  this.selectAreaList = undefined;
                  this.msgs.push({severity: 'success', summary: '删除提醒', detail: value.msg});
                  this.cleanTimer = setTimeout(() => {
                    this.msgs = [];
                  }, 3000);
                } else {
                  setTimeout(() => {
                    this.globalService.eventSubject.next({display: false});
                    if (this.cleanTimer) {
                      clearTimeout(this.cleanTimer);
                    }
                    this.msgs = [];
                    this.msgs.push({severity: 'error', summary: '删除提醒', detail: '服务器处理失败'});
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
                  this.msgs.push({severity: 'error', summary: '删除提醒', detail: '连接服务器失败'});
                  this.cleanTimer = setTimeout(() => {
                    this.msgs = [];
                  }, 3000);
                });
              }
            );
          }
        },
        reject: () => {}
      });
    }
  }
  // 树结构
  public areaClick(): void {
    this.areaDialog = true;
    this.areaService.getAllList().subscribe(
      (val) => {
        console.log(val.data);
        this.areaTrees = this.initializeTree(val.data);
      }
    );
  }
  public nodeSelect(event) {
    this.initializeTree(event.node);
    this.areaDialog = false;
    for (const prop in event.node) {
      if (event.node) {
        this.addArea.areaName = event.node.label;
        this.addArea.areaCode = event.node.areaCode;
        this.addArea.parentId = event.node.parentId;
        this.addArea.enabled = event.node.enabled;
        this.addArea.id = event.node.id;
      }
    };
    console.log(this.addArea.id);
  }
  public nodeUnselect(event) {
    this.messageService.add({severity: 'info', summary: 'Node Unselected', detail: event.node.label});
  }
  public initializeTree(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new TreeNode();
      childnode.label = data[i].areaName;
      childnode.areaCode = data[i].areaCode;
      childnode.parentId = data[i].parentId;
      childnode.enabled = data[i].enabled;
      childnode.cityType = data[i].cityType;
      childnode.id = data[i].id;
      if (data[i].totalCityAreaList === null) {
        childnode.children = [];
      } else {
        childnode.children = this.initializeTree(data[i].totalCityAreaList);
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
  public initializeArea(data): any {
    console.log(data);
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new AddArea();
      childnode.id = data[i].id;
      childnode.areaName = data[i].areaName;
      childnode.areaCode = data[i].areaCode;
      childnode.enabled = data[i].enabled;
      childnode.parentId = data[i].parentId;
      if (data[i].children === null) {
        childnode.administrativeAreaUnifilarDTO = null;
      } else {
        childnode.administrativeAreaUnifilarDTO = this.initializeTree(data[i].children);
      }
      oneChild.push(childnode);
    }
    console.log(oneChild);
    return oneChild;
  }
}
