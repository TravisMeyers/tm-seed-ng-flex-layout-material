import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { LayoutMaterialModule } from './layout-material.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from 'app/core/shared/shared.module';

import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LayoutShellComponent } from './shell/shell.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutMaterialModule,
    LayoutRoutingModule,
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
