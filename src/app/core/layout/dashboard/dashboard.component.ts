import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { LoggerService } from '../../shared/services/logger.service';
import { environment } from './../../../../environments/environment';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardComponent implements OnInit {
  applicationTitle: string;

  tiles = [
    { text: 'One' },
    { text: 'Two' },
    { text: 'Three' },
    { text: 'Four' },
  ];

  constructor(private logger: LoggerService, public snackBar: MdSnackBar) { }

  ngOnInit() {
    this.applicationTitle = environment.application.title;
    this.logger.log('[Layout.DashboardComponent] Initialized!', this);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
}
