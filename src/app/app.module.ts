import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatSidenavModule,
  MatButtonModule,
  MatTabsModule
} from '@angular/material';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AppRoutingModule} from './app-routing.module';
import {AboutModule} from './about/about.module';
import {ContactModule} from './contact/contact.module';
import {SidenavComponent} from './sidenav/sidenav.component';
import { IdGeneratorComponent } from './id-generator/id-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    IdGeneratorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    AboutModule,
    ContactModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  exports: [MatTabsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
