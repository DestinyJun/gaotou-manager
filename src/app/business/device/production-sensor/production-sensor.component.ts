import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {DeviceProductionSensorList, PageBody} from '../../../shared/global.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReqService} from '../../../shared/req.service';

@Component({
  selector: 'app-production-sensor',
  templateUrl: './production-sensor.component.html',
  styleUrls: ['./production-sensor.component.css']
})
export class ProductionSensorComponent implements OnInit {
  public ProductionSensors: Array<DeviceProductionSensorList>;
  public modalRef: BsModalRef;
  public pageBody: PageBody;
  public num: number;
  public proSensorAddForm: FormGroup;
  public proSensorModifyForm: FormGroup;
  public Detail: any;
  public hasChecked: Array<number> = [];
  public checked: string;
  public openstatus: boolean;
  public status: number;
  public Fmodalid: any;
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
    // 对表格的初始化
    this.pageBody = new PageBody(1, 10);
    this.Update();

    // 模态框表单
    this.proSensorAddForm = fb.group({
      sid: ['', Validators.required],
      sname: ['', Validators.required],
      stype: ['', Validators.required],
      sdatatype: ['', Validators.required],
      saddress: ['', Validators.required],
      sstatus: ['', Validators.required],
      smax: ['', Validators.required],
      smin: ['', Validators.required],
      srecomm: ['', Validators.required],
      did: ['', Validators.required]
    });
    this.proSensorModifyForm = fb.group({
      sid: ['', Validators.required],
      sname: ['', Validators.required],
      stype: ['', Validators.required],
      sdatatype: ['', Validators.required],
      saddress: ['', Validators.required],
      sstatus: ['', Validators.required],
      smax: ['', Validators.required],
      smin: ['', Validators.required],
      srecomm: ['', Validators.required],
      did: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.req.FindDeviceDeviceid().subscribe(value => {
      this.Fmodalid = value.values;
      this.proSensorAddForm.patchValue({'did': this.Fmodalid[0].did});
    });
  }
// 选择增加设备id
  public SelectAddModalId(value): void {
    this.proSensorAddForm.patchValue({'did': value});
  }
// 选择修改设备id
  public SelectModifyModalId(value): void {
    this.proSensorModifyForm.patchValue({'did': value});
  }
  // 控制模态框
  public openProSensor(template: TemplateRef<any>): void {
    this.inputvalid = false;
    if (this.hasChecked.length > 1 || this.hasChecked.length === 0) {
      this.mustone = true;
    } else {
      this.mustone = false;
      this.Detail.did = String(this.Detail.did);
      this.proSensorModifyForm.reset(this.Detail);
      this.modalRef = this.modalService.show(template);
    }
  }
  // 控制模态框增加
  public openProSensorAdd(template: TemplateRef<any>): void {
    this.mustone = false;
    this.inputvalid = false;
    this.modalRef = this.modalService.show(template);
  }

  public getNum(event): void {
    this.num = event;
  }

  public getPageBody(event): void {
    this.pageBody = event;
    this.Update();
  }
  // 全选 或 全不选
  public getAllCheckBoxStatus(e): void {
    if (e.srcElement.checked === true) {
      this.hasChecked = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      this.hasChecked.splice(this.ProductionSensors.length, 10);
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
      this.Detail = this.ProductionSensors[this.hasChecked[0]];
    } else {
      this.Detail = null;
    }
  }

  // 生产线的添加 并且 重新请求数据，防止增加的是第十一条表格
  public proSensorAdd(): void {
    if (this.proSensorAddForm.valid) {
      this.openstatus = false;
      this.inputvalid = false;
      this.modalRef.hide();
      this.req.DeviceProductionSensorAdd(this.parameterSerializationForm(this.proSensorAddForm.value))
        .subscribe(status => {
          this.status = Number(status.status);
          this.Update();
        });
    } else {
      this.inputvalid = true;
    }
  }
//  删除表格 并且 重新请求数据
  public deleteProSensor(): void {
    let haschecklen = this.hasChecked.length;
    if (haschecklen === 0) {
      this.mustone = true;
    } else {
      this.mustone = false;
      for (let j = 0; j < haschecklen; j++) {
          this.req.DeviceProductionSensorDelete('sid=' + this.ProductionSensors[this.hasChecked[j]].sid)
            .subscribe(status => {
              this.status = Number(status.status);
              if (j === haschecklen - 1) {
                this.Update();
              }
            });
      }
    }
  }

//  修改表格内容
  public proSensorModify(): void {
    if (this.proSensorModifyForm.valid) {
      this.openstatus = false;
      this.inputvalid = false;
      this.modalRef.hide();
      this.req.DeviceProductionSensorModify(this.parameterSerializationForm(this.proSensorModifyForm.value))
        .subscribe(status => {
          this.status = Number(status.status);
          this.Update();
        });
    } else {
      this.inputvalid = true;
    }
  }

  // 增，删，改的及时刷新
  public Update(): void {
    this.req.getDeviceProductionSensor(this.parameterSerialization(this.pageBody)).subscribe(
      (value) => {
        this.num = Math.ceil(value.values.num / 10);
        this.ProductionSensors = value.values.datas;
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
