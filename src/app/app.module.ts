import {BrowserModule} from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
import { TimerComponent } from './timer/timer.component';
import { PeopleComponent } from './people/people.component';
import { PeopleService } from './people/people.service';
import {RxExamplesModule} from './rx-examples/rx-examples.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidenavComponent,
    IdGeneratorComponent,
    TimerComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    RxExamplesModule,
    AboutModule,
    ContactModule,
    MatSidenavModule,
    AppRoutingModule
  ],
  exports: [MatTabsModule],
  providers: [ PeopleService ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
