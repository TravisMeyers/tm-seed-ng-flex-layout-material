import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';

import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { environment } from './../../../../environments/environment';
import { LoggerService } from '../../shared/services/logger.service';

@Component({
  selector: 'app-layout-shell',
  templateUrl: './shell.component.html',
  styleUrls: [ './shell.component.scss' ],
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.Default
})
export class LayoutShellComponent implements OnInit {
  isBusy: boolean;
  applicationTitle: string;
  logoSrc: string;
  username: string;
  userAvatarSource: string;
  primaryMenuItems: any[];
  currentYear: number;
  footerLinks: any[];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private titleService: Title,
              private logger: LoggerService) {
  }

  ngOnInit() {
    this.isBusy = false;
    this.applicationTitle = environment.application.title;
    this.logoSrc = environment.application.logoSource;
    this.userAvatarSource = environment.user.avatarSource;
    this.currentYear = new Date().getFullYear();
    // ToDo: Move observers into a shell service, backed by a store.
    this.onNavigationEnd();
    this.onPrimaryMenuItemsChanged();
    this.onUserInfoChanged();
    this.onFooterLinksChanged();
    this.logger.log('[Layout.LayoutShellComponent] Initialized!', this);
  }

  private onNavigationEnd(): void {
    // ToDo: Move the majority of this code into a router helper service method.
    // e.g. routerHelper.activeRoute.onNavigationEnd():Observable<ActivatedRoute>.
    /* Subscribe to the router's events observable,
     * so the following will run after every route completion:
     *   hide the busy indictor
     *   set the browser title
     */
    this.router.events
      // Filter for the navigation end event.
      // This ensures that resolve ran without errors.
      .filter(event => event instanceof NavigationEnd)
      // Only observe the active route.
      .map(() => this.route)
      // Traverse over the state tree to find the last activated route,
      // and then return it to the stream.
      .map(route => {
        while (route.firstChild) { route = route.firstChild; }
        return route;
      })
      // Send only the route data.
      .mergeMap(route => route.data)
      .subscribe((data) => {
        this.logger.log('[Layout.LayoutShellComponent] onNavigationEnd called!', { data });
        // Set the browser title using the platform browser title service.
        const currentTitle = this.titleService.getTitle();
        const title = `${environment.application.title} : ${data['title']}`;
        if (title !== currentTitle) {
          this.titleService.setTitle(title);
          this.logger.log('[Layout.LayoutShellComponent] Title set!', { title });
        }
        this.isBusy = false;
      });
  }

  private onNavigationStart(): void {
    // ToDo: Move the majority of this code into a router helper service method.
    // e.g. routerHelper.activeRoute.onNavigationStart():Observable<ActivatedRoute>.
    /* Subscribe to the router's events observable,
     * so the following will run after every route start:
     *   hide the busy indictor
     */
    this.router.events
      // Filter for the navigation start event.
      .filter(event => event instanceof NavigationStart)
      // Only observe the active route.
      .map(() => this.route)
      // Filter for primary route outlets.
      .filter(route => route.outlet === 'primary')
      .subscribe((route) => {
        this.isBusy = true;
        this.logger.log('[Layout.LayoutShellComponent] onNavigationStart called!', { route });
      });
  }

  private onPrimaryMenuItemsChanged(): void {
    // ToDo: Setup an observer on the primary menu items array.
    // ToDo: Research appliying i18n.
    this.primaryMenuItems = [
      {
        'label': 'Dashboard',
        'path': '/dashboard',
      },
    ];
  }

  private onFooterLinksChanged() {
    // ToDo: Setup an observer on the primary menu items array.
    // ToDo: Research appliying i18n.
    this.footerLinks = [
      {
        'label': 'About',
        'path': '/about',
      },
      {
        'label': 'Feedback',
        'path': '/feedback',
      },
      {
        'label': 'Privacy Policy',
        'path': '/privacy-policy',
      },
      {
        'label': 'Terms & Conditions',
        'path': '/terms-conditions',
      },
    ];
  }

  private onUserInfoChanged(): void {
    // ToDo: Subscribe to a user info observable (user service/store).
    // ToDo: Research appliying i18n?
    this.username = 'Alexander Meyers';
  }
}
