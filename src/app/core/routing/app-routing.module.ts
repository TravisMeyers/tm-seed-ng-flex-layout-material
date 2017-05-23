import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectiveStrategy } from './selective-strategy.service';
import { PageNotFoundComponent } from '../layout/page-not-found/page-not-found.component';

const routes: Routes = [
  // ToDo: Get list of modules that we want to lazy-load at build/deploy/run time?
  { path: 'user', loadChildren: '../user/user.module#UserModule' },

  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  // ToDo: Create a full-fledged exception handling module or, at least, a better 404 design.
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent, data: { title: 'Oops!' } },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { preloadingStrategy: SelectiveStrategy, enableTracing: false }) ],
  declarations: [ PageNotFoundComponent ],
  providers: [ SelectiveStrategy ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
