import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', {}),
  ],
})
export class UserModule {}
