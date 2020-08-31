import { Component, PLATFORM_ID, Inject, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { SharedService } from './shared/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'navneet';
  loading;

  constructor(@Inject(PLATFORM_ID) private platformId, private sharedService: SharedService) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      console.log('platform is browser');
    } else {
      console.log('platform is not browser');
    }
    this.loading = this.sharedService.loading;
  }
}
