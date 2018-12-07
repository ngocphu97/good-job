(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-group-group-module"],{

/***/ "./src/app/modules/group/components/add-group-form/add-group-form.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/group/components/add-group-form/add-group-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"project-name\">\n  <mat-form-field>\n    <input matInput placeholder=\"Project Name\">\n  </mat-form-field>\n  <div class=\"project-actions\">\n    <button class=\"save-action\" mat-raised-button color=\"accent\">Save</button>\n    <button mat-raised-button color=\"warn\">Delete</button>\n  </div>\n</div>\n\n<div class=\"select-profiles\">\n  <h4>Select profile for this group</h4>\n  <mat-card class=\"card\">\n    <div *ngFor=\"let memberConnectAccout of memberConnectAccounts\" class=\"card-container\" matTooltip=\"{{memberConnectAccout.name}}\"\n      [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip when focused or hovered over\">\n      <img class=\"profiles-img\" src=\"{{memberConnectAccout.picture}}\" alt=\"\">\n    </div>\n    <div class=\"card-container\" matTooltip=\"Info about the profile\" [matTooltipPosition]=\"position.value\" aria-label=\"Button that displays a tooltip when focused or hovered over\">\n      <i class=\"material-icons profiles-img\">\n        add\n      </i>\n    </div>\n  </mat-card>\n</div>\n\n<h4>Select member(s) for this group</h4>\n<div class=\"select-members-list\">\n  <div class=\"card-member\" *ngFor=\"let member of listMember\">\n\n    <div class=\"card-member-item\">\n      <mat-card>\n        <mat-card-header>\n          <div mat-card-avatar class=\"card-ava\">\n            <img class=\"header-image\" src=\"{{member.picture}}\" alt=\"\">\n          </div>\n          <mat-card-title>{{member.name}}</mat-card-title>\n          <mat-card-subtitle>{{member.id}}</mat-card-subtitle>\n        </mat-card-header>\n      </mat-card>\n\n      <mat-accordion>\n        <mat-expansion-panel (opened)=\"panelOpenState = true\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Edit tasks for {{member.name}}\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n\n          <section class=\"example-section\">\n            <mat-list role=\"list\">\n              <mat-list-item role=\"listitem\" *ngFor=\"let task of tasks\">\n                <mat-slide-toggle class=\"example-margin\" [color]=\"color\" [checked]=\"checked\">\n                  {{task.describe}}\n                </mat-slide-toggle>\n              </mat-list-item>\n            </mat-list>\n          </section>\n\n        </mat-expansion-panel>\n      </mat-accordion>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/group/components/add-group-form/add-group-form.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/group/components/add-group-form/add-group-form.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project-actions {\n  float: right; }\n\n.project-actions {\n  float: right; }\n\n.card.mat-card {\n  display: flex;\n  flex-direction: row; }\n\n.card-container {\n  display: flex;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 100%;\n  border: 2px solid #FF6699;\n  border-radius: 5px;\n  margin-right: 8px; }\n\n.profiles-img {\n  width: 80px;\n  height: 80px;\n  opacity: 0.5; }\n\n.card-container:hover {\n  cursor: pointer;\n  border: 2px solid black; }\n\n.profiles-img:hover {\n  cursor: pointer;\n  opacity: 1; }\n\n.header-image {\n  width: 38px;\n  height: 38px; }\n\n.select-members-list {\n  display: flex;\n  flex-direction: row; }\n\n.card-member {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between; }\n\n.card-member-item {\n  margin: 8px 8px 8px 0;\n  width: 100%; }\n\n.example-section {\n  display: flex;\n  align-content: center;\n  align-items: center; }\n\n.example-margin {\n  margin: 10px; }\n"

/***/ }),

/***/ "./src/app/modules/group/components/add-group-form/add-group-form.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/group/components/add-group-form/add-group-form.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddGroupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupFormComponent", function() { return AddGroupFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_group_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/group.service */ "./src/app/modules/group/service/group.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddGroupFormComponent = /** @class */ (function () {
    function AddGroupFormComponent(service) {
        this.service = service;
        this.data$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]([]);
        this.listMember = [];
        this.memberConnectAccounts = [];
        this.panelOpenState = true;
        this.tasks = [
            {
                describe: 'Can add / delete members to / from a channel',
                tasks: [
                    'ANALYZE',
                    'ADVERTISE',
                    'MODERATE',
                    'CREATE_CONTENT',
                    'MANAGE'
                ]
            },
            {
                describe: 'Can create, edit and manage posts',
                tasks: [
                    'ANALYZE',
                    'ADVERTISE',
                    'MODERATE',
                    'CREATE_CONTENT',
                    'MANAGE'
                ]
            },
            {
                describe: 'Can set a posting schedule',
                tasks: [
                    'ANALYZE',
                    'ADVERTISE',
                    'MODERATE',
                    'CREATE_CONTENT',
                    'MANAGE'
                ]
            },
            {
                describe: 'Can add / remove personal accounts to / from a channel',
                tasks: [
                    'ANALYZE',
                    'ADVERTISE',
                    'MODERATE',
                    'CREATE_CONTENT',
                    'MANAGE'
                ]
            },
            {
                describe: 'Can add / remove team accounts to / from a team channel',
                tasks: [
                    'ANALYZE',
                    'ADVERTISE',
                    'MODERATE',
                    'CREATE_CONTENT',
                    'MANAGE'
                ]
            }
        ];
        this.color = 'accent';
        this.checked = true;
        this.disabled = false;
        this.position = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('above');
    }
    AddGroupFormComponent.prototype.ngOnInit = function () {
        this.getTeamMember();
        this.getMemberConnect();
    };
    AddGroupFormComponent.prototype.getTeamMember = function () {
        var _this = this;
        this.service.getMemberInfoById('1').subscribe(function (data) {
            console.log(data);
            _this.listMember.push(data);
            _this.data$.next(data);
        });
    };
    AddGroupFormComponent.prototype.getMemberConnect = function () {
        var _this = this;
        this.service.getMemberConnectAccout().subscribe(function (data) {
            console.log(data);
            data.forEach(function (d) {
                var connectAccount = {
                    access_token: d.access_token,
                    id: d.id,
                    name: d.name,
                    picture: d.picture.data.url,
                    tasks: d.tasks
                };
                _this.memberConnectAccounts.push(connectAccount);
            });
            _this.data$.next(_this.memberConnectAccounts);
        });
    };
    AddGroupFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-group-form',
            template: __webpack_require__(/*! ./add-group-form.component.html */ "./src/app/modules/group/components/add-group-form/add-group-form.component.html"),
            styles: [__webpack_require__(/*! ./add-group-form.component.scss */ "./src/app/modules/group/components/add-group-form/add-group-form.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
        }),
        __metadata("design:paramtypes", [_service_group_service__WEBPACK_IMPORTED_MODULE_2__["GroupService"]])
    ], AddGroupFormComponent);
    return AddGroupFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/group/containers/add-group-page/add-group-page.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/group/containers/add-group-page/add-group-page.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"add-member-form\">\n    <app-add-group-form></app-add-group-form>\n</div>"

/***/ }),

/***/ "./src/app/modules/group/containers/add-group-page/add-group-page.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/group/containers/add-group-page/add-group-page.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-member-form {\n  margin: 15px; }\n"

/***/ }),

/***/ "./src/app/modules/group/containers/add-group-page/add-group-page.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/group/containers/add-group-page/add-group-page.component.ts ***!
  \*************************************************************************************/
/*! exports provided: AddGroupPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGroupPageComponent", function() { return AddGroupPageComponent; });
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

var AddGroupPageComponent = /** @class */ (function () {
    function AddGroupPageComponent() {
    }
    AddGroupPageComponent.prototype.ngOnInit = function () {
    };
    AddGroupPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-group-page',
            template: __webpack_require__(/*! ./add-group-page.component.html */ "./src/app/modules/group/containers/add-group-page/add-group-page.component.html"),
            styles: [__webpack_require__(/*! ./add-group-page.component.scss */ "./src/app/modules/group/containers/add-group-page/add-group-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AddGroupPageComponent);
    return AddGroupPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/group/group-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/group/group-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GroupRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupRoutingModule", function() { return GroupRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _containers_add_group_page_add_group_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers/add-group-page/add-group-page.component */ "./src/app/modules/group/containers/add-group-page/add-group-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _containers_add_group_page_add_group_page_component__WEBPACK_IMPORTED_MODULE_2__["AddGroupPageComponent"]
    },
];
var GroupRoutingModule = /** @class */ (function () {
    function GroupRoutingModule() {
    }
    GroupRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GroupRoutingModule);
    return GroupRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/group/group.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/group/group.module.ts ***!
  \***********************************************/
/*! exports provided: GroupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupModule", function() { return GroupModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./group-routing.module */ "./src/app/modules/group/group-routing.module.ts");
/* harmony import */ var _containers_add_group_page_add_group_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./containers/add-group-page/add-group-page.component */ "./src/app/modules/group/containers/add-group-page/add-group-page.component.ts");
/* harmony import */ var _components_add_group_form_add_group_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/add-group-form/add-group-form.component */ "./src/app/modules/group/components/add-group-form/add-group-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var GroupModule = /** @class */ (function () {
    function GroupModule() {
    }
    GroupModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _group_routing_module__WEBPACK_IMPORTED_MODULE_5__["GroupRoutingModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                // StoreModule.forFeature(fromStore.featureName, fromStore.reducers),
                // EffectsModule.forFeature([...fromStore.effects]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
            ],
            declarations: [
                _containers_add_group_page_add_group_page_component__WEBPACK_IMPORTED_MODULE_6__["AddGroupPageComponent"],
                _components_add_group_form_add_group_form_component__WEBPACK_IMPORTED_MODULE_7__["AddGroupFormComponent"]
            ]
        })
    ], GroupModule);
    return GroupModule;
}());



/***/ }),

/***/ "./src/app/modules/group/service/group.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/group/service/group.service.ts ***!
  \********************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
        // tslint:disable-next-line:max-line-length
        this.access_token = 'EAANQlAVxZBd4BAEl4mVkRKZCSmCdZA01tuKmhXLvD43OYhHxIpjz6wwZAZClIk1in5GGXBhYIPv7apEOA6ekW9eDd92VFiUpnZARXfziiiJTxs5ISdZASyDi5eyIl5FoBNH8HUGAWLbbb9GwgIUZBGz42GSaPbX47mnZCNZBai5r06ZAZAIUqkD5WoNSrj977Y7W6lMZD';
    }
    GroupService.prototype.getMemberInfoById = function (id) {
        var token = this.access_token;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            FB.api("/me?fields=picture,first_name,last_name", 'GET', {
                access_token: token,
            }, function (response) {
                if (response.error) {
                    observer.error(response.error);
                    observer.complete();
                }
                var memberInfo = {
                    id: response.id,
                    name: response.first_name + ' ' + response.last_name,
                    picture: response.picture.data.url
                };
                // const data = response.data[0].values;
                observer.next(memberInfo);
                observer.complete();
            });
        });
    };
    GroupService.prototype.getMemberConnectAccout = function () {
        var token = this.access_token;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            FB.api("me?fields=accounts{access_token,name,id,picture{url},tasks}", 'GET', {
                access_token: token,
            }, function (res) {
                if (res.error) {
                    observer.error(res.error);
                    observer.complete();
                }
                observer.next(res.accounts.data);
                observer.complete();
            });
        });
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-group-group-module.js.map