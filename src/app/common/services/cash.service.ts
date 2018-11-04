import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CashService {

  constructor(
    private http: HttpClient
  ) { }
  // 分页查询
  public searchAreaList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/administrativeArea/queryTreeByPaging/${num.page}/${num.nums}`, {});
  }
  // 分页查询
  public searchList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/cashRegister/queryByPaging/${num.page}/${num.nums}`, {});
  }
  // 增加接口
  public addList(): Observable<any> {
    return this.http.post('http://120.78.137.182:8808/highway-management/cashRegister/add', '');
  }
  // 增加删除
  public deleteList(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/deletes.php', '');
  }
  // 修改接口
  public modifyList(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/modify.php', '');
  }
}
