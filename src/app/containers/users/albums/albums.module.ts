import { NgModule } from '@angular/core';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AlbumsComponent],
  imports: [
    SharedModule,
    AlbumsRoutingModule
  ]
})
export class AlbumsModule { }
