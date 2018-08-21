import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from '../model/user-model';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClient
  ) { }
  public getCarsSmall() {
   /* return this.http.get('/showcase/resources/data/cars-small.json')
      .toPromise()
      .then(res => <Car[]> res.json().data)
      .then(data => {
        return data;
      });*/
  }
}
