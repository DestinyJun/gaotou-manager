import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class OrgService {

  constructor(
    private http: HttpClient
  ) { }
  public getArea(num, body): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/administrativeArea/queryByPaging/${num.page}/${num.nums}`, body);
  }
  // 查询所有固定行政区域
  public getFixationArea(num, body): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/administrativeArea/queryByPaging/${num.page}/${num.nums}`, body);
  }

}
