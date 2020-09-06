import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SpacexlaunchService } from './spacexlaunch.service';
import { SpacexLaunch } from './spacexlaunch.interface';

@Injectable()
export class SpacexResolveGuard implements Resolve<any> {
  constructor(private sls: SpacexlaunchService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Array<SpacexLaunch>> {    
    return this.sls.getLaunches(route.queryParams);
  }
}
