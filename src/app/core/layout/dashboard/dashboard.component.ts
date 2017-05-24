import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LoggerService } from '../../shared/services/logger.service';

@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class DashboardComponent implements OnInit {
  isDarkTheme = false;
  nickname = {
    characterCount: 20,
  };
  progress = 56;

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('[Layout.DashboardComponent] Initialized!', this);
  }
}
