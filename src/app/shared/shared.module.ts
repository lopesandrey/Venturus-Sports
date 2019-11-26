import { ModuleWithProviders, NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const BASE_MODULES: any = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...BASE_MODULES,
  ],
  exports: [
    ...BASE_MODULES,
  ],
})
export class SharedModule {}
