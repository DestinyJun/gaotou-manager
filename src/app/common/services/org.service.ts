import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrgService {
  // public headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  public headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  // 增加
  public addItem(params): Observable<any> {
    return this.http.post('http://120.78.137.182:8808/highway-management/department/add', params);
  }
  // 删除单个
  public deleteItem(id): Observable<any> {
    return this.http.get(`http://120.78.137.182:8808/highway-management/department/delete/${id}`);
  }
  // 删除多个
  public deleteList(params): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/department/delete`, params);
  }
  // 修改接口
  public modifyList(params): Observable<any> {
    return this.http.post('http://120.78.137.182:8808/highway-management/organization/update', params);
  }
  // 查询
  public searchList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/department/queryByPaging/${num.page}/${num.nums}`, {});
  }
}
