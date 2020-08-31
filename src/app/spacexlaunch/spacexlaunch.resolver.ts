import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SpacexlaunchService } from './spacexlaunch.service';

@Injectable()
export class SpacexResolveGuard implements Resolve<any> {
  constructor(private sls: SpacexlaunchService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return this.sls.getLaunches(route.queryParams);
  }
}
