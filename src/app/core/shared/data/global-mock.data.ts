import { InMemoryDbService, InMemoryBackendConfig } from 'angular-in-memory-web-api';

import { IMenuItem } from './../models/menu-item.interface';

export class GlobalData implements InMemoryDbService, InMemoryBackendConfig {
  createDb() {
    return {
      'primary-menu-items': this.primaryMenuItems(),
    };
  }

  private primaryMenuItems(): IMenuItem[] {
    return [
      {
        'label': 'Dashboard',
        'path': '/dashboard',
      },
    ];
  }
}
