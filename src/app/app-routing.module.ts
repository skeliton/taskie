import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './user/guards/auth-guard.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'groups',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./task-group-list/task-group-list.module').then(
        (m) => m.TaskGroupListModule
      ),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./tasking/tasking.module').then((m) => m.TaskingModule),
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
