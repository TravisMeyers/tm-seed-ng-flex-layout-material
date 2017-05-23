import { Component, OnInit } from '@angular/core';

import { LoggerService } from 'app/core/shared/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements OnInit {

  constructor(private logger: LoggerService) {
  }

  ngOnInit(): void {
    this.logger.log('[Core.AppComponent] Initialized!', this);
  }
}
