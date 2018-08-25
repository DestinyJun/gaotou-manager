import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LimitService {

  constructor(
    private http: HttpClient
  ) { }
  public getRoles(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/role.php', '');
  }
  public getRouters(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/router.php', '');
  }
}
