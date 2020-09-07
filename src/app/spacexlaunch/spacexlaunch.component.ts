import { Component, OnInit } from '@angular/core';
import { SpacexlaunchService } from './spacexlaunch.service';
import { ActivatedRoute, Router, ParamMap, Params, Data } from '@angular/router';
import { SharedService } from '../shared/shared.service';
import { SpacexLaunch } from "./spacexlaunch.interface";

@Component({
  selector: 'app-spacexlaunch',
  templateUrl: './spacexlaunch.component.html',
  styleUrls: ['./spacexlaunch.component.scss'],
})
export class SpacexlaunchComponent implements OnInit {
  years;
  launches: Array<SpacexLaunch>;

  selectedFilters = {
    launch_year: null,
    launch_success: null,
    land_success: null,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private sls: SpacexlaunchService,
    private router: Router,
    private sharedService: SharedService
  ) {
    this.years = this.sls.years;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data) => {      
      this.launches = this.processInputs(data);
    });

    this.activatedRoute.queryParams.subscribe(
      ({ launch_year, launch_success, land_success }: Params) => {
        if (launch_year) {
          this.selectedFilters.launch_year = +launch_year;
        }
        if (launch_success) {
          this.selectedFilters.launch_success = launch_success === 'true';
        }
        if (land_success) {
          this.selectedFilters.land_success = land_success === 'true';
        }
      }
    );
  }

  onFilterChange(filter): void {
    const queryParams: any = {};
    this.router.navigate(['/spacex-launch'], {
      queryParams: filter,
      queryParamsHandling: 'merge',
    });
  }

  private processInputs({ launches }: Data) {
    setTimeout(() => {
      this.sharedService.loading.next(false);
    }, 1000);
    return launches.map(
      (
        {
          mission_name,
          flight_number,
          mission_id,
          links: { mission_patch_small, mission_patch },
          launch_year,
          launch_success,
          rocket: {
            first_stage: {
              cores: [{ land_success }],
            },
          },
        },
        index
      ) => {
        return {
          mission_name,
          flight_number,
          mission_id: [`mission ${index + 1}`],
          mission_patch_small: mission_patch_small || `https://place-hold.it/256x256`,
          launch_year,
          launch_success: launch_success || `Not Applicable`,
          land_success: land_success || `Not Applicable`,
        };
      }
    );
  }
}
