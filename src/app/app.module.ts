import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import {HttpModule} from '@angular/http';

import { MyApp } from "./app.component";

import { ChartPage } from "../pages/chart/chart";
import { HomePage } from "../pages/home/home";
import { UsersPage } from "../pages/users/users";
import { NvD3Component } from "ng2-nvd3";
import { ChartModule } from 'angular2-highcharts'; 

// d3 and nvd3 should be included somewhere
import "d3";
import "nvd3";

@NgModule({
  declarations: [ChartPage, UsersPage, MyApp, HomePage, NvD3Component],
  imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpModule, ChartModule.forRoot(require('highcharts/highstock')) ], 
  bootstrap: [IonicApp],
  entryComponents: [ChartPage, UsersPage, MyApp, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
