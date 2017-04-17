import { Title } from '@angular/platform-browser';
import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { DataService } from './shared/services/data.service';
import { SecurityService } from './shared/services/security.service';
import { ConfigurationService } from './shared/services/configuration.service';

@Component({
  selector: 'idm-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private Authenticated: boolean = false;
  subscription: Subscription;

  constructor(
    private titleService: Title,
    private securityService: SecurityService,
    private configurationService: ConfigurationService
  ) {
    this.Authenticated = this.securityService.IsAuthorized;
  }

  ngOnInit(): void {
    this.subscription = this.securityService.authenticationChallenge$.subscribe(res=>this.Authenticated = res);
    this.configurationService.load();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle("Identity Manager");
  }
}
