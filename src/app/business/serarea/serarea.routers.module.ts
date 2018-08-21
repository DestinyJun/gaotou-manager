import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SerareaComponent} from './serarea.component';
const mainRoutes: Routes = [
  {path: '', component: SerareaComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  providers: []
})
export class SerareaRoutersModule {}
