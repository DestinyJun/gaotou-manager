import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutersModule} from './home.routers.module';
import {HomeComponent} from './home.component';
import {HeaderComponent} from './header/header.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {FooterComponent} from './footer/footer.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ButtonModule, DialogModule, InputTextModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';


@NgModule({
  imports: [
    CommonModule,
    HomeRoutersModule,
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    DialogModule,
    ButtonModule,
    TableModule,
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: []
})
export class HomeModule {}
