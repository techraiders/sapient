import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Location } from '@angular/common';

@Injectable()
export class SpacexlaunchService {
  constructor(private http: HttpClient, private location: Location) {}

  getLaunches(): void {
    this.http.get(`/launches?limit=100`).subscribe((response) => {
      console.log(response);
    });
  }
}
