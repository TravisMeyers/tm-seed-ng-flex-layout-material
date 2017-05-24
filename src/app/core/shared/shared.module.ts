import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { LoggerService } from './services/logger.service';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
  ],
  providers: [
    LoggerService,
  ],
  declarations: []
})
export class SharedModule { }
