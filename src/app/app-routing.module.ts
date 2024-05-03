import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ViewInventoryComponent } from './components/view-inventory/view-inventory.component';
import { AddInventoryComponent } from './components/add-inventory/add-inventory.component';
import { EditInventoryComponent } from './components/edit-inventory/edit-inventory.component';

import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-inventory', pathMatch: 'full' },
  { path: 'view-inventory', component: ViewInventoryComponent },
  { path: 'edit-inventory/:id', component: EditInventoryComponent },
  { path: 'add-inventory', component: AddInventoryComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
