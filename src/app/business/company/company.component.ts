import { Component, OnInit } from '@angular/core';
import {CompanyService} from '../../common/services/company.service';
import {ConfirmationService, Message, MessageService} from 'primeng/api';

import {GlobalService} from '../../common/services/global.service';
import {AddCompany, Company} from '../../common/model/company.model';
import {AddTreeArea, TreeNode} from '../../common/model/shared-model';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  // table显示相关
  public companies: Company[]; // 整个table数据
  public cols: any[]; // 表头
  public cash: any; // 接收选中的值
  public selectedcompanies: Company[]; // 多个选择公司
  // 增加相关
  public addDialog: boolean; // 增加弹窗显示控制
  public areaDialog: boolean; // 区域树弹窗
  public addCompany: AddCompany = new AddCompany();
  public addAreaTrees: AddTreeArea[]; // 区域树结构
  public addAreaTree: AddTreeArea = new AddTreeArea(); // 区域树选择
  // 其他提示弹窗相关
  public cleanTimer: any; // 清除时钟
  public msgs: Message[] = []; // 消息弹窗
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private companyService: CompanyService,
    private globalService: GlobalService
) { }

  ngOnInit() {
    this.cols = [
      {field: 'name', header: '公司名称'},
      {field: 'telNumber', header: '公司电话'},
      {field: 'legalPerson', header: '企业法人'},
      {field: 'address', header: '公司地址'},
      {field: 'idt', header: '创建时间'},
    ];
    this.updateCompanyDate();
  }
  public updateCompanyDate(): void {
    this.companyService.searchList({page: 1, nums: 100}).subscribe(
      (value) => {
        this.companies = value.data.contents;
        console.log(value);
      }
    );
  }
  // 选中后赋值
  public onRowSelect(event): void {
    console.log(event.data);
  }
  // 增加
  public addsSave(): void {
    console.log(this.addCompany);
    this.confirmationService.confirm({
      message: `确定要增加吗？`,
      header: '增加提醒',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.globalService.eventSubject.next({display: true});
        this.companyService.addItem(this.addCompany).subscribe(
          (value) => {
            if (value.status === '200') {
              this.globalService.eventSubject.next({display: false});
              if (this.cleanTimer) {
                clearTimeout(this.cleanTimer);
              }
              this.msgs = [];
              this.msgs.push({severity: 'success', summary: '增加提醒', detail: value.message});
              this.updateCompanyDate();
              this.cleanTimer = setTimeout(() => {
                this.msgs = [];
              }, 3000);
              this.addDialog = false;
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
            console.log(err);
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
  // 选择区域
  public AreaTreeClick(): void {
    this.areaDialog = true;
    this.companyService.searchAreaList({page: 1, nums: 100}).subscribe(
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
  public treeSelectAreaClick(): void {
    this.areaDialog = false;
    this.addCompany.areaCode = this.addAreaTree.areaCode;
    this.addCompany.areaName = this.addAreaTree.label;
  }
  // 数据格式化
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
