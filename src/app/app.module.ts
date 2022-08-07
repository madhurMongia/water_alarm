import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { DashboardComponent } from './views/main/dashboard/dashboard.component';
import { AuthHeaderComponent } from './components/navbars/auth-header/auth-header.component';
import { MainHeaderComponent } from './components/navbars/main-header/main-header.component';
import { AuthComponent } from './previews/auth/auth.component';
import { HttpClientModule } from '@angular/common/http'; 
import { NgHttpLoaderModule } from 'ng-http-loader';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './previews/main/main.component';
import { TankCardComponent } from './components/tank-card/tank-card.component';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { HistoryComponent } from './components/history/history.component';
import { AddTankComponent } from './components/add-tank/add-tank.component';

PlotlyModule.plotlyjs = PlotlyJS;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AuthHeaderComponent,
    MainHeaderComponent,
    AuthComponent,
    MainComponent,
    TankCardComponent,
    HistoryComponent,
    AddTankComponent
  ],
  imports: [
    BrowserModule,
    PlotlyModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
