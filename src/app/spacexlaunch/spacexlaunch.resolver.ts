import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpacexlaunchService } from './spacexlaunch.service';

@Injectable()
export class SpacexResolveGuard implements Resolve<Observable<Array<any>>> {
  constructor(private sls: SpacexlaunchService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Array<any>> {
    return this.sls.getLaunches(route.queryParams);
  }
}
