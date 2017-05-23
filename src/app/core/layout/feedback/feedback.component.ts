import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LoggerService } from 'app/core/shared/services/logger.service';

@Component({
  templateUrl: './feedback.component.html',
  styleUrls: [ './feedback.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class FeedbackComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('[Layout.FeedbackComponent] Initialized!', this);
  }

}
