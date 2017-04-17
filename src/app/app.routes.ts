import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
//import { UsersNewComponent } from './users/users-new/users-new.component';
//import { RolesComponent } from './roles/roles.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'users', component: UsersComponent },
//  { path: 'user', component: UsersNewComponent },
//  { path: 'roles', component: RolesComponent }
];

export const routing = RouterModule.forRoot(routes);
