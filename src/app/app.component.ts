import { Component, PLATFORM_ID, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SharedService } from './shared/shared.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'SpacEx Launch Programs';
  loading$;

  constructor(
    @Inject(PLATFORM_ID) private platformId,
    private ss: SharedService
  ) {
    this.loading$ = this.ss.loading$;
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('platform is browser');
    } else {
      console.log('platform is not browser');
    }
  }
}
