import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSportsService } from './services/user-sports.service';
import { ApiService } from './services/api-service.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MockInterceptor } from './interceptors';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { TableService } from './services/table.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [
    UserSportsService,
    TableService,
    ApiService,
    {provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true},
  ]
})
export class CoreModule { }
