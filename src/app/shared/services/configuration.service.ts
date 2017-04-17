import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs, RequestMethod, Headers } from '@angular/http';
import { IConfiguration } from '../models/configuration.model';
import { StorageService } from './storage.service';
import { environment } from '../../../environments/environment';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ConfigurationService {
  serverSettings: IConfiguration;
  private settingsLoadedSource = new Subject();
  settingsLoaded$ = this.settingsLoadedSource.asObservable();
  isReady: boolean = false;

  constructor(private http: Http, private storageService: StorageService, ) { }

  load() {
    this.serverSettings = environment.serverSettings;

    this.storageService.store('identityUrl', this.serverSettings.identityUrl);
    this.storageService.store('usersUrl', this.serverSettings.usersUrl);

    this.isReady = true;
    this.settingsLoadedSource.next();

    //this.http.get(url).subscribe((response: Response) => {
    //  console.log('server settings loaded');
    //  this.serverSettings = response.json();
    //  console.log(this.serverSettings);
    //  this.storageService.store('identityUrl', this.serverSettings.identityUrl);
    //  this.storageService.store('usersUrl', this.serverSettings.usersUrl);
    //  this.isReady = true;
    //  this.settingsLoadedSource.next();
    //});
  }
}
