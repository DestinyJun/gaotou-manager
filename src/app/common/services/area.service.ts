import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AreaService {

  constructor(
    private http: HttpClient
  ) { }
  // 查询所有固定行政区域
  public getFixationArea(): Observable<any> {
    return this.http.get('http://192.168.28.78:8080/highway-management/administrativeArea/query2Tree');
  }

}
