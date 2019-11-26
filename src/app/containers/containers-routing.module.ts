import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainersComponent } from './containers.component';

const routes: Routes = [
  {
    path: '',
    component: ContainersComponent,
    children: [
      {
        path: '',
        loadChildren: 'src/app/containers/users/users.module#UsersModule'
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContainersRoutingModule { }
