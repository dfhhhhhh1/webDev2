// import { Routes } from '@angular/router';

// export const routes: Routes = [];


// import { Routes } from '@angular/router';
// import { Body1Component } from './components/body1/body1.component';
// import { Body2Component } from './components/body2/body2.component';

// export const appRoutes: Routes = [
//   { path: 'body1', component: Body1Component },
//   { path: 'body2', component: Body2Component },
//   { path: '', redirectTo: '/body1', pathMatch: 'full' }
// ];

import { Routes } from '@angular/router';
import { Body1Component } from './components/body1/body1.component';
import { Body2Component } from './components/body2/body2.component';

export const appRoutes: Routes = [
  { path: 'body1', component: Body1Component },
  { path: 'body2', component: Body2Component },
  { path: '', redirectTo: '/body1', pathMatch: 'full' }
];

