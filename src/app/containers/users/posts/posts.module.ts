import { NgModule } from '@angular/core';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [
    PostsRoutingModule,
    SharedModule
  ]
})
export class PostsModule { }
