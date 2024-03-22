import { Routes } from '@angular/router';
import {ContactsComponent} from "./contacts/contacts.component";
import {FAQComponent} from "./faq/faq.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AccountComponent} from "./account/account.component";
import {filterAccessToAccountGuard} from "./guards/filter-access-to-account.guard";

export const routes: Routes = [
  {
    path:'',
    component: AccountComponent,
  },
  {
    path:'account/:id',
    component: AccountComponent,
    canActivate: [filterAccessToAccountGuard],
  },
  {
    path :'contacts',
    component : ContactsComponent,
  },
  {
    path :'faq',
    component: FAQComponent,
  },
  {
    path:'**',
    component: NotFoundComponent,
  }
];
