import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrgComponent} from './org.component';
const mainRoutes: Routes = [
  {path: '', component: OrgComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  providers: []
})
export class OrgRoutersModule {}
