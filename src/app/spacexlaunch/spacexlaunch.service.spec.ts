import { TestBed } from '@angular/core/testing';

import { SpacexlaunchService } from './spacexlaunch.service';

describe('SpacexlaunchService', () => {
  let service: SpacexlaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpacexlaunchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
