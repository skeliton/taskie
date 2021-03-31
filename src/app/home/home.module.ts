import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MainComponent } from './main/main.component';
import { SigninRedirectCallbackComponent } from './redirects/signin-redirect-callback.component';
import { SignoutRedirectCallbackComponent } from './redirects/signout-redirect-callback.component';


@NgModule({
  declarations: [MainComponent, SigninRedirectCallbackComponent, SignoutRedirectCallbackComponent],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
