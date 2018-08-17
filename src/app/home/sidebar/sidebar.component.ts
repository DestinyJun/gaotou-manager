import { Component, OnInit } from '@angular/core';
import {NavList, NavListChild} from '../../common/services/global.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public logoShow = false;
  public navLists: NavList[] = [
  /*  new NavList('监控管理', 'main', 'fa fa-camera', true, [
      new NavListChild('视频监控', false, 'department/organization-management'),
      new NavListChild('视频管理', false, 'department/organization')
    ] , true),
    new NavList('车流管理', '', 'fa fa-car', false, [
      new NavListChild('数据采集', false, 'department/organization-management'),
      new NavListChild('部门管理', false, 'department/organization')
    ] , true),*/
    /*new NavList('业态管理', '', 'fa fa-bar-chart', false, [
      new NavListChild('生产线', false, 'device/proline'),
      new NavListChild('模块数据', false, 'device/prolicm'),
      new NavListChild('设备数据', false, 'device/proldata'),
      new NavListChild('传感器', false, 'device/prolsen'),
    ] , true),*/
    new NavList('用户管理', 'users', 'fa fa-address-card-o', false, [] , true),
    new NavList('权限管理', '', 'fa fa-outdent', false, [
      new NavListChild('模块信息', false, 'jurisdiction/modalma'),
      new NavListChild('按钮管理', false, 'jurisdiction/btnma'),
      new NavListChild('接口信息', false, 'jurisdiction/interma'),
      new NavListChild('用户权限', false, 'jurisdiction/userma')
    ] , true),
    new NavList('移动端管理', 'mobile', 'fa fa-desktop', false, [] , true),
    new NavList('系统配置', 'mobile', 'fa fa-cog', false, [] , true),
  ];
  public slidinghight: number;
  public slidingTop: number;
  public difulHeight: number;
  constructor(private router: Router) {}
  ngOnInit() {}
  public menuOnMousEnter(element): void {
    element.srcElement.style.left = '0';
    this.logoShow = true;
  }
  public onMouseleave(element): void {
    this.slidingTop = -120;
    element.srcElement.style.left = '-143px';
    this.logoShow = false;
  }
  public mainLiMouseEnter(element): void {
    this.slidingTop =  element.offsetTop;
    this.slidinghight = element.offsetHeight;
  }
  public mainLiClick(mainul, element, list): void {
    if (list.routers) {
      this.router.navigate(['/home/' + list.routers]);
    }
    this.difulHeight = 0;
    if (!(list.children.length > 0)) {
      // this.router.navigate(['/home']);
      for (let i = 0; i < mainul.children.length; i++) {
        mainul.children[i].children[1].style.height = '0px';
      }
      this.navLists.forEach((item) => {
        item.open = true;
        item.clsstate = false;
        item.children.forEach((itemchild) => {
          itemchild.setState = false;
        });
      });
      list.clsstate = true;
      return;
    }
    if (element.offsetHeight === 0) {
      this.navLists.forEach((item) => {
        item.open = true;
      });
      list.open = false;
      for (let i = 0; i < mainul.children.length; i++) {
        mainul.children[i].children[1].style.height = '0px';
      }
      for (let i = 0; i < list.children.length; i++) {
        this.difulHeight = this.difulHeight + 40;
      }
      element.style.height = this.difulHeight.toString() + 'px';
    }
    else {
      list.open = true;
      this.difulHeight = 0;
      element.style.height = this.difulHeight.toString() + 'px';
      setTimeout(() => {
        list.open = true;
      }, 200);
    }
  }
  public menuliMouseEnter(element): void {
    this.slidingTop =  element.offsetTop;
    this.slidinghight = element.offsetHeight;
    element.setState = true;
  }
  public menuliClick(element): void {
    this.navLists.forEach((item) => {
      item.clsstate = false;
      item.children.forEach((itemchild) => {
        itemchild.setState = false;
      });
    });
    element.setState = true;
  }
}