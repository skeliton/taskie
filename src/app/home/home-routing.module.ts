import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'signin-callback', component: SigninRedirectCallbackComponent },
  { path: 'signout-callback', component: SignoutRedirectCallbackComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
