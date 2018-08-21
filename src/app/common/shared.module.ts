import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { STableComponent } from './components/s-table/s-table.component';
import { SButtonComponent } from './components/s-button/s-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [STableComponent, SButtonComponent]
})
export class SharedModule { }
