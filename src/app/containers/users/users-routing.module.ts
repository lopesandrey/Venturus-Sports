import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/containers/users/list/list.module#ListModule',
  },
  {
    path: 'new',
    loadChildren: 'src/app/containers/users/create/create.module#CreateModule',
  },
  {
    path: 'posts/:id',
    loadChildren: 'src/app/containers/users/posts/posts.module#PostsModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
