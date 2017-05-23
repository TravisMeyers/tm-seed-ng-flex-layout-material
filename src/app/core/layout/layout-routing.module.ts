import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent, data: { title: 'About' } },
  { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard' } },
  { path: 'feedback', component: FeedbackComponent, data: { title: 'Feedback' } },
  { path: 'privacy-policy', component: PrivacyPolicyComponent, data: { title: 'Privacy Policy' } },
  { path: 'terms-conditions', component: TermsConditionsComponent, data: { title: 'Terms and Conditions' } },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class LayoutRoutingModule { }
