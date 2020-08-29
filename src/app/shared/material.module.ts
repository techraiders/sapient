import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
];

@NgModule({
  imports: [],
  exports: materialModules,
  declarations: [],
  providers: [],
})
export class MaterialModule {}
