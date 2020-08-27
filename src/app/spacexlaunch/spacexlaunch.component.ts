import { Component, OnInit } from '@angular/core';
import { SpacexlaunchService } from './spacexlaunch.service';

@Component({
  selector: 'app-spacexlaunch',
  templateUrl: './spacexlaunch.component.html',
  styleUrls: ['./spacexlaunch.component.scss'],
})
export class SpacexlaunchComponent implements OnInit {
  constructor(private sls: SpacexlaunchService) {}

  ngOnInit(): void {
    this.sls.getLaunches();
  }
}
