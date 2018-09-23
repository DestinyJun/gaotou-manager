import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyService } from '../../common/services/company.service';
import { CompanyComponent } from './company.component';
import {CompanyRoutersModule} from './company.routers.module';
import {SharedModule} from '../../common/shared.module';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {FormsModule} from '@angular/forms';
import {ConfirmDialogModule, DialogModule, DropdownModule, TreeTableModule} from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    CompanyRoutersModule,
    SharedModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    TreeTableModule,
  ],
  declarations: [CompanyComponent],
  providers: [CompanyService]
})
export class CompanyModule { }
