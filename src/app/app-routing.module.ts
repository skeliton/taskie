import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskingModule } from './tasking/tasking.module';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./tasking/tasking.module').then((m) => m.TaskingModule),
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
