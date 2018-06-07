import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReqService} from '../../../shared/req.service';
import {PageBody, TechnologyAmendQueryList, TechnologyParamsPackWord, TechnologyTemperatureQueryList} from '../../../shared/global.service';

@Component({
  selector: 'app-technicspack-temperature',
  templateUrl: './technicspack-temperature.component.html',
  styleUrls: ['./technicspack-temperature.component.css']
})
export class TechnicspackTemperatureComponent implements OnInit {
  public technologyParamsPackWordList: Array<TechnologyParamsPackWord>;
  public Paramdatas: Array<TechnologyTemperatureQueryList>
  public modalRef: BsModalRef;
  public pageBody: PageBody;
  public num: number;
  public Detail: any;
  public paramAddForm: FormGroup;
  public paramModifyForm: FormGroup;
  public paramLookDetailForm: FormGroup;
  public hasChecked: Array<number> = [];
  public checked: string;
  public openstatus: boolean;
  public status: number;
  public inputvalid: boolean;
  public mustone: boolean;
  constructor(
    public modalService: BsModalService,
    public req: ReqService,
    public fb: FormBuilder
  ) {
    this.status = 0;
    this.openstatus = true;
    this.inputvalid = false;
    this.mustone = false;
    this.pageBody = new PageBody(1, 10);
    this.Update();
    this.paramAddForm = fb.group({
      name: ['', Validators.required],
      plate_thickness: ['', Validators.required],
      plate_width: ['', Validators.required],
      temperature_1_1: ['', Validators.required],
      temperature_1_1_d: ['', Validators.required],
      temperature_1_2: ['', Validators.required],
      temperature_1_2_d: ['', Validators.required],
      temperature_1_3: ['', Validators.required],
      temperature_1_3_d: ['', Validators.required],
      temperature_1_4: ['', Validators.required],
      temperature_1_4_d: ['', Validators.required],
      temperature_1_5: ['', Validators.required],
      temperature_1_5_d: ['', Validators.required],
      temperature_2_1: ['', Validators.required],
      temperature_2_1_d: ['', Validators.required],
      temperature_2_2: ['', Validators.required],
      temperature_2_2_d: ['', Validators.required],
      temperature_2_3: ['', Validators.required],
      temperature_2_3_d: ['', Validators.required],
      temperature_2_4: ['', Validators.required],
      temperature_2_4_d: ['', Validators.required],
      temperature_2_5: ['', Validators.required],
      temperature_2_5_d: ['', Validators.required]
    });
    this.paramModifyForm = fb.group({
      name: ['', Validators.required],
      plate_thickness: ['', Validators.required],
      plate_width: ['', Validators.required],
      temperature_1_1: ['', Validators.required],
      temperature_1_1_d: ['', Validators.required],
      temperature_1_2: ['', Validators.required],
      temperature_1_2_d: ['', Validators.required],
      temperature_1_3: ['', Validators.required],
      temperature_1_3_d: ['', Validators.required],
      temperature_1_4: ['', Validators.required],
      temperature_1_4_d: ['', Validators.required],
      temperature_1_5: ['', Validators.required],
      temperature_1_5_d: ['', Validators.required],
      temperature_2_1: ['', Validators.required],
      temperature_2_1_d: ['', Validators.required],
      temperature_2_2: ['', Validators.required],
      temperature_2_2_d: ['', Validators.required],
      temperature_2_3: ['', Validators.required],
      temperature_2_3_d: ['', Validators.required],
      temperature_2_4: ['', Validators.required],
      temperature_2_4_d: ['', Validators.required],
      temperature_2_5: ['', Validators.required],
      temperature_2_5_d: ['', Validators.required]
    });
    this.paramLookDetailForm = fb.group({
      name: ['', Validators.required],
      plate_thickness: ['', Validators.required],
      plate_width: ['', Validators.required],
      temperature_1_1: ['', Validators.required],
      temperature_1_1_d: ['', Validators.required],
      temperature_1_2: ['', Validators.required],
      temperature_1_2_d: ['', Validators.required],
      temperature_1_3: ['', Validators.required],
      temperature_1_3_d: ['', Validators.required],
      temperature_1_4: ['', Validators.required],
      temperature_1_4_d: ['', Validators.required],
      temperature_1_5: ['', Validators.required],
      temperature_1_5_d: ['', Validators.required],
      temperature_2_1: ['', Validators.required],
      temperature_2_1_d: ['', Validators.required],
      temperature_2_2: ['', Validators.required],
      temperature_2_2_d: ['', Validators.required],
      temperature_2_3: ['', Validators.required],
      temperature_2_3_d: ['', Validators.required],
      temperature_2_4: ['', Validators.required],
      temperature_2_4_d: ['', Validators.required],
      temperature_2_5: ['', Validators.required],
      temperature_2_5_d: ['', Validators.required]
    });
    this.technologyParamsPackWordList = [
      new TechnologyParamsPackWord('方 案 名 称', 'name', '', ''),
      new TechnologyParamsPackWord('铝板厚度',	'plate_thickness',	'毫米', '将（在）生产铝板厚度'),
      new TechnologyParamsPackWord('铝板宽度',	'plate_width',	'毫米'	, '将（在）生产铝板宽度'),
      new TechnologyParamsPackWord('一涂一区温度', 'temperature_1_1', '	摄氏度', '一涂一区温度设定'),
      new TechnologyParamsPackWord('一涂一区温度差值',	'temperature_1_1_d', '	摄氏度', '一涂一区温度安全值设定'),
      new TechnologyParamsPackWord('一涂二区温度',	'temperature_1_2', '	摄氏度', '一涂二区温度设定'),
      new TechnologyParamsPackWord('一涂二区温度差值',	'temperature_1_2_d', '	摄氏度', '一涂二区温度安全值设定'),
      new TechnologyParamsPackWord('一涂三区温度',	'temperature_1_3', '	摄氏度', '一涂三区温度设定'),
      new TechnologyParamsPackWord('一涂三区温度差值',	'temperature_1_3_d', '	摄氏度', '一涂三区温度安全值设定'),
      new TechnologyParamsPackWord('一涂四区温度',	'temperature_1_4', '	摄氏度', '一涂四区温度设定'),
      new TechnologyParamsPackWord('一涂四区温度差值',	'temperature_1_4_d', '	摄氏度', '一涂四区温度安全值设定'),
      new TechnologyParamsPackWord('一涂五区温度',	'temperature_1_5', '	摄氏度', '一涂五区温度设定'),
      new TechnologyParamsPackWord('一涂五区温度差值',	'temperature_1_5_d', '	摄氏度', '一涂五区温度安全值设定'),
      new TechnologyParamsPackWord('二涂一区温度',	'temperature_2_1', '	摄氏度', '二涂一区温度设定'),
      new TechnologyParamsPackWord('二涂一区温度差值',	'temperature_2_1_d', '	摄氏度', '二涂一区温度安全值设定'),
      new TechnologyParamsPackWord('二涂二区温度',	'temperature_2_2', '	摄氏度', '二涂二区温度设定'),
      new TechnologyParamsPackWord('二涂二区温度差值',	'temperature_2_2_d', '	摄氏度', '二涂二区温度安全值设定'),
      new TechnologyParamsPackWord('二涂三区温度',	'temperature_2_3', '	摄氏度', '二涂三区温度设定'),
      new TechnologyParamsPackWord('二涂三区温度差值',	'temperature_2_3_d', '	摄氏度', '二涂三区温度安全值设定'),
      new TechnologyParamsPackWord('二涂四区温度',	'temperature_2_4', '	摄氏度', '二涂四区温度设定'),
      new TechnologyParamsPackWord('二涂四区温度差值',	'temperature_2_4_d', '	摄氏度', '二涂四区温度安全值设定'),
      new TechnologyParamsPackWord('二涂五区温度',	'temperature_2_5', '	摄氏度', '二涂五区温度设定'),
      new TechnologyParamsPackWord('二涂五区温度差值',	'temperature_2_5_d', '	摄氏度', '二涂五区温度安全值设定'),
    ];
  }
  ngOnInit() {
  }
  // 控制模态框
  public openModal(template: TemplateRef<any>): void {
    this.inputvalid = false;
    if (this.hasChecked.length > 1 || this.hasChecked.length === 0) {
      this.mustone = true;
    } else {
      let detail1: any = {name: this.Detail.name, finish_type: this.Detail.finishtype};
      this.inputvalid = false;
      this.Detail.did = String(this.Detail.did);
      this.paramModifyForm.reset();
      this.paramLookDetailForm.reset();
      this.paramModifyForm.patchValue(detail1);
      this.paramModifyForm.patchValue(this.Detail.temperaturedata);
      this.paramLookDetailForm.patchValue(detail1);
      this.paramLookDetailForm.patchValue(this.Detail.temperaturedata);
      this.modalRef = this.modalService.show(template);
    }
  }
  // 控制模态框增加
  public openAddModal(template: TemplateRef<any>): void {
    this.mustone = false;
    this.inputvalid = false;
    this.modalRef = this.modalService.show(template);
  }
  // 监控翻页事件
  public getPageBody(event): void {
    this.pageBody = event;
    this.Update();
  }
  // 全选 或 全不选
  public getAllCheckBoxStatus(e): void {
    if (e.srcElement.checked === true) {
      this.hasChecked = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.hasChecked.splice(this.Paramdatas.length, 10);
      this.checked = 'checked';
    } else {
      this.hasChecked = [];
      this.checked = '';
    }
  }
  // 得到已选择的checkBox
  public getCheckBoxStatus(e, i): void {
    let haschecklen = this.hasChecked.length;
    if (e.srcElement.checked === true) {
      this.hasChecked.push(i);
    } else {
      for (let j = 0; j < haschecklen; j++ ) {
        if (this.hasChecked[j] === i) {
          this.hasChecked.splice(j, 1);
        }
      }
    }
    if (this.hasChecked.length === 1) {
      this.Detail = this.Paramdatas[this.hasChecked[0]];
    } else {
      this.Detail = null;
    }
  }
  // 删除表格 并且 重新请求数据(不管删除多少条，只请求数据刷新一次)
  public Delete(): void {
    let haschecklen = this.hasChecked.length;
    if (haschecklen === 0) {
      this.mustone = true;
    } else {
      this.mustone = false;
      this.openstatus = false;
      for (let j = 0; j < haschecklen; j++) {
        this.req.DeleteTechnicsPackTemperature('finish_type=' +  this.Paramdatas[this.hasChecked[j]].finishtype)
          .subscribe(status => {
            if (j === haschecklen - 1) {
              this.status = Number(status.status);
              this.Update();
            }
          });
      }
    }
  }
  // 生产线的添加 并且 重新请求数据，防止增加的是第十一条表格
  public paramsAdd(): void {
    if (this.paramAddForm.valid) {
      this.openstatus = false;
      this.inputvalid = false;
      this.modalRef.hide();
      this.req.AddTechnicsPackTemperature(this.paramAddForm.value)
        .subscribe(status => {
          this.status = Number(status.status);
          this.Update();
        });
    } else {
      this.inputvalid = true;
    }
  }
//  修改表格内容
  public paramsModify(): void {
    if (1) {
      this.openstatus = false;
      this.inputvalid = false;
      this.modalRef.hide();
      this.req.UpdateTechnicsPackTemperature(this.paramModifyForm.value)
        .subscribe(res => {
          this.status = Number(res.status);
          this.Update();
        });
    } else {
      this.inputvalid = true;
    }
  }
  // 刷新
  public Update(): void {
    this.mustone = false;
    this.req.FindTechnicsPackTemperature(this.parameterSerialization(this.pageBody)).subscribe(
      (value) => {
        this.num = Math.ceil(value.values.num / 10);
        this.Paramdatas = value.values.amenddata;
        for (let i = 0; i < this.Paramdatas.length; i++) {
          this.Paramdatas[i]['temperaturedata'] = JSON.parse(this.Paramdatas[i]['temperaturedata']);
        }
        setTimeout(() => {
          this.openstatus = true;
          this.status = 0;
        }, 2500);
        this.hasChecked = [];
        this.checked = '';
      });
  }
  // 翻页参数序列化
  public parameterSerialization(obj: PageBody): string {
    let result: string;
    for (const prop in this.pageBody) {
      if (this.pageBody.hasOwnProperty(prop)) {
        if (result) {
          result = result + prop + '=' + this.pageBody[prop] + '&';
        } else {
          result = prop + '=' + this.pageBody[prop] + '&';
        }
      }
    }
    return result;
  }
  // 表单参数序列化
  public parameterSerializationForm(form: JSON): string {
    let result: string;
    for (const f in form) {
      if (result) {
        result = result + f + '=' + form[f] + '&';
      } else {
        result = f + '=' + form[f] + '&';
      }
    }
    return result;
  }
}
