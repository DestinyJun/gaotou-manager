import {Component, OnInit} from '@angular/core';
import {User} from '../../common/model/user-model';
import {UserService} from '../../common/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // 表单
  public userForm: FormGroup;
  public userInfo: User = new User();
  public formErrors = {
    'name': '',
    'position': '',
    'phone': '',
    'email': '',
    'department': '',
    'remark': '',
    'formError': '',
  };
  public validationMessages = {
    'name': {
      'required': '用户名必须输入。',
      'minlength': '用户名4到32个字符。'
    },
    'position': {
      'required': '昵称必须输入。',
      'minlength': '昵称2到32个字符。'
    },
    'phone': {
      'required': '邮箱必须输入。',
      'minlength': '请输入11位手机号码',
      'maxlength': '请输入11位手机号码'
    },
    'email': {
      'required': '邮箱必须输入。',
      'pattern': '请输入正确的邮箱地址。'
    },
    'department': {
      'required': '重复密码必须输入。',
      'minlength': '密码至少要8位。',
      'validateEqual': '两次输入的密码不一致。'
    },
    'remark': {
      'required': '验证码必须输入。',
      'minlength': '4位验证码',
      'maxlength': '4位验证码'
    },
  };

  // 表格数据
  public persons: User[];
  public cols: any[];
  public selectedCities: string[] = [];

  // 弹窗
  public display = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.uploadPersonDate();
    this.buildForm();
  }

  public addPersonWindow(): void {
    this.display = true;
  }

  // 获取数据
  public uploadPersonDate(): void {
    this.cols = this.userService.cols;
    this.userService.getPersons().subscribe(
      (value) => {
        this.persons = value;
        console.log(value);
      }
    );
  }

  public buildForm(): void {
    this.userForm = this.fb.group({
      'name': [
        this.userInfo.name,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
      'position': [
        this.userInfo.position,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]
      ],
      'phone': [
        this.userInfo.phone,
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11)
        ]
      ],
      'email': [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
        ]
      ],
      'department': [
        this.userInfo.department,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      'remark': [
        this.userInfo.remark,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
    });
    this.userForm.valueChanges
      .subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  // 表单动态校验
  public onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      if (this.formErrors) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors) {
              this.formErrors[field] += messages[key] + '';
            }
          }
        }
      }
    }
  }

  // 添加用户
  public addUser() {
    if (this.userForm.valid) {
      this.display = false;
      this.userInfo = this.userForm.value;
      this.userInfo.id = Math.ceil(Math.random() * 100);
      this.persons.push(this.userInfo);
      console.log(this.userForm.value);
    } else {
      this.formErrors.formError = '存在不合法的输入项，请检查。';
    }
  }
}
