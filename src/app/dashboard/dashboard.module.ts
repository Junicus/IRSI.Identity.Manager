import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from './dashboard.service';
import { DashboardFilterPipe } from '../shared/pipes/dashboardFilter.pipe';

@NgModule({
  imports: [BrowserModule, SharedModule],
  declarations: [DashboardComponent, DashboardFilterPipe],
  providers: [DashboardService]
})
export class DashboardModule { }
