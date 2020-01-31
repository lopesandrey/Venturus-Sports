import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSportsService } from './services/user-sports.service';
import { ApiService } from './services/api-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserSportsService,
    ApiService,
  ]
})
export class CoreModule { }
