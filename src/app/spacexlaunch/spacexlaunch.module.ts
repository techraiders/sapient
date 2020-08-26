import { NgModule } from '@angular/core';
import { SpacexlaunchComponent } from './spacexlaunch.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '', component: SpacexlaunchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [SpacexlaunchComponent],
  providers: [],
})
export class SpacexlaunchModule {}
