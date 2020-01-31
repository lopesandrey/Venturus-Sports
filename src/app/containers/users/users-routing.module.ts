import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: 'src/app/containers/users/list/list.module#ListModule',
  },
  {
    path: 'users/new',
    loadChildren: 'src/app/containers/users/create/create.module#CreateModule',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
