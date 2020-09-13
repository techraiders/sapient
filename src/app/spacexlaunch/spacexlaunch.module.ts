import { NgModule } from '@angular/core';
import { SpacexlaunchComponent } from './spacexlaunch.component';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { SpacexlaunchService } from './spacexlaunch.service';
import { SpacexResolveGuard } from './spacexlaunch.resolver';

const routes: Routes = [
  {
    path: '',
    component: SpacexlaunchComponent,
    resolve: { launches: SpacexResolveGuard },
  },
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SpacexlaunchComponent],
  providers: [SpacexlaunchService, SpacexResolveGuard],
})
export class SpacexlaunchModule {}
