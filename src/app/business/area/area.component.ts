import { Component, OnInit } from '@angular/core';
import { SelectItem, TreeNode } from 'primeng/api';
import { AreaService } from '../../common/services/area.service';
import {a} from '@angular/core/src/render3';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
 // table显示相关
  public areaDates: Array<TreeNode> = new Array();
  public cols: any[];
  public province = [];
  public cities = [];
  public country = [];
  // 添加框选中的值
  public display = false;
  public selectedCar1: string;
  public selectedCar2: string;
  public selectedCar3: string;

  constructor(
    private areaService: AreaService
  ) { }

  ngOnInit() {
    this.getDate();
     // 表单县初始化
    this.country = [
      {label: '江口', value: '江口'},
      {label: '玉屏', value: '玉屏'},
      {label: '松桃', value: '松桃'},
    ];
    this.cols = [
      { field: 'areaName', header: '区域名称' },
      { field: 'idt', header: '开通时间' },
      { field: 'areaCode', header: '区域编号'},
    ];
    // 表格内容
    /*this.areaDates = [
      {
        data: {
          areaName: '贵州',
          idt: '2018-06-29 23:48:23',
          areaCode: '50024',
        },
        children: [
          {
            data: {
              areaName: '贵阳',
              idt: '2018-06-29 23:48:23',
              areaCode: '50024',
            },
            children: [
              {
                data: {
                  areaName: '南明区',
                  idt: '2018-06-29 23:48:23',
                  areaCode: '50024',
                }
              },
              {
                data: {
                  areaName: '云岩区',
                  idt: '2018-06-29 23:48:23',
                  areaCode: '50024',
                }
              }
            ]
          },
          {
            data: {
              areaName: '铜仁',
              idt: '2018-06-29 23:48:23',
              areaCode: '50024',
            },
            children: [
              {
                data: {
                  areaName: '江口',
                  idt: '2018-06-29 23:48:23',
                  areaCode: '50024',
                }
              }
            ]
          }
        ]
      },
    ];*/
  }

  public getDate(): void {
    // 获取生效的服务区
    this.areaService.getArea({page: '1', nums: '5'} , {}).subscribe(
      (value) => {
        let areaDataArray = [];
        let areaData = {};
        value.data.contents.map((val) => {
          areaData = {
            data: {
              areaCode: '520000',
              areaName: '贵州省',
              enabled: true,
              id: 2,
              idt: '2018-09-15 15:52:33',
              level: 1,
              parentId: 0,
              pids: '0',
              udt: '2018-07-18 00:18:30'
            },
            children: []
          };
          val.administrativeAreaTree.map((vala) => {
            const a1 = {};
            for (const props in vala) {
             if (vala) {
               if (props !== 'administrativeAreaTree') {
                a1[props] = vala[props];
               }
             }
           }
            areaData.children.push({data: a1, children: []});
            vala.administrativeAreaTree.map((valb, index) => {
              const a2 = {};
              for (const props in valb) {
                if (valb) {
                  if (props !== 'administrativeAreaTree') {
                    a2[props] = valb[props];
                  }
                }
              }
              console.log(a2);
              areaData.children[index].children.push({data: a2, children: []});
            });
          });
        });
        if (areaData) {
          areaDataArray.push(areaData);
          this.areaDates = areaDataArray;
        }
      }
    );

  }
  // 弹窗显示与隐藏
  public showDialog(): void {
    this.display = true;
  }
  public addData(): void {
    /*this.files1.push(this.newfiles);
    console.log(this.files1);*/
  }
  public provinceChange(e): void {
    console.log(e.value);
  }
  public citiesChange(e): void {
    // console.log(this.newfiles);

  }
  public countryChange(e): void {
   /* this.newfiles.children[0].children[0].data.name = e.value;
    console.log(this.newfiles);
*/
  }
}
