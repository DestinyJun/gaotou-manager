import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgComponent } from './org.component';
import {OrgRoutersModule} from './org.routers.module';
import {SharedModule} from '../../common/shared.module';
import {ButtonModule, ConfirmDialogModule, DialogModule, DropdownModule, TreeTableModule} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import { OrgService } from '../../common/services/org.service';

@NgModule({
  imports: [
    CommonModule,
    OrgRoutersModule,
    SharedModule,
    ConfirmDialogModule,
    DialogModule,
    DropdownModule,
    TreeTableModule,
    TableModule,
    ButtonModule,
    FormsModule,


  ],
  declarations: [OrgComponent],
  providers: [OrgService]
})
export class OrgModule { }
