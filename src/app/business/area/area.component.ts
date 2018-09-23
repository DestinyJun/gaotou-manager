import { Component, OnInit } from '@angular/core';
import { SelectItem, TreeNode } from 'primeng/api';
import { AreaService } from '../../common/services/area.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
 // table显示相关
  public areaDates: TreeNode[];
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
      { field: 'name', header: 'name' },
    ];
    // 表格内容
    this.areaDates = [
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
    this.areaService.getArea({page: '1', nums: '5'} , {}).subscribe(
      (value) => {
        console.log(value.data.contents);
        let a = '';
        let b = [];
        let c = [];
        value.data.contents.map((val) => {
          a = '';
          b = [];
          c = [];
          a = val.areaName;
          console.log(a);
          val.administrativeAreaTree.map((v1, index) => {
            console.log(v1);
          });
         /* this.areaDates.push(
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
