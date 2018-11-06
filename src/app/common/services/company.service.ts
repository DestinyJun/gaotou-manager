import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {
  // public headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  public headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  // 增加
  public addItem(params): Observable<any> {
    return this.http.post('http://120.78.137.182:8808/highway-management/organization/add', params);
  }
  // 删除单个
  public deleteItem(id): Observable<any> {
    return this.http.get(`http://120.78.137.182:8808/highway-management/organization/delete/${id}`);
  }
  // 删除多个
  public deleteList(params): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/organization/delete`, params);
  }
  // 修改接口
  public modifyList(params): Observable<any> {
    return this.http.post('http://120.78.137.182:8808/highway-management/organization/update', params);
  }
  // 查询
  public searchList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/organization/queryByPaging/${num.page}/${num.nums}`, {});
  }
  /****************************数据联动相关*********************************/
  // 查询激活区域
  public searchAreaList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/administrativeArea/queryTreeByPaging/${num.page}/${num.nums}`, {});
  }
}
