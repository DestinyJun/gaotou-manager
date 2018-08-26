import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class SerareaService {

  constructor(
    private http: HttpClient
  ) { }
  public getDerareas(): Observable<any> {
    return this.http.post('http://localhost/gaotouService/sernum.php', '');
  }

}
