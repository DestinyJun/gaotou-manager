import { Component, OnInit } from '@angular/core';
import {ConfirmationService, Message, MessageService, TreeNode} from 'primeng/api';
import {OrgService} from '../../common/services/org.service';
import {GlobalService} from '../../common/services/global.service';
import {AddOrg, OrgList} from '../../common/model/org-model';
import {AddTreeArea} from '../../common/model/shared-model';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  // table显示相关
  public orgs: OrgList[]; // 整个table数据
  public cols: any[]; // 表头
  public org: any; // 接收选中的值
  public selectedorgs: OrgList[]; // 多个选择
  // 增加相关
  public addDialog: boolean; // 增加弹窗显示控制
  public addOrg: AddOrg = new AddOrg(); // 添加参数字段
  public addCompanySelect: AddTreeArea[]; // 服务区列表
  // 其他提示弹窗相关
  public cleanTimer: any; // 清除时钟
  public msgs: Message[] = []; // 消息弹窗
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private orgService: OrgService,
    private globalService: GlobalService
  ) { }

  ngOnInit() {
    this.cols = [
      {field: 'deptCode', header: '部门编号'},
      {field: 'deptName', header: '部门名称'},
      {field: 'fax', header: '部门传真'},
      {field: 'telNumber', header: '部门电话'},
      {field: 'organizationName', header: '所属公司'},
      {field: 'idt', header: '创建时间'},

    ];
    this.updateOrgDate();
  }
  public updateOrgDate(): void {
    this.orgService.searchList({page: 1, nums: 100}).subscribe(
      (val) => {
        console.log(val.data.contents);
        this.orgs = val.data.contents;
      }
    );
  }
  // 选择公司
  public companyChange(e): void {
    this.servicesAreaDialog = false;
    this.addCash.serviceArea.serviceAreaId = e.value.id;
    this.addCash.serviceArea.serviceName = e.value.name;
    this.tableDemoService.searchHighDirection(e.value.id).subscribe(
      (value) => {
        console.log(value);
        this.highsdData = this.initializeServiceAreaDirec(value.data);
      }
    );
  }
}
