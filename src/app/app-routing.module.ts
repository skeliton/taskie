import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskingModule } from './tasking/tasking.module';

const routes: Routes = [  {
  path: '',
  loadChildren: () => import('./tasking/tasking.module').then(m => m.TaskingModule)
},
 { path: '**', component: TaskingModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
