import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home.component';
const homeRoutes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'main', pathMatch: 'full'},
      {path: 'main', loadChildren: 'app/business/main/main.module#MainModule'},
      {path: 'area', loadChildren: 'app/business/area/area.module#AreaModule'},
      {path: 'org', loadChildren: 'app/business/org/org.module#OrgModule'},
      {path: 'user', loadChildren: 'app/business/user/user.module#UserModule'},
      {path: 'limit', loadChildren: 'app/business/limit/limit.module#LimitModule'},
      {path: 'serarea', loadChildren: 'app/business/serarea/serarea.module#SerareaModule'},
      {path: 'store', loadChildren: 'app/business/store/store.module#StoreModule'},
      {path: 'intercept', loadChildren: 'app/business/intercept/intercept.module#InterceptModule'},
      {path: 'videom', loadChildren: 'app/business/videom/videom.module#VideomModule'},
      {path: 'cash', loadChildren: 'app/business/cash/cash.module#CashModule'},
      {path: 'system', loadChildren: 'app/business/system/system.module#SystemModule'},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule],
  providers: []
})
export class HomeRoutersModule {}
