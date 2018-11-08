import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GlobalService} from './global.service';

@Injectable()
export class OrgService {
  // public headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  public headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }
  // 增加
  public addItem(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/department/add`, params);
  }
  // 删除单个
  public deleteItem(id): Observable<any> {
    return this.http.get(`${this.globalService.urls}/department/delete/${id}`);
  }
  // 删除多个
  public deleteList(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/department/delete`, params);
  }
  // 修改接口
  public modifyList(params): Observable<any> {
    return this.http.post('${this.globalService.urls}/organization/update', params);
  }
  // 查询
  public searchList(num): Observable<any> {
    return this.http.post(`${this.globalService.urls}/department/queryByPaging/${num.page}/${num.nums}`, {});
  }
  // 查询所有公司
  public searchCompanyList(num): Observable<any> {
    return this.http.post(`${this.globalService.urls}/organization/queryByPaging/${num.page}/${num.nums}`, {});
  }
  // 根据公司id查询部门
  public searchCompanyIdDepList(id): Observable<any> {
    return this.http.get(`${this.globalService.urls}/department/queryTreeByOrganizationId/${id}`);
  }
}
