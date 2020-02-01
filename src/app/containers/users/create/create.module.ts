import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContainersModule } from '../../containers.module';

@NgModule({
  declarations: [CreateComponent],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SharedModule,
    ContainersModule,
  ]
})
export class CreateModule { }
