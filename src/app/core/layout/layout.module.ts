import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgModule } from '@angular/core';

import { SharedModule } from 'app/core/shared/shared.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutShellComponent } from './shell/shell.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutRoutingModule,
    SharedModule,
  ],
  declarations: [
    DashboardComponent,
    LayoutShellComponent,
    FeedbackComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    AboutComponent,
  ],
  exports: [
    LayoutShellComponent,
  ]
})
export class LayoutModule { }
