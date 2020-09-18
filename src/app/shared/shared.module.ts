import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  imports: [],
  exports: [CommonModule, SpinnerComponent],
  declarations: [SpinnerComponent],
  providers: [],
})
export class SharedModule {}
