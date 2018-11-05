import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class CashService {

  constructor(
    private http: HttpClient
  ) { }
  // 查询激活区域
  public searchAreaList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/administrativeArea/queryTreeByPaging/${num.page}/${num.nums}`, {});
  }
  // 查询所属服务区
  public searchServiceAreaList(id): Observable<any> {
    return this.http.get(
      `http://120.78.137.182:8808/highway-management/common/config/getServiceAreaByAdministrativeAreaId/${id}`, {});
  }
  // 查询服务区方向
  public searchHighDirection(id): Observable<any> {
    return this.http.get(
      `http://120.78.137.182:8808/highway-management/serviceArea/orientation/queryByServiceAreaId/${id}`);
  }
  // 根据服务区方向查询店铺
  public searchStoreItem(id): Observable<any> {
    return this.http.get(
      `http://120.78.137.182:8808/highway-management/storeInfo/queryByOrientationId/${id}`);
  }
  // 收银设备分页查询
  public searchList(num): Observable<any> {
    return this.http.post(
      `http://120.78.137.182:8808/highway-management/cashRegister/queryByPaging/${num.page}/${num.nums}`, {});
  }
  // 增加
  public addItem(params): Observable<any> {
    return this.http.post('http://120.78.137.182:8808/highway-management/cashRegister/add', params);
  }
  // 删除单个
  public deleteItem(id): Observable<any> {
    console.log(id);
    return this.http.get(`http://120.78.137.182:8808/highway-management/cashRegister/delete/${id}`);
  }
  // 删除多个
  public deleteList(params): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/cashRegister/delete`, params);
  }
  // 修改
  public modifyList(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/modify.php', '');
  }
}
