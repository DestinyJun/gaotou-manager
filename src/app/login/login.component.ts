import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ReqService} from '../shared/req.service';
import {Router} from '@angular/router';
import {GlobalService} from '../shared/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userLoginInfoForm: FormGroup;
  constructor(
    private req: ReqService,
    private fb: FormBuilder,
    private router: Router,
    private localSessionStorage: GlobalService
  ) {
    this.userLoginInfoForm = fb.group({
      uname: ['', Validators.required],
      upwd: ['', Validators.required],
      module: ['WEBN', Validators.required]
    });
  }
  ngOnInit() {
  }
  public OnSubmitInfo(): void {
      console.log(this.userLoginInfoForm.value);
      if (this.userLoginInfoForm.valid) {
        this.req.Login(this.userLoginInfoForm.value)
          .subscribe(res => {
            console.log(res);
            if (Number(res.status) === 10) {
              this.localSessionStorage.set('realName', res.realName);
              this.localSessionStorage.set('sid', res.sid);
              this.localSessionStorage.set('logstatus', '10');
              this.router.navigate(['/home']);
            }
            if (Number(res.status) === 14) {
              this.localSessionStorage.set('logstatus', '14');
                this.router.navigate(['/home']);
            }
            if (Number(res.status) === 13) {
              alert('用户不存在或密码错误');
              return;
            }
          });
      } else {
        alert('账号或密码不能为空!');
      }
  }
}
