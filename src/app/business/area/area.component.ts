import { Component, OnInit } from '@angular/core';
import {ConfirmationService, SelectItem, TreeNode} from 'primeng/api';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})

export class AreaComponent implements OnInit {
  public display: boolean = false;
  public province: SelectItem[];
  public cities: SelectItem[];
  public country: SelectItem[];
  public selectedCar1: string;
  public selectedCar2: string;
  public selectedCar3: string;
  public files1: TreeNode[];
  public newfiles: TreeNode;

  public cols: any[];

  constructor(private confirmationService: ConfirmationService) { }

  ngOnInit() {
    this.newfiles =   {
      'data': {
        'name': '',
      },
      'children': [
        {
          'data': {
            'name': '',
          },
          'children': [
            {
              'data': {'name': ''},
            }
          ]
        }
      ]
    };
    // 表格内容
    this.files1 = [
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
     // 表单省初始化
    this.province = [
      {label: '重庆', value: '重庆'},
      {label: '吉林', value: '吉林'},
      {label: '湖南', value: '湖南'},
    ];
     // 表单市初始化
    this.cities = [
      {label: '遵义', value: '遵义'},
      {label: '攀枝花', value: '攀枝花'},
      {label: '娄底', value: '娄底'},
    ];
     // 表单县初始化
    this.country = [
      {label: '江口', value: '江口'},
      {label: '玉屏', value: '玉屏'},
      {label: '松桃', value: '松桃'},
    ];
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'size', header: 'Size' },
      { field: 'type', header: 'Type' }
    ];

  }
  // 弹窗显示与隐藏
  showDialog() {
    this.display = true;
  }
  addData() {
    this.files1.push(this.newfiles);
    console.log(this.files1);
  }
  public provinceChange(e) {
    this.newfiles.data.name = e.value;
    console.log(this.newfiles);

  }
  public citiesChange(e) {
    this.newfiles.children[0].data.name = e.value;
    console.log(this.newfiles);

  }
  public countryChange(e) {
    this.newfiles.children[0].children[0].data.name = e.value;
    console.log(this.newfiles);

  }
}
