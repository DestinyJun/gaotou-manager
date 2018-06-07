import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {DeviceProductionLineList} from '../shared/global.service';
import {Observable} from 'rxjs/Observable';
import {ReqService} from '../shared/req.service';

@Injectable()
export class BusinessGuard implements Resolve<DeviceProductionLineList> {
  constructor(
    public req: ReqService,
    public router: Router
  ) {}
resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DeviceProductionLineList> | Promise<DeviceProductionLineList> | DeviceProductionLineList {
    this.router.navigate(['/loading']);
    return this.req.getDeviceProductionLine('page=1&row=10');
  }

}
