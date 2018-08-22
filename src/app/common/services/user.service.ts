import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


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
  public cars = [
    {id: 1, name: 'dsad231ff', position: '2012', phone: 'VW', email: 'Orange', department: '阿三大好的', remark: '飒飒大'},
    {id: 2, name: 'gwregre345', position: '2011', phone: 'Audi', email: 'Black', department: '阿三大好的', remark: '飒飒大'},
    {id: 3, name: 'h354htr', position: '2005', phone: 'Renault', email: 'Gray', department: '阿三大好的', remark: '飒飒大'},
    {id: 4, name: 'j6w54qgh', position: '2003', phone: 'BMW', email: 'Blue', department: '阿三大好的', remark: '飒飒大'},
  ];
  constructor(
    private http: HttpClient
  ) { }
}
