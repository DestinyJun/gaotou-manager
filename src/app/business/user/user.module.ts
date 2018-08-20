import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import {UserRoutersModule} from './user.routers.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutersModule
  ],
  declarations: [UserComponent]
})
export class UserModule { }
