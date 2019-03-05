import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatTabGroup } from '@angular/material';

@NgModule({
  declarations: [ DashboardComponent ],
  imports: [
    CommonModule,
    MatTabGroup
  ]
})
export class DashboardModule {
}
