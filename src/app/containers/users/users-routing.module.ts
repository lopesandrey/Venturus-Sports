import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/containers/users/list/list.module').then(m => m.ListModule),
  },
  {
    path: 'new',
    loadChildren: () => import('src/app/containers/users/create/create.module').then(m => m.CreateModule),
  },
  {
    path: 'posts/:id',
    loadChildren: () => import('src/app/containers/users/posts/posts.module').then(m => m.PostsModule),
  },
  {
    path: 'albums/:id',
    loadChildren: () => import('src/app/containers/users/albums/albums.module').then(m => m.AlbumsModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
