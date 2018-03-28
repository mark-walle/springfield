import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contacts/contact-list/contact-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/form', pathMatch: 'full' },
  // { path: 'form', component: DashboardComponent },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'admin', component: ContactListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
