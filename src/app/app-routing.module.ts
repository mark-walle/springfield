import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';

const routes: Routes = [
  // { path: '', redirectTo: '/form', pathMatch: 'full' },
  // { path: 'form', component: DashboardComponent },
  { path: '' },
  { path: 'admin', component: ContactListComponent },
  { path: 'form', component: ContactDetailsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
