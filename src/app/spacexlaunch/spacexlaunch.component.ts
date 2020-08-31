import { Component, OnInit } from '@angular/core';
import { SpacexlaunchService } from './spacexlaunch.service';
import { ActivatedRoute, Router, ParamMap, Params } from '@angular/router';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-spacexlaunch',
  templateUrl: './spacexlaunch.component.html',
  styleUrls: ['./spacexlaunch.component.scss'],
})
export class SpacexlaunchComponent implements OnInit {
  years;
  launches;

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
    this.activatedRoute.data.subscribe(this.processInputs.bind(this));

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
        if (
          launch_year ||
          (launch_success !== null && launch_success !== undefined) ||
          (land_success !== null && land_success !== undefined)
        ) {
          this.sls
            .getLaunches({ launch_year, land_success, launch_success })
            .subscribe((launches) => {
              this.processInputs({launches});
            });
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

  private processInputs({ launches }): any {
    setTimeout(() => {
      this.sharedService.loading.next(false);
    }, 3000);
    this.launches = launches.map(
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
          mission_id: [`mission_${index + 1}`],
          mission_patch_small,
          mission_patch,
          launch_year,
          launch_success,
          land_success,
        };
      }
    );
    console.log(this.launches);
  }
}
