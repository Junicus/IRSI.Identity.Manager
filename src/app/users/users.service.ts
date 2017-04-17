import { Injectable } from '@angular/core';
import { Response } from '@angular/http';

import { SecurityService } from '../shared/services/security.service';
import { DataService } from '../shared/services/data.service';
import { ConfigurationService } from '../shared/services/configuration.service';

import { IUser } from '../shared/models/user.model';
import { IClaim } from '../shared/models/claim.model';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {
  private usersUrl: string = '';

  constructor(private service: DataService, private identityService: SecurityService, private configrationService: ConfigurationService) {
    if (this.configrationService.isReady)
      this.usersUrl = this.configrationService.serverSettings.usersUrl;
    else
      this.configrationService.settingsLoaded$.subscribe(x => this.usersUrl = this.configrationService.serverSettings.usersUrl);
  }

  getUsers(): Observable<IUser[]> {
    let url = this.usersUrl + '/api/users';
    return this.service.get(url).map((response: Response) => {
      return response.json();
    });
  }

  getUser(id: string): Observable<IUser> {
    let url = `${this.usersUrl}/api/users/${id}`;
    console.log(url);
    return this.service.get(url).map((response: Response) => {
      return response.json();
    });
  }

  getUserClaims(id: string): Observable<IClaim[]> {
    let url = `${this.usersUrl}/api/users/${id}/claims`;
    console.log(url);
    return this.service.get(url).map((response: Response) => {
      return response.json();
    });
  }
}
