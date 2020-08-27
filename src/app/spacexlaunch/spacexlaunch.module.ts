import { NgModule } from '@angular/core';
import { SpacexlaunchComponent } from './spacexlaunch.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SpacexlaunchService } from './spacexlaunch.service';

const routes: Routes = [{ path: '', component: SpacexlaunchComponent }];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SpacexlaunchComponent],
  providers: [SpacexlaunchService],
})
export class SpacexlaunchModule {}
