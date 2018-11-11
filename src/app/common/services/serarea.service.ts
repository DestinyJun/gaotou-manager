import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {GlobalService} from './global.service';

@Injectable()
export class SerareaService {
  // public headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  public headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient,
    private globalService: GlobalService
  ) { }
  /*****************************字段分类**************************/
  // 增加
  public addSaFieldTypeItem(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/attributeCategory/add`, params);
  }
  // 删除单个
  public deleteSaFieldTypeItem(id): Observable<any> {
    return this.http.get(`${this.globalService.urls}/serviceArea/attributeCategory/delete/${id}`);
  }
  // 删除多个
  public deleteSaFieldTypeList(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/attributeCategory/delete`, params);
  }
  // 修改
  public modifySaFieldTypeItem(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/modify.php', '');
  }
  // 查询
  public searchSaFieldTypeList(num): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/attributeCategory/queryByPaging/${num.page}/${num.nums}`, {});
  }

  /*****************************字段管理**************************/
  // 增加
  public addSaFieldItem(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/attribute/add`, params);
  }
  // 删除单个
  public deleteSaFieldItem(id): Observable<any> {
    return this.http.get(`${this.globalService.urls}/serviceArea/attribute/delete/${id}`);
  }
  // 删除多个
  public deleteSaFieldList(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/attribute/delete`, params);
  }
  // 修改
  public modifySaFieldItem(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/modify.php', '');
  }
  // 查询
  public searchSaFieldList(num): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/attribute/queryByPaging/${num.page}/${num.nums}`, {});
  }

  /*****************************服务区**************************/
  // 增加
  public addSerAraItem(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/add`, params);
  }
  // 删除单个
  public deleteSerAraItem(id): Observable<any> {
    return this.http.get(`${this.globalService.urls}/serviceArea/delete/${id}`);
  }
  // 删除多个
  public deleteSerAraList(params): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/delete`, params);
  }
  // 修改
  public modifySerAraItem(item): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/update`, item);
  }
  // 查询
  public searchSerAraList(num): Observable<any> {
    return this.http.post(`${this.globalService.urls}/serviceArea/queryByPaging/${num.page}/${num.nums}`, {});
  }
}
