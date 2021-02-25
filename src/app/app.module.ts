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

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainSideNavComponent,
    GroupSideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TaskingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
