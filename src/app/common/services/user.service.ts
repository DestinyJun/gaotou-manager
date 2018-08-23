import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Persons} from '../model/user-model';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class UserService {
  public cols = [
    {field: 'id', header: '编号'},
    {field: 'name', header: '姓名'},
    {field: 'position', header: '职位'},
    {field: 'phone', header: '电话'},
    {field: 'email', header: '邮箱'},
    {field: 'department', header: '部门'},
    {field: 'remark', header: '备注'}
  ];
  constructor(
    private http: HttpClient
  ) { }
  public getPersons(): Observable<any> {
    return this.http.post('http://localhost/gaotou/user.php', '');
  }
}
