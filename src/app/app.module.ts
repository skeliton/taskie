import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { TaskingModule } from './tasking/tasking.module';
import { ToolbarComponent } from './navs/toolbar/toolbar.component';
import { MainSideNavComponent } from './navs/main-side-nav/main-side-nav.component';
import { GroupSideNavComponent } from './navs/group-side-nav/group-side-nav.component';
import { UserModule } from './user/user.module';
import { TaskGroupListModule } from './task-group-list/task-group-list.module';
import { Constants } from './constants';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { TestData } from './services/test-data';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainSideNavComponent,
    GroupSideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientInMemoryWebApiModule.forRoot(TestData),
    SharedModule,
    TaskingModule,
    UserModule,
    TaskGroupListModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({name:"Taskie", maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
