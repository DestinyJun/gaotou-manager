import {Component, OnInit} from '@angular/core';
import {Persons, User} from '../../common/model/user-model';
import {UserService} from '../../common/services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userForm: FormGroup;
  public userInfo: User = new User();
  public formErrors = {
    'userName': '',
    'nickName': '',
    'email': '',
    'password': '',
    'confirmPassword': '',
    'formError': '',
    'vcode': ''
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
      'pattern': '请输入正确的邮箱地址。'
    },
    'email': {
      'required': '密码必须输入。',
      'minlength': '密码至少要8位。'
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

  public persons: Persons[];
  public cols: any[];
  public selectedCities: string[] = [];

  // 弹窗系列
  public display = false;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.getDate();
    this.buildForm();
  }

  public addPersonWindow(): void {
    this.display = true;
  }

  // 获取数据
  public getDate(): void {
    this.cols = this.userService.cols;
    this.userService.getPersons().subscribe(
      (value) => {
        this.persons = value;
      }
    );
  }

  // 创建表单
  public buildForm(): void {
    /* this.personsModel = this.fb.group({
       name: [
         this.personsInfo.name,
         [
           Validators.required,
           Validators.minLength(4),
           Validators.maxLength(32)
         ]
       ],
       position: [
         this.personsInfo.position,
         [
           Validators.required,
           Validators.minLength(2),
           Validators.maxLength(32)
         ]
       ],
       phone: [
         this.personsInfo.phone,
         [
           Validators.required,
           Validators.minLength(11),
           Validators.maxLength(11)
         ]
       ],
       email: [
         this.personsInfo.email,
         [
           Validators.required,
           Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
         ]
       ],
       department: [
         this.personsInfo.department,
         [
           Validators.required,
           Validators.minLength(2),
           Validators.maxLength(32)
         ]
       ],
       remark: [this.personsInfo.remark, []],
     });
     this.personsModel.valueChanges
       .subscribe(data => this.onValueChanged(data));
     this.onValueChanged();*/
    this.userForm = this.fb.group({
      userName: [
        this.userInfo.userName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(32)
        ]
      ],
    /*  nickName: [
        this.userInfo.nickName,
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(32)
        ]
      ],
      email: [
        this.userInfo.email,
        [
          Validators.required,
          Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
        ]
      ],
      password: [
        this.userInfo.password,
        [
          Validators.required,
          Validators.minLength(8),
        ]
      ],
      confirmPassword: [
        this.userInfo.confirmPassword,
        [
          Validators.required,
          Validators.minLength(8)
        ]
      ],
      vcode: [
        this.userInfo.vcode,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(4)
        ]
      ]*/
    });
    this.userForm.valueChanges.subscribe(data => {
        this.onValueChanged(data);
        // console.log(data);
      });
    this.onValueChanged();
  }

  //
  public onValueChanged(data?: any) {
    if (!this.userForm) {
      return;
    }
    const form = this.userForm;
    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  // 提交增加需求
  public doRegister() {
    if (this.userForm.valid) {
      this.userInfo = this.userForm.value;
    /*  this.userRegisterService.register(this.userInfo)
        .subscribe(
          data => {
            this.router.navigateByUrl("home");
          },
          error => {
            this.formErrors.formError = error.message;
            console.error(error);
          }
        );*/
    } else {
      this.formErrors.formError = '存在不合法的输入项，请检查。';
    }
    console.log(this.userInfo);
  }

  public  testEmail() {
    let email = this.userForm.get("email").value;
   /* this.userRegisterService.testEmail(email)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.error(error);
        }
      )*/
  }
}
