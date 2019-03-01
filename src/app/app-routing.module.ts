import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IdGeneratorComponent } from './id-generator/id-generator.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: DashboardComponent
  },
  {
    path: 'idGenerator',
    pathMatch: 'full',
    component: IdGeneratorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
