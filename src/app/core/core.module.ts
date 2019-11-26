import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSportsService } from './services/user-sports.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserSportsService,
  ]
})
export class CoreModule { }
