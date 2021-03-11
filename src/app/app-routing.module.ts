import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'groups',
    loadChildren: () =>
      import('./task-group-list/task-group-list.module').then(
        (m) => m.TaskGroupListModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./tasking/tasking.module').then((m) => m.TaskingModule),
  },
  {
    path: 'profile',
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
