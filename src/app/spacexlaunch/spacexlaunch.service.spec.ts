import { TestBed } from '@angular/core/testing';
import { SpacexlaunchService } from './spacexlaunch.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SpacexlaunchService', () => {
  let service: SpacexlaunchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpacexlaunchService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(SpacexlaunchService);
  });

  it('Should have 15 years', () => {
    expect(service.years.length).toBe(15);
  });

  it(`Should have last year ${new Date().getFullYear()}`, () => {
    expect(service.years[service.years.length - 1].value).toBe(
      new Date().getFullYear()
    );
    expect(service.years[service.years.length - 1].label).toBe(
      `${new Date().getFullYear()}`
    );
  });

  it(`Shoud start years from ${new Date().getFullYear() - 14}`, () => {
    expect(service.years[0].label).toBe(`${new Date().getFullYear() - 14}`);
    expect(service.years[0].value).toBe(new Date().getFullYear() - 14);
  });
});
