import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LoggerService } from 'app/core/shared/services/logger.service';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class AboutComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('[Layout.AboutComponent] Initialized!', this);
  }

}
