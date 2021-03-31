import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
//import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { ProfileComponent } from './profile/profile.component';
import { StoreModule } from '@ngrx/store';
import { UserEffects } from './state/user.effects';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './state/user.reducer';

@NgModule({
  declarations: [
    //LoginComponent,
    ProfileComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature('user', userReducer),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserModule {}
