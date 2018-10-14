import { Component, OnInit } from '@angular/core';
import {TreeNode} from 'primeng/api';
import {OrgService} from '../../common/services/org.service';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  // table显示相关
  public orgDates: TreeNode[];
  public cols: any[];
  public province = [];
  public cities = [];
  public country = [];
  // 添加框选中的值
  public display = false;
  public selectedCar1: string;
  public selectedCar2: string;
  constructor(
    private orgService: OrgService
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
      { field: 'name', header: 'Name' },
    ];
    // 表格内容
    this.orgDates = [
      {
        'data': {
          'name': '贵州',
        },
        'children': [
          {
            'data': {
              'name': '贵阳',
            },
            'children': [
              {
                'data': {
                  'name': '南明区',
                }
              },
              {
                'data': {
                  'name': '云岩区',
                }
              }
            ]
          },
          {
            'data': {
              'name': '铜仁',
            },
            'children': [
              {
                'data': {
                  'name': '江口',
                }
              }
            ]
          }
        ]
      },
      {
        'data': {
          'name': '四川',
        },
        'children': [
          {
            'data': {
              'name': '绵阳',
            },
            'children': [
              {
                'data': {
                  'name': '风格县',
                }
              },
              {
                'data': {
                  'name': '**区',
                }
              }
            ]
          },
          {
            'data': {
              'name': '成都',
            },
            'children': [
              {
                'data': {
                  'name': '发顺丰县',
                }
              }
            ]
          }
        ]
      },
    ];
  }
  public getDate(): void {
    this.orgService.getArea({page: '1', nums: '5'} , {}).subscribe(
      (value) => {
        value.data.contents.map((val) => {
          /*this.areaDates.push(
            {data: {name: val.areaName}}
          );*/
        });
        /* value.data.contents.map((j, index) => {
           /!*this.province.push({label: j.areaName, value: j.areaName});
           j.admionistrativeAreaList.map((k, kindex) => {
             this.cities.push({label: k.areaName, value: k.areaName});
           });*!/
         });*/
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
