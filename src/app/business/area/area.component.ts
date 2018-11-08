import { Component, OnInit } from '@angular/core';
import { AreaService } from '../../common/services/area.service';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {GlobalService} from '../../common/services/global.service';
import {AreaList} from '../../common/model/area-model';
import {DatePipe} from '@angular/common';
import {AddTreeArea} from '../../common/model/shared-model';
import {AddTreeItem} from '../../common/model/org-model';
@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  // 表格数据相关
  public areaList: AreaList[]; // 整个table数据
  public cols: any[]; // 表头
  public selectAreaList: AreaList[]; // 多选接受变量
  public selectAreaItem: any; // 接收选中的值

  // 添加及树结构相关
  public addDialog: boolean; // 增加弹窗
  public addAreaItem: AddTreeItem = new AddTreeItem (); // 增加字段
  public addAreaTrees: AddTreeArea[];
  public addAreaTree: AddTreeArea;
  public addAreaTreeSelect = [];

  // 提示弹窗相关
  public areaDialog: boolean; // 区域弹窗
  public msgs: Message[] = []; // 消息弹窗

  public cleanTimer: any; // 清除时钟
  constructor(
    private globalService: GlobalService,
    private areaService: AreaService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.getDate();
    this.cols = [
      {field: 'areaName', header: '区域名称'},
      {field: 'areaCode', header: '区域编码'},
      {field: 'level', header: '区域级别'},
      {field: 'idt', header: '添加时间'},
    ];
  }
  // 获取生效的服务区
  public getDate(): void {
    this.areaService.searchList({page: '1', nums: '100'} , {}).subscribe(
      (value) => {
        console.log(value);
        this.areaList = this.tableTreeInitialize(value.data.contents);
      }
    );

  }
  // 选中后赋值
  public onNodeSelect(event): void {
    console.log(this.selectAreaList);
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
    this.addAreaItem = this.addInitializeTree1(this.addAreaTreeSelect)[0];
    console.log(this.addAreaItem);
    this.confirmationService.confirm({
      message: `确定要增加吗？`,
      header: '增加提醒',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.globalService.eventSubject.next({display: true});
        this.areaService.addList(this.addAreaItem.id).subscribe(
          (value) => {
            if (value.status === '200') {
              this.globalService.eventSubject.next({display: false});
              this.getDate();
              // const carsSave = [...this.areaList];
              // const addAreaItem = [];
              // addAreaItem.push(this.addAreaItem);
              // carsSave.push(this.tableTreeInitialize1(addAreaItem)[0]);
              // this.areaList = carsSave;
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
            this.areaService.deleteItem(this.selectAreaList[0].data.id).subscribe(
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
              ids.push(val.data.id);
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
  public treeAreaClick(): void {
    this.areaDialog = true;
    this.areaService.getAllList().subscribe(
      (value) => {
        this.addAreaTrees = this.addInitializeTree(value.data);
      }
    );
  }
  public treeOnNodeSelect(event) {
    this.areaDialog = false;
    this.addAreaTreeSelect = [];
    this.addAreaTreeSelect.push(event.node);
    this.addAreaItem = this.addInitializeTree1(this.addAreaTreeSelect)[0];
  }
  // 递归调用重组数据结构
  public tableTreeInitialize(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new AreaList();
      childnode.data = {
        areaName: data[i].areaName,
        areaCode: data[i].areaCode,
        id: data[i].id,
        idt: data[i].idt,
        udt: data[i].udt,
        level: this.areaService.levelEnu[data[i].level],
        parentId: data[i].parentId,
        pids: data[i].pids,
      };
      if (data[i].administrativeAreaTree === null) {
        childnode.children = [];
      } else {
        childnode.children = this.tableTreeInitialize(data[i].administrativeAreaTree);
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
  public tableTreeInitialize1(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new AreaList();
      childnode.data = {
        areaName: data[i].areaName,
        areaCode: data[i].areaCode,
        id: data[i].id,
        idt: data[i].idt,
        udt: data[i].udt,
        enable: data[i].enable,
        level: this.areaService.levelEnu[data[i].level],
        parentId: data[i].parentId,
        pids: data[i].pids,
      };
      if (data[i].children === null) {
        childnode.children = [];
      } else {
        childnode.children = this.tableTreeInitialize1(data[i].children);
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
  public addInitializeTree(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new AddTreeArea();
      childnode.label = data[i].areaName;
      childnode.areaCode = data[i].areaCode;
      childnode.parentId = data[i].parentId;
      childnode.enabled = data[i].enabled;
      childnode.cityType = data[i].cityType;
      childnode.id = data[i].id;
      if (data[i].totalCityAreaList === null) {
        childnode.children = [];
      } else {
        childnode.children = this.addInitializeTree(data[i].totalCityAreaList);
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
  public addInitializeTree1(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new AddTreeItem();
      childnode.areaName = data[i].label;
      childnode.areaCode = data[i].areaCode;
      childnode.parentId = data[i].parentId;
      childnode.enabled = data[i].enabled;
      childnode.cityType = data[i].cityType;
      childnode.id = data[i].id;
      childnode.idt = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:MM:SS');
      if (data[i].children === null) {
        childnode.children = [];
      } else {
        childnode.children = this.addInitializeTree1(data[i].children);
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
  /*public initializeArea1(data): any {
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
  }*/
}
