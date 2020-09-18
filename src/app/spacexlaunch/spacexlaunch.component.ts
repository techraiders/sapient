import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { SpacexlaunchService } from './spacexlaunch.service';
import { ActivatedRoute, Router, Params, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-spacexlaunch',
  templateUrl: './spacexlaunch.component.html',
  styleUrls: ['./spacexlaunch.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpacexlaunchComponent implements OnInit {
  years;
  launches: Array<any>;
  launchesSubscription$: Subscription;

  selectedFilters = {
    launch_year: null,
    launch_success: null,
    land_success: null,
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private sls: SpacexlaunchService,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private ss: SharedService
  ) {
    this.years = this.sls.years;
  }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data: Data) => {
      this.launches = this.processInputs(data);
      this.ss.loading$.next(false);
      console.log(JSON.stringify(this.launches[0]));
    });
    this.activatedRoute.queryParams.subscribe(
      ({ launch_year, launch_success, land_success }: Params) => {
        if (launch_year) {
          this.selectedFilters.launch_year = +launch_year;
        } else {
          this.selectedFilters.launch_year = null;
        }
        if (launch_success === 'true') {
          this.selectedFilters.launch_success = true;
        } else if (launch_success === 'false') {
          this.selectedFilters.launch_success = false;
        } else {
          this.selectedFilters.launch_success = null;
        }
        if (land_success === 'true') {
          this.selectedFilters.land_success = true;
        } else if (land_success === 'false') {
          this.selectedFilters.land_success = false;
        } else {
          this.selectedFilters.land_success = null;
        }

        if (this.launchesSubscription$ instanceof Subscription) {
          this.launchesSubscription$.unsubscribe();
        }

        this.launchesSubscription$ = this.sls
          .getLaunches(this.selectedFilters)
          .subscribe(
            (launches: Array<any>) => {
              this.launches = this.processInputs({ launches });
              this.changeDetector.detectChanges();
              this.ss.loading$.next(false);
            },
            (err) => {
              console.log(err);
            }
          );
      }
    );
  }

  onFilterChange(filter): void {
    const queryParams: any = {};
    this.router.navigate(['spacex-launch'], {
      queryParams: filter,
      queryParamsHandling: 'merge',
    });
  }

  private processInputs({ launches = [] }: Data): Array<any> {
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
          mission_patch_small:
            mission_patch_small || `https://place-hold.it/256x256`,
          launch_year,
          launch_success: launch_success || `Not Applicable`,
          land_success: land_success || `Not Applicable`,
        };
      }
    );
  }
}
