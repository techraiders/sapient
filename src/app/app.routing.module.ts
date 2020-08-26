import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'spacex-launch', pathMatch: 'full' },
  {
    path: 'spacex-launch',
    loadChildren: () =>
      import('./spacexlaunch/spacexlaunch.module').then(
        (m) => m.SpacexlaunchModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
  declarations: [],
  providers: [],
})
export class AppRoutingModule {}
