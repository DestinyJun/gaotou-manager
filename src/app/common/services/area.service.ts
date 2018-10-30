import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AreaService {

  constructor(
    private http: HttpClient
  ) { }
  // 查询接口行政区划
  public searchList(num, body): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/administrativeArea/queryByPaging/${num.page}/${num.nums}`, body);
  }
  // 增加接口
  public addList(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/adds.php', '');
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
