import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainersRoutingModule } from './containers-routing.module';
import { ContainersComponent } from './containers.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { BannerComponent } from './components/banner/banner.component';
import { DeleteComponent } from './components/modal/delete/delete.component';
import { BannerHelpComponent } from './components/banner-help/banner-help.component';

@NgModule({
  declarations: [ContainersComponent, HeaderComponent, BreadcrumbComponent, BannerComponent, BannerHelpComponent],
  imports: [
    SharedModule,
    ContainersRoutingModule
  ],
  exports: [
    BannerHelpComponent,
  ]
})
export class ContainersModule { }
