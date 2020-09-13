import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SpacexlaunchService } from './spacexlaunch.service';
import { Launch } from './spacexlaunch.interface';

@Injectable()
export class SpacexResolveGuard implements Resolve<Observable<Array<Launch>>> {
  constructor(private sls: SpacexlaunchService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<Array<Launch>> {
    return this.sls.getLaunches(route.queryParams);
  }
}
