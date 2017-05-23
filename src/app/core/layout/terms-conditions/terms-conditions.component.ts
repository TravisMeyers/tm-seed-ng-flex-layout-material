import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LoggerService } from 'app/core/shared/services/logger.service';

@Component({
  templateUrl: './terms-conditions.component.html',
  styleUrls: [ './terms-conditions.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TermsConditionsComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('[Layout.TermsConditionsComponent] Initialized!', this);
  }

}
