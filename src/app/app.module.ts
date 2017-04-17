import { NgModule, NgModuleFactoryLoader } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { UsersModule } from './users/users.module';

import { AppComponent } from './app.component';
import { AppService } from './app.service';

import { routing } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    SharedModule.forRoot(),
    DashboardModule,
    UsersModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
