import { Component, OnInit } from '@angular/core';
import { SpacexlaunchService } from './spacexlaunch.service';

@Component({
  selector: 'app-spacexlaunch',
  templateUrl: './spacexlaunch.component.html',
  styleUrls: ['./spacexlaunch.component.scss'],
})
export class SpacexlaunchComponent implements OnInit {
  years;
  constructor(private sls: SpacexlaunchService) {
    this.years = this.sls.years;
  }

  ngOnInit(): void {
    this.sls.getLaunches().subscribe((r) => {
      console.log(r);
    });
  }
}
