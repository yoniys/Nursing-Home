import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './comps/log-in/log-in.component';

import { ReactiveFormsModule, NgModel } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './comps/main/main.component';
import { WorkersListComponent } from './comps/workers-list/workers-list.component';
import { AddWorkerComponent } from './comps/add-worker/add-worker.component';
import { AddRecwestComponent } from './comps/add-recwest/add-recwest.component';
import { MonthListComponent } from './comps/month-list/month-list.component';
import { BarComponent } from './comps/bar/bar.component';
import { MainscreenComponent } from './comps/mainscreen/mainscreen.component';
import { HistoryComponent } from './comps/history/history.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    MainComponent,
    WorkersListComponent,
    AddWorkerComponent,
    AddRecwestComponent,
    MonthListComponent,
    BarComponent,
    MainscreenComponent,
    HistoryComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
