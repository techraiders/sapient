import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable()
export class SpacexlaunchService {
  private currentYear = new Date().getFullYear();
  years = [];
  constructor(private http: HttpClient, private location: Location) {
    let startFrom = this.currentYear - 14;
    while (startFrom <= this.currentYear) {
      this.years.push({ label: `${startFrom}`, value: startFrom });
      startFrom++;
    }
  }

  getLaunches({ limit = 10 } = {}): Observable<any> {
    return this.http.get(`/launches?limit=${limit}`);
  }
}
