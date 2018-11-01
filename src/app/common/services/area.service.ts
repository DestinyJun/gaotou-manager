import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AreaService {
  public levelEnu = ['国家', '省份直辖市', '地级市'];
  constructor(
    private http: HttpClient
  ) { }
  // 增加接口
  public addList(id): Observable<any> {
    return this.http.get(`http://120.78.137.182:8808/highway-management/administrativeArea/addById/${id}`);
  }
  // 删除一个
  public deleteItem(id): Observable<any> {
    return this.http.get(`http://120.78.137.182:8808/highway-management/administrativeArea/delete/${id}`);
  }
  // 删除多个
  public deleteList(params): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/administrativeArea/delete`, params);
  }
  // 分页查询
  public searchList(num, body): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/administrativeArea/queryTreeByPaging/${num.page}/${num.nums}`, body);
  }
  // 单条查询
  public searchItem(id): Observable<any> {
    return this.http.get(`http://120.78.137.182:8808/highway-management/administrativeArea/queryById/${id}`);
  }
  // 查询接口行政区划
  public getAllList(): Observable<any> {
    return this.http.get(`http://120.78.137.182:8808/highway-management/administrativeArea/queryAll`);
  }
 /* // 修改接口
  public modifyList(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/modify.php', '');
  }*/
}
