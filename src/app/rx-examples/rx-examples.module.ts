import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactRoutingModule } from './rx-examples.routing.module';
import { RxExamplesComponent } from './rx-examples.component';

@NgModule({
  declarations: [RxExamplesComponent],
  imports: [
    CommonModule,
    ContactRoutingModule
  ]
})
export class RxExamplesModule { }
