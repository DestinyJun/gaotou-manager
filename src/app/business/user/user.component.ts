import {Component, OnInit} from '@angular/core';
import {AddUser, User} from '../../common/model/user-model';
import {UserService} from '../../common/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConfirmationService, Message, MessageService} from 'primeng/api';
import {GlobalService} from '../../common/services/global.service';
import {SelectItem} from '../../common/model/shared-model';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // table显示相关
  public users: User[]; // 整个table数据
  public cols: any[]; // 表头
  public cash: any; // 接收选中的值
  public selectedUsers: User[]; // 多个选择
  // 增加相关
  public addDialog: boolean; // 增加弹窗显示控制
  public addUser: AddUser = new AddUser(); // 添加参数字段
  public addCompanySelect: SelectItem[]; // 公司列表
  public addOrgSelect: SelectItem[]; // 部门列表
  // 其他提示弹窗相关
  public cleanTimer: any; // 清除时钟
  public msgs: Message[] = []; // 消息弹窗
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private userService: UserService,
    private globalService: GlobalService,
    private datePipe: DatePipe,
  ) {}

  ngOnInit() {
    this.cols = [
      {field: 'realName', header: '姓名'},
      {field: 'telNumber', header: '电话'},
      {field: 'gender', header: '性别'},
      {field: 'dutyName', header: '职务'},
      {field: 'idt', header: '添加时间'}
    ];
  this.updateUserDate();
  }
  public updateUserDate(): void {
    this.userService.searchList({page: 1, nums: 1000}).subscribe(
      (value) => {
        console.log(value);
        this.users = value.data.contents;
      }
    );
    this.userService.searchCompanyList({page: 1, nums: 100}).subscribe(
      (val) => {
        this.addCompanySelect = this.initializeSelectCompany(val.data.contents);
      }
    );
  }
  // 选中后赋值
  public onRowSelect(event): void {
    // console.log(event);
  }
  // 增加
  public addsSave(): void {
    console.log(this.addUser);
    this.confirmationService.confirm({
      message: `确定要增加吗？`,
      header: '增加提醒',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.globalService.eventSubject.next({display: true});
        this.userService.addItem(this.addUser).subscribe(
          (value) => {
            if (value.status === '200') {
              this.globalService.eventSubject.next({display: false});
              if (this.cleanTimer) {
                clearTimeout(this.cleanTimer);
              }
              this.msgs = [];
              this.msgs.push({severity: 'success', summary: '增加提醒', detail: value.message});
              this.updateUserDate();
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
  public timeOnSelect(e): void {
    this.addUser.birthday = this.datePipe.transform(e, 'yyyy-MM-dd');
  }
  // 选择公司
  public companyChange(e): void {
    this.addUser.organizationName = e.value.name;
    this.addUser.organizationId = e.value.id;
    this.userService.searchCompanyIdDepList(e.value.id).subscribe(
      (value) => {
        console.log(value.data);
        this.addOrgSelect = this.initializeSelectOrg(value.data);
      }
    );
  }
  // 选择部门
  public orgsChange(e): void {
    this.addUser.deptId = e.value.id;
    this.addUser.deptName = e.value.name;
  }
  // 数据格式化
  public initializeSelectCompany(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new SelectItem();
      childnode.name = data[i].name;
      childnode.id = data[i].id;
      oneChild.push(childnode);
    }
    return oneChild;
  }
  public initializeSelectOrg(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode =  new SelectItem();
      childnode.name = data[i].deptName;
      childnode.id = data[i].id;
      childnode.pid = data[i].pid;
      childnode.pids = data[i].pids;
      oneChild.push(childnode);
    }
    return oneChild;
  }
}
