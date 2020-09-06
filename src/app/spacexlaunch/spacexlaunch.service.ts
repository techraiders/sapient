import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { SharedService } from 'src/app/shared/shared.service';
import { SpacexLaunch } from "./spacexlaunch.interface";

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

  /**
   * 
   * @param {number} limit - How many missions to fetch the database from?
   * @param {number} launch_year - Which year the mission to fetch the database of? 
   * @param {boolean} launch_success - Whether to fetch mission whose lauch is successful? 
   * @param {boolean} land_success - Whether to fetch mission which landed successfully?
   */

  getLaunches({
    limit = 15,
    launch_year = null,
    launch_success = null,
    land_success = null,
  } = {}): Observable<any>{
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
    return this.http.get<SpacexLaunch>(`/launches`, { params });
  }
}
