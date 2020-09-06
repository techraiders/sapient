import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from "@angular/material/snack-bar";

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSnackBarModule
];

@NgModule({
  imports: [],
  exports: materialModules,
  declarations: [],
  providers: [],
})
export class MaterialModule {}
