import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {
  ChangeDetectionStrategy,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';

import { SpacexlaunchComponent } from './spacexlaunch.component';
import { SpacexlaunchService } from './spacexlaunch.service';
import { By } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';

describe('SpacexlaunchComponent', () => {
  let component: SpacexlaunchComponent;
  let fixture: ComponentFixture<SpacexlaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [SpacexlaunchComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: SpacexlaunchService, useClass: SpacexlaunchServiceStub },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.overrideComponent(SpacexlaunchComponent, {
      set: new Component({
        selector: 'app-spacexlaunch',
        templateUrl: `./spacexlaunch.component.html`,
        changeDetection: ChangeDetectionStrategy.Default,
      }),
    });
    fixture = TestBed.createComponent(SpacexlaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should contain a main tag', () => {
    const mainEl = fixture.debugElement.query(By.css(`main`));
    expect(mainEl.nativeElement.tagName).toBe(`MAIN`);
  });

  it(`main tag should have 'grid' class`, async () => {
    await fixture.whenStable();
    const mainEl = fixture.debugElement.query(By.css(`main`));
    expect(mainEl.nativeElement.classList.contains(`grid`)).toBeTrue();
  });

  it('Should show one year button filter', async () => {
    component.years = [{ label: '2020', value: 2020 }];
    fixture.detectChanges();
    await fixture.whenStable();

    const firstYearButton = fixture.nativeElement.querySelector(
      `.grid-btn-cols .filter-btn`
    );

    expect(firstYearButton.textContent.trim()).toBe(`2020`);
  });

  it('Should show one list item', async () => {
    component.launches = launches;
    fixture.detectChanges();
    fixture.whenStable();
    const listItems = fixture.debugElement.queryAll(
      By.css(`.pictures-grid .picture-card`)
    );
    expect(listItems.length).toBe(1);
  });

  it('Should show no record exists if no data', () => {
    component.launches = [];
    fixture.detectChanges();

    const text = fixture.debugElement.query(By.css(`.pictures-grid p`))
      .nativeElement.textContent;

    expect(text).toContain(`No record exists for the selected filter.`);
  });
});

const launches = [
  {
    mission_name: 'FalconSat',
    flight_number: 1,
    mission_id: ['mission 1'],
    mission_patch_small: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    launch_year: '2020',
    launch_success: 'Not Applicable',
    land_success: 'Not Applicable',
  },
];

export class SpacexlaunchServiceStub {
  years = [];
  launches: Array<any>;
  getLaunches(): Observable<Array<any>> {
    return of([]);
  }
}
