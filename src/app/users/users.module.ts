import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';
import { UsersComponent } from './users.component';
//import { UsersNewComponent } from './users-new/users-new.component';
import { UsersService } from './users.service';

//import { HeaderComponent } from '../shared/components/header/header.component';

//import { DataTableModule } from 'primeng/primeng';

@NgModule({
  imports: [BrowserModule, SharedModule,
    //   DataTableModule
  ],
  declarations: [UsersComponent,
    //  UsersNewComponent
  ],
  providers: [UsersService]
})
export class UsersModule { }
