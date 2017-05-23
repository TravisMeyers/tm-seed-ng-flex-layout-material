import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

import { LoggerService } from 'app/core/shared/services/logger.service';

@Component({
  templateUrl: './page-not-found.component.html',
  styleUrls: [ './page-not-found.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class PageNotFoundComponent implements OnInit {

  constructor(private logger: LoggerService) { }

  ngOnInit() {
    this.logger.log('[Layout.PageNotFoundComponent] Initialized!', this);
  }

}
