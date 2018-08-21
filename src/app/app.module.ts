import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRouterModule} from './app.router.module';
import {AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {GlobalService} from './common/services/global.service';
import {ReqService} from './common/services/req.service';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {LoginGuard} from './common/guard/login.guard';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    GlobalService,
    ReqService,
    LoginGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
