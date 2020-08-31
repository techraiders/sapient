import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor() {}
  handleError(error): any {
    // IMPORTANT: Rethrow the error otherwise it gets swallowed
    if (!environment.production) {
      console.log(error);
    }
  }
}
