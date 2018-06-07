import {Component, OnInit, TemplateRef} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {AppManager} from '../../shared/global.service';
import {ReqService} from '../../shared/req.service';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css']
})
export class MobileComponent implements OnInit {
  public apps: Array<AppManager>;
  public modalRef: BsModalRef;
  public formData: FormData;
  public infoForm: FormGroup;
  public options: Array<Options>;
  public file: any;
  public status: number;
  public openstatus: boolean;
  constructor(
    public http: HttpClient,
    public fb: FormBuilder,
    public modalService: BsModalService,
    public req: ReqService
    ) {
    this.formData = new FormData();
    this.openstatus = true;
    this.status = 0;
    this.options = [
      new Options('APP01', '原材料出库'),
      new Options('APP02', '成品入库'),
      new Options('APP03', '成品出库'),
      new Options('APP04', '工艺干预'),
      new Options('APP05', '生产监视'),
      new Options('APP06', '设备巡检')

    ];
    this.infoForm = fb.group({
      appType: ['APP01', Validators.required],
      description: ['', Validators.required]
    });
    this.req.getAppInfo().subscribe(value => {
      // console.log(value);
      this.apps = value.data;
    });
  }
  ngOnInit() {
  }
  // 打开模态框
  public uploadfileModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }
  // 选择文件
  public getFile(event): void {
    this.file = event.target.files[0];
    this.formData.append('file', event.target.files[0]);
    // console.log(this.file.size);
  }
  // 选择文件类型
  public typeSelect(appType: any): void {
    this.infoForm.patchValue({appType : appType});
    // console.log(appType);
  }
  // 上传文件
  public uploadfile(): void {
      if (this.infoForm.valid && (this.file !== undefined || this.file.length >= 1)) {
        this.openstatus = false;
        this.formData.append('infomation', JSON.stringify(this.infoForm.value));
        this.req.AppUpload(this.formData)
              .subscribe(res => {
                // console.log(event.type === HttpEventType.UploadProgress);
                  console.log(res);
                  this.status = Number(res.status);
                    setTimeout(() => {
                      this.openstatus = true;
                      this.status = 0;
                    }, 2500);
              });
      } else {
        alert('请填写完整的信息!');
      }
        // console.log(this.infoForm.value);
  }


  // 下载文件
  public downloadFile(downloadUrl): void {
    window.open(downloadUrl);
  }

}


export class Options {
  constructor(
    public value: string,
    public content: string
  ) {}
}
