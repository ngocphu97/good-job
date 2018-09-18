(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-analytics-analytics-module"],{

/***/ "./src/app/modules/analytics/analytics.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/analytics/analytics.module.ts ***!
  \*******************************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _analytics_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analytics.routing */ "./src/app/modules/analytics/analytics.routing.ts");
/* harmony import */ var _containers_analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/analytics-page/analytics-page.component */ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.ts");
/* harmony import */ var _components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/clients-list/clients-list.component */ "./src/app/modules/analytics/components/clients-list/clients-list.component.ts");
/* harmony import */ var _components_analytics_detail_analytics_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/analytics-detail/analytics-detail.component */ "./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.ts");
/* harmony import */ var _components_export_to_file_export_to_file_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/export-to-file/export-to-file.component */ "./src/app/modules/analytics/components/export-to-file/export-to-file.component.ts");
/* harmony import */ var _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/calendar/calendar.component */ "./src/app/modules/analytics/components/calendar/calendar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_analytics_routing__WEBPACK_IMPORTED_MODULE_5__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ],
            declarations: [
                _containers_analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPageComponent"],
                _components_clients_list_clients_list_component__WEBPACK_IMPORTED_MODULE_7__["ClientsListComponent"],
                _components_analytics_detail_analytics_detail_component__WEBPACK_IMPORTED_MODULE_8__["AnalyticsDetailComponent"],
                _components_export_to_file_export_to_file_component__WEBPACK_IMPORTED_MODULE_9__["ExportToFileComponent"],
                _components_calendar_calendar_component__WEBPACK_IMPORTED_MODULE_10__["CalendarComponent"]
            ]
        })
    ], AnalyticsModule);
    return AnalyticsModule;
}());



/***/ }),

/***/ "./src/app/modules/analytics/analytics.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/analytics/analytics.routing.ts ***!
  \********************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers_analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers/analytics-page/analytics-page.component */ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.ts");

var routes = [
    {
        path: ':name',
        component: _containers_analytics_page_analytics_page_component__WEBPACK_IMPORTED_MODULE_0__["AnalyticsPageComponent"]
    }
];


/***/ }),

/***/ "./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nadd chart :("

/***/ }),

/***/ "./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: AnalyticsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsDetailComponent", function() { return AnalyticsDetailComponent; });
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

var AnalyticsDetailComponent = /** @class */ (function () {
    function AnalyticsDetailComponent() {
    }
    AnalyticsDetailComponent.prototype.ngOnInit = function () {
    };
    AnalyticsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics-detail',
            template: __webpack_require__(/*! ./analytics-detail.component.html */ "./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.html"),
            styles: [__webpack_require__(/*! ./analytics-detail.component.scss */ "./src/app/modules/analytics/components/analytics-detail/analytics-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsDetailComponent);
    return AnalyticsDetailComponent;
}());



/***/ }),

/***/ "./src/app/modules/analytics/components/calendar/calendar.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/analytics/components/calendar/calendar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  calendar works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/analytics/components/calendar/calendar.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/analytics/components/calendar/calendar.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/analytics/components/calendar/calendar.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/analytics/components/calendar/calendar.component.ts ***!
  \*****************************************************************************/
/*! exports provided: CalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarComponent", function() { return CalendarComponent; });
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

var CalendarComponent = /** @class */ (function () {
    function CalendarComponent() {
    }
    CalendarComponent.prototype.ngOnInit = function () {
    };
    CalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar',
            template: __webpack_require__(/*! ./calendar.component.html */ "./src/app/modules/analytics/components/calendar/calendar.component.html"),
            styles: [__webpack_require__(/*! ./calendar.component.scss */ "./src/app/modules/analytics/components/calendar/calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarComponent);
    return CalendarComponent;
}());



/***/ }),

/***/ "./src/app/modules/analytics/components/clients-list/clients-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/clients-list/clients-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"total\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'total impressions' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>7.2K</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'total engagement' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>477</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'total clicks' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>179</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'avg. paid reach' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>0</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'avg. organic reach' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>180.9</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n</div>\n\n<form>\n  <mat-form-field style=\"width: 100%;\">\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" [formControl]=\"myControl\" [matAutocomplete]=\"auto\" placeholder=\"Filter\">\n    <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"displayFn\">\n      <mat-option *ngFor=\"let option of filteredOptions | async\" [value]=\"option\">\n        {{option.date}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</form>\n\n<div class=\"mat-elevation-z8\" id=\"client-posts\">\n\n  <table mat-table matSort [dataSource]=\"dataSource\">\n\n    <ng-container matColumnDef=\"Post ID\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"postId\"> Post ID </th>\n      <td mat-footer-cell *matFooterCellDef></td>\n      <td mat-cell *matCellDef=\"let element\">\n        {{element.postId}}\n      </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"Post\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"date\">Post</th>\n      <td mat-footer-cell *matFooterCellDef> Averages </td>\n      <td mat-cell *matCellDef=\"let element\">\n        <small style=\"color: #8D98A9\">{{element.date}}</small>\n        <br> {{ (element.post.length>20)? (element.post | slice:0:50) + '..' : (element.post) }}\n        <br>\n        <img src=\"{{element.image}}\" alt=\"\" class=\"post-img\">\n        <!-- <button (click)=\"checkElement(element)\" matButton>GO!</button> -->\n      </td>\n    </ng-container>\n\n    <!-- Impressions Column -->\n    <ng-container matColumnDef=\"Impressions\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"impressions\"> Impressions </th>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalImpressions() | number: '1.2'}} </td>\n      <td mat-cell *matCellDef=\"let element\">\n        <b> {{element.impressions}}</b>\n      </td>\n    </ng-container>\n\n    <!-- Engagement Column -->\n    <ng-container matColumnDef=\"Engagement\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"engagement\"> Engagement </th>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalEngagement() | number: '1.2'}} </td>\n      <td mat-cell *matCellDef=\"let element\">\n        <b>{{element.engagement}} -- 1 </b>\n      </td>\n\n    </ng-container>\n\n    <!-- Clicks Column -->\n    <ng-container matColumnDef=\"Clicks\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"clicks\"> Clicks </th>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalClicks() | number: '1.2'}} </td>\n      <td mat-cell *matCellDef=\"let element\">\n        <b>{{element.clicks}}</b>\n      </td>\n    </ng-container>\n\n    <!-- Paid reach Column -->\n    <ng-container matColumnDef=\"Paid reach\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"paidReach\"> Paid reach </th>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalPaidReach() | number: '1.2'}} </td>\n      <td mat-cell *matCellDef=\"let element\">\n        <b>{{element.paidReach}}</b>\n      </td>\n    </ng-container>\n\n    <!-- Organic reach Column -->\n    <ng-container matColumnDef=\"Organic reach\">\n      <th mat-header-cell *matHeaderCellDef mat-sort-header=\"organicReach\"> Organic reach </th>\n      <td mat-footer-cell *matFooterCellDef> {{getTotalOrganicReach() | number: '1.2'}} </td>\n      <td mat-cell *matCellDef=\"let element\">\n        <b> {{element.organicReach}}</b>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr class=\"row-hover\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    <tr mat-footer-row *matFooterRowDef=\"displayedColumns\"></tr>\n  </table>\n\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/analytics/components/clients-list/clients-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/clients-list/clients-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\n  width: 100%; }\n\n#clien-posts {\n  overflow: auto; }\n\ntr.mat-footer-row {\n  font-weight: bold; }\n\n.mat-table-sticky {\n  border-top: 1px solid #e0e0e0; }\n\n.post-img {\n  width: 85px;\n  height: 50px; }\n\n:host::ng-deeptd.mat-cell,\ntd.mat-footer-cell,\nth.mat-header-cell {\n  padding: 10px 10px; }\n\n.row-hover:hover {\n  background: #DCDCDC;\n  cursor: pointer; }\n\n.total {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 30px 0; }\n\n.total mat-card {\n  width: 15%;\n  background: #262A2F;\n  color: #fff; }\n\n.total mat-card mat-card-subtitle {\n  color: #8D98A9; }\n"

/***/ }),

/***/ "./src/app/modules/analytics/components/clients-list/clients-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/clients-list/clients-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClientsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsListComponent", function() { return ClientsListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_analytics_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/analytics.service */ "./src/app/modules/analytics/services/analytics.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsListComponent = /** @class */ (function () {
    function ClientsListComponent(service) {
        this.service = service;
        this.displayedColumns = [
            'Post ID',
            'Post',
            'Impressions',
            'Engagement',
            'Clicks',
            'Paid reach',
            'Organic reach'
        ];
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.client_post);
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = this.client_post;
        this.getClientPost();
        console.log(this.dataSource);
    }
    ClientsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.client_post);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.filteredOptions = this.myControl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (value) { return typeof value === 'string' ? value : value.date; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (date) { return date ? _this._filter(date) : _this.options.slice(); }));
    };
    ClientsListComponent.prototype.getClientPost = function () {
        var _this = this;
        this.service.getClientPost().subscribe(function (data) {
            _this.client_post = data;
            console.log(_this.client_post);
        });
    };
    ClientsListComponent.prototype._filter = function (value) {
        var filterValue = value.toLowerCase();
        return this.options.filter(function (option) { return option.post.toLowerCase().includes(filterValue); });
    };
    ClientsListComponent.prototype.displayFn = function (date) {
        return date ? date.date : undefined;
    };
    ClientsListComponent.prototype.applyFilter = function (filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    ClientsListComponent.prototype.getTotalImpressions = function () {
        return this.client_post.map(function (t) { return t.impressions; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    ClientsListComponent.prototype.getTotalEngagement = function () {
        return this.client_post.map(function (t) { return t.engagement; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    ClientsListComponent.prototype.getTotalClicks = function () {
        return this.client_post.map(function (t) { return t.clicks; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    ClientsListComponent.prototype.getTotalPaidReach = function () {
        return this.client_post.map(function (t) { return t.paidReach; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    ClientsListComponent.prototype.getTotalOrganicReach = function () {
        return this.client_post.map(function (t) { return t.organicReach; }).reduce(function (acc, value) { return acc + value; }, 0);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], ClientsListComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], ClientsListComponent.prototype, "sort", void 0);
    ClientsListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-clients-list',
            template: __webpack_require__(/*! ./clients-list.component.html */ "./src/app/modules/analytics/components/clients-list/clients-list.component.html"),
            styles: [__webpack_require__(/*! ./clients-list.component.scss */ "./src/app/modules/analytics/components/clients-list/clients-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_analytics_service__WEBPACK_IMPORTED_MODULE_4__["AnalyticsService"]])
    ], ClientsListComponent);
    return ClientsListComponent;
}());



/***/ }),

/***/ "./src/app/modules/analytics/components/export-to-file/export-to-file.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/export-to-file/export-to-file.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  export-to-file works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/analytics/components/export-to-file/export-to-file.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/export-to-file/export-to-file.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/analytics/components/export-to-file/export-to-file.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/analytics/components/export-to-file/export-to-file.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ExportToFileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportToFileComponent", function() { return ExportToFileComponent; });
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

var ExportToFileComponent = /** @class */ (function () {
    function ExportToFileComponent() {
    }
    ExportToFileComponent.prototype.ngOnInit = function () {
    };
    ExportToFileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-export-to-file',
            template: __webpack_require__(/*! ./export-to-file.component.html */ "./src/app/modules/analytics/components/export-to-file/export-to-file.component.html"),
            styles: [__webpack_require__(/*! ./export-to-file.component.scss */ "./src/app/modules/analytics/components/export-to-file/export-to-file.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExportToFileComponent);
    return ExportToFileComponent;
}());



/***/ }),

/***/ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/analytics/containers/analytics-page/analytics-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-tab-group dynamicHeight>\n  <mat-tab label=\"Scheudle\">\n    <div class=\"example-large-box\">\n      <app-calendar></app-calendar>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Content\">\n    <div class=\"example-large-box\">\n      <app-clients-list></app-clients-list>\n    </div>\n  </mat-tab>\n  <mat-tab label=\"Global\">\n    <div class=\"example-large-box\">\n      <app-analytics-detail></app-analytics-detail>\n    </div>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/analytics/containers/analytics-page/analytics-page.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-tab-body-wrapper {\n  padding: 0 15px; }\n"

/***/ }),

/***/ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/analytics/containers/analytics-page/analytics-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AnalyticsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageComponent", function() { return AnalyticsPageComponent; });
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

var AnalyticsPageComponent = /** @class */ (function () {
    function AnalyticsPageComponent() {
    }
    AnalyticsPageComponent.prototype.ngOnInit = function () {
    };
    AnalyticsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-analytics-page',
            template: __webpack_require__(/*! ./analytics-page.component.html */ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.html"),
            styles: [__webpack_require__(/*! ./analytics-page.component.scss */ "./src/app/modules/analytics/containers/analytics-page/analytics-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AnalyticsPageComponent);
    return AnalyticsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/analytics/services/analytics.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/analytics/services/analytics.service.ts ***!
  \*****************************************************************/
/*! exports provided: AnalyticsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsService", function() { return AnalyticsService; });
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


var AnalyticsService = /** @class */ (function () {
    function AnalyticsService(http) {
        this.http = http;
    }
    AnalyticsService.prototype.getClients = function () {
        return this.http.get('http://localhost:3000/clients');
    };
    AnalyticsService.prototype.getClientPost = function () {
        return this.http.get('http://localhost:3000/client_post');
    };
    AnalyticsService.prototype.getClientById = function (id) {
        return this.http.get("http://localhost:3000/clients?clientId=" + id);
    };
    AnalyticsService.prototype.getClientPostByClientDate = function (date) {
        return this.http.get("http://localhost:3000/client_post?date=" + date);
    };
    AnalyticsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AnalyticsService);
    return AnalyticsService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-analytics-analytics-module.js.map