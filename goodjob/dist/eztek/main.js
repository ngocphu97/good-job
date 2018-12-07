(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/analytics/analytics.module": [
		"./src/app/modules/analytics/analytics.module.ts",
		"app-modules-analytics-analytics-module"
	],
	"app/modules/content/content.module": [
		"./src/app/modules/content/content.module.ts",
		"app-modules-content-content-module~app-modules-wellcome-wellcome-module",
		"app-modules-content-content-module"
	],
	"app/modules/group/group.module": [
		"./src/app/modules/group/group.module.ts",
		"app-modules-group-group-module"
	],
	"app/modules/posts/posts.module": [
		"./src/app/modules/posts/posts.module.ts",
		"app-modules-posts-posts-module"
	],
	"app/modules/wellcome/wellcome.module": [
		"./src/app/modules/wellcome/wellcome.module.ts",
		"app-modules-content-content-module~app-modules-wellcome-wellcome-module",
		"app-modules-wellcome-wellcome-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services */ "./src/app/modules/core/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    /**
     * Do not remove splashScreen in constructor
     */
    function AppComponent(splashScreen) {
        this.splashScreen = splashScreen;
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_1__["SplashScreenService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _app_core_core_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/core/core.module */ "./src/app/modules/core/core.module.ts");
/* harmony import */ var _app_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @app/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_core_store__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/core/store */ "./src/app/modules/core/store/index.ts");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _modules_content_directive_thumnail_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/content/directive/thumnail.directive */ "./src/app/modules/content/directive/thumnail.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_13__["routes"], { useHash: false }),
                /**
                 * StoreModule.forRoot is imported once in the root module, accepting a reducer
                 * function or object map of reducer functions. If passed an object of
                 * reducers, combineReducers will be run creating your application
                 * meta-reducer. This returns all providers for an @ngrx/store
                 * based application.
                 */
                _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["StoreModule"].forRoot(_app_core_store__WEBPACK_IMPORTED_MODULE_14__["reducers"], { metaReducers: _app_core_store__WEBPACK_IMPORTED_MODULE_14__["metaReducers"] }),
                /**
                 * @ngrx/router-store keeps router state up-to-date in the store.
                 */
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["StoreRouterConnectingModule"].forRoot({
                    /*
                      They stateKey defines the name of the state used by the router-store reducer.
                      This matches the key defined in the map of reducers
                    */
                    stateKey: 'router',
                }),
                /**
                 * Store devtools instrument the store retaining past versions of state
                 * and recalculating new states. This enables powerful time-travel
                 * debugging.
                 *
                 * To use the debugger, install the Redux Devtools extension for either
                 * Chrome or Firefox
                 *
                 * See: https://github.com/zalmoxisus/redux-devtools-extension
                 */
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_8__["StoreDevtoolsModule"].instrument({
                    name: 'NgRx Book Store DevTools',
                    logOnly: _app_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production,
                }),
                /**
                 * EffectsModule.forRoot() is imported once in the root module and
                 * sets up the effects class to be initialized immediately when the
                 * application starts.
                 *
                 * See: https://github.com/ngrx/platform/blob/master/docs/effects/api.md#forroot
                 */
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["EffectsModule"].forRoot([]),
                _app_core_core_module__WEBPACK_IMPORTED_MODULE_9__["CoreModule"],
                _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_15__["OverlayModule"],
                _app_auth_auth_module__WEBPACK_IMPORTED_MODULE_10__["AuthModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _modules_content_directive_thumnail_directive__WEBPACK_IMPORTED_MODULE_16__["ThumnailDirective"]
            ],
            providers: [
                /**
                 * The `RouterStateSnapshot` provided by the `Router` is a large complex structure.
                 * A custom RouterStateSerializer is used to parse the `RouterStateSnapshot` provided
                 * by `@ngrx/router-store` to include only the desired pieces of the snapshot.
                 */
                { provide: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_6__["RouterStateSerializer"], useClass: _app_core_store__WEBPACK_IMPORTED_MODULE_14__["CustomRouterStateSerializer"] },
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _app_core_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/core/layout/dashboard/dashboard.component */ "./src/app/modules/core/layout/dashboard/dashboard.component.ts");

var routes = [
    {
        path: '',
        component: _app_core_layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"],
        children: [
            {
                path: '',
                loadChildren: 'app/modules/wellcome/wellcome.module#WellcomeModule'
            },
            {
                path: 'posts',
                loadChildren: 'app/modules/posts/posts.module#PostsModule'
            },
            {
                path: 'content',
                loadChildren: 'app/modules/content/content.module#ContentModule'
            },
            {
                path: 'thong_ke',
                loadChildren: 'app/modules/analytics/analytics.module#AnalyticsModule'
            },
            {
                path: 'them',
                loadChildren: 'app/modules/group/group.module#GroupModule'
            },
        ]
    },
    { path: '**', redirectTo: '/content' },
];


/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services */ "./src/app/modules/auth/services/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards */ "./src/app/modules/auth/guards/index.ts");
/* harmony import */ var _auth_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.routing */ "./src/app/modules/auth/auth.routing.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/app/modules/auth/containers/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/app/modules/auth/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_routing__WEBPACK_IMPORTED_MODULE_7__["routes"]),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            declarations: _containers__WEBPACK_IMPORTED_MODULE_8__["containers"].concat(_components__WEBPACK_IMPORTED_MODULE_9__["components"]),
            providers: _services__WEBPACK_IMPORTED_MODULE_5__["services"].concat(_guards__WEBPACK_IMPORTED_MODULE_6__["guards"])
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/modules/auth/auth.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/auth.routing.ts ***!
  \**********************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/login-page/login-page.component */ "./src/app/modules/auth/containers/login-page/login-page.component.ts");

var routes = [
    {
        path: '',
        component: _containers_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageComponent"]
    },
];


/***/ }),

/***/ "./src/app/modules/auth/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/components/index.ts ***!
  \**************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/modules/auth/components/login-form/login-form.component.ts");

var components = [
    _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_0__["LoginFormComponent"]
];


/***/ }),

/***/ "./src/app/modules/auth/components/login-form/login-form.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/login-form/login-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <h1>\n  Sign in\n</h1>\n\n\n<div class=\"fb-login-button\" data-max-rows=\"1\" data-size=\"large\" data-button-type=\"continue_with\" data-show-faces=\"false\"\n  data-auto-logout-link=\"false\" data-use-continue-as=\"false\" (click)=\"loginWithFb()\"></div>\n\n\n<div *ngIf=\"connectAccount.length > 0\">\n  <ul>\n    <li *ngFor=\"let account of connectAccount\">\n      <button>\n        <img src=\"{{account}}\" alt=\"\">\n      </button>\n    </li>\n  </ul>\n</div> -->\n\n<form #loginForm (ngSubmit)=\"login()\">\n\n  <div class=\"inputGroup inputGroup1\">\n    <label for=\"email1\">Email</label>\n    <input type=\"text\" id=\"email\" name=\"email\" [(ngModel)]=\"email\" class=\"email\" maxlength=\"256\" required />\n    <span class=\"indicator\"></span>\n  </div>\n  <div class=\"inputGroup inputGroup2\">\n    <label for=\"password\">Password</label>\n    <input type=\"password\" id=\"password\" name=\"password\" [(ngModel)]=\"password\" class=\"password\" required />\n  </div>\n  <div class=\"inputGroup inputGroup3\">\n    <button id=\"login\" type=\"submit\" [disabled]=\"loginForm.invalid\">Log in</button>\n  </div>\n\n  <br>\n</form>\n"

/***/ }),

/***/ "./src/app/modules/auth/components/login-form/login-form.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/login-form/login-form.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  width: 100%;\n  height: 100%; }\n\nbody {\n  background-color: #eff3f4;\n  position: relative;\n  width: 100%;\n  height: 100%;\n  font-size: 16px;\n  font-family: 'Source Sans Pro', sans-serif;\n  font-weight: 400;\n  -webkit-font-smoothing: antialiased; }\n\nform {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  display: block;\n  width: 100%;\n  max-width: 400px;\n  background-color: #FFF;\n  margin: 0;\n  padding: 2.25em;\n  box-sizing: border-box;\n  border: solid 1px #DDD;\n  border-radius: .5em;\n  font-family: 'Source Sans Pro', sans-serif; }\n\nform .svgContainer {\n  position: relative;\n  width: 200px;\n  height: 200px;\n  margin: 0 auto 1em;\n  border-radius: 50%;\n  background: none;\n  border: solid 2.5px #3A5E77;\n  overflow: hidden;\n  pointer-events: none; }\n\nform .svgContainer div {\n  position: relative;\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  padding-bottom: 100%; }\n\nform .svgContainer .mySVG {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none; }\n\nform .inputGroup {\n  margin: 0 0 2em;\n  padding: 0;\n  position: relative; }\n\nform .inputGroup:last-of-type {\n  margin-bottom: 0; }\n\nform label {\n  margin: 0 0 12px;\n  display: block;\n  font-size: 1.25em;\n  color: #217093;\n  font-weight: 700;\n  font-family: inherit; }\n\nform input[type='email'],\nform input[type=\"text\"],\nform input[type='password'] {\n  display: block;\n  margin: 0;\n  padding: 0 1em 0;\n  background-color: #f3fafd;\n  border: solid 2px #217093;\n  border-radius: 4px;\n  -webkit-appearance: none;\n  box-sizing: border-box;\n  width: 100%;\n  height: 65px;\n  font-size: 1.55em;\n  color: #353538;\n  font-weight: 600;\n  font-family: inherit;\n  transition: box-shadow .2s linear, border-color .25s ease-out; }\n\nform input[type='email']:focus,\nform input[type=\"text\"]:focus,\nform input[type='password']:focus {\n  outline: none;\n  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);\n  border: solid 2px #4eb8dd; }\n\nform input[type='email'],\nform input[type=\"text\"] {\n  padding: 14px 1em 0px; }\n\nform button {\n  display: block;\n  margin: 0;\n  padding: .65em 1em 1em;\n  background-color: #4eb8dd;\n  border: none;\n  border-radius: 4px;\n  box-sizing: border-box;\n  box-shadow: none;\n  width: 100%;\n  height: 65px;\n  font-size: 1.55em;\n  color: #FFF;\n  font-weight: 600;\n  font-family: inherit;\n  transition: background-color .2s ease-out; }\n\nform button:hover,\nform button:active {\n  background-color: #217093; }\n\nform .inputGroup1 .helper {\n  position: absolute;\n  z-index: 1;\n  font-family: inherit; }\n\nform .inputGroup1 .helper1 {\n  top: 0;\n  left: 0;\n  -webkit-transform: translate(1.4em, 2.6em) scale(1);\n  transform: translate(1.4em, 2.6em) scale(1);\n  -webkit-transform-origin: 0 0;\n  transform-origin: 0 0;\n  color: #217093;\n  font-size: 1.25em;\n  font-weight: 400;\n  opacity: .65;\n  pointer-events: none;\n  transition: opacity .2s linear, -webkit-transform .2s ease-out;\n  transition: transform .2s ease-out, opacity .2s linear;\n  transition: transform .2s ease-out, opacity .2s linear, -webkit-transform .2s ease-out; }\n\nform .inputGroup1.focusWithText .helper {\n  /*input[type='email']:focus + .helper {*/\n  -webkit-transform: translate(1.4em, 2em) scale(0.65);\n  transform: translate(1.4em, 2em) scale(0.65);\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/modules/auth/components/login-form/login-form.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/components/login-form/login-form.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(router) {
        this.router = router;
        this.loginSignal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.logoutSignal = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.loginWithFb = function () {
        this.loginSignal.emit();
    };
    LoginFormComponent.prototype.logoutWithFb = function () {
        this.logoutSignal.emit();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "loginSignal", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], LoginFormComponent.prototype, "logoutSignal", void 0);
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/modules/auth/components/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/modules/auth/components/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/containers/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/auth/containers/index.ts ***!
  \**************************************************/
/*! exports provided: containers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-page/login-page.component */ "./src/app/modules/auth/containers/login-page/login-page.component.ts");

var containers = [
    _login_page_login_page_component__WEBPACK_IMPORTED_MODULE_0__["LoginPageComponent"]
];


/***/ }),

/***/ "./src/app/modules/auth/containers/login-page/login-page.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/containers/login-page/login-page.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-login-form (logoutSignal)=\"logoutWithFb()\"></app-login-form>"

/***/ }),

/***/ "./src/app/modules/auth/containers/login-page/login-page.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/containers/login-page/login-page.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/auth/containers/login-page/login-page.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/auth/containers/login-page/login-page.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(http, router) {
        this.http = http;
        this.router = router;
        this.connectAccount = new Array();
    }
    LoginPageComponent.prototype.ngOnInit = function () {
        this.init();
    };
    LoginPageComponent.prototype.init = function () {
        FB.init({
            appId: '389593224888209',
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v3.1'
        });
    };
    LoginPageComponent.prototype.loginWithFb = function () {
        var router = this.router;
        FB.login(function (response) {
            console.log(response);
            if (response.authResponse) {
                console.log('Welcome! Fetching your information.... ');
            }
            else {
                console.log('User cancelled login or did not fully authorize.');
            }
            router.navigate(['/content']);
        });
    };
    LoginPageComponent.prototype.logoutWithFb = function () {
        FB.logout(function (response) {
            console.log(response);
        });
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/modules/auth/containers/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/modules/auth/containers/login-page/login-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/auth/guards/authentication.guard.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/guards/authentication.guard.ts ***!
  \*************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(authService) {
        this.authService = authService;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        return this.authService.isAuthenticated();
    };
    AuthenticationGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/modules/auth/guards/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/guards/index.ts ***!
  \**********************************************/
/*! exports provided: guards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var _authentication_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./authentication.guard */ "./src/app/modules/auth/guards/authentication.guard.ts");

var guards = [
    _authentication_guard__WEBPACK_IMPORTED_MODULE_0__["AuthenticationGuard"]
];


/***/ }),

/***/ "./src/app/modules/auth/models/auth-token.model.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/auth/models/auth-token.model.ts ***!
  \*********************************************************/
/*! exports provided: AuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return AuthToken; });
var AuthToken = /** @class */ (function () {
    function AuthToken(accessToken, refreshToken, tokenType, expiresIn, expiresAt, exp) {
        this.accessToken = accessToken;
        this.refreshToken = refreshToken;
        this.tokenType = tokenType;
        this.expiresIn = expiresIn;
        this.expiresAt = expiresAt;
        this.exp = exp;
    }
    AuthToken.isValid = function (token) {
        return token && new Date() <= new Date(token.exp);
    };
    return AuthToken;
}());



/***/ }),

/***/ "./src/app/modules/auth/models/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/auth/models/index.ts ***!
  \**********************************************/
/*! exports provided: AuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_token_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-token.model */ "./src/app/modules/auth/models/auth-token.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthToken", function() { return _auth_token_model__WEBPACK_IMPORTED_MODULE_0__["AuthToken"]; });




/***/ }),

/***/ "./src/app/modules/auth/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/environment */ "./src/environments/environment.ts");
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-storage.service */ "./src/app/modules/auth/services/token-storage.service.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "./src/app/modules/auth/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(http, tokenStoreManager) {
        this.http = http;
        this.tokenStoreManager = tokenStoreManager;
    }
    AuthService.prototype.login = function (user) {
        return this.http.post(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/connect/token", user);
    };
    AuthService.prototype.logout = function () {
        return this.http.post(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/api/account/logout", null);
    };
    AuthService.prototype.refreshToken = function () {
        return this.http.post(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/connect/token", {});
    };
    AuthService.prototype.isAuthenticated = function () {
        var token = this.getAuthToken();
        return token && _models__WEBPACK_IMPORTED_MODULE_4__["AuthToken"].isValid(token);
    };
    AuthService.prototype.getAuthToken = function () {
        return this.tokenStoreManager.get();
    };
    AuthService.prototype.saveAuthToken = function (token) {
        this.tokenStoreManager.save(token);
    };
    AuthService.prototype.clearAuthToken = function () {
        this.tokenStoreManager.remove();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStoreManager"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/modules/auth/services/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/auth/services/index.ts ***!
  \************************************************/
/*! exports provided: AuthService, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });

/* harmony import */ var _app_auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/auth/services/token-storage.service */ "./src/app/modules/auth/services/token-storage.service.ts");



var services = [
    _app_auth_services_token_storage_service__WEBPACK_IMPORTED_MODULE_1__["TokenStoreManager"],
    _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]
];


/***/ }),

/***/ "./src/app/modules/auth/services/token-storage.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/auth/services/token-storage.service.ts ***!
  \****************************************************************/
/*! exports provided: TokenStoreManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenStoreManager", function() { return TokenStoreManager; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services */ "./src/app/modules/core/services/index.ts");
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenStoreManager = /** @class */ (function () {
    function TokenStoreManager(localStorage) {
        this.localStorage = localStorage;
    }
    TokenStoreManager.prototype.get = function () {
        return this.localStorage.get(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authentication.tokenKey);
    };
    TokenStoreManager.prototype.save = function (value) {
        this.localStorage.set(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authentication.tokenKey, value);
    };
    TokenStoreManager.prototype.remove = function () {
        this.localStorage.remove(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authentication.tokenKey);
    };
    TokenStoreManager = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_1__["LocalStorageService"]])
    ], TokenStoreManager);
    return TokenStoreManager;
}());



/***/ }),

/***/ "./src/app/modules/content/directive/thumnail.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/content/directive/thumnail.directive.ts ***!
  \*****************************************************************/
/*! exports provided: ThumnailDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThumnailDirective", function() { return ThumnailDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThumnailDirective = /** @class */ (function () {
    function ThumnailDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    ThumnailDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appThumnail]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ThumnailDirective);
    return ThumnailDirective;
}());



/***/ }),

/***/ "./src/app/modules/core/components/index.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/core/components/index.ts ***!
  \**************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _components_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/top-nav/top-nav.component */ "./src/app/modules/core/components/top-nav/top-nav.component.ts");
/* harmony import */ var _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/side-nav/side-nav.component */ "./src/app/modules/core/components/side-nav/side-nav.component.ts");


var components = [
    _components_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_0__["TopNavComponent"],
    _components_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_1__["SideNavComponent"]
];


/***/ }),

/***/ "./src/app/modules/core/components/side-nav/side-nav.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/components/side-nav/side-nav.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav\">\n  <div class=\"publish\">\n    <a routerLink=\"/content\" type=\"button\" mat-raised-button color=\"accent\" style=\"width: 83%;\">\n      <i class=\"material-icons\">\n        public\n      </i>\n      Publish\n    </a>\n  </div>\n\n  <mat-nav-list>\n    <mat-list-item *ngFor=\"let user of connectAccount\" style=\"color: #fff\" (click)=\"onSelect(user)\">\n      <span matLine>{{ user.name }}</span>\n      <button mat-icon-button>\n        <img mat-card-avatar src=\"{{user.image}}\" alt=\"\">\n      </button>\n    </mat-list-item>\n  </mat-nav-list>\n\n"

/***/ }),

/***/ "./src/app/modules/core/components/side-nav/side-nav.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/core/components/side-nav/side-nav.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".publish {\n  display: flex;\n  justify-content: center; }\n\n.publish button {\n  width: 83%;\n  border-radius: 20px; }\n\n:host ::ng-deep .mat-pseudo-checkbox {\n  border: 2px solid #fff; }\n\n:host ::ng-deep .mat-card-avatar {\n  width: 33px;\n  height: 33px;\n  border-radius: 50%; }\n"

/***/ }),

/***/ "./src/app/modules/core/components/side-nav/side-nav.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/components/side-nav/side-nav.component.ts ***!
  \************************************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_navigate_navigate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/navigate/navigate.service */ "./src/app/modules/core/services/navigate/navigate.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SideNavComponent = /** @class */ (function () {
    function SideNavComponent(navigateService) {
        this.navigateService = navigateService;
        this.userSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.users = [];
        this.connectAccount = new Array();
    }
    SideNavComponent.prototype.ngOnInit = function () {
        // this.getInfo();
    };
    SideNavComponent.prototype.onSelect = function (user) {
        this.userSelected.emit(user);
    };
    SideNavComponent.prototype.getUsers = function () {
        var _this = this;
        this.navigateService.getUsers().subscribe(function (data) {
            return _this.users = data;
        });
    };
    SideNavComponent.prototype.getInfo = function () {
        var array = this.connectAccount;
        FB.api("/me", 'GET', {
            // tslint:disable-next-line:max-line-length
            access_token: 'EAANQlAVxZBd4BANA4ZBrCf35WFKzMWkACbptczKYr6Swtmr9WSoRwatTumZA0VBXUefHbJrfqb4k5Piq9utRcSYTttkNFLkf4fc08QM9OMMu7ZBOvAx3exgvDwRhEwK4NwccnvZBJSehsWqkFDkeZCL8BzJscdqIPYAi9982KQAbBXJtpcrUdE36y7j0c1x0u8B3vgmwozEveYjDySXwOjZC8JEDWwcYXQZD',
            fields: 'accounts{name, photos.width(150).height(150){picture}}'
        }, function (response) {
            var length = response.accounts.data.length;
            for (var i = 0; i < length; i++) {
                var photo = response.accounts.data[i].photos;
                var avatar = photo.data[0].picture;
                var data = response.accounts.data[i].name;
                var client = {
                    name: data,
                    image: avatar
                };
                array.push(client);
            }
            if (response.error) {
                console.log(response.error);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SideNavComponent.prototype, "userSelected", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SideNavComponent.prototype, "userList", void 0);
    SideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-nav',
            template: __webpack_require__(/*! ./side-nav.component.html */ "./src/app/modules/core/components/side-nav/side-nav.component.html"),
            styles: [__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/modules/core/components/side-nav/side-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_navigate_navigate_service__WEBPACK_IMPORTED_MODULE_1__["NavigateService"]])
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/components/top-nav/top-nav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/components/top-nav/top-nav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "wellcome"

/***/ }),

/***/ "./src/app/modules/core/components/top-nav/top-nav.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/components/top-nav/top-nav.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-icon {\n  padding: 0 14px; }\n\n.example-spacer {\n  flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/modules/core/components/top-nav/top-nav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/components/top-nav/top-nav.component.ts ***!
  \**********************************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TopNavComponent = /** @class */ (function () {
    function TopNavComponent() {
    }
    TopNavComponent.prototype.ngOnInit = function () {
    };
    TopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-nav',
            template: __webpack_require__(/*! ./top-nav.component.html */ "./src/app/modules/core/components/top-nav/top-nav.component.html"),
            styles: [__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/modules/core/components/top-nav/top-nav.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TopNavComponent);
    return TopNavComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/core.module.ts ***!
  \*********************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./src/app/modules/core/services/index.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors */ "./src/app/modules/core/interceptors/index.ts");
/* harmony import */ var _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/dashboard/dashboard.component */ "./src/app/modules/core/layout/dashboard/dashboard.component.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/app/modules/core/components/index.ts");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_5__["RetryInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _interceptors__WEBPACK_IMPORTED_MODULE_5__["HandleHttpResponseInterceptor"], multi: true }
            ].concat(_services__WEBPACK_IMPORTED_MODULE_4__["services"]),
            declarations: [
                _layout_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"],
                _components__WEBPACK_IMPORTED_MODULE_7__["components"]
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/modules/core/interceptors/http-interceptor.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/core/interceptors/http-interceptor.ts ***!
  \***************************************************************/
/*! exports provided: HandleHttpResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandleHttpResponseInterceptor", function() { return HandleHttpResponseInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DataResponse = /** @class */ (function () {
    function DataResponse() {
    }
    return DataResponse;
}());
var HandleHttpResponseInterceptor = /** @class */ (function () {
    function HandleHttpResponseInterceptor() {
    }
    HandleHttpResponseInterceptor.prototype.intercept = function (req, next) {
        var request = req.clone({
            headers: req.headers.set('Content-Type', 'application/json')
        });
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (event) {
            return event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"];
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (event) {
            // if (event.ok && event.status === 200) {
            //
            //   const responseBody: DataResponse = {
            //     status: 200,
            //     statusText: 'OK',
            //     data: event.body
            //   };
            //   return event.clone({body: responseBody});
            // }
            return event;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(error);
        }));
    };
    HandleHttpResponseInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], HandleHttpResponseInterceptor);
    return HandleHttpResponseInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/core/interceptors/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/core/interceptors/index.ts ***!
  \****************************************************/
/*! exports provided: RetryInterceptor, HandleHttpResponseInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _retry_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./retry-interceptor */ "./src/app/modules/core/interceptors/retry-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RetryInterceptor", function() { return _retry_interceptor__WEBPACK_IMPORTED_MODULE_0__["RetryInterceptor"]; });

/* harmony import */ var _http_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http-interceptor */ "./src/app/modules/core/interceptors/http-interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HandleHttpResponseInterceptor", function() { return _http_interceptor__WEBPACK_IMPORTED_MODULE_1__["HandleHttpResponseInterceptor"]; });





/***/ }),

/***/ "./src/app/modules/core/interceptors/retry-interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/core/interceptors/retry-interceptor.ts ***!
  \****************************************************************/
/*! exports provided: RetryInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryInterceptor", function() { return RetryInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RetryInterceptor = /** @class */ (function () {
    function RetryInterceptor() {
    }
    RetryInterceptor.prototype.intercept = function (req, next) {
        return next
            .handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["flatMap"])(function (err) {
                if (err.status === 500 || err.status === 503) {
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(err.status);
                }
                return rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"].throw(err);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["scan"])(function (count) {
                return count + 1;
            }, 0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeWhile"])(function (count) { return count < 3; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concat"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("Sorry, some thing is wrong...")));
        }));
    };
    RetryInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], RetryInterceptor);
    return RetryInterceptor;
}());



/***/ }),

/***/ "./src/app/modules/core/layout/dashboard/dashboard.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/layout/dashboard/dashboard.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container1\">\n  <div class=\"side-nav\">\n    <app-side-nav (userSelected)=\"onUserSelected($event)\"></app-side-nav>\n  </div>\n\n  <div class=\"main-content\">\n    <div class=\"main\">\n      <router-outlet></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/core/layout/dashboard/dashboard.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/core/layout/dashboard/dashboard.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container1 {\n  display: flex;\n  flex-direction: row;\n  height: 100%; }\n\n.side-nav {\n  color: #ffffff;\n  height: 100%;\n  width: 220px;\n  position: fixed;\n  z-index: 1;\n  left: 0;\n  background-color: #2a2f34;\n  overflow-x: hidden;\n  padding-top: 20px; }\n\n.main-content {\n  margin-left: 220px;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/modules/core/layout/dashboard/dashboard.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/layout/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_core_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/services */ "./src/app/modules/core/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(navigateService, router) {
        this.navigateService = navigateService;
        this.router = router;
        this.events = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype.onUserSelected = function (user) {
        this.router.navigate(['/analytics', user.name]);
        console.log(user);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/modules/core/layout/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/core/layout/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_app_core_services__WEBPACK_IMPORTED_MODULE_1__["NavigateService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/core/services/index.ts":
/*!************************************************!*\
  !*** ./src/app/modules/core/services/index.ts ***!
  \************************************************/
/*! exports provided: LocalStorageService, SessionStorageService, SplashScreenService, NavigateService, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _web_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./web-storage/local-storage.service */ "./src/app/modules/core/services/web-storage/local-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return _web_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"]; });

/* harmony import */ var _web_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./web-storage/session-storage.service */ "./src/app/modules/core/services/web-storage/session-storage.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return _web_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"]; });

/* harmony import */ var _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./splash-screen.service */ "./src/app/modules/core/services/splash-screen.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__["SplashScreenService"]; });

/* harmony import */ var _navigate_navigate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigate/navigate.service */ "./src/app/modules/core/services/navigate/navigate.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return _navigate_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]; });






var services = [
    _web_storage_local_storage_service__WEBPACK_IMPORTED_MODULE_0__["LocalStorageService"],
    _web_storage_session_storage_service__WEBPACK_IMPORTED_MODULE_1__["SessionStorageService"],
    _splash_screen_service__WEBPACK_IMPORTED_MODULE_2__["SplashScreenService"],
    _navigate_navigate_service__WEBPACK_IMPORTED_MODULE_3__["NavigateService"]
];


/***/ }),

/***/ "./src/app/modules/core/services/navigate/navigate.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/core/services/navigate/navigate.service.ts ***!
  \********************************************************************/
/*! exports provided: NavigateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigateService", function() { return NavigateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigateService = /** @class */ (function () {
    function NavigateService(http) {
        this.http = http;
        this.connectAccount = new Array();
    }
    NavigateService.prototype.getUsers = function () {
        return this.http.get('http://localhost:3000/clients');
    };
    NavigateService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NavigateService);
    return NavigateService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/splash-screen.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/core/services/splash-screen.service.ts ***!
  \****************************************************************/
/*! exports provided: SplashScreenService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenService", function() { return SplashScreenService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SplashScreenService = /** @class */ (function () {
    function SplashScreenService(animationBuilder, document, router) {
        var _this = this;
        this.animationBuilder = animationBuilder;
        this.document = document;
        this.router = router;
        this.splashScreenEl = this.document.body.querySelector('#splash-screen');
        var hideOnLoad = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                setTimeout(function () {
                    _this.hide();
                    hideOnLoad.unsubscribe();
                }, 0);
            }
        });
    }
    SplashScreenService.prototype.show = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: '0',
                    zIndex: '99999'
                }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '1' }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    SplashScreenService.prototype.hide = function () {
        var _this = this;
        this.player =
            this.animationBuilder
                .build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ opacity: '1' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('400ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
                    opacity: '0',
                    zIndex: '-10'
                }))
            ]).create(this.splashScreenEl);
        setTimeout(function () {
            _this.player.play();
        }, 0);
    };
    SplashScreenService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_animations__WEBPACK_IMPORTED_MODULE_3__["AnimationBuilder"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SplashScreenService);
    return SplashScreenService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/web-storage/local-storage.service.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/core/services/web-storage/local-storage.service.ts ***!
  \****************************************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = /** @class */ (function () {
    function LocalStorageService() {
        if (!window.localStorage) {
            throw new Error('Current browser does not support Local Storage');
        }
        this.storage = localStorage;
    }
    LocalStorageService.prototype.exists = function (key) {
        return !!this.storage.getItem(key);
    };
    LocalStorageService.prototype.get = function (key) {
        var result = this.storage.getItem(key);
        if (result === undefined || result == null) {
            return null;
        }
        try {
            return JSON.parse(result);
        }
        catch (e) {
            return result;
        }
    };
    LocalStorageService.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    LocalStorageService.prototype.remove = function (key) {
        return this.storage.removeItem(key);
    };
    LocalStorageService.prototype.clear = function () {
        return this.storage.clear();
    };
    LocalStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/app/modules/core/services/web-storage/session-storage.service.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/core/services/web-storage/session-storage.service.ts ***!
  \******************************************************************************/
/*! exports provided: SessionStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionStorageService = /** @class */ (function () {
    function SessionStorageService() {
        if (!window.sessionStorage) {
            throw new Error('Current browser does not support sessionStorage');
        }
        this.storage = localStorage;
    }
    SessionStorageService.prototype.exists = function (key) {
        return !!this.storage.getItem(key);
    };
    SessionStorageService.prototype.get = function (key) {
        var result = this.storage.getItem(key);
        if (result === undefined || result == null) {
            return null;
        }
        try {
            return JSON.parse(result);
        }
        catch (e) {
            return result;
        }
    };
    SessionStorageService.prototype.set = function (key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    };
    SessionStorageService.prototype.remove = function (key) {
        return this.storage.removeItem(key);
    };
    SessionStorageService.prototype.clear = function () {
        return this.storage.clear();
    };
    SessionStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], SessionStorageService);
    return SessionStorageService;
}());



/***/ }),

/***/ "./src/app/modules/core/store/actions/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/store/actions/index.ts ***!
  \*****************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward, SAVED_CHANGES, UNSAVED_CHANGES, DISCARD_CHANGES, SaveChanges, UnSaveChanges, DiscardChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.action */ "./src/app/modules/core/store/actions/router.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });

/* harmony import */ var _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unsave-changes.action */ "./src/app/modules/core/store/actions/unsave-changes.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVED_CHANGES", function() { return _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__["SAVED_CHANGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNSAVED_CHANGES", function() { return _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__["UNSAVED_CHANGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCARD_CHANGES", function() { return _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__["DISCARD_CHANGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveChanges", function() { return _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__["SaveChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnSaveChanges", function() { return _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__["UnSaveChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscardChanges", function() { return _unsave_changes_action__WEBPACK_IMPORTED_MODULE_1__["DiscardChanges"]; });





/***/ }),

/***/ "./src/app/modules/core/store/actions/router.action.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/store/actions/router.action.ts ***!
  \*************************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
var GO = '[Router] Go';
var BACK = '[Router] Back';
var FORWARD = '[Router] Forward';
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return Go;
}());

var Back = /** @class */ (function () {
    function Back(payload) {
        this.payload = payload;
        this.type = BACK;
    }
    return Back;
}());

var Forward = /** @class */ (function () {
    function Forward() {
        this.type = FORWARD;
    }
    return Forward;
}());



/***/ }),

/***/ "./src/app/modules/core/store/actions/unsave-changes.action.ts":
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/store/actions/unsave-changes.action.ts ***!
  \*********************************************************************/
/*! exports provided: SAVED_CHANGES, UNSAVED_CHANGES, DISCARD_CHANGES, SaveChanges, UnSaveChanges, DiscardChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVED_CHANGES", function() { return SAVED_CHANGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNSAVED_CHANGES", function() { return UNSAVED_CHANGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISCARD_CHANGES", function() { return DISCARD_CHANGES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveChanges", function() { return SaveChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnSaveChanges", function() { return UnSaveChanges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscardChanges", function() { return DiscardChanges; });
var SAVED_CHANGES = '[SAVED_CHANGES] Save changes';
var UNSAVED_CHANGES = '[UNSAVED_CHANGES] UnSave changes';
var DISCARD_CHANGES = '[DISCARD_CHANGES] Discard changes';
var SaveChanges = /** @class */ (function () {
    function SaveChanges(payload) {
        this.payload = payload;
        this.type = SAVED_CHANGES;
    }
    return SaveChanges;
}());

var UnSaveChanges = /** @class */ (function () {
    function UnSaveChanges(payload) {
        this.payload = payload;
        this.type = UNSAVED_CHANGES;
    }
    return UnSaveChanges;
}());

var DiscardChanges = /** @class */ (function () {
    function DiscardChanges() {
        this.type = DISCARD_CHANGES;
    }
    return DiscardChanges;
}());



/***/ }),

/***/ "./src/app/modules/core/store/custom-router-state-serializer.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/core/store/custom-router-state-serializer.ts ***!
  \**********************************************************************/
/*! exports provided: CustomRouterStateSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return CustomRouterStateSerializer; });
/**
 * The RouterStateSerializer takes the current RouterStateSnapshot
 * and returns any pertinent information needed. The snapshot contains
 * all information about the state of the router at the given point in time.
 * The entire snapshot is complex and not always needed. In this case, you only
 * need the URL and query parameters from the snapshot in the store. Other items could be
 * returned such as route parameters and static route data.
 */
var CustomRouterStateSerializer = /** @class */ (function () {
    function CustomRouterStateSerializer() {
    }
    CustomRouterStateSerializer.prototype.serialize = function (routerState) {
        var route = routerState.root;
        while (route.firstChild) {
            route = route.firstChild;
        }
        var url = routerState.url, queryParams = routerState.root.queryParams;
        var params = route.params;
        // Only return an object including the URL, params and query params
        // instead of the entire snapshot
        return { url: url, params: params, queryParams: queryParams };
    };
    return CustomRouterStateSerializer;
}());



/***/ }),

/***/ "./src/app/modules/core/store/effects/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/core/store/effects/index.ts ***!
  \*****************************************************/
/*! exports provided: effects, RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _router_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.effect */ "./src/app/modules/core/store/effects/router.effect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _router_effect__WEBPACK_IMPORTED_MODULE_0__["RouterEffects"]; });


var effects = [_router_effect__WEBPACK_IMPORTED_MODULE_0__["RouterEffects"]];



/***/ }),

/***/ "./src/app/modules/core/store/effects/router.effect.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/core/store/effects/router.effect.ts ***!
  \*************************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_router_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/router.action */ "./src/app/modules/core/store/actions/router.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.ofType(_actions_router_action__WEBPACK_IMPORTED_MODULE_5__["GO"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, __assign({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$.ofType(_actions_router_action__WEBPACK_IMPORTED_MODULE_5__["BACK"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.ofType(_actions_router_action__WEBPACK_IMPORTED_MODULE_5__["FORWARD"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function () { return _this.location.forward(); }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Effect"])({ dispatch: false }),
        __metadata("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_3__["Actions"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "./src/app/modules/core/store/index.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/core/store/index.ts ***!
  \*********************************************/
/*! exports provided: reducers, logger, metaReducers, getRouterParams, getRouterUrl, selectRouterState, effects, CustomRouterStateSerializer, GO, BACK, FORWARD, Go, Back, Forward, SAVED_CHANGES, UNSAVED_CHANGES, DISCARD_CHANGES, SaveChanges, UnSaveChanges, DiscardChanges, RouterEffects, selectRouterParams, selectRouterUrl, selectUnSavedChangesState, selectComponentsUnSavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/modules/core/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["logger"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["metaReducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouterParams", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getRouterParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRouterUrl", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["getRouterUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["selectRouterState"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/modules/core/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Forward"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SAVED_CHANGES", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SAVED_CHANGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UNSAVED_CHANGES", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UNSAVED_CHANGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DISCARD_CHANGES", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DISCARD_CHANGES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaveChanges", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["SaveChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnSaveChanges", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UnSaveChanges"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiscardChanges", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["DiscardChanges"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/modules/core/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["RouterEffects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/modules/core/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterParams", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["selectRouterParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterUrl", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["selectRouterUrl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnSavedChangesState", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["selectUnSavedChangesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectComponentsUnSavedChanges", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["selectComponentsUnSavedChanges"]; });

/* harmony import */ var _custom_router_state_serializer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./custom-router-state-serializer */ "./src/app/modules/core/store/custom-router-state-serializer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomRouterStateSerializer", function() { return _custom_router_state_serializer__WEBPACK_IMPORTED_MODULE_4__["CustomRouterStateSerializer"]; });








/***/ }),

/***/ "./src/app/modules/core/store/reducers/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/core/store/reducers/index.ts ***!
  \******************************************************/
/*! exports provided: reducers, logger, metaReducers, getRouterParams, getRouterUrl, selectRouterState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logger", function() { return logger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterParams", function() { return getRouterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRouterUrl", function() { return getRouterUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterState", function() { return selectRouterState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/environment */ "./src/environments/environment.ts");
/* harmony import */ var _unsave_changes_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unsave-changes.reducer */ "./src/app/modules/core/store/reducers/unsave-changes.reducer.ts");


/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */


/**
 * Our state is composed of a map of action reducer functions.
 * These reducer functions are called with each dispatched action
 * and the current or initial state and return a new immutable state.
 */
var reducers = {
    router: _ngrx_router_store__WEBPACK_IMPORTED_MODULE_1__["routerReducer"],
    unSavedChanges: _unsave_changes_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]
};
function logger(reducer) {
    return function (state, action) {
        console.log('state: ', state);
        console.log('action: ', action);
        return reducer(state, action);
    };
}
/**
 * By default, @ngrx/store uses combineReducers with the reducer map to compose
 * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
 * that will be composed to form the root meta-reducer.
 */
var metaReducers = !_app_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production
    ? [logger, ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_2__["storeFreeze"]]
    : [];
var getRouterParams = function (router) { return router.state.params; };
var getRouterUrl = function (router) { return router.state.url; };
var selectRouterState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('router');


/***/ }),

/***/ "./src/app/modules/core/store/reducers/unsave-changes.reducer.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/core/store/reducers/unsave-changes.reducer.ts ***!
  \***********************************************************************/
/*! exports provided: initialState, reducer, getUnSavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnSavedChanges", function() { return getUnSavedChanges; });
/* harmony import */ var _actions_unsave_changes_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/unsave-changes.action */ "./src/app/modules/core/store/actions/unsave-changes.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var initialState = {
    componentsUnSavedChanges: null
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_unsave_changes_action__WEBPACK_IMPORTED_MODULE_0__["SAVED_CHANGES"]: {
            var unsavedChanges = __assign({}, state.componentsUnSavedChanges);
            delete unsavedChanges[action.payload];
            return __assign({}, state, { componentsUnSavedChanges: unsavedChanges });
        }
        case _actions_unsave_changes_action__WEBPACK_IMPORTED_MODULE_0__["UNSAVED_CHANGES"]: {
            var unsavedChanges = __assign({}, state.componentsUnSavedChanges);
            unsavedChanges[action.payload] = action.payload;
            return __assign({}, state, { componentsUnSavedChanges: unsavedChanges });
        }
        case _actions_unsave_changes_action__WEBPACK_IMPORTED_MODULE_0__["DISCARD_CHANGES"]: {
            return __assign({}, state, { componentsUnSavedChanges: null });
        }
        default: {
            return state;
        }
    }
}
var getUnSavedChanges = function (state) { return state.componentsUnSavedChanges; };


/***/ }),

/***/ "./src/app/modules/core/store/selectors/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/core/store/selectors/index.ts ***!
  \*******************************************************/
/*! exports provided: selectRouterParams, selectRouterUrl, selectUnSavedChangesState, selectComponentsUnSavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.selector */ "./src/app/modules/core/store/selectors/router.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterParams", function() { return _router_selector__WEBPACK_IMPORTED_MODULE_0__["selectRouterParams"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectRouterUrl", function() { return _router_selector__WEBPACK_IMPORTED_MODULE_0__["selectRouterUrl"]; });

/* harmony import */ var _un_save_change_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./un-save-change.selector */ "./src/app/modules/core/store/selectors/un-save-change.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectUnSavedChangesState", function() { return _un_save_change_selector__WEBPACK_IMPORTED_MODULE_1__["selectUnSavedChangesState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectComponentsUnSavedChanges", function() { return _un_save_change_selector__WEBPACK_IMPORTED_MODULE_1__["selectComponentsUnSavedChanges"]; });





/***/ }),

/***/ "./src/app/modules/core/store/selectors/router.selector.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/core/store/selectors/router.selector.ts ***!
  \*****************************************************************/
/*! exports provided: selectRouterParams, selectRouterUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterParams", function() { return selectRouterParams; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectRouterUrl", function() { return selectRouterUrl; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reducers */ "./src/app/modules/core/store/reducers/index.ts");


var selectRouterParams = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["selectRouterState"], _reducers__WEBPACK_IMPORTED_MODULE_1__["getRouterParams"]);
var selectRouterUrl = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_1__["selectRouterState"], _reducers__WEBPACK_IMPORTED_MODULE_1__["getRouterUrl"]);


/***/ }),

/***/ "./src/app/modules/core/store/selectors/un-save-change.selector.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/core/store/selectors/un-save-change.selector.ts ***!
  \*************************************************************************/
/*! exports provided: selectUnSavedChangesState, selectComponentsUnSavedChanges */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectUnSavedChangesState", function() { return selectUnSavedChangesState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectComponentsUnSavedChanges", function() { return selectComponentsUnSavedChanges; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var selectUnSavedChangesState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('unSavedChanges');
var selectComponentsUnSavedChanges = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectUnSavedChangesState, function (state) { return state.componentsUnSavedChanges; });


/***/ }),

/***/ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{ options.title }}</h2>\r\n<mat-dialog-content class=\"mat-body-1\">{{ options.message }}</mat-dialog-content>\r\n<div mat-dialog-actions fxLayout=\"row\" fxLayoutAlign=\"end center\">\r\n  <button type=\"button\" mat-button mat-dialog-close>{{ options.cancelButtonText }}</button>\r\n  <button type=\"submit\" mat-button cdkFocusInitial [mat-dialog-close]=\"true\">\r\n    {{ options.confirmButtonText }}\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  min-width: 300px; }\n\n.mat-dialog-actions {\n  margin-top: 40px; }\n"

/***/ }),

/***/ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(data) {
        this.data = data;
        this.options = {
            title: 'Delete',
            message: 'Are you sure want to delete?',
            confirmButtonText: 'Delete',
            cancelButtonText: 'Cancel'
        };
        this.options = __assign({}, this.options, data);
    }
    ConfirmDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-confirm-dialog',
            template: __webpack_require__(/*! ./confirm-dialog.component.html */ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.html"),
            styles: [__webpack_require__(/*! ./confirm-dialog.component.scss */ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.scss")],
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [Object])
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/components/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/shared/components/index.ts ***!
  \****************************************************/
/*! exports provided: ConfirmDialog, components, entryComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entryComponents", function() { return entryComponents; });
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialog", function() { return _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"]; });

/* harmony import */ var _lonely_in_here_lonely_in_here_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lonely-in-here/lonely-in-here.component */ "./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.ts");



var components = [
    _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"],
    _lonely_in_here_lonely_in_here_component__WEBPACK_IMPORTED_MODULE_1__["LonelyInHereComponent"]
];
var entryComponents = [
    _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_0__["ConfirmDialogComponent"],
];


/***/ }),

/***/ "./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"space-around center\"\r\n     fxLayoutAlign.lt-md=\"space-around start\">\r\n  <div fxFlexOrder=\"1\" fxFlexOrder.lt-md=\"2\">\r\n    <h1 class=\"mat-headline\">{{title}}</h1>\r\n    <div class=\"mat-body-1\">\r\n      <p>{{subTitle}}</p>\r\n      <p>{{message}}</p>\r\n    </div>\r\n    <button disableButtonOffline *ngIf=\"actionName\"\r\n            class=\"action-button\" mat-raised-button\r\n            color=\"accent\" (click)=\"onActionBtnClick()\" [disabled]=disabled>\r\n      <span>{{actionName}}</span>\r\n    </button>\r\n  </div>\r\n  <img fxFlexOrder=\"2\" fxFlexOrder.lt-md=\"1\" class=\"placeholder-image\" src=\"assets/images/placeholder/empty.svg\" alt=\"\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action-button {\n  margin-top: 20px; }\n\n.placeholder-image {\n  max-width: 200px; }\n"

/***/ }),

/***/ "./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LonelyInHereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LonelyInHereComponent", function() { return LonelyInHereComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LonelyInHereComponent = /** @class */ (function () {
    function LonelyInHereComponent() {
        this.title = "It's lonely in here!";
        this.action = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    LonelyInHereComponent.prototype.onActionBtnClick = function () {
        this.action.emit(true);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], LonelyInHereComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LonelyInHereComponent.prototype, "subTitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LonelyInHereComponent.prototype, "message", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], LonelyInHereComponent.prototype, "actionName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], LonelyInHereComponent.prototype, "disabled", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], LonelyInHereComponent.prototype, "action", void 0);
    LonelyInHereComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lonely-in-here',
            template: __webpack_require__(/*! ./lonely-in-here.component.html */ "./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.html"),
            styles: [__webpack_require__(/*! ./lonely-in-here.component.scss */ "./src/app/modules/shared/components/lonely-in-here/lonely-in-here.component.scss")]
        })
    ], LonelyInHereComponent);
    return LonelyInHereComponent;
}());



/***/ }),

/***/ "./src/app/modules/shared/material.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/shared/material.module.ts ***!
  \***************************************************/
/*! exports provided: materialModules, CustomMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "materialModules", function() { return materialModules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomMaterialModule", function() { return CustomMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var materialModules = [
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]
];
var CustomMaterialModule = /** @class */ (function () {
    function CustomMaterialModule() {
    }
    CustomMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: materialModules.slice(),
            declarations: [],
            exports: materialModules.slice()
        })
    ], CustomMaterialModule);
    return CustomMaterialModule;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./material.module */ "./src/app/modules/shared/material.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/modules/shared/components/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ].concat(_material_module__WEBPACK_IMPORTED_MODULE_3__["materialModules"]),
            declarations: _components__WEBPACK_IMPORTED_MODULE_4__["components"].slice(),
            entryComponents: _components__WEBPACK_IMPORTED_MODULE_4__["entryComponents"].slice(),
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ].concat(_material_module__WEBPACK_IMPORTED_MODULE_3__["materialModules"], _components__WEBPACK_IMPORTED_MODULE_4__["components"], _components__WEBPACK_IMPORTED_MODULE_4__["entryComponents"])
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    authentication: {
        tokenKey: 'AccessToken',
        autoAuthorizedUris: [
            new RegExp('/api')
        ]
    },
    // rootApiUrl: 'https://jsonplaceholder.typicode.com'
    rootApiUrl: 'https://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\projects\good-job\goodjob\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map