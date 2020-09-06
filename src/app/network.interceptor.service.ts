import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  constructor(private snackBar: MatSnackBar) {}

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
    if (navigator && navigator.onLine) {
      return next.handle(authReq);
    } else {
      this.snackBar.open(`Please connect to the internet`, `OK`, {
        politeness: 'assertive',
        verticalPosition: 'top'
      });
    }
  }
}
