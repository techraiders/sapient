import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';

@Injectable()
export class SpacexlaunchService {
  private currentYear = new Date().getFullYear();
  years = [];
  constructor(private http: HttpClient, private sharedService: SharedService) {
    let startFrom = this.currentYear - 14;
    while (startFrom <= this.currentYear) {
      this.years.push({ label: `${startFrom}`, value: startFrom });
      startFrom++;
    }
  }

  getLaunches({
    limit = 15,
    launch_year = null,
    launch_success = null,
    land_success = null,
  } = {}): Observable<any> {
    let params = new HttpParams().append('limit', limit + '');
    if (launch_year !== undefined && launch_year !== null) {
      params = params.append('launch_year', launch_year);
    }
    if (land_success !== undefined && land_success !== null) {
      params = params.append('land_success', land_success);
    }
    if (launch_success !== undefined && launch_success !== null) {
      params = params.append('launch_success', launch_success);
    }
    this.sharedService.loading.next(true);
    return this.http.get(`/launches`, { params });
  }
}
