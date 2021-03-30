import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SharedModule } from '../shared/shared.module';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { UserListEffects } from './state/user.effects';
import { userReducer } from './state/user.reducer';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: ProfileComponent },
];

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('user', { userReducer }),
    EffectsModule.forFeature([UserListEffects])
  ],
  exports: [RouterModule],
})
export class UserRoutingModule {}
