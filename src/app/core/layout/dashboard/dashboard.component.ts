import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

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

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.applicationTitle = environment.application.title;
    this.logger.log('[Layout.DashboardComponent] Initialized!', this);
  }
}
