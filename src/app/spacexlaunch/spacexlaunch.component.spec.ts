import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpacexlaunchComponent } from './spacexlaunch.component';

describe('SpacexlaunchComponent', () => {
  let component: SpacexlaunchComponent;
  let fixture: ComponentFixture<SpacexlaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpacexlaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpacexlaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
