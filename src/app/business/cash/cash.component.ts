import { Component, OnInit } from '@angular/core';
import {CashService} from '../../common/services/cash.service';
import {GlobalService} from '../../common/services/global.service';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {Car, Cash, TreeNode} from '../../common/model/cash-model';
import {AddTreeArea, AddTreeItem} from '../../common/model/area-model';

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {
  public cashs: Cash[]; // 整个table数据
  public cols: any[]; // 表头
  public cash: any; // 接收选中的值
  public selectedCars3: Car[]; // 多选接受变量

  public addDialog: boolean; // 增加弹窗
  public addCash: Cash = new Cash();

  public cleanTimer: any; // 清除时钟
  // 树结构
  public filesTree2: TreeNode[];
  public selectedFile: TreeNode;
  // 添加及树结构相关
  public addAreaItem: AddTreeItem = new AddTreeItem (); // 增加字段
  public addAreaTrees: AddTreeArea[];
  public addAreaTree: AddTreeArea = new AddTreeArea();
  public addAreaTreeSelect = [];
  // 提示弹窗相关
  public areaDialog: boolean; // 区域弹窗
  public msgs: Message[] = []; // 消息弹窗
  constructor(
    private cashService: CashService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.cols = [
      {field: 'administrativeAreaId', header: '区划ID'},
      {field: 'serviceAreaId', header: '服务区ID'},
      {field: 'storeId', header: '店铺ID'},
      {field: 'cashRegisterCode', header: '收银机编号'},
      {field: 'idt', header: '添加时间'}
    ];
    this.updateCashDate();
  }
  public updateCashDate(): void {
    this.cashService.searchList({page: 1, nums: 100}).subscribe(
      (value) => {
        this.cashs = value.data.contents;
      }
    );
  }
  // 选中后赋值
  public onRowSelect(event): void {
    this.cash = this.cloneCar(event.data);
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
        this.cashService.addList().subscribe(
          (value) => {
            if (value.state) {
              setTimeout(() => {
                this.globalService.eventSubject.next({display: false});
                const carsSave = [...this.cashs];
                // carsSave.push(this.cashs);
                this.cashs = carsSave;
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
 /* // 修改、保存修改
  public revampClick() {
    if (this.selectedCars3 === undefined || this.selectedCars3.length === 0) {
      if (this.cleanTimer) {
        clearTimeout(this.cleanTimer);
      }
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: '操作错误', detail: '请选择需要修改的项'});
      this.cleanTimer = setTimeout(() => {
        this.msgs = [];
      }, 3000);
      this.revampDialog = false;
    } else if (this.selectedCars3.length > 1) {
      if (this.cleanTimer) {
        clearTimeout(this.cleanTimer);
      }
      this.cleanTimer = setTimeout(() => {
        this.msgs = [];
      }, 3000);
      this.msgs.push({severity: 'error', summary: '操作错误', detail: '修改只能选择一项'});
      this.revampDialog = false;
    } else if (this.selectedCars3.length === 1) {
      this.revampDialog = true;
    }

  }
  public revampSave(): void {
    this.confirmationService.confirm({
      message: `确定要修改吗？`,
      header: '修改提醒',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.globalService.eventSubject.next({display: true});
        this.cashService.modifyList().subscribe(
          (value) => {
            if (value.state) {
              setTimeout(() => {
                this.globalService.eventSubject.next({display: false});
                const carsSave = [...this.cashs];
                carsSave[this.cashs.indexOf(this.selectedCars3[0])] = this.cash;
                this.cashs = carsSave;
                if (this.cleanTimer) {
                  clearTimeout(this.cleanTimer);
                }
                this.msgs = [];
                this.msgs.push({severity: 'success', summary: '修改提醒', detail: value.msg});
                this.cleanTimer = setTimeout(() => {
                  this.msgs = [];
                }, 3000);
                this.selectedCars3 = undefined;
                this.revampDialog = false;
              }, 3000);
            } else {
              setTimeout(() => {
                this.globalService.eventSubject.next({display: false});
                if (this.cleanTimer) {
                  clearTimeout(this.cleanTimer);
                }
                this.msgs = [];
                this.msgs.push({severity: 'error', summary: '修改提醒', detail: '服务器处理失败'});
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
              this.msgs.push({severity: 'error', summary: '修改提醒', detail: '连接服务器失败'});
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
    if (this.selectedCars3 === undefined || this.selectedCars3.length === 0) {
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
        message: `确定要删除这${this.selectedCars3.length}项吗？`,
        header: '删除提醒',
        icon: 'pi pi-exclamation-triangle',
        accept: () => {
          this.globalService.eventSubject.next({display: true});
          this.cashService.deleteList().subscribe(
            (value) => {
              if (value.state) {
                setTimeout(() => {
                  this.globalService.eventSubject.next({display: false});
                  this.selectedCars3.map((val, inx) => {
                    const index = this.cashs.indexOf(val);
                    this.cashs = this.cashs.filter((val1, i) => i !== index);
                  });
                  if (this.cleanTimer) {
                    clearTimeout(this.cleanTimer);
                  }
                  this.msgs = [];
                  this.selectedCars3 = undefined;
                  this.msgs.push({severity: 'success', summary: '删除提醒', detail: value.msg});
                  this.cleanTimer = setTimeout(() => {
                    this.msgs = [];
                  }, 3000);
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
        },
        reject: () => {}
      });
    }
  }
  // 搜索
  public searchKeydown(e): void {
    if (e.keyCode === 13) {
      this.searchClick();
    }
  }
  public searchClick(): void {
    this.globalService.eventSubject.next({display: true});
    this.cashService.searchList({'name': '文君', 'age': '18'}).subscribe(
      (value) => {
        console.log(value);
        /!*setTimeout(() => {
          this.globalService.eventSubject.next({display: false});
          if (value.state) {
            if (this.cleanTimer) {
              clearTimeout(this.cleanTimer);
            }
            this.msgs = [];
            this.msgs.push({severity: 'success', summary: '搜索提醒', detail: '搜索成功'});
            this.cleanTimer = setTimeout(() => {
              this.msgs = [];
            }, 3000);
            this.cars = value.data;
          } else {
            if (this.cleanTimer) {
              clearTimeout(this.cleanTimer);
            }
            this.msgs = [];
            this.msgs.push({severity: 'error', summary: '搜索提醒', detail: '无数据'});
            this.cleanTimer = setTimeout(() => {
              this.msgs = [];
            }, 3000);
          }
        }, 3000);*!/
      },
      (error) => {
        console.log(error);
        setTimeout(() => {
          this.globalService.eventSubject.next({display: false});
          if (this.cleanTimer) {
            clearTimeout(this.cleanTimer);
          }
          this.msgs = [];
          this.msgs.push({severity: 'error', summary: '查询失败', detail: '连接服务器失败'});
          this.cleanTimer = setTimeout(() => {
            this.msgs = [];
          }, 3000);
        }, 3000);
      }
    );
  }
  // 查看详情
  public checkClick(): void {
    if (this.selectedCars3 === undefined || this.selectedCars3.length === 0) {
      if (this.cleanTimer) {
        clearTimeout(this.cleanTimer);
      }
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: '操作错误', detail: '请选择需要查看的项'});
      this.cleanTimer = setTimeout(() => {
        this.msgs = [];
      }, 3000);
      this.revampDialog = false;
    } else if (this.selectedCars3.length > 1) {
      if (this.cleanTimer) {
        clearTimeout(this.cleanTimer);
      }
      this.cleanTimer = setTimeout(() => {
        this.msgs = [];
      }, 3000);
      this.msgs.push({severity: 'error', summary: '操作错误', detail: '查看详情只能选择一项'});
      this.revampDialog = false;
    } else if (this.selectedCars3.length === 1) {
      this.detailsDialog = true;
    }
  }*/
  // 树结构
  public treeAreaClick(): void {
    this.areaDialog = true;
    this.cashService.searchAreaList({page: 1, nums: 100}).subscribe(
      (val) => {
        this.addAreaTrees = this.initializeTree(val.data.contents);
      }
    );
  }
  public treeOnNodeSelect(event) {
    // this.areaDialog = false;
    // this.addAreaTreeSelect.push(event.node);
    // console.log(this.addAreaTree);
  }
  // 确认选择的区域
  public treeSelectAreaClick(): void {
    const a = parseFloat(this.addAreaTree.level);
    if (a >= 2 ) {
      this.areaDialog = false;
    } else {
      this.msgs = [];
      this.msgs.push({severity: 'error', summary: '操作错误', detail: '请选择市'});
      this.cleanTimer = setTimeout(() => {
        this.msgs = [];
      }, 3000);
    }
  }
  public initializeTree(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new TreeNode();
      childnode.label = data[i].areaName;
      childnode.id = data[i].id;
      childnode.areaCode = data[i].areaCode;
      childnode.parentId = data[i].parentId;
      childnode.enabled = data[i].enabled;
      childnode.cityType = data[i].cityType;
      childnode.level = data[i].level;
      if (childnode === null) {
        childnode.children = [];
      } else {
        childnode.children = this.initializeTree(data[i].administrativeAreaTree);
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
}
