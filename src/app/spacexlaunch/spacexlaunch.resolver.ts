import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SpacexlaunchService } from './spacexlaunch.service';
import { SpacexLaunch } from './spacexlaunch.interface';

@Injectable()
export class SpacexResolveGuard
  implements Resolve<Observable<Array<SpacexLaunch>>> {
  constructor(private sls: SpacexlaunchService) {}
  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Array<SpacexLaunch>> {
    return this.sls.getLaunches(route.queryParams);
  }
}
