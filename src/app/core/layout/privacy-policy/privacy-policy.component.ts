import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LoggerService } from 'app/core/shared/services/logger.service';

@Component({
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class PrivacyPolicyComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('[Layout.PrivacyPolicyComponent] Initialized!', this);
  }

}
