import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const headers = req.headers.set('Content-Type', 'application/json');
    const { url } = req;
    const authReq = req.clone({
      headers,
      url: `${environment.scheme}${environment.subdomain}${environment.secondLevelDomain}${environment.topLevelDomain}${environment.path}${url}`,
    });
    return next.handle(authReq);
  }
}
