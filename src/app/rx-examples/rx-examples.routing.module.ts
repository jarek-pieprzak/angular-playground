import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RxExamplesComponent} from './rx-examples.component';


const routes: Routes = [{
  path: 'rx-examples',
  component: RxExamplesComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class ContactRoutingModule { }
