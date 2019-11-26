import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';

@NgModule({
  declarations: [ContainersComponent],
  imports: [
    CommonModule,
    ContainersRoutingModule
  ]
})
export class ContainersModule { }
