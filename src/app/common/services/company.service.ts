import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CompanyService {

  constructor(
    private http: HttpClient
  ) { }
  public getCompanyData(num, body): Observable<any> {
    return this.http.post(`http://120.78.137.182:8808/highway-management/organization/queryByPaging/${num.page}/${num.nums}`, body);
}
}
