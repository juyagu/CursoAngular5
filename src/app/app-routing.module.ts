import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrivenComponent } from './driven/driven.component';
import { ReactiveComponent } from './reactive/reactive.component';

const routes: Routes = [
  { path: '', component: DrivenComponent},
  { path: 'driven', component: DrivenComponent},
  { path: 'reactive', component: ReactiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
