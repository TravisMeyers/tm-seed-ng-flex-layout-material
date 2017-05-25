webpackJsonp([2,6],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutShellComponent; });







var LayoutShellComponent = (function () {
    function LayoutShellComponent(router, route, titleService, logger) {
        this.router = router;
        this.route = route;
        this.titleService = titleService;
        this.logger = logger;
    }
    LayoutShellComponent.prototype.ngOnInit = function () {
        this.applicationTitle = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].application.title;
        this.logoSrc = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].application.logoSource;
        this.userAvatarSource = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].user.avatarSource;
        this.hideBusyIndicator = true;
        this.hideAside = true;
        this.copyrightYear = new Date().getFullYear();
        // ToDo: Move observers into a shell service, backed by a store.
        // this.onNavigationStart();
        this.onNavigationEnd();
        this.onPrimaryMenuItemsChanged();
        this.onUserInfoChanged();
        this.onFooterLinksChanged();
        this.logger.log('[Layout.LayoutShellComponent] Initialized!', this);
    };
    LayoutShellComponent.prototype.onNavigationEnd = function () {
        var _this = this;
        // ToDo: Move the majority of this code into a router helper service method.
        // e.g. routerHelper.activeRoute.onNavigationEnd():Observable<ActivatedRoute>.
        /* Subscribe to the router's events observable,
         * so the following will run after every route completion:
         *   hide the busy indictor
         *   set the browser title
         */
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["y" /* NavigationEnd */]; })
            .map(function () { return _this.route; })
            .map(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            return route;
        })
            .mergeMap(function (route) { return route.data; })
            .subscribe(function (data) {
            // Hide busy indicator.
            _this.hideBusyIndicator = true;
            // Set the browser title using the platform browser title service.
            var currentTitle = _this.titleService.getTitle();
            var title = __WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].application.title + " : " + data['title'];
            if (title !== currentTitle) {
                _this.titleService.setTitle(title);
                _this.logger.log('[Layout.LayoutShellComponent] onNavigationEnd called!', { data: data });
            }
        });
    };
    LayoutShellComponent.prototype.onNavigationStart = function () {
        var _this = this;
        // ToDo: Move the majority of this code into a router helper service method.
        // e.g. routerHelper.activeRoute.onNavigationStart():Observable<ActivatedRoute>.
        /* Subscribe to the router's events observable,
         * so the following will run after every route start:
         *  hide the busy indictor (All backend access is during route data resolving).
         *
         *  ToDo: Implment a material busy indicator.
         */
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["z" /* NavigationStart */]; })
            .map(function () { return _this.route; })
            .filter(function (route) { return route.outlet === 'primary'; })
            .subscribe(function (route) {
            // hide busy indicator.
            _this.hideBusyIndicator = false;
            _this.logger.log('[Layout.LayoutShellComponent] onNavigationStart called!', { route: route });
        });
    };
    LayoutShellComponent.prototype.onPrimaryMenuItemsChanged = function () {
        // ToDo: Setup an observer on the primary menu items array.
        // ToDo: Research appliying i18n.
        this.primaryMenuItems = [
            {
                'label': 'Dashboard',
                'path': '/dashboard',
            },
        ];
    };
    LayoutShellComponent.prototype.onFooterLinksChanged = function () {
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
    };
    LayoutShellComponent.prototype.onUserInfoChanged = function () {
        // ToDo: Subscribe to a user info observable (user service/store).
        // ToDo: Research appliying i18n?
        this.username = 'Alexander Meyers';
    };
    LayoutShellComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_1__angular_router__["j" /* Router */] }, { type: __WEBPACK_IMPORTED_MODULE_1__angular_router__["v" /* ActivatedRoute */] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["l" /* Title */] }, { type: __WEBPACK_IMPORTED_MODULE_6__shared_services_logger_service__["a" /* LoggerService */] }]; };
    return LayoutShellComponent;
}());

//# sourceMappingURL=shell.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../user/user.module.ngfactory": [
		299,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 130;


/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_core_app_module_ngfactory__ = __webpack_require__(159);




if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_core_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component_scss_shim_ngstyle__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_user_user_component__ = __webpack_require__(50);
/* unused harmony export RenderType_UserComponent */
/* unused harmony export View_UserComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */



var styles_UserComponent = [__WEBPACK_IMPORTED_MODULE_0__user_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_UserComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_UserComponent,
    data: {}
});
function View_UserComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  user works!\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_UserComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'app-user', [], null, null, null, View_UserComponent_0, RenderType_UserComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_user_user_component__["a" /* UserComponent */], [], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var UserComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('app-user', __WEBPACK_IMPORTED_MODULE_2__app_core_user_user_component__["a" /* UserComponent */], View_UserComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvdXNlci91c2VyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS91c2VyL3VzZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvdXNlci91c2VyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvdXNlci91c2VyLmNvbXBvbmVudC50cy5Vc2VyQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPHA+XG4gIHVzZXIgd29ya3MhXG48L3A+XG4iLCI8YXBwLXVzZXI+PC9hcHAtdXNlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQUc7SUFFQzs7Ozs7O0lDRko7Z0JBQUE7OztJQUFBOzs7In0=
//# sourceMappingURL=user.component.ngfactory.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var UserService = (function () {
    function UserService() {
    }
    UserService.ctorParameters = function () { return []; };
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_component__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });

var routes = [
    {
        path: 'user',
        data: {
            title: 'User',
        },
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_0__user_component__["a" /* UserComponent */]
            },
        ]
    },
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    return UserRoutingModule;
}());

//# sourceMappingURL=user-routing.module.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layout_shell_shell_component_ngfactory__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_layout_shell_shell_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_core_app_component__ = __webpack_require__(175);
/* unused harmony export RenderType_AppComponent */
/* unused harmony export View_AppComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */








var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_0__app_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_AppComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_AppComponent,
    data: {}
});
function View_AppComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'app-layout-shell', [], null, null, null, __WEBPACK_IMPORTED_MODULE_2__layout_shell_shell_component_ngfactory__["a" /* View_LayoutShellComponent_0 */], __WEBPACK_IMPORTED_MODULE_2__layout_shell_shell_component_ngfactory__["b" /* RenderType_LayoutShellComponent */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_3__app_core_layout_shell_shell_component__["a" /* LayoutShellComponent */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["l" /* Title */],
            __WEBPACK_IMPORTED_MODULE_6__app_core_shared_services_logger_service__["a" /* LoggerService */]
        ], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
function View_AppComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'app-root', [], null, null, null, View_AppComponent_0, RenderType_AppComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_7__app_core_app_component__["a" /* AppComponent */], [__WEBPACK_IMPORTED_MODULE_6__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var AppComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('app-root', __WEBPACK_IMPORTED_MODULE_7__app_core_app_component__["a" /* AppComponent */], View_AppComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvYXBwLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9hcHAuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvYXBwLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvYXBwLmNvbXBvbmVudC50cy5BcHBDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8YXBwLWxheW91dC1zaGVsbD48L2FwcC1sYXlvdXQtc2hlbGw+XHJcbiIsIjxhcHAtcm9vdD48L2FwcC1yb290PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO0lBQXFDOzs7SUFBckM7Ozs7O0lDQUE7Z0JBQUE7OztJQUFBOzs7In0=
//# sourceMappingURL=app.component.ngfactory.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvYXBwLmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2FwcC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=app.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_app_module__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api_in_memory_web_api_module__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout_media_query_module__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout_flexbox_module__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_material__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_core_shared_shared_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_core_layout_layout_material_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_core_layout_layout_routing_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_core_layout_layout_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_core_user_user_routing_module__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_core_user_user_module__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__app_core_routing_app_routing_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_core_shared_data_global_mock_data__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout_media_query_breakpoints_break_point_registry__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout_media_query_match_media__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_core_user_data_user_service__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_core_routing_selective_strategy_service__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__gendir_node_modules_angular_material_typings_index_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__layout_about_about_component_ngfactory__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__layout_dashboard_dashboard_component_ngfactory__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__layout_feedback_feedback_component_ngfactory__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__layout_privacy_policy_privacy_policy_component_ngfactory__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__layout_terms_conditions_terms_conditions_component_ngfactory__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__user_user_component_ngfactory__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__layout_page_not_found_page_not_found_component_ngfactory__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__app_component_ngfactory__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_flex_layout_media_query_breakpoints_break_points_provider__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_flex_layout_media_query_media_monitor_provider__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_flex_layout_media_query_media_monitor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_flex_layout_media_query_observable_media_provider__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_flex_layout_media_query_observable_media__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__app_core_layout_about_about_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__app_core_layout_dashboard_dashboard_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__app_core_layout_feedback_feedback_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__app_core_layout_privacy_policy_privacy_policy_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__app_core_layout_terms_conditions_terms_conditions_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__app_core_user_user_component__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__app_core_layout_page_not_found_page_not_found_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__angular_animations_browser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47_angular_in_memory_web_api_in_memory_backend_service__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__angular_flex_layout_media_query_breakpoints_break_points_token__ = __webpack_require__(53);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

















































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        return _super.call(this, parent, [
            __WEBPACK_IMPORTED_MODULE_25__gendir_node_modules_angular_material_typings_index_ngfactory__["a" /* MdDialogContainerNgFactory */],
            __WEBPACK_IMPORTED_MODULE_25__gendir_node_modules_angular_material_typings_index_ngfactory__["b" /* MdDatepickerContentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_25__gendir_node_modules_angular_material_typings_index_ngfactory__["c" /* MdSnackBarContainerNgFactory */],
            __WEBPACK_IMPORTED_MODULE_25__gendir_node_modules_angular_material_typings_index_ngfactory__["d" /* SimpleSnackBarNgFactory */],
            __WEBPACK_IMPORTED_MODULE_25__gendir_node_modules_angular_material_typings_index_ngfactory__["e" /* TooltipComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_26__layout_about_about_component_ngfactory__["a" /* AboutComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_27__layout_dashboard_dashboard_component_ngfactory__["a" /* DashboardComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_28__layout_feedback_feedback_component_ngfactory__["a" /* FeedbackComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_29__layout_privacy_policy_privacy_policy_component_ngfactory__["a" /* PrivacyPolicyComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_30__layout_terms_conditions_terms_conditions_component_ngfactory__["a" /* TermsConditionsComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_31__user_user_component_ngfactory__["a" /* UserComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_32__layout_page_not_found_page_not_found_component_ngfactory__["a" /* PageNotFoundComponentNgFactory */],
            __WEBPACK_IMPORTED_MODULE_33__app_component_ngfactory__["a" /* AppComponentNgFactory */]
        ], [__WEBPACK_IMPORTED_MODULE_33__app_component_ngfactory__["a" /* AppComponentNgFactory */]]) || this;
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_76", {
        get: function () {
            if ((this.__LOCALE_ID_76 == null)) {
                (this.__LOCALE_ID_76 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* ɵn */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* LOCALE_ID */], null)));
            }
            return this.__LOCALE_ID_76;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_77", {
        get: function () {
            if ((this.__NgLocalization_77 == null)) {
                (this.__NgLocalization_77 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["a" /* NgLocaleLocalization */](this._LOCALE_ID_76));
            }
            return this.__NgLocalization_77;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_78", {
        get: function () {
            if ((this.__APP_ID_78 == null)) {
                (this.__APP_ID_78 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* ɵg */]());
            }
            return this.__APP_ID_78;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_79", {
        get: function () {
            if ((this.__IterableDiffers_79 == null)) {
                (this.__IterableDiffers_79 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* ɵl */]());
            }
            return this.__IterableDiffers_79;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_80", {
        get: function () {
            if ((this.__KeyValueDiffers_80 == null)) {
                (this.__KeyValueDiffers_80 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ɵm */]());
            }
            return this.__KeyValueDiffers_80;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_81", {
        get: function () {
            if ((this.__DomSanitizer_81 == null)) {
                (this.__DomSanitizer_81 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["b" /* ɵe */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__DomSanitizer_81;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_82", {
        get: function () {
            if ((this.__Sanitizer_82 == null)) {
                (this.__Sanitizer_82 = this._DomSanitizer_81);
            }
            return this.__Sanitizer_82;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_83", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_83 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_83 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_83;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_84", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_84 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_84 = [
                    new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["e" /* ɵDomEventsPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])),
                    new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["f" /* ɵKeyEventsPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])),
                    new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["g" /* ɵHammerGesturesPlugin */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */]), this._HAMMER_GESTURE_CONFIG_83)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_84;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_85", {
        get: function () {
            if ((this.__EventManager_85 == null)) {
                (this.__EventManager_85 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["h" /* EventManager */](this._EVENT_MANAGER_PLUGINS_84, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__EventManager_85;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomSharedStylesHost_86", {
        get: function () {
            if ((this.__ɵDomSharedStylesHost_86 == null)) {
                (this.__ɵDomSharedStylesHost_86 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["i" /* ɵDomSharedStylesHost */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__ɵDomSharedStylesHost_86;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275DomRendererFactory2_87", {
        get: function () {
            if ((this.__ɵDomRendererFactory2_87 == null)) {
                (this.__ɵDomRendererFactory2_87 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["j" /* ɵDomRendererFactory2 */](this._EventManager_85, this._ɵDomSharedStylesHost_86));
            }
            return this.__ɵDomRendererFactory2_87;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_88", {
        get: function () {
            if ((this.__AnimationDriver_88 == null)) {
                (this.__AnimationDriver_88 = __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["a" /* ɵb */]());
            }
            return this.__AnimationDriver_88;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275AnimationStyleNormalizer_89", {
        get: function () {
            if ((this.__ɵAnimationStyleNormalizer_89 == null)) {
                (this.__ɵAnimationStyleNormalizer_89 = __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["b" /* ɵc */]());
            }
            return this.__ɵAnimationStyleNormalizer_89;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275AnimationEngine_90", {
        get: function () {
            if ((this.__ɵAnimationEngine_90 == null)) {
                (this.__ɵAnimationEngine_90 = new __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["c" /* ɵa */](this._AnimationDriver_88, this._ɵAnimationStyleNormalizer_89));
            }
            return this.__ɵAnimationEngine_90;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RendererFactory2_91", {
        get: function () {
            if ((this.__RendererFactory2_91 == null)) {
                (this.__RendererFactory2_91 = __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["d" /* ɵd */](this._ɵDomRendererFactory2_87, this._ɵAnimationEngine_90, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__RendererFactory2_91;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275SharedStylesHost_92", {
        get: function () {
            if ((this.__ɵSharedStylesHost_92 == null)) {
                (this.__ɵSharedStylesHost_92 = this._ɵDomSharedStylesHost_86);
            }
            return this.__ɵSharedStylesHost_92;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Testability_93", {
        get: function () {
            if ((this.__Testability_93 == null)) {
                (this.__Testability_93 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__Testability_93;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Meta_94", {
        get: function () {
            if ((this.__Meta_94 == null)) {
                (this.__Meta_94 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["k" /* Meta */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__Meta_94;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_95", {
        get: function () {
            if ((this.__Title_95 == null)) {
                (this.__Title_95 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["l" /* Title */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */])));
            }
            return this.__Title_95;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_InMemoryDbService_96", {
        get: function () {
            if ((this.__InMemoryDbService_96 == null)) {
                (this.__InMemoryDbService_96 = new __WEBPACK_IMPORTED_MODULE_19__app_core_shared_data_global_mock_data__["a" /* GlobalData */]());
            }
            return this.__InMemoryDbService_96;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_98", {
        get: function () {
            if ((this.__XHRBackend_98 == null)) {
                (this.__XHRBackend_98 = __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api_in_memory_web_api_module__["a" /* inMemoryBackendServiceFactory */](this, this._InMemoryDbService_96, this._InMemoryBackendConfig_97));
            }
            return this.__XHRBackend_98;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_99", {
        get: function () {
            if ((this.__RequestOptions_99 == null)) {
                (this.__RequestOptions_99 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_99;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_100", {
        get: function () {
            if ((this.__Http_100 == null)) {
                (this.__Http_100 = __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* ɵc */](this._XHRBackend_98, this._RequestOptions_99));
            }
            return this.__Http_100;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_101", {
        get: function () {
            if ((this.__BrowserXhr_101 == null)) {
                (this.__BrowserXhr_101 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_101;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_102", {
        get: function () {
            if ((this.__ResponseOptions_102 == null)) {
                (this.__ResponseOptions_102 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_102;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_103", {
        get: function () {
            if ((this.__XSRFStrategy_103 == null)) {
                (this.__XSRFStrategy_103 = __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* ɵb */]());
            }
            return this.__XSRFStrategy_103;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275i_104", {
        get: function () {
            if ((this.__ɵi_104 == null)) {
                (this.__ɵi_104 = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* ɵi */]());
            }
            return this.__ɵi_104;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BREAKPOINTS_105", {
        get: function () {
            if ((this.__BREAKPOINTS_105 == null)) {
                (this.__BREAKPOINTS_105 = __WEBPACK_IMPORTED_MODULE_34__angular_flex_layout_media_query_breakpoints_break_points_provider__["a" /* DEFAULT_BREAKPOINTS_PROVIDER_FACTORY */]());
            }
            return this.__BREAKPOINTS_105;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BreakPointRegistry_106", {
        get: function () {
            if ((this.__BreakPointRegistry_106 == null)) {
                (this.__BreakPointRegistry_106 = new __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout_media_query_breakpoints_break_point_registry__["a" /* BreakPointRegistry */](this._BREAKPOINTS_105));
            }
            return this.__BreakPointRegistry_106;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MatchMedia_107", {
        get: function () {
            if ((this.__MatchMedia_107 == null)) {
                (this.__MatchMedia_107 = new __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout_media_query_match_media__["a" /* MatchMedia */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__MatchMedia_107;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MediaMonitor_108", {
        get: function () {
            if ((this.__MediaMonitor_108 == null)) {
                (this.__MediaMonitor_108 = __WEBPACK_IMPORTED_MODULE_35__angular_flex_layout_media_query_media_monitor_provider__["a" /* MEDIA_MONITOR_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_36__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */], null), this._BreakPointRegistry_106, this._MatchMedia_107));
            }
            return this.__MediaMonitor_108;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ObservableMedia_109", {
        get: function () {
            if ((this.__ObservableMedia_109 == null)) {
                (this.__ObservableMedia_109 = __WEBPACK_IMPORTED_MODULE_37__angular_flex_layout_media_query_observable_media_provider__["a" /* OBSERVABLE_MEDIA_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_38__angular_flex_layout_media_query_observable_media__["a" /* ObservableMedia */], null), this._MatchMedia_107, this._BreakPointRegistry_106));
            }
            return this.__ObservableMedia_109;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Platform_110", {
        get: function () {
            if ((this.__Platform_110 == null)) {
                (this.__Platform_110 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* Platform */]());
            }
            return this.__Platform_110;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ScrollDispatcher_111", {
        get: function () {
            if ((this.__ScrollDispatcher_111 == null)) {
                (this.__ScrollDispatcher_111 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["b" /* ɵd */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* ScrollDispatcher */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */]), this._Platform_110));
            }
            return this.__ScrollDispatcher_111;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275o_112", {
        get: function () {
            if ((this.__ɵo_112 == null)) {
                (this.__ɵo_112 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["d" /* ɵp */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* ɵo */], null), this._ScrollDispatcher_111));
            }
            return this.__ɵo_112;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_OverlayContainer_113", {
        get: function () {
            if ((this.__OverlayContainer_113 == null)) {
                (this.__OverlayContainer_113 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["f" /* ɵb */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* OverlayContainer */], null)));
            }
            return this.__OverlayContainer_113;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275r_114", {
        get: function () {
            if ((this.__ɵr_114 == null)) {
                (this.__ɵr_114 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* ɵr */](this._ɵo_112));
            }
            return this.__ɵr_114;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Overlay_115", {
        get: function () {
            if ((this.__Overlay_115 == null)) {
                (this.__Overlay_115 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* Overlay */](this._OverlayContainer_113, this.componentFactoryResolver, this._ɵr_114, this._ApplicationRef_7, this, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__Overlay_115;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FocusOriginMonitor_116", {
        get: function () {
            if ((this.__FocusOriginMonitor_116 == null)) {
                (this.__FocusOriginMonitor_116 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["j" /* FOCUS_ORIGIN_MONITOR_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* FocusOriginMonitor */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */]), this._Platform_110));
            }
            return this.__FocusOriginMonitor_116;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UniqueSelectionDispatcher_117", {
        get: function () {
            if ((this.__UniqueSelectionDispatcher_117 == null)) {
                (this.__UniqueSelectionDispatcher_117 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["l" /* ɵh */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* UniqueSelectionDispatcher */], null)));
            }
            return this.__UniqueSelectionDispatcher_117;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_InteractivityChecker_118", {
        get: function () {
            if ((this.__InteractivityChecker_118 == null)) {
                (this.__InteractivityChecker_118 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* InteractivityChecker */](this._Platform_110));
            }
            return this.__InteractivityChecker_118;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_FocusTrapFactory_119", {
        get: function () {
            if ((this.__FocusTrapFactory_119 == null)) {
                (this.__FocusTrapFactory_119 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* FocusTrapFactory */](this._InteractivityChecker_118, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */])));
            }
            return this.__FocusTrapFactory_119;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LiveAnnouncer_120", {
        get: function () {
            if ((this.__LiveAnnouncer_120 == null)) {
                (this.__LiveAnnouncer_120 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["p" /* ɵg */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* LiveAnnouncer */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["r" /* LIVE_ANNOUNCER_ELEMENT_TOKEN */], null), this._Platform_110));
            }
            return this.__LiveAnnouncer_120;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdDialog_121", {
        get: function () {
            if ((this.__MdDialog_121 == null)) {
                (this.__MdDialog_121 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MdDialog */](this._Overlay_115, this, this._Location_64, this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MdDialog */], null)));
            }
            return this.__MdDialog_121;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdDatepickerIntl_122", {
        get: function () {
            if ((this.__MdDatepickerIntl_122 == null)) {
                (this.__MdDatepickerIntl_122 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MdDatepickerIntl */]());
            }
            return this.__MdDatepickerIntl_122;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdIconRegistry_123", {
        get: function () {
            if ((this.__MdIconRegistry_123 == null)) {
                (this.__MdIconRegistry_123 = __WEBPACK_IMPORTED_MODULE_10__angular_material__["u" /* ICON_REGISTRY_PROVIDER_FACTORY */](this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MdIconRegistry */], null), this._Http_100, this._DomSanitizer_81));
            }
            return this.__MdIconRegistry_123;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_MdSnackBar_124", {
        get: function () {
            if ((this.__MdSnackBar_124 == null)) {
                (this.__MdSnackBar_124 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MdSnackBar */](this._Overlay_115, this._LiveAnnouncer_120, this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MdSnackBar */], null)));
            }
            return this.__MdSnackBar_124;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_\u0275a_125", {
        get: function () {
            if ((this.__ɵa_125 == null)) {
                (this.__ɵa_125 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* ɵa */]());
            }
            return this.__ɵa_125;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_LoggerService_126", {
        get: function () {
            if ((this.__LoggerService_126 == null)) {
                (this.__LoggerService_126 = new __WEBPACK_IMPORTED_MODULE_22__app_core_shared_services_logger_service__["a" /* LoggerService */]());
            }
            return this.__LoggerService_126;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_UserService_127", {
        get: function () {
            if ((this.__UserService_127 == null)) {
                (this.__UserService_127 = new __WEBPACK_IMPORTED_MODULE_23__app_core_user_data_user_service__["a" /* UserService */]());
            }
            return this.__UserService_127;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ActivatedRoute_128", {
        get: function () {
            if ((this.__ActivatedRoute_128 == null)) {
                (this.__ActivatedRoute_128 = __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ɵf */](this._Router_68));
            }
            return this.__ActivatedRoute_128;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SelectiveStrategy_129", {
        get: function () {
            if ((this.__SelectiveStrategy_129 == null)) {
                (this.__SelectiveStrategy_129 = new __WEBPACK_IMPORTED_MODULE_24__app_core_routing_selective_strategy_service__["a" /* SelectiveStrategy */]());
            }
            return this.__SelectiveStrategy_129;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadingStrategy_130", {
        get: function () {
            if ((this.__PreloadingStrategy_130 == null)) {
                (this.__PreloadingStrategy_130 = this._SelectiveStrategy_129);
            }
            return this.__PreloadingStrategy_130;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RouterPreloader_131", {
        get: function () {
            if ((this.__RouterPreloader_131 == null)) {
                (this.__RouterPreloader_131 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterPreloader */](this._Router_68, this._NgModuleFactoryLoader_66, this._Compiler_65, this, this._PreloadingStrategy_130));
            }
            return this.__RouterPreloader_131;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NoPreloading_132", {
        get: function () {
            if ((this.__NoPreloading_132 == null)) {
                (this.__NoPreloading_132 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NoPreloading */]());
            }
            return this.__NoPreloading_132;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_PreloadAllModules_133", {
        get: function () {
            if ((this.__PreloadAllModules_133 == null)) {
                (this.__PreloadAllModules_133 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* PreloadAllModules */]());
            }
            return this.__PreloadAllModules_133;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ROUTER_INITIALIZER_134", {
        get: function () {
            if ((this.__ROUTER_INITIALIZER_134 == null)) {
                (this.__ROUTER_INITIALIZER_134 = __WEBPACK_IMPORTED_MODULE_3__angular_router__["e" /* ɵi */](this._ɵg_3));
            }
            return this.__ROUTER_INITIALIZER_134;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_BOOTSTRAP_LISTENER_135", {
        get: function () {
            if ((this.__APP_BOOTSTRAP_LISTENER_135 == null)) {
                (this.__APP_BOOTSTRAP_LISTENER_135 = [this._ROUTER_INITIALIZER_134]);
            }
            return this.__APP_BOOTSTRAP_LISTENER_135;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]();
        this._ErrorHandler_1 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["m" /* ɵa */]();
        this._NgProbeToken_2 = [__WEBPACK_IMPORTED_MODULE_3__angular_router__["f" /* ɵb */]()];
        this._ɵg_3 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* ɵg */](this);
        this._APP_INITIALIZER_4 = [
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ɵo */],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["n" /* ɵc */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["o" /* NgProbeToken */], null), this._NgProbeToken_2),
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* ɵh */](this._ɵg_3)
        ];
        this._ApplicationInitStatus_5 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ApplicationInitStatus */](this._APP_INITIALIZER_4);
        this._ɵf_6 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ɵf */](this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* ɵConsole */]), this, this._ErrorHandler_1, this.componentFactoryResolver, this._ApplicationInitStatus_5);
        this._ApplicationRef_7 = this._ɵf_6;
        this._ApplicationModule_8 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ApplicationModule */](this._ApplicationRef_7);
        this._BrowserModule_9 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["p" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["p" /* BrowserModule */], null));
        this._HttpModule_10 = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* HttpModule */]();
        this._InMemoryWebApiModule_11 = new __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api_in_memory_web_api_module__["b" /* InMemoryWebApiModule */]();
        this._ɵba_12 = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ɵba */]();
        this._FormsModule_13 = new __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */]();
        this._MediaQueriesModule_14 = new __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout_media_query_module__["a" /* MediaQueriesModule */]();
        this._FlexLayoutModule_15 = new __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout_flexbox_module__["a" /* FlexLayoutModule */]();
        this._MATERIAL_SANITY_CHECKS_16 = true;
        this._CompatibilityModule_17 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* CompatibilityModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DOCUMENT */], null), this._MATERIAL_SANITY_CHECKS_16);
        this._MdCommonModule_18 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MdCommonModule */]();
        this._PlatformModule_19 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* PlatformModule */]();
        this._ɵm_20 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* ɵm */]();
        this._MdRippleModule_21 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MdRippleModule */]();
        this._MdSelectionModule_22 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MdSelectionModule */]();
        this._MdOptionModule_23 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MdOptionModule */]();
        this._PortalModule_24 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["F" /* PortalModule */]();
        this._OverlayModule_25 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["G" /* OverlayModule */]();
        this._MdAutocompleteModule_26 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["H" /* MdAutocompleteModule */]();
        this._StyleModule_27 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["I" /* StyleModule */]();
        this._MdButtonModule_28 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["J" /* MdButtonModule */]();
        this._MdButtonToggleModule_29 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["K" /* MdButtonToggleModule */]();
        this._MdCardModule_30 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["L" /* MdCardModule */]();
        this._MdChipsModule_31 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["M" /* MdChipsModule */]();
        this._MdCheckboxModule_32 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["N" /* MdCheckboxModule */]();
        this._A11yModule_33 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["O" /* A11yModule */]();
        this._MdDialogModule_34 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["P" /* MdDialogModule */]();
        this._MdDatepickerModule_35 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["Q" /* MdDatepickerModule */]();
        this._MdLineModule_36 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["R" /* MdLineModule */]();
        this._MdGridListModule_37 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["S" /* MdGridListModule */]();
        this._MdIconModule_38 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["T" /* MdIconModule */]();
        this._MdInputModule_39 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["U" /* MdInputModule */]();
        this._MdListModule_40 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["V" /* MdListModule */]();
        this._MdMenuModule_41 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["W" /* MdMenuModule */]();
        this._MdProgressBarModule_42 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["X" /* MdProgressBarModule */]();
        this._MdProgressSpinnerModule_43 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["Y" /* MdProgressSpinnerModule */]();
        this._MdRadioModule_44 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["Z" /* MdRadioModule */]();
        this._MdSelectModule_45 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_0" /* MdSelectModule */]();
        this._MdSidenavModule_46 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_1" /* MdSidenavModule */]();
        this._RtlModule_47 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_2" /* RtlModule */]();
        this._MdSliderModule_48 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_3" /* MdSliderModule */]();
        this._MdSlideToggleModule_49 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_4" /* MdSlideToggleModule */]();
        this._MdSnackBarModule_50 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_5" /* MdSnackBarModule */]();
        this._ObserveContentModule_51 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_6" /* ObserveContentModule */]();
        this._MdTabsModule_52 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_7" /* MdTabsModule */]();
        this._MdToolbarModule_53 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_8" /* MdToolbarModule */]();
        this._MdTooltipModule_54 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_9" /* MdTooltipModule */]();
        this._MaterialModule_55 = new __WEBPACK_IMPORTED_MODULE_10__angular_material__["_10" /* MaterialModule */]();
        this._BrowserAnimationsModule_56 = new __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["e" /* BrowserAnimationsModule */]();
        this._SharedModule_57 = new __WEBPACK_IMPORTED_MODULE_12__app_core_shared_shared_module__["a" /* SharedModule */]();
        this._LayoutMaterialModule_58 = new __WEBPACK_IMPORTED_MODULE_13__app_core_layout_layout_material_module__["a" /* LayoutMaterialModule */]();
        this._ɵa_59 = __WEBPACK_IMPORTED_MODULE_3__angular_router__["i" /* ɵd */](this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_router__["j" /* Router */], null));
        this._UrlSerializer_60 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["k" /* DefaultUrlSerializer */]();
        this._RouterOutletMap_61 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["l" /* RouterOutletMap */]();
        this._ROUTER_CONFIGURATION_62 = {
            preloadingStrategy: __WEBPACK_IMPORTED_MODULE_24__app_core_routing_selective_strategy_service__["a" /* SelectiveStrategy */],
            enableTracing: false
        };
        this._LocationStrategy_63 = __WEBPACK_IMPORTED_MODULE_3__angular_router__["m" /* ɵc */](this.parent.get(__WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* PlatformLocation */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* APP_BASE_HREF */], null), this._ROUTER_CONFIGURATION_62);
        this._Location_64 = new __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */](this._LocationStrategy_63);
        this._Compiler_65 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Compiler */]();
        this._NgModuleFactoryLoader_66 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* SystemJsNgModuleLoader */](this._Compiler_65, this.parent.get(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* SystemJsNgModuleLoaderConfig */], null));
        this._ROUTES_67 = [
            [
                {
                    path: 'about',
                    component: __WEBPACK_IMPORTED_MODULE_39__app_core_layout_about_about_component__["a" /* AboutComponent */],
                    data: { title: 'About' }
                },
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_40__app_core_layout_dashboard_dashboard_component__["a" /* DashboardComponent */],
                    data: { title: 'Dashboard' }
                },
                {
                    path: 'feedback',
                    component: __WEBPACK_IMPORTED_MODULE_41__app_core_layout_feedback_feedback_component__["a" /* FeedbackComponent */],
                    data: { title: 'Feedback' }
                },
                {
                    path: 'privacy-policy',
                    component: __WEBPACK_IMPORTED_MODULE_42__app_core_layout_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */],
                    data: { title: 'Privacy Policy' }
                },
                {
                    path: 'terms-conditions',
                    component: __WEBPACK_IMPORTED_MODULE_43__app_core_layout_terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */],
                    data: { title: 'Terms and Conditions' }
                }
            ],
            [{
                    path: 'user',
                    data: { title: 'User' },
                    children: [{
                            path: '',
                            component: __WEBPACK_IMPORTED_MODULE_44__app_core_user_user_component__["a" /* UserComponent */]
                        }
                    ]
                }
            ],
            [
                {
                    path: 'user',
                    loadChildren: '../user/user.module#UserModule'
                },
                {
                    path: '',
                    pathMatch: 'full',
                    redirectTo: 'dashboard'
                },
                {
                    path: '**',
                    pathMatch: 'full',
                    component: __WEBPACK_IMPORTED_MODULE_45__app_core_layout_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                    data: { title: 'Oops!' }
                }
            ]
        ];
        this._Router_68 = __WEBPACK_IMPORTED_MODULE_3__angular_router__["n" /* ɵe */](this._ApplicationRef_7, this._UrlSerializer_60, this._RouterOutletMap_61, this._Location_64, this, this._NgModuleFactoryLoader_66, this._Compiler_65, this._ROUTES_67, this._ROUTER_CONFIGURATION_62, this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_router__["o" /* UrlHandlingStrategy */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_3__angular_router__["p" /* RouteReuseStrategy */], null));
        this._RouterModule_69 = new __WEBPACK_IMPORTED_MODULE_3__angular_router__["q" /* RouterModule */](this._ɵa_59, this._Router_68);
        this._LayoutRoutingModule_70 = new __WEBPACK_IMPORTED_MODULE_14__app_core_layout_layout_routing_module__["a" /* LayoutRoutingModule */]();
        this._LayoutModule_71 = new __WEBPACK_IMPORTED_MODULE_15__app_core_layout_layout_module__["a" /* LayoutModule */]();
        this._UserRoutingModule_72 = new __WEBPACK_IMPORTED_MODULE_16__app_core_user_user_routing_module__["a" /* UserRoutingModule */]();
        this._UserModule_73 = new __WEBPACK_IMPORTED_MODULE_17__app_core_user_user_module__["a" /* UserModule */]();
        this._AppRoutingModule_74 = new __WEBPACK_IMPORTED_MODULE_18__app_core_routing_app_routing_module__["a" /* AppRoutingModule */]();
        this._AppModule_75 = new __WEBPACK_IMPORTED_MODULE_1__app_core_app_module__["a" /* AppModule */]();
        this._InMemoryBackendConfig_97 = { delay: 1000 };
        return this._AppModule_75;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ErrorHandler */])) {
            return this._ErrorHandler_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* NgProbeToken */])) {
            return this._NgProbeToken_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["g" /* ɵg */])) {
            return this._ɵg_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* APP_INITIALIZER */])) {
            return this._APP_INITIALIZER_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ɵf */])) {
            return this._ɵf_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ApplicationRef */])) {
            return this._ApplicationRef_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* ApplicationModule */])) {
            return this._ApplicationModule_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["p" /* BrowserModule */])) {
            return this._BrowserModule_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["f" /* HttpModule */])) {
            return this._HttpModule_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6_angular_in_memory_web_api_in_memory_web_api_module__["b" /* InMemoryWebApiModule */])) {
            return this._InMemoryWebApiModule_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* ɵba */])) {
            return this._ɵba_12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */])) {
            return this._FormsModule_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout_media_query_module__["a" /* MediaQueriesModule */])) {
            return this._MediaQueriesModule_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout_flexbox_module__["a" /* FlexLayoutModule */])) {
            return this._FlexLayoutModule_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_11" /* MATERIAL_SANITY_CHECKS */])) {
            return this._MATERIAL_SANITY_CHECKS_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["y" /* CompatibilityModule */])) {
            return this._CompatibilityModule_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["z" /* MdCommonModule */])) {
            return this._MdCommonModule_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["A" /* PlatformModule */])) {
            return this._PlatformModule_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["B" /* ɵm */])) {
            return this._ɵm_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["C" /* MdRippleModule */])) {
            return this._MdRippleModule_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["D" /* MdSelectionModule */])) {
            return this._MdSelectionModule_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["E" /* MdOptionModule */])) {
            return this._MdOptionModule_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["F" /* PortalModule */])) {
            return this._PortalModule_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["G" /* OverlayModule */])) {
            return this._OverlayModule_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["H" /* MdAutocompleteModule */])) {
            return this._MdAutocompleteModule_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["I" /* StyleModule */])) {
            return this._StyleModule_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["J" /* MdButtonModule */])) {
            return this._MdButtonModule_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["K" /* MdButtonToggleModule */])) {
            return this._MdButtonToggleModule_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["L" /* MdCardModule */])) {
            return this._MdCardModule_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["M" /* MdChipsModule */])) {
            return this._MdChipsModule_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["N" /* MdCheckboxModule */])) {
            return this._MdCheckboxModule_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["O" /* A11yModule */])) {
            return this._A11yModule_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["P" /* MdDialogModule */])) {
            return this._MdDialogModule_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["Q" /* MdDatepickerModule */])) {
            return this._MdDatepickerModule_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["R" /* MdLineModule */])) {
            return this._MdLineModule_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["S" /* MdGridListModule */])) {
            return this._MdGridListModule_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["T" /* MdIconModule */])) {
            return this._MdIconModule_38;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["U" /* MdInputModule */])) {
            return this._MdInputModule_39;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["V" /* MdListModule */])) {
            return this._MdListModule_40;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["W" /* MdMenuModule */])) {
            return this._MdMenuModule_41;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["X" /* MdProgressBarModule */])) {
            return this._MdProgressBarModule_42;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["Y" /* MdProgressSpinnerModule */])) {
            return this._MdProgressSpinnerModule_43;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["Z" /* MdRadioModule */])) {
            return this._MdRadioModule_44;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_0" /* MdSelectModule */])) {
            return this._MdSelectModule_45;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_1" /* MdSidenavModule */])) {
            return this._MdSidenavModule_46;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_2" /* RtlModule */])) {
            return this._RtlModule_47;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_3" /* MdSliderModule */])) {
            return this._MdSliderModule_48;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_4" /* MdSlideToggleModule */])) {
            return this._MdSlideToggleModule_49;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_5" /* MdSnackBarModule */])) {
            return this._MdSnackBarModule_50;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_6" /* ObserveContentModule */])) {
            return this._ObserveContentModule_51;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_7" /* MdTabsModule */])) {
            return this._MdTabsModule_52;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_8" /* MdToolbarModule */])) {
            return this._MdToolbarModule_53;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_9" /* MdTooltipModule */])) {
            return this._MdTooltipModule_54;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["_10" /* MaterialModule */])) {
            return this._MaterialModule_55;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser_animations__["e" /* BrowserAnimationsModule */])) {
            return this._BrowserAnimationsModule_56;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__app_core_shared_shared_module__["a" /* SharedModule */])) {
            return this._SharedModule_57;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__app_core_layout_layout_material_module__["a" /* LayoutMaterialModule */])) {
            return this._LayoutMaterialModule_58;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["r" /* ɵa */])) {
            return this._ɵa_59;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["s" /* UrlSerializer */])) {
            return this._UrlSerializer_60;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["l" /* RouterOutletMap */])) {
            return this._RouterOutletMap_61;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["t" /* ROUTER_CONFIGURATION */])) {
            return this._ROUTER_CONFIGURATION_62;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* LocationStrategy */])) {
            return this._LocationStrategy_63;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["e" /* Location */])) {
            return this._Location_64;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Compiler */])) {
            return this._Compiler_65;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* NgModuleFactoryLoader */])) {
            return this._NgModuleFactoryLoader_66;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["u" /* ROUTES */])) {
            return this._ROUTES_67;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["j" /* Router */])) {
            return this._Router_68;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["q" /* RouterModule */])) {
            return this._RouterModule_69;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__app_core_layout_layout_routing_module__["a" /* LayoutRoutingModule */])) {
            return this._LayoutRoutingModule_70;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__app_core_layout_layout_module__["a" /* LayoutModule */])) {
            return this._LayoutModule_71;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__app_core_user_user_routing_module__["a" /* UserRoutingModule */])) {
            return this._UserRoutingModule_72;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__app_core_user_user_module__["a" /* UserModule */])) {
            return this._UserModule_73;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__app_core_routing_app_routing_module__["a" /* AppRoutingModule */])) {
            return this._AppRoutingModule_74;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_core_app_module__["a" /* AppModule */])) {
            return this._AppModule_75;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* LOCALE_ID */])) {
            return this._LOCALE_ID_76;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* NgLocalization */])) {
            return this._NgLocalization_77;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* APP_ID */])) {
            return this._APP_ID_78;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* IterableDiffers */])) {
            return this._IterableDiffers_79;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_80;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["q" /* DomSanitizer */])) {
            return this._DomSanitizer_81;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Sanitizer */])) {
            return this._Sanitizer_82;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["r" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_83;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["s" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_84;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["h" /* EventManager */])) {
            return this._EventManager_85;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["i" /* ɵDomSharedStylesHost */])) {
            return this._ɵDomSharedStylesHost_86;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["j" /* ɵDomRendererFactory2 */])) {
            return this._ɵDomRendererFactory2_87;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_46__angular_animations_browser__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_88;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_46__angular_animations_browser__["b" /* ɵAnimationStyleNormalizer */])) {
            return this._ɵAnimationStyleNormalizer_89;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_46__angular_animations_browser__["c" /* ɵAnimationEngine */])) {
            return this._ɵAnimationEngine_90;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* RendererFactory2 */])) {
            return this._RendererFactory2_91;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["t" /* ɵSharedStylesHost */])) {
            return this._ɵSharedStylesHost_92;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Testability */])) {
            return this._Testability_93;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["k" /* Meta */])) {
            return this._Meta_94;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["l" /* Title */])) {
            return this._Title_95;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_47_angular_in_memory_web_api_in_memory_backend_service__["a" /* InMemoryDbService */])) {
            return this._InMemoryDbService_96;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_47_angular_in_memory_web_api_in_memory_backend_service__["b" /* InMemoryBackendConfig */])) {
            return this._InMemoryBackendConfig_97;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["g" /* XHRBackend */])) {
            return this._XHRBackend_98;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["h" /* RequestOptions */])) {
            return this._RequestOptions_99;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["i" /* Http */])) {
            return this._Http_100;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* BrowserXhr */])) {
            return this._BrowserXhr_101;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["j" /* ResponseOptions */])) {
            return this._ResponseOptions_102;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_http__["k" /* XSRFStrategy */])) {
            return this._XSRFStrategy_103;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* ɵi */])) {
            return this._ɵi_104;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_48__angular_flex_layout_media_query_breakpoints_break_points_token__["a" /* BREAKPOINTS */])) {
            return this._BREAKPOINTS_105;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_flex_layout_media_query_breakpoints_break_point_registry__["a" /* BreakPointRegistry */])) {
            return this._BreakPointRegistry_106;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_flex_layout_media_query_match_media__["a" /* MatchMedia */])) {
            return this._MatchMedia_107;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */])) {
            return this._MediaMonitor_108;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_38__angular_flex_layout_media_query_observable_media__["a" /* ObservableMedia */])) {
            return this._ObservableMedia_109;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["a" /* Platform */])) {
            return this._Platform_110;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["c" /* ScrollDispatcher */])) {
            return this._ScrollDispatcher_111;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["e" /* ɵo */])) {
            return this._ɵo_112;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["g" /* OverlayContainer */])) {
            return this._OverlayContainer_113;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["h" /* ɵr */])) {
            return this._ɵr_114;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["i" /* Overlay */])) {
            return this._Overlay_115;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["k" /* FocusOriginMonitor */])) {
            return this._FocusOriginMonitor_116;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["m" /* UniqueSelectionDispatcher */])) {
            return this._UniqueSelectionDispatcher_117;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["n" /* InteractivityChecker */])) {
            return this._InteractivityChecker_118;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["o" /* FocusTrapFactory */])) {
            return this._FocusTrapFactory_119;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["q" /* LiveAnnouncer */])) {
            return this._LiveAnnouncer_120;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["s" /* MdDialog */])) {
            return this._MdDialog_121;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["t" /* MdDatepickerIntl */])) {
            return this._MdDatepickerIntl_122;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["v" /* MdIconRegistry */])) {
            return this._MdIconRegistry_123;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["w" /* MdSnackBar */])) {
            return this._MdSnackBar_124;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_material__["x" /* ɵa */])) {
            return this._ɵa_125;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__app_core_shared_services_logger_service__["a" /* LoggerService */])) {
            return this._LoggerService_126;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__app_core_user_data_user_service__["a" /* UserService */])) {
            return this._UserService_127;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["v" /* ActivatedRoute */])) {
            return this._ActivatedRoute_128;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__app_core_routing_selective_strategy_service__["a" /* SelectiveStrategy */])) {
            return this._SelectiveStrategy_129;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["w" /* PreloadingStrategy */])) {
            return this._PreloadingStrategy_130;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterPreloader */])) {
            return this._RouterPreloader_131;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* NoPreloading */])) {
            return this._NoPreloading_132;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* PreloadAllModules */])) {
            return this._PreloadAllModules_133;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_router__["x" /* ROUTER_INITIALIZER */])) {
            return this._ROUTER_INITIALIZER_134;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* APP_BOOTSTRAP_LISTENER */])) {
            return this._APP_BOOTSTRAP_LISTENER_135;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ɵf_6.ngOnDestroy();
        (this.__ɵDomSharedStylesHost_86 && this._ɵDomSharedStylesHost_86.ngOnDestroy());
        (this.__RouterPreloader_131 && this._RouterPreloader_131.ngOnDestroy());
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ɵNgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_core_app_module__["a" /* AppModule */]);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvYXBwLm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9hcHAubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
//# sourceMappingURL=app.module.ngfactory.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_component_scss_shim_ngstyle__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_layout_about_about_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* unused harmony export RenderType_AboutComponent */
/* unused harmony export View_AboutComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_AboutComponent = [__WEBPACK_IMPORTED_MODULE_0__about_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_AboutComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_AboutComponent,
    data: {}
});
function View_AboutComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['About'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  Coming soon...\n']))
    ], null, null);
}
function View_AboutComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, null, null, View_AboutComponent_0, RenderType_AboutComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_layout_about_about_component__["a" /* AboutComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var AboutComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_2__app_core_layout_about_about_component__["a" /* AboutComponent */], View_AboutComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvYWJvdXQvYWJvdXQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC50cy5BYm91dENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMT5BYm91dDwvaDE+XHJcbjxwPlxyXG4gIENvbWluZyBzb29uLi4uXHJcbjwvcD4iLCI8bmctY29tcG9uZW50PjwvbmctY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQUk7SUFBVTtJQUNkO0lBQUc7Ozs7OztJQ0RIO2dCQUFBOzs7SUFBQTs7OyJ9
//# sourceMappingURL=about.component.ngfactory.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9hYm91dC9hYm91dC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=about.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component_scss_shim_ngstyle__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_layout_dashboard_dashboard_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* unused harmony export RenderType_DashboardComponent */
/* unused harmony export View_DashboardComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_DashboardComponent = [__WEBPACK_IMPORTED_MODULE_0__dashboard_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_DashboardComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_DashboardComponent,
    data: {}
});
function View_DashboardComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 7, 'h2', [[
                'style',
                'text-align: center;'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 4, 'h1', [[
                'i18n',
                'User welcome|An introduction header for the dashboard'
            ]
        ], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n    Welcome to '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'i', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, [
            '',
            ''
        ])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['!\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], null, function (ck, v) {
        var co = v.component;
        var currVal_0 = co.applicationTitle;
        ck(v, 5, 0, currVal_0);
    });
}
function View_DashboardComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, null, null, View_DashboardComponent_0, RenderType_DashboardComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_layout_dashboard_dashboard_component__["a" /* DashboardComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var DashboardComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_2__app_core_layout_dashboard_dashboard_component__["a" /* DashboardComponent */], View_DashboardComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lm5nZmFjdG9yeS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC50cyIsIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzLkRhc2hib2FyZENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICA8aDEgaTE4bj1cIlVzZXIgd2VsY29tZXxBbiBpbnRyb2R1Y3Rpb24gaGVhZGVyIGZvciB0aGUgZGFzaGJvYXJkXCI+XHJcbiAgICBXZWxjb21lIHRvIDxpPnt7IGFwcGxpY2F0aW9uVGl0bGUgfX08L2k+IVxyXG4gIDwvaDE+XHJcbjwvaDI+XHJcbiIsIjxuZy1jb21wb25lbnQ+PC9uZy1jb21wb25lbnQ+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01DQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUFnQztNQUM5QjtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBQWlFO0lBQ3BEO0lBQUc7TUFBQTtNQUFBO0lBQUE7SUFBQTtJQUEwQjtJQUNyQztJQUNGOzs7O0lBRmE7SUFBQTs7Ozs7SUNGbEI7Z0JBQUE7OztJQUFBOzs7In0=
//# sourceMappingURL=dashboard.component.ngfactory.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = ['[_nghost-%COMP%] {\n  flex: 1; }'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3Muc2hpbS5uZ3N0eWxlLnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OzsifQ==
//# sourceMappingURL=dashboard.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__feedback_component_scss_shim_ngstyle__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_layout_feedback_feedback_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* unused harmony export RenderType_FeedbackComponent */
/* unused harmony export View_FeedbackComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_FeedbackComponent = [__WEBPACK_IMPORTED_MODULE_0__feedback_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_FeedbackComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_FeedbackComponent,
    data: {}
});
function View_FeedbackComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['Feedback'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  Coming soon...\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_FeedbackComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, null, null, View_FeedbackComponent_0, RenderType_FeedbackComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_layout_feedback_feedback_component__["a" /* FeedbackComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var FeedbackComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_2__app_core_layout_feedback_feedback_component__["a" /* FeedbackComponent */], View_FeedbackComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC50cy5GZWVkYmFja0NvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoMT5GZWVkYmFjazwvaDE+XHJcbjxwPlxyXG4gIENvbWluZyBzb29uLi4uXHJcbjwvcD5cclxuIiwiPG5nLWNvbXBvbmVudD48L25nLWNvbXBvbmVudD4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNBQTtJQUFJO0lBQWE7SUFDakI7SUFBRztJQUVDOzs7Ozs7SUNISjtnQkFBQTs7O0lBQUE7OzsifQ==
//# sourceMappingURL=feedback.component.ngfactory.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L2ZlZWRiYWNrL2ZlZWRiYWNrLmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=feedback.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_not_found_component_scss_shim_ngstyle__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_layout_page_not_found_page_not_found_component__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* unused harmony export RenderType_PageNotFoundComponent */
/* unused harmony export View_PageNotFoundComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_PageNotFoundComponent = [__WEBPACK_IMPORTED_MODULE_0__page_not_found_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_PageNotFoundComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_PageNotFoundComponent,
    data: {}
});
function View_PageNotFoundComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['Oops!'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_PageNotFoundComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, null, null, View_PageNotFoundComponent_0, RenderType_PageNotFoundComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_layout_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var PageNotFoundComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_2__app_core_layout_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], View_PageNotFoundComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC50cy5QYWdlTm90Rm91bmRDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8aDE+T29wcyE8L2gxPlxyXG4iLCI8bmctY29tcG9uZW50PjwvbmctY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQUk7SUFBVTs7Ozs7O0lDQWQ7Z0JBQUE7OztJQUFBOzs7In0=
//# sourceMappingURL=page-not-found.component.ngfactory.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=page-not-found.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__privacy_policy_component_scss_shim_ngstyle__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_layout_privacy_policy_privacy_policy_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* unused harmony export RenderType_PrivacyPolicyComponent */
/* unused harmony export View_PrivacyPolicyComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_PrivacyPolicyComponent = [__WEBPACK_IMPORTED_MODULE_0__privacy_policy_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_PrivacyPolicyComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_PrivacyPolicyComponent,
    data: {}
});
function View_PrivacyPolicyComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['Privacy Policy'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  Coming soon...\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_PrivacyPolicyComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, null, null, View_PrivacyPolicyComponent_0, RenderType_PrivacyPolicyComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_layout_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var PrivacyPolicyComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_2__app_core_layout_privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], View_PrivacyPolicyComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvcHJpdmFjeS1wb2xpY3kvcHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC50cy5Qcml2YWN5UG9saWN5Q29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPlByaXZhY3kgUG9saWN5PC9oMT5cclxuPHA+XHJcbiAgQ29taW5nIHNvb24uLi5cclxuPC9wPlxyXG4iLCI8bmctY29tcG9uZW50PjwvbmctY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQUk7SUFBbUI7SUFDdkI7SUFBRztJQUVDOzs7Ozs7SUNISjtnQkFBQTs7O0lBQUE7OzsifQ==
//# sourceMappingURL=privacy-policy.component.ngfactory.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3ByaXZhY3ktcG9saWN5L3ByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9wcml2YWN5LXBvbGljeS9wcml2YWN5LXBvbGljeS5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=privacy-policy.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shell_component_scss_shim_ngstyle__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout_flexbox_api_class__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout_media_query_media_monitor__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout_flexbox_api_flex__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout_flexbox_api_layout__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout_flexbox_api_layout_wrap__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_core_layout_shell_shell_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RenderType_LayoutShellComponent; });
/* harmony export (immutable) */ __webpack_exports__["a"] = View_LayoutShellComponent_0;
/* unused harmony export LayoutShellComponentNgFactory */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */














var styles_LayoutShellComponent = [__WEBPACK_IMPORTED_MODULE_0__shell_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_LayoutShellComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_LayoutShellComponent,
    data: {}
});
function View_LayoutShellComponent_1(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 10, 'a', [
            [
                'class',
                'mat-button'
            ],
            [
                'md-button',
                ''
            ]
        ], [
            [
                1,
                'disabled',
                0
            ],
            [
                1,
                'aria-disabled',
                0
            ],
            [
                8,
                'tabIndex',
                0
            ],
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2)._haltDisabledEvents($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["f" /* View_MdAnchor_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["g" /* RenderType_MdAnchor */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_14" /* MdAnchor */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* FocusOriginMonitor */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_15" /* MdButtonCssMatStyler */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](671744, [[
                2,
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["A" /* RouterLinkWithHref */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* LocationStrategy */]
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpad */](1),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](1720320, null, 2, __WEBPACK_IMPORTED_MODULE_4__angular_router__["B" /* RouterLinkActive */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["P" /* ChangeDetectorRef */]
        ], { routerLinkActive: [
                0,
                'routerLinkActive'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](603979776, 1, { links: 1 }),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](603979776, 2, { linksWithHrefs: 1 }),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpad */](1),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, [
            '\n        ',
            '\n      '
        ]))
    ], function (ck, v) {
        var currVal_5 = ck(v, 5, 0, v.context.$implicit.path);
        ck(v, 4, 0, currVal_5);
        var currVal_6 = ck(v, 9, 0, 'active');
        ck(v, 6, 0, currVal_6);
    }, function (ck, v) {
        var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2).disabled || null);
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2)._isAriaDisabled;
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2).tabIndex;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 4).target;
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 4).href;
        ck(v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        var currVal_7 = v.context.$implicit.label;
        ck(v, 10, 0, currVal_7);
    });
}
function View_LayoutShellComponent_2(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 6, 'a', [
            [
                'class',
                'mat-button'
            ],
            [
                'md-button',
                ''
            ]
        ], [
            [
                1,
                'disabled',
                0
            ],
            [
                1,
                'aria-disabled',
                0
            ],
            [
                8,
                'tabIndex',
                0
            ],
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2)._haltDisabledEvents($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 4).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["f" /* View_MdAnchor_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["g" /* RenderType_MdAnchor */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_14" /* MdAnchor */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* FocusOriginMonitor */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_15" /* MdButtonCssMatStyler */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["A" /* RouterLinkWithHref */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* LocationStrategy */]
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpad */](1),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, [
            '\n      ',
            '\n    '
        ]))
    ], function (ck, v) {
        var currVal_5 = ck(v, 5, 0, v.context.$implicit.path);
        ck(v, 4, 0, currVal_5);
    }, function (ck, v) {
        var currVal_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2).disabled || null);
        var currVal_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2)._isAriaDisabled;
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 2).tabIndex;
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 4).target;
        var currVal_4 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 4).href;
        ck(v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4);
        var currVal_6 = v.context.$implicit.label;
        ck(v, 6, 0, currVal_6);
    });
}
function View_LayoutShellComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_37" /* ɵpid */](0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["n" /* UpperCasePipe */], []),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 63, 'header', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 25, 'md-toolbar', [
            [
                'color',
                'primary'
            ],
            [
                'role',
                'toolbar'
            ]
        ], [[
                2,
                'mat-toolbar',
                null
            ]
        ], null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["h" /* View_MdToolbar_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["i" /* RenderType_MdToolbar */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_16" /* MdToolbar */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */]
        ], { color: [
                0,
                'color'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 0, 'img', [], [
            [
                8,
                'title',
                0
            ],
            [
                8,
                'src',
                4
            ]
        ], null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 6, 'md-toolbar', [
            [
                'color',
                'primary'
            ],
            [
                'role',
                'toolbar'
            ]
        ], [[
                2,
                'mat-toolbar',
                null
            ]
        ], null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["h" /* View_MdToolbar_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["i" /* RenderType_MdToolbar */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_16" /* MdToolbar */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */]
        ], { color: [
                0,
                'color'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵand */](16777216, null, 0, 1, null, View_LayoutShellComponent_1)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* IterableDiffers */]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](16777216, null, 0, 10, 'button', [
            [
                'aria-haspopup',
                'true'
            ],
            [
                'class',
                'user-menu-button mat-button'
            ],
            [
                'md-button',
                ''
            ],
            [
                'style',
                'min-width: auto; height: inherit;'
            ]
        ], [[
                8,
                'disabled',
                0
            ]
        ], [
            [
                null,
                'mousedown'
            ],
            [
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('mousedown' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 22)._handleMousedown($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 22).toggleMenu() !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["j" /* View_MdButton_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["k" /* RenderType_MdButton */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout_flexbox_api_class__["a" /* ClassDirective */], [
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* IterableDiffers */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */]
        ], { classBase: [
                0,
                'classBase'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](180224, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_17" /* MdButton */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* FocusOriginMonitor */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_15" /* MdButtonCssMatStyler */], [], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](4341760, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_18" /* MdMenuTrigger */], [
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* Overlay */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* ViewContainerRef */],
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_19" /* Dir */]
            ],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* ScrollDispatcher */]
        ], { menu: [
                0,
                'menu'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, [
            '\n      ',
            '\n      '
        ])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_39" /* ɵppd */](1),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 1, 'img', [[
                'class',
                'user-avatar'
            ]
        ], [[
                8,
                'src',
                4
            ]
        ], null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](933888, null, 0, __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout_flexbox_api_class__["a" /* ClassDirective */], [
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* IterableDiffers */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* KeyValueDiffers */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */]
        ], { classBase: [
                0,
                'classBase'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 33, 'md-menu', [
            [
                'role',
                'menu'
            ],
            [
                'xPosition',
                'before'
            ]
        ], null, null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["l" /* View_MdMenu_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["m" /* RenderType_MdMenu */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](1228800, [[
                'userMenu',
                4
            ]
        ], 1, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_20" /* MdMenu */], [], {
            xPosition: [
                0,
                'xPosition'
            ],
            overlapTrigger: [
                1,
                'overlapTrigger'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_36" /* ɵqud */](603979776, 3, { items: 1 }),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 12, 'a', [
            [
                'md-menu-item',
                ''
            ],
            [
                'role',
                'menuitem'
            ]
        ], [
            [
                2,
                'mat-menu-item',
                null
            ],
            [
                1,
                'tabindex',
                0
            ],
            [
                1,
                'aria-disabled',
                0
            ],
            [
                1,
                'disabled',
                0
            ],
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 37)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 38).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["n" /* View_MdMenuItem_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["o" /* RenderType_MdMenuItem */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](49152, [[
                3,
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_21" /* MdMenuItem */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["A" /* RouterLinkWithHref */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* LocationStrategy */]
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpad */](1),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 3, 'md-icon', [[
                'role',
                'img'
            ]
        ], [[
                2,
                'mat-icon',
                null
            ]
        ], null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["p" /* View_MdIcon_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["q" /* RenderType_MdIcon */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](9027584, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_22" /* MdIcon */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdIconRegistry */]
        ], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['settings'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 1, 'span', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['Settings'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 12, 'a', [
            [
                'md-menu-item',
                ''
            ],
            [
                'role',
                'menuitem'
            ]
        ], [
            [
                2,
                'mat-menu-item',
                null
            ],
            [
                1,
                'tabindex',
                0
            ],
            [
                1,
                'aria-disabled',
                0
            ],
            [
                1,
                'disabled',
                0
            ],
            [
                1,
                'target',
                0
            ],
            [
                8,
                'href',
                4
            ]
        ], [[
                null,
                'click'
            ]
        ], function (v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 51)._checkDisabled($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('click' === en)) {
                var pd_1 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 52).onClick($event.button, $event.ctrlKey, $event.metaKey) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["n" /* View_MdMenuItem_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["o" /* RenderType_MdMenuItem */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](49152, [[
                3,
                4
            ]
        ], 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_21" /* MdMenuItem */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](671744, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["A" /* RouterLinkWithHref */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_5__angular_common__["f" /* LocationStrategy */]
        ], { routerLink: [
                0,
                'routerLink'
            ]
        }, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_35" /* ɵpad */](1),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 3, 'md-icon', [[
                'role',
                'img'
            ]
        ], [[
                2,
                'mat-icon',
                null
            ]
        ], null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["p" /* View_MdIcon_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["q" /* RenderType_MdIcon */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](9027584, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_22" /* MdIcon */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["v" /* MdIconRegistry */]
        ], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['input'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n      '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 1, 'span', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['Logout'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 5, 'main', [[
                'fxFlex',
                '1 1 auto'
            ]
        ], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout_flexbox_api_flex__["a" /* FlexDirective */], [
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            [
                3,
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout_flexbox_api_layout__["a" /* LayoutDirective */]
            ],
            [
                3,
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout_flexbox_api_layout_wrap__["a" /* LayoutWrapDirective */]
            ]
        ], { flex: [
                0,
                'flex'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](16777216, null, null, 1, 'router-outlet', [], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](147456, null, 0, __WEBPACK_IMPORTED_MODULE_4__angular_router__["C" /* RouterOutlet */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["l" /* RouterOutletMap */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["U" /* ComponentFactoryResolver */],
            [
                8,
                null
            ]
        ], null, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 15, 'footer', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 12, 'md-toolbar', [
            [
                'color',
                'accent'
            ],
            [
                'role',
                'toolbar'
            ]
        ], [[
                2,
                'mat-toolbar',
                null
            ]
        ], null, null, __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["h" /* View_MdToolbar_0 */], __WEBPACK_IMPORTED_MODULE_2__gendir_node_modules_angular_material_typings_index_ngfactory__["i" /* RenderType_MdToolbar */])),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](16384, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_12" /* MdPrefixRejector */], [
            [
                2,
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["_13" /* MATERIAL_COMPATIBILITY_MODE */]
            ],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */]
        ], null, null),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](49152, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_material__["_16" /* MdToolbar */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */]
        ], { color: [
                0,
                'color'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 1, 'span', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, [
            '© ',
            ' ',
            ''
        ])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, 0, 1, 'span', [[
                'fxFlex',
                '1 1 auto'
            ]
        ], null, null, null, null, null)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](737280, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout_flexbox_api_flex__["a" /* FlexDirective */], [
            __WEBPACK_IMPORTED_MODULE_7__angular_flex_layout_media_query_media_monitor__["a" /* MediaMonitor */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_20" /* Renderer2 */],
            [
                3,
                __WEBPACK_IMPORTED_MODULE_9__angular_flex_layout_flexbox_api_layout__["a" /* LayoutDirective */]
            ],
            [
                3,
                __WEBPACK_IMPORTED_MODULE_10__angular_flex_layout_flexbox_api_layout_wrap__["a" /* LayoutWrapDirective */]
            ]
        ], { flex: [
                0,
                'flex'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n    '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_38" /* ɵand */](16777216, null, 0, 1, null, View_LayoutShellComponent_2)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](802816, null, 0, __WEBPACK_IMPORTED_MODULE_5__angular_common__["o" /* NgForOf */], [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["T" /* ViewContainerRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["_6" /* TemplateRef */],
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["w" /* IterableDiffers */]
        ], { ngForOf: [
                0,
                'ngForOf'
            ]
        }, null),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](0, ['\n  '])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], function (ck, v) {
        var co = v.component;
        var currVal_1 = 'primary';
        ck(v, 5, 0, currVal_1);
        var currVal_5 = 'primary';
        ck(v, 11, 0, currVal_5);
        var currVal_6 = co.primaryMenuItems;
        ck(v, 14, 0, currVal_6);
        var currVal_8 = 'user-menu-button';
        ck(v, 18, 0, currVal_8);
        var currVal_9 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 32);
        ck(v, 22, 0, currVal_9);
        var currVal_12 = 'user-avatar';
        ck(v, 26, 0, currVal_12);
        var currVal_13 = 'before';
        var currVal_14 = false;
        ck(v, 32, 0, currVal_13, currVal_14);
        var currVal_21 = ck(v, 39, 0, '/user');
        ck(v, 38, 0, currVal_21);
        ck(v, 43, 0);
        var currVal_29 = ck(v, 53, 0, '/logout');
        ck(v, 52, 0, currVal_29);
        ck(v, 57, 0);
        var currVal_31 = '1 1 auto';
        ck(v, 67, 0, currVal_31);
        var currVal_33 = 'accent';
        ck(v, 77, 0, currVal_33);
        var currVal_36 = '1 1 auto';
        ck(v, 83, 0, currVal_36);
        var currVal_37 = co.footerLinks;
        ck(v, 86, 0, currVal_37);
    }, function (ck, v) {
        var co = v.component;
        var currVal_0 = true;
        ck(v, 3, 0, currVal_0);
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵinlineInterpolate */](1, '', co.applicationTitle, '');
        var currVal_3 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵinlineInterpolate */](1, '', co.logoSrc, '');
        ck(v, 7, 0, currVal_2, currVal_3);
        var currVal_4 = true;
        ck(v, 9, 0, currVal_4);
        var currVal_7 = (__WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 20).disabled || null);
        ck(v, 17, 0, currVal_7);
        var currVal_10 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_41" /* ɵunv */](v, 23, 0, ck(v, 24, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 0), co.username));
        ck(v, 23, 0, currVal_10);
        var currVal_11 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_40" /* ɵinlineInterpolate */](1, '', co.userAvatarSource, '');
        ck(v, 25, 0, currVal_11);
        var currVal_15 = true;
        var currVal_16 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 37)._getTabIndex();
        var currVal_17 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 37).disabled.toString();
        var currVal_18 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 37)._getDisabledAttr();
        var currVal_19 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 38).target;
        var currVal_20 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 38).href;
        ck(v, 36, 0, currVal_15, currVal_16, currVal_17, currVal_18, currVal_19, currVal_20);
        var currVal_22 = true;
        ck(v, 41, 0, currVal_22);
        var currVal_23 = true;
        var currVal_24 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 51)._getTabIndex();
        var currVal_25 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 51).disabled.toString();
        var currVal_26 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 51)._getDisabledAttr();
        var currVal_27 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 52).target;
        var currVal_28 = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_34" /* ɵnov */](v, 52).href;
        ck(v, 50, 0, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);
        var currVal_30 = true;
        ck(v, 55, 0, currVal_30);
        var currVal_32 = true;
        ck(v, 75, 0, currVal_32);
        var currVal_34 = co.copyrightYear;
        var currVal_35 = co.applicationTitle;
        ck(v, 80, 0, currVal_34, currVal_35);
    });
}
function View_LayoutShellComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'app-layout-shell', [], null, null, null, View_LayoutShellComponent_0, RenderType_LayoutShellComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_11__app_core_layout_shell_shell_component__["a" /* LayoutShellComponent */], [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["j" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["v" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_12__angular_platform_browser__["l" /* Title */],
            __WEBPACK_IMPORTED_MODULE_13__app_core_shared_services_logger_service__["a" /* LoggerService */]
        ], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var LayoutShellComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('app-layout-shell', __WEBPACK_IMPORTED_MODULE_11__app_core_layout_shell_shell_component__["a" /* LayoutShellComponent */], View_LayoutShellComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3NoZWxsL3NoZWxsLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvc2hlbGwvc2hlbGwuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3NoZWxsL3NoZWxsLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3NoZWxsL3NoZWxsLmNvbXBvbmVudC50cy5MYXlvdXRTaGVsbENvbXBvbmVudF9Ib3N0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiICIsIjxoZWFkZXI+XHJcbiAgPG1kLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICA8aW1nIHRpdGxlPVwie3sgYXBwbGljYXRpb25UaXRsZSB9fVwiIHNyYz1cInt7IGxvZ29TcmMgfX1cIiAvPlxyXG4gICAgPG1kLXRvb2xiYXIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgIDxhIG1kLWJ1dHRvbiAqbmdGb3I9XCJsZXQgbWVudUl0ZW0gb2YgcHJpbWFyeU1lbnVJdGVtc1wiXHJcbiAgICAgICAgW3JvdXRlckxpbmtdPVwiW21lbnVJdGVtLnBhdGhdXCJcclxuICAgICAgICBbcm91dGVyTGlua0FjdGl2ZV09XCJbJ2FjdGl2ZSddXCI+XHJcbiAgICAgICAge3sgbWVudUl0ZW0ubGFiZWwgfX1cclxuICAgICAgPC9hPlxyXG4gICAgPC9tZC10b29sYmFyPlxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBjbGFzcz1cInVzZXItbWVudS1idXR0b25cIlxyXG4gICAgICBtZC1idXR0b25cclxuICAgICAgc3R5bGU9XCJtaW4td2lkdGg6IGF1dG87IGhlaWdodDogaW5oZXJpdDtcIlxyXG4gICAgICBbbWRNZW51VHJpZ2dlckZvcl09XCJ1c2VyTWVudVwiPlxyXG4gICAgICB7eyB1c2VybmFtZSB8IHVwcGVyY2FzZSB9fVxyXG4gICAgICA8aW1nIGNsYXNzPVwidXNlci1hdmF0YXJcIiBzcmM9XCJ7eyB1c2VyQXZhdGFyU291cmNlIH19XCI+XHJcbiAgICA8L2J1dHRvbj5cclxuICA8L21kLXRvb2xiYXI+XHJcbiAgPG1kLW1lbnUgI3VzZXJNZW51PVwibWRNZW51XCIgeFBvc2l0aW9uPVwiYmVmb3JlXCIgW292ZXJsYXBUcmlnZ2VyXT1cImZhbHNlXCI+XHJcbiAgICA8IS0tIFRvRG86IENyZWF0ZSB0aGlzIGR5bmFtaWNhbGx5PyAtLT5cclxuICAgIDxhIG1kLW1lbnUtaXRlbSBbcm91dGVyTGlua109XCJbJy91c2VyJ11cIj5cclxuICAgICAgPG1kLWljb24+c2V0dGluZ3M8L21kLWljb24+XHJcbiAgICAgIDxzcGFuPlNldHRpbmdzPC9zcGFuPlxyXG4gICAgPC9hPlxyXG4gICAgPGEgbWQtbWVudS1pdGVtIFtyb3V0ZXJMaW5rXT1cIlsnL2xvZ291dCddXCI+XHJcbiAgICAgIDxtZC1pY29uPmlucHV0PC9tZC1pY29uPlxyXG4gICAgICA8c3Bhbj5Mb2dvdXQ8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9tZC1tZW51PlxyXG48L2hlYWRlcj5cclxuXHJcbjxtYWluIGZ4RmxleD1cIjEgMSBhdXRvXCI+XHJcbiAgPHJvdXRlci1vdXRsZXQ+PC9yb3V0ZXItb3V0bGV0PlxyXG48L21haW4+XHJcblxyXG48Zm9vdGVyPlxyXG4gIDxtZC10b29sYmFyIGNvbG9yPVwiYWNjZW50XCI+XHJcbiAgICA8c3Bhbj7CqSB7eyBjb3B5cmlnaHRZZWFyIH19IHt7IGFwcGxpY2F0aW9uVGl0bGUgfX08L3NwYW4+XHJcbiAgICA8c3BhbiBmeEZsZXg9XCIxIDEgYXV0b1wiPjwvc3Bhbj5cclxuICAgIDxhIG1kLWJ1dHRvbiAqbmdGb3I9XCJsZXQgbGluayBvZiBmb290ZXJMaW5rc1wiXHJcbiAgICAgIFtyb3V0ZXJMaW5rXT1cIltsaW5rLnBhdGhdXCI+XHJcbiAgICAgIHt7IGxpbmsubGFiZWwgfX1cclxuICAgIDwvYT5cclxuICA8L21kLXRvb2xiYXI+XHJcbjwvZm9vdGVyPlxyXG4iLCI8YXBwLWxheW91dC1zaGVsbD48L2FwcC1sYXlvdXQtc2hlbGw+Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0lNO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTs7TUFBQTs7O0lBQUE7S0FBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO2dCQUFBO2tCQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQ0U7Z0JBREY7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO2dCQUFBO2dCQUVFO0lBQWdDO01BQUE7TUFBQTtJQUFBO0lBQUE7OztJQURoQztJQURGLFNBQ0UsU0FERjtJQUVFO0lBRkYsU0FFRSxTQUZGOztJQUFBO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQSxTQUFBLDhCQUFBLG1CQUFBO0lBRWtDO0lBQUE7Ozs7O0lBa0NwQztNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7OztJQUFBO0tBQUE7Z0JBQUE7Ozs7O0lBQUE7S0FBQTtnQkFBQTtnQkFBQTs7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFDRTtJQUEyQjtNQUFBO01BQUE7SUFBQTtJQUFBOzs7SUFBM0I7SUFERixTQUNFLFNBREY7O0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFNBQUEsOEJBQUEsbUJBQUE7SUFDNkI7SUFBQTs7Ozs7O0lBekNqQztJQUFRO0lBQ047TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7OztJQUFBO0tBQUE7Z0JBQUE7OztJQUFBO09BQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtJQUE0QjtJQUMxQjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQTBEO0lBQzFEO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOzs7SUFBQTtLQUFBO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBNEI7SUFDMUI7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFJSTtJQUNPO0lBQ2I7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7UUFBQTtRQUFBO01BQUE7TUFBQTtJQUFBO2dCQUFBOzs7Ozs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBO01BQUE7UUFBQTs7TUFBQTs7O0lBQUE7S0FBQTtnQkFBQTs7Ozs7SUFBQTtLQUFBO2dCQUFBO2dCQUFBOzs7O01BQUE7UUFBQTs7TUFBQTs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO0lBSWdDO01BQUE7TUFBQTtJQUFBO0lBQUE7Z0JBQUE7TUFFOUI7UUFBQTtRQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7Ozs7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBc0Q7SUFDL0M7SUFDRTtJQUNiO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7S0FBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7OztJQUFBO0tBQUE7a0JBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtNQUFBOztJQUFBO0tBQUE7Z0JBQUE7SUFBd0U7SUFDL0I7SUFDdkM7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFnQjtJQUF5QjtNQUN2QztRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7OztJQUFBO0tBQUE7Z0JBQUE7Ozs7SUFBQTtLQUFBO0lBQVM7SUFBa0I7SUFDM0I7SUFBTTtJQUFlO0lBQ25CO0lBQ0o7TUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTs7TUFBQTtRQUFBO1FBQUE7UUFBQTtNQUFBOztNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO01BQUE7TUFBQTtRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtNQUFBO01BQUE7SUFBQTtrQkFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFBOzs7O0lBQUE7T0FBQTtRQUFBO1FBQUE7TUFBQTtJQUFBO2dCQUFnQjtJQUEyQjtNQUN6QztRQUFBO1FBQUE7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTtNQUFBO1FBQUE7O01BQUE7OztJQUFBO0tBQUE7Z0JBQUE7Ozs7SUFBQTtLQUFBO0lBQVM7SUFBZTtJQUN4QjtJQUFNO0lBQWE7SUFDakI7SUFDSTtJQUNIO01BRVQ7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBd0I7SUFDdEI7Z0JBQUE7Ozs7TUFBQTtRQUFBO1FBQUE7TUFBQTs7SUFBQTtLQUFBO0lBQStCO0lBQzFCO0lBRVA7SUFBUTtJQUNOO01BQUE7UUFBQTtRQUFBO01BQUE7O01BQUE7UUFBQTtRQUFBO01BQUE7O0lBQUE7T0FBQTtRQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7Z0JBQUE7TUFBQTtRQUFBOztNQUFBOzs7SUFBQTtLQUFBO2dCQUFBOzs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBMkI7SUFDekI7SUFBTTtNQUFBO01BQUE7TUFBQTtJQUFBO0lBQUE7SUFBbUQ7TUFDekQ7UUFBQTtRQUFBO01BQUE7SUFBQTtnQkFBQTs7OztNQUFBO1FBQUE7O01BQUE7O01BQUE7UUFBQTs7TUFBQTs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFBK0I7SUFDL0I7Z0JBQUE7Ozs7SUFBQTtPQUFBO1FBQUE7UUFBQTtNQUFBO0lBQUE7SUFHSTtJQUNPO0lBQ047Ozs7SUE1Q0s7SUFBWixTQUFZLFNBQVo7SUFFYztJQUFaLFVBQVksU0FBWjtJQUNlO0lBQWIsVUFBYSxTQUFiO0lBT0E7SUFERixVQUNFLFNBREY7SUFJRTtJQUpGLFVBSUUsU0FKRjtJQU1PO0lBQUwsVUFBSyxVQUFMO0lBR3dCO0lBQW1CO0lBQS9DLFVBQTRCLFdBQW1CLFVBQS9DO0lBRWtCO0lBQWhCLFVBQWdCLFVBQWhCO0lBQ0U7SUFHYztJQUFoQixVQUFnQixVQUFoQjtJQUNFO0lBTUE7SUFBTixVQUFNLFVBQU47SUFLYztJQUFaLFVBQVksVUFBWjtJQUVRO0lBQU4sVUFBTSxVQUFOO0lBQ2E7SUFBYixVQUFhLFVBQWI7OztJQXZDRjtJQUFBLFNBQUEsU0FBQTtJQUNPO0lBQStCO0lBQXBDLFNBQUssVUFBK0IsU0FBcEM7SUFDQTtJQUFBLFNBQUEsU0FBQTtJQU9BO0lBQUEsVUFBQSxTQUFBO0lBSWdDO0lBQUE7SUFFTDtJQUF6QixVQUF5QixVQUF6QjtJQUtGO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNENBQUEscUJBQUE7SUFDRTtJQUFBLFVBQUEsVUFBQTtJQUdGO0lBQUE7SUFBQTtJQUFBO0lBQUE7SUFBQTtJQUFBLFVBQUEsNENBQUEscUJBQUE7SUFDRTtJQUFBLFVBQUEsVUFBQTtJQVdKO0lBQUEsVUFBQSxVQUFBO0lBQ1E7SUFBQTtJQUFBOzs7OztJQ3RDVjtnQkFBQTs7Ozs7SUFBQTtLQUFBOzs7SUFBQTs7OyJ9
//# sourceMappingURL=shell.component.ngfactory.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = ['[_nghost-%COMP%] {\n  height: 100vh;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: stretch;\n  align-content: stretch; }\n  [_nghost-%COMP%]   header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 37px; }\n  [_nghost-%COMP%]   header[_ngcontent-%COMP%]   .user-avatar[_ngcontent-%COMP%] {\n    border-radius: 35px;\n    margin-left: 5px; }\n  [_nghost-%COMP%]    > main[_ngcontent-%COMP%] {\n    overflow: auto; }\n  [_nghost-%COMP%]    > footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n    cursor: default;\n    font-size: 14px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }'];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL2xheW91dC9zaGVsbC9zaGVsbC5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=shell.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__terms_conditions_component_scss_shim_ngstyle__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_core_layout_terms_conditions_terms_conditions_component__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__ = __webpack_require__(3);
/* unused harmony export RenderType_TermsConditionsComponent */
/* unused harmony export View_TermsConditionsComponent_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsComponentNgFactory; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */




var styles_TermsConditionsComponent = [__WEBPACK_IMPORTED_MODULE_0__terms_conditions_component_scss_shim_ngstyle__["a" /* styles */]];
var RenderType_TermsConditionsComponent = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* ɵcrt */]({
    encapsulation: 0,
    styles: styles_TermsConditionsComponent,
    data: {}
});
function View_TermsConditionsComponent_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'h1', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['Terms and Conditions'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'p', [], null, null, null, null, null)),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n  Coming soon...\n'])),
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_32" /* ɵted */](null, ['\n']))
    ], null, null);
}
function View_TermsConditionsComponent_Host_0(l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["_29" /* ɵvid */](0, [
        (l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["_30" /* ɵeld */](0, null, null, 1, 'ng-component', [], null, null, null, View_TermsConditionsComponent_0, RenderType_TermsConditionsComponent)),
        __WEBPACK_IMPORTED_MODULE_1__angular_core__["_31" /* ɵdid */](114688, null, 0, __WEBPACK_IMPORTED_MODULE_2__app_core_layout_terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */], [__WEBPACK_IMPORTED_MODULE_3__app_core_shared_services_logger_service__["a" /* LoggerService */]], null, null)
    ], function (ck, v) {
        ck(v, 1, 0);
    }, null);
}
var TermsConditionsComponentNgFactory = __WEBPACK_IMPORTED_MODULE_1__angular_core__["_33" /* ɵccf */]('ng-component', __WEBPACK_IMPORTED_MODULE_2__app_core_layout_terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */], View_TermsConditionsComponent_Host_0, {}, {}, []);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQubmdmYWN0b3J5LnRzIiwidmVyc2lvbiI6Mywic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQudHMiLCJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQudHMuVGVybXNDb25kaXRpb25zQ29tcG9uZW50X0hvc3QuaHRtbCJdLCJzb3VyY2VzQ29udGVudCI6WyIgIiwiPGgxPlRlcm1zIGFuZCBDb25kaXRpb25zPC9oMT5cclxuPHA+XHJcbiAgQ29taW5nIHNvb24uLi5cclxuPC9wPlxyXG4iLCI8bmctY29tcG9uZW50PjwvbmctY29tcG9uZW50PiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FBO0lBQUk7SUFBeUI7SUFDN0I7SUFBRztJQUVDOzs7Ozs7SUNISjtnQkFBQTs7O0lBQUE7OzsifQ==
//# sourceMappingURL=terms-conditions.component.ngfactory.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvbGF5b3V0L3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuc2Nzcy5zaGltLm5nc3R5bGUudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9Vc2Vycy90cmF2aS9Tb3VyY2UvTXkgQW5ndWxhciBTZWVkcy90bS1zZWVkLW5nLWZsZXgtbGF5b3V0LW1hdGVyaWFsL3NyYy9hcHAvY29yZS9sYXlvdXQvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLmNvbXBvbmVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7In0=
//# sourceMappingURL=terms-conditions.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */ var styles = [''];
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovVXNlcnMvdHJhdmkvU291cmNlL015IEFuZ3VsYXIgU2VlZHMvdG0tc2VlZC1uZy1mbGV4LWxheW91dC1tYXRlcmlhbC9zcmMvYXBwL2NvcmUvdXNlci91c2VyLmNvbXBvbmVudC5zY3NzLnNoaW0ubmdzdHlsZS50cyIsInZlcnNpb24iOjMsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5nOi8vL0M6L1VzZXJzL3RyYXZpL1NvdXJjZS9NeSBBbmd1bGFyIFNlZWRzL3RtLXNlZWQtbmctZmxleC1sYXlvdXQtbWF0ZXJpYWwvc3JjL2FwcC9jb3JlL3VzZXIvdXNlci5jb21wb25lbnQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiICJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OyJ9
//# sourceMappingURL=user.component.scss.shim.ngstyle.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });

var AppComponent = (function () {
    function AppComponent(logger) {
        this.logger = logger;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.logger.log('[Core.AppComponent] Initialized!', this);
    };
    AppComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__shared_services_logger_service__["a" /* LoggerService */] }]; };
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });

var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_material__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutMaterialModule; });
/*
 This issue sums up the mess below: https://github.com/angular/material2/issues/4092
*/

var ALL_MATERIAL_MODULES = [
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["H" /* MdAutocompleteModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["J" /* MdButtonModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["K" /* MdButtonToggleModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["L" /* MdCardModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["M" /* MdChipsModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["N" /* MdCheckboxModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["P" /* MdDialogModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["S" /* MdGridListModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["T" /* MdIconModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["U" /* MdInputModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["V" /* MdListModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["W" /* MdMenuModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["X" /* MdProgressBarModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["Y" /* MdProgressSpinnerModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["Z" /* MdRadioModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["C" /* MdRippleModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_0" /* MdSelectModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_1" /* MdSidenavModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_3" /* MdSliderModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_4" /* MdSlideToggleModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_5" /* MdSnackBarModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_7" /* MdTabsModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_8" /* MdToolbarModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_9" /* MdTooltipModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["G" /* OverlayModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["F" /* PortalModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_2" /* RtlModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["I" /* StyleModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["O" /* A11yModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["A" /* PlatformModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["y" /* CompatibilityModule */],
    __WEBPACK_IMPORTED_MODULE_0__angular_material__["_6" /* ObserveContentModule */]
];
var LayoutMaterialModule = (function () {
    function LayoutMaterialModule() {
    }
    return LayoutMaterialModule;
}());

//# sourceMappingURL=layout-material.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__about_about_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__feedback_feedback_component__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__privacy_policy_privacy_policy_component__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__terms_conditions_terms_conditions_component__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutRoutingModule; });





var routes = [
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_0__about_about_component__["a" /* AboutComponent */], data: { title: 'About' } },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_1__dashboard_dashboard_component__["a" /* DashboardComponent */], data: { title: 'Dashboard' } },
    { path: 'feedback', component: __WEBPACK_IMPORTED_MODULE_2__feedback_feedback_component__["a" /* FeedbackComponent */], data: { title: 'Feedback' } },
    { path: 'privacy-policy', component: __WEBPACK_IMPORTED_MODULE_3__privacy_policy_privacy_policy_component__["a" /* PrivacyPolicyComponent */], data: { title: 'Privacy Policy' } },
    { path: 'terms-conditions', component: __WEBPACK_IMPORTED_MODULE_4__terms_conditions_terms_conditions_component__["a" /* TermsConditionsComponent */], data: { title: 'Terms and Conditions' } },
];
var LayoutRoutingModule = (function () {
    function LayoutRoutingModule() {
    }
    return LayoutRoutingModule;
}());

//# sourceMappingURL=layout-routing.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());

//# sourceMappingURL=layout.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layout_page_not_found_page_not_found_component__ = __webpack_require__(59);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });

var routes = [
    // ToDo: Get list of modules that we want to lazy-load at build/deploy/run time?
    { path: 'user', loadChildren: '../user/user.module#UserModule' },
    { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
    // ToDo: Create a full-fledged exception handling module or, at least, a better 404 design.
    { path: '**', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__layout_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */], data: { title: 'Oops!' } },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectiveStrategy; });


var SelectiveStrategy = (function () {
    function SelectiveStrategy() {
    }
    SelectiveStrategy.prototype.preload = function (route, load) {
        if (route.data && route.data['preload']) {
            return load();
        }
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
    };
    return SelectiveStrategy;
}());

//# sourceMappingURL=selective-strategy.service.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalData; });
var GlobalData = (function () {
    function GlobalData() {
    }
    GlobalData.prototype.createDb = function () {
        return {
            'primary-menu-items': this.primaryMenuItems(),
        };
    };
    GlobalData.prototype.primaryMenuItems = function () {
        return [
            {
                'label': 'Dashboard',
                'path': '/dashboard',
            },
        ];
    };
    return GlobalData;
}());

//# sourceMappingURL=global-mock.data.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(131);


/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoggerService; });

var LoggerService = (function () {
    function LoggerService() {
        this.enabled = true;
        this.noop = function () { };
        if (__WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].production) {
            this.enabled = false;
        }
    }
    Object.defineProperty(LoggerService.prototype, "debug", {
        get: function () {
            if (this.enabled) {
                return console.debug.bind(console);
            }
            return this.noop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerService.prototype, "error", {
        get: function () {
            if (this.enabled) {
                return console.error.bind(console);
            }
            return this.noop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerService.prototype, "log", {
        get: function () {
            if (this.enabled) {
                return console.log.bind(console);
            }
            return this.noop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerService.prototype, "info", {
        get: function () {
            if (this.enabled) {
                return console.info.bind(console);
            }
            return this.noop;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoggerService.prototype, "warn", {
        get: function () {
            if (this.enabled) {
                return console.warn.bind(console);
            }
            return this.noop;
        },
        enumerable: true,
        configurable: true
    });
    LoggerService.ctorParameters = function () { return []; };
    return LoggerService;
}());

//# sourceMappingURL=logger.service.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the local dev environment which uses thsi file
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    environmentName: 'local',
    application: {
        title: 'Acme',
        logoSource: 'assets/images/acme-logo-yellow.svg',
    },
    user: {
        avatarSource: 'assets/images/avatar-small.png',
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.ctorParameters = function () { return []; };
    return UserComponent;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });

var AboutComponent = (function () {
    function AboutComponent(logger) {
        this.logger = logger;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.logger.log('[Layout.AboutComponent] Initialized!', this);
    };
    AboutComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__["a" /* LoggerService */] }]; };
    return AboutComponent;
}());

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ 57:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_services_logger_service__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(40);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });


var DashboardComponent = (function () {
    function DashboardComponent(logger) {
        this.logger = logger;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.applicationTitle = __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].application.title;
        this.logger.log('[Layout.DashboardComponent] Initialized!', this);
    };
    DashboardComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0__shared_services_logger_service__["a" /* LoggerService */] }]; };
    return DashboardComponent;
}());

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });

var FeedbackComponent = (function () {
    function FeedbackComponent(logger) {
        this.logger = logger;
    }
    FeedbackComponent.prototype.ngOnInit = function () {
        this.logger.log('[Layout.FeedbackComponent] Initialized!', this);
    };
    FeedbackComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__["a" /* LoggerService */] }]; };
    return FeedbackComponent;
}());

//# sourceMappingURL=feedback.component.js.map

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent(logger) {
        this.logger = logger;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.logger.log('[Layout.PageNotFoundComponent] Initialized!', this);
    };
    PageNotFoundComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__["a" /* LoggerService */] }]; };
    return PageNotFoundComponent;
}());

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivacyPolicyComponent; });

var PrivacyPolicyComponent = (function () {
    function PrivacyPolicyComponent(logger) {
        this.logger = logger;
    }
    PrivacyPolicyComponent.prototype.ngOnInit = function () {
        this.logger.log('[Layout.PrivacyPolicyComponent] Initialized!', this);
    };
    PrivacyPolicyComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__["a" /* LoggerService */] }]; };
    return PrivacyPolicyComponent;
}());

//# sourceMappingURL=privacy-policy.component.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionsComponent; });

var TermsConditionsComponent = (function () {
    function TermsConditionsComponent(logger) {
        this.logger = logger;
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
        this.logger.log('[Layout.TermsConditionsComponent] Initialized!', this);
    };
    TermsConditionsComponent.ctorParameters = function () { return [{ type: __WEBPACK_IMPORTED_MODULE_0_app_core_shared_services_logger_service__["a" /* LoggerService */] }]; };
    return TermsConditionsComponent;
}());

//# sourceMappingURL=terms-conditions.component.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.bundle.js.map