import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { UserService } from './data/user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
  ],
  providers: [
    UserService,
  ],
  declarations: [
    UserComponent,
  ]
})
export class UserModule { }
