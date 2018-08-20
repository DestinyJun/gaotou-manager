import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LimitComponent} from './limit.component';
const mainRoutes: Routes = [
  {path: '', component: LimitComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  providers: []
})
export class LimitRoutersModule {}
