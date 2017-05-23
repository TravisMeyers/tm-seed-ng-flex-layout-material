import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { UserModule } from './user/user.module';

// *** DO NOT USE IN PRODUCTION ***
// Imports for loading & configuring the in-memory web api.
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { GlobalData } from './shared/data/global-mock.data';

@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(GlobalData, { delay: 1000 }),
    SharedModule,
    LayoutModule,
    UserModule,
    AppRoutingModule // *** This MUST always be the last import. Or child routes won't work. ***
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
