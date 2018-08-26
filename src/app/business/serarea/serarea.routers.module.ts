import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SerareaSernumComponent} from './serarea-sernum/serarea-sernum.component';
import {SerareaFieldsComponent} from './serarea-fields/serarea-fields.component';
const mainRoutes: Routes = [
  {path: 'sernum', component: SerareaSernumComponent},
  {path: 'fields', component: SerareaFieldsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [RouterModule],
  providers: []
})
export class SerareaRoutersModule {}
