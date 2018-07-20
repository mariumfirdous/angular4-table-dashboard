import { FormsModule } from '@angular/forms';

import { DataPassService } from './data-pass.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import {MatDialogModule} from "@angular/material";
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';



import { AppComponent } from './app.component';
import { TopnavigationComponent } from './topnavigation/topnavigation.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { FusionchartComponent } from './fusionchart/fusionchart.component';
import { FusionChartsModule } from 'angular4-fusioncharts';
import { CustomerTableComponent } from './customer-table/customer-table.component';
import { GraphModalComponent } from './graph-modal/graph-modal.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { StatsComponent } from './stats/stats.component';
import { PopupComponent } from './popup/popup.component';
import { PopupTableComponent } from './popup-table/popup-table.component';


const appRoutes: Routes = [
  { path: '', component: TopnavigationComponent },

];


@NgModule({
  declarations: [
    AppComponent,
    TopnavigationComponent,
    SidemenuComponent,
    FusionchartComponent,
    CustomerTableComponent,
    GraphModalComponent,
    PieChartComponent,
    StatsComponent,
    PopupComponent,
    PopupTableComponent
    
   
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FusionChartsModule.forRoot(FusionCharts, Charts, FintTheme,PowerCharts),
    MatDialogModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
    

  ],
  providers: [DataPassService],
  bootstrap: [AppComponent],
  entryComponents: [PopupComponent, PopupTableComponent]
})
export class AppModule { }
