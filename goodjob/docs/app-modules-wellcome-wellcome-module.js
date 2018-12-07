(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-wellcome-wellcome-module"],{

/***/ "./src/app/modules/wellcome/components/hello/hello.component.html":
/*!************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/hello/hello.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card style=\"text-align: center\">\n  <mat-card-header>\n    <mat-card-title>\n      <h1>{{'Wellcome!'}}</h1>\n    </mat-card-title>\n  </mat-card-header>\n  <mat-card-content>\n    <p>\n      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi, animi alias laboriosam asperiores recusandae consequuntur\n      consequatur, amet autem beatae cumque aperiam? Temporibus dolorum veniam odio facere culpa, non saepe. Quae. Lorem\n      ipsum, dolor sit amet consectetur adipisicing elit. Sequi, animi alias laboriosam asperiores recusandae consequuntur\n      consequatur, amet autem beatae cumque aperiam? Temporibus dolorum veniam odio facere culpa, non saepe. Quae.\n    </p>\n  </mat-card-content>\n  <mat-card-actions style=\"text-align: center\">\n    <button (click)=\"openDialog()\"\n            mat-raised-button color=\"accent\" \n            style=\"border-radius: 20px\">\n      Create post now\n    </button>\n  </mat-card-actions>\n</mat-card>\n\n\n"

/***/ }),

/***/ "./src/app/modules/wellcome/components/hello/hello.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/hello/hello.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .mat-card-header {\n  justify-content: center; }\n\n:host ::ng-deep .mat-card > .mat-card-actions:last-child {\n  margin-bottom: 0; }\n"

/***/ }),

/***/ "./src/app/modules/wellcome/components/hello/hello.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/wellcome/components/hello/hello.component.ts ***!
  \**********************************************************************/
/*! exports provided: HelloComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelloComponent", function() { return HelloComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _schedule_post_dialog_schedule_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../schedule-post-dialog/schedule-post-dialog.component */ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelloComponent = /** @class */ (function () {
    function HelloComponent(dialog) {
        this.dialog = dialog;
    }
    HelloComponent.prototype.ngOnInit = function () {
    };
    HelloComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_schedule_post_dialog_schedule_post_dialog_component__WEBPACK_IMPORTED_MODULE_2__["SchedulePostDialogComponent"], {
            width: '1086px',
            data: {
                title: 'Schedule post now'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
        });
    };
    HelloComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-hello',
            template: __webpack_require__(/*! ./hello.component.html */ "./src/app/modules/wellcome/components/hello/hello.component.html"),
            styles: [__webpack_require__(/*! ./hello.component.scss */ "./src/app/modules/wellcome/components/hello/hello.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], HelloComponent);
    return HelloComponent;
}());



/***/ }),

/***/ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 matDialogTitle>{{ options.title }}</h2>\n<mat-dialog-content class=\"mat-body-1\">\n  <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\n    <!-- First step: Choose client -->\n    <mat-step [stepControl]=\"firstFormGroup\">\n      <mat-card>\n        <form [formGroup]=\"firstFormGroup\">\n          <ng-template matStepLabel>Select client(s)</ng-template>\n\n          <mat-selection-list #clientList formControlName=\"clientControl\" [(ngModel)]=\"clientsSelected\" required>\n            <mat-list-option *ngFor=\"let client of clients\" [selected]=\"client.selected\" [value]=\"client\">\n              <span style=\"display: flex; align-items: center\">\n                <img src=\"{{client.image}}\" class=\"client-img\"> &nbsp; {{client.name}} </span>\n            </mat-list-option>\n          </mat-selection-list>\n\n          <div class=\"actions first-step\">\n            <button mat-raised-button color=\"accent\" matStepperNext (click)=\"checkClient(clientsSelected)\">Next</button>\n          </div>\n        </form>\n      </mat-card>\n    </mat-step>\n\n    <!-- Second step: Choose time -->\n    <mat-step [stepControl]=\"secondFormGroup\">\n      <mat-card>\n        <form [formGroup]=\"secondFormGroup\">\n          <ng-template matStepLabel>Pick date time</ng-template>\n          <div class=\"date-time\">\n            <div>\n              <div class=\"sample-wrapper\">\n                <div class=\"sample-content\">\n                  <article class=\"sample-column calendar-wrapper\">\n                    <igx-calendar #calendar (onSelection)=\"verifyRange($event)\">\n                    </igx-calendar>\n                  </article>\n                </div>\n              </div>\n\n            </div>\n\n            <!-- <div class=\"time\">\n              <w-time color=\"accent\" [(userTime)]=\"exportTime\" (onRevert)=\"onRevert()\" (onSubmit)=\"onSubmitTime($event)\">\n              </w-time>\n            </div> -->\n\n            <div class=\"event\">\n              <div class=\"event-title\">\n                Events\n              </div>\n\n              <p *ngIf=\"events.length === 0\">\n                No event this day !!!\n              </p>\n\n              <div *ngIf=\"events.length > 0\">\n                <mat-list>\n                  <mat-list-item *ngFor=\"let event of events; let i = index\">\n                    <h4 mat-line>\n                      <strong>Post {{i + 1}}</strong>\n                    </h4>\n                    <p mat-line> {{event.date | date}} - {{event.clientName}} </p>\n                    <p mat-line>\n                      {{ (event.post.length>20)? (event.post | slice:0:50) + '...' : (event.post) }}\n                      <img src=\"{{event.image}}\" class=\"post-img\" alt=\"\">\n                    </p>\n                  </mat-list-item>\n                </mat-list>\n              </div>\n            </div>\n\n\n          </div>\n\n          <div class=\"actions\">\n            <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n            <button mat-raised-button color=\"accent\" matStepperNext (click)=\"checkDateTime(selectedDateTime)\">Next</button>\n          </div>\n        </form>\n      </mat-card>\n    </mat-step>\n\n    <!-- Third step: Edit post -->\n    <mat-step [stepControl]=\"thirdFormGroup\">\n      <mat-card>\n        <div class=\"post-edit\">\n          <form [formGroup]=\"thirdFormGroup\" id=\"post-form\">\n            <div class=\"edit-post\">\n              <ng-template matStepLabel>Edit post</ng-template>\n              <mat-form-field style=\"width: 100%\">\n                <textarea spellcheck=\"true\" style=\"width: 100%\" matInput placeholder=\"Textarea\" rows=\"10\" [formControl]=\"postControl\" [(ngModel)]=\"content\"\n                  #post required></textarea>\n              </mat-form-field>\n            </div>\n\n            <div class=\"input-image\">\n\n              <input type=\"file\" (change)=\"onAccept($event)\" accept=\".png, .jpg, .jpeg, .pdf\" name=\"file\" id=\"file\" class=\"inputfile\" />\n\n              <label for=\"file\">\n                <i class=\"material-icons\">add</i>\n                <span>Add image</span>\n              </label>\n\n              <div style=\"margin-top: 10px\">\n                <mat-grid-list cols=\"5\" rowHeight=\"160px\">\n                  <mat-grid-tile *ngFor=\"let item of base64textString\">\n\n                    <img class=\"img-preview\" src={{item}} alt=\"\" id=\"img\">\n                    <button class=\"img-preview-delete\" mat-raised-button color=\"accent\" (click)=\"onDeleteImgPreview(item)\">\n                      <i class=\"material-icons\">\n                        delete\n                      </i>\n                    </button>\n\n                  </mat-grid-tile>\n                </mat-grid-list>\n              </div>\n\n            </div>\n\n            <div class=\"actions\">\n              <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n              <button mat-raised-button color=\"accent\" matStepperNext (click)=\"checkPost(post.value)\">Next</button>\n            </div>\n          </form>\n        </div>\n\n\n      </mat-card>\n    </mat-step>\n\n    <mat-step>\n      <ng-template matStepLabel>Done</ng-template>\n      <mat-card>\n        <h4>YOUR POST REVIEW</h4>\n\n        <div>\n          <label class=\"preview-text-color\">\n            <strong>Client selected</strong>\n          </label>\n          <div class=\"preview-content\">\n            <ul>\n              <li *ngFor=\"let clientSelected of clientsSelected; let i = index\">\n                {{i + 1}} - {{clientSelected.name}}\n              </li>\n            </ul>\n          </div>\n        </div>\n\n        <div>\n          <label class=\"preview-text-color\">\n            <strong>Date - time</strong>\n          </label>\n          <br>\n          <span class=\"preview-content\">{{selectedDateTime | date:'medium'}}</span>\n        </div>\n\n        <div>\n          <label class=\"preview-text-color\">\n            <strong>Your content</strong>\n          </label>\n          <div *ngIf=\"content.length === 0\" class=\"preview-content\">\n            <textarea spellcheck=\"true\" style=\"width: 100%; color:#ff4081\" matInput rows=\"10\">You haven't edit your content. Go back to do that</textarea>\n          </div>\n\n          <div *ngIf=\"content.length > 0\" class=\"preview-content\">\n            <textarea spellcheck=\"true\" style=\"width: 100%\" matInput placeholder=\"Textarea\" rows=\"10\" #post>{{content}}</textarea>\n          </div>\n        </div>\n\n        <div style=\"margin-top: 10px\">\n          <label class=\"preview-text-color\">\n            <strong>Images</strong>\n          </label>\n\n          <p class=\"preview-content\" *ngIf=\"base64textString.length === 0\" style=\"color:#ff4081\">\n            Your post have no image. Go back to add.\n          </p>\n\n          <div *ngIf=\"base64textString.length > 0\">\n            <mat-grid-list cols=\"5\" rowHeight=\"160px\">\n              <mat-grid-tile *ngFor=\"let item of base64textString\">\n                <img class=\"img-preview\" src={{item}} alt=\"\" id=\"img\">\n                <button class=\"img-preview-delete\" mat-raised-button color=\"accent\" (click)=\"onDeleteImgPreview(item)\">\n                  <i class=\"material-icons\">\n                    delete\n                  </i>\n                </button>\n              </mat-grid-tile>\n            </mat-grid-list>\n          </div>\n\n        </div>\n\n        <div class=\"actions\">\n          <button mat-raised-button color=\"accent\" matStepperPrevious>Back</button>\n          <button mat-raised-button color=\"accent\" (click)=\"onSubmit()\">Submit</button>\n        </div>\n      </mat-card>\n\n    </mat-step>\n  </mat-horizontal-stepper>\n\n\n</mat-dialog-content>\n"

/***/ }),

/***/ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.scss ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cal-month-view .cal-header {\n  text-align: center;\n  font-weight: bolder; }\n\n.cal-month-view .cal-cell-row:hover {\n  background-color: #fafafa; }\n\n.cal-month-view .cal-header .cal-cell {\n  padding: 5px 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: block;\n  white-space: nowrap; }\n\n.cal-month-view .cal-cell-row .cal-cell:hover,\n.cal-month-view .cal-cell.cal-has-events.cal-open {\n  background-color: #ededed; }\n\n.cal-month-view .cal-days {\n  border: 1px solid #e1e1e1;\n  border-bottom: 0; }\n\n.cal-month-view .cal-cell-top {\n  min-height: 78px;\n  flex: 1; }\n\n.cal-month-view .cal-cell-row {\n  -js-display: flex;\n  display: flex; }\n\n.cal-month-view .cal-cell {\n  float: left;\n  flex: 1;\n  -js-display: flex;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch; }\n\n.cal-month-view .cal-day-cell {\n  min-height: 100px; }\n\n.cal-month-view .cal-day-cell:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-days .cal-cell-row {\n  border-bottom: 1px solid #e1e1e1; }\n\n.cal-month-view .cal-day-badge {\n  margin-top: 18px;\n  margin-left: 10px;\n  background-color: #b94a48;\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: 700;\n  line-height: 1;\n  color: white;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  border-radius: 10px; }\n\n.cal-month-view .cal-day-number {\n  font-size: 1.2em;\n  font-weight: 400;\n  opacity: 0.5;\n  margin-top: 15px;\n  margin-right: 15px;\n  float: right;\n  margin-bottom: 10px; }\n\n.cal-month-view .cal-events {\n  flex: 1;\n  align-items: flex-end;\n  margin: 3px;\n  line-height: 10px;\n  -js-display: flex;\n  display: flex;\n  flex-wrap: wrap; }\n\n.cal-month-view .cal-event {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n  margin: 2px;\n  background-color: #1e90ff;\n  border-color: #d1e8ff;\n  color: #fff; }\n\n.cal-month-view .cal-event-title:link {\n  color: currentColor; }\n\n.cal-month-view .cal-day-cell.cal-in-month.cal-has-events {\n  cursor: pointer; }\n\n.cal-month-view .cal-day-cell.cal-out-month .cal-day-number {\n  opacity: 0.1;\n  cursor: default; }\n\n.cal-month-view .cal-day-cell.cal-weekend .cal-day-number {\n  color: darkred; }\n\n.cal-month-view .cal-day-cell.cal-today {\n  background-color: #e8fde7; }\n\n.cal-month-view .cal-day-cell.cal-today .cal-day-number {\n  font-size: 1.9em; }\n\n.cal-month-view .cal-day-cell.cal-drag-over {\n  background-color: #e0e0e0 !important; }\n\n.cal-month-view .cal-open-day-events {\n  padding: 15px;\n  color: white;\n  background-color: #555;\n  box-shadow: inset 0 0 15px 0 rgba(0, 0, 0, 0.5); }\n\n.cal-month-view .cal-open-day-events .cal-event {\n  position: relative;\n  top: 2px; }\n\n.cal-month-view .cal-out-month .cal-day-badge,\n.cal-month-view .cal-out-month .cal-event {\n  opacity: 0.3; }\n\n.cal-week-view .cal-day-headers {\n  -js-display: flex;\n  display: flex;\n  margin-bottom: 3px;\n  border: 1px solid #e1e1e1;\n  margin-left: 2px;\n  margin-right: 2px; }\n\n.cal-week-view .cal-day-headers .cal-header {\n  flex: 1;\n  text-align: center;\n  padding: 5px; }\n\n.cal-week-view .cal-day-headers .cal-header:not(:last-child) {\n  border-right: 1px solid #e1e1e1; }\n\n.cal-week-view .cal-day-headers .cal-header:hover,\n.cal-week-view .cal-day-headers .cal-drag-over {\n  background-color: #ededed; }\n\n.cal-week-view .cal-day-headers span {\n  font-weight: 400;\n  opacity: 0.5; }\n\n.cal-week-view .cal-events-row {\n  position: relative;\n  height: 33px; }\n\n.cal-week-view .cal-event-container {\n  display: inline-block;\n  position: absolute; }\n\n.cal-week-view .cal-event {\n  padding: 0 10px;\n  font-size: 12px;\n  margin-left: 2px;\n  margin-right: 2px;\n  height: 30px;\n  line-height: 30px;\n  background-color: #d1e8ff;\n  border: 1px solid #1e90ff;\n  color: #1e90ff; }\n\n.cal-week-view .cal-event-title:link {\n  color: currentColor; }\n\n.cal-week-view .cal-draggable {\n  cursor: move; }\n\n.cal-week-view .cal-starts-within-week .cal-event {\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px; }\n\n.cal-week-view .cal-ends-within-week .cal-event {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px; }\n\n.cal-week-view .cal-header.cal-today {\n  background-color: #e8fde7; }\n\n.cal-week-view .cal-header.cal-weekend span {\n  color: #8b0000; }\n\n.cal-week-view .cal-event,\n.cal-week-view .cal-header {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.cal-day-view {\n  /* stylelint-disable-next-line selector-type-no-unknown */ }\n\n.cal-day-view .cal-hour-rows {\n    width: 100%;\n    border: solid 1px #e1e1e1;\n    overflow-x: scroll;\n    position: relative; }\n\n.cal-day-view .cal-hour:nth-child(odd) {\n    background-color: #fafafa; }\n\n.cal-day-view mwl-calendar-day-view-hour-segment,\n  .cal-day-view .cal-hour-segment {\n    display: block; }\n\n.cal-day-view .cal-hour-segment::after {\n    content: '\\00a0'; }\n\n.cal-day-view .cal-hour:not(:last-child) .cal-hour-segment,\n  .cal-day-view .cal-hour:last-child :not(:last-child) .cal-hour-segment {\n    border-bottom: thin dashed #e1e1e1; }\n\n.cal-day-view .cal-time {\n    font-weight: bold;\n    padding-top: 5px;\n    width: 70px;\n    text-align: center; }\n\n.cal-day-view .cal-hour-segment.cal-after-hour-start .cal-time {\n    display: none; }\n\n.cal-day-view .cal-hour-segment:hover,\n  .cal-day-view .cal-drag-over .cal-hour-segment {\n    background-color: #ededed; }\n\n.cal-day-view .cal-event-container {\n    position: absolute; }\n\n.cal-day-view .cal-event {\n    padding: 5px;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    height: 100%;\n    box-sizing: border-box;\n    background-color: #d1e8ff;\n    border: 1px solid #1e90ff;\n    color: #1e90ff;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.cal-day-view .cal-event-title:link {\n    color: currentColor; }\n\n.cal-day-view .cal-draggable {\n    cursor: move; }\n\n.cal-day-view .cal-starts-within-day .cal-event {\n    border-top-left-radius: 5px;\n    border-top-right-radius: 5px; }\n\n.cal-day-view .cal-ends-within-day .cal-event {\n    border-bottom-left-radius: 5px;\n    border-bottom-right-radius: 5px; }\n\n.cal-day-view .cal-all-day-event {\n    padding: 8px;\n    border: solid 1px; }\n\n.cal-tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-style: normal;\n  font-weight: normal;\n  letter-spacing: normal;\n  line-break: auto;\n  line-height: 1.5;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  white-space: normal;\n  word-break: normal;\n  word-spacing: normal;\n  font-size: 11px;\n  word-wrap: break-word;\n  opacity: 0.9; }\n\n.cal-tooltip.cal-tooltip-top {\n  padding: 5px 0;\n  margin-top: -3px; }\n\n.cal-tooltip.cal-tooltip-top .cal-tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000; }\n\n.cal-tooltip.cal-tooltip-right {\n  padding: 0 5px;\n  margin-left: 3px; }\n\n.cal-tooltip.cal-tooltip-right .cal-tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000; }\n\n.cal-tooltip.cal-tooltip-bottom {\n  padding: 5px 0;\n  margin-top: 3px; }\n\n.cal-tooltip.cal-tooltip-bottom .cal-tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000; }\n\n.cal-tooltip.cal-tooltip-left {\n  padding: 0 5px;\n  margin-left: -3px; }\n\n.cal-tooltip.cal-tooltip-left .cal-tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000; }\n\n.cal-tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 0.25rem; }\n\n.cal-tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid; }\n\n:host ::ng-deep .mat-calendar-body-cell-content:focus {\n  background: grey; }\n\n:host ::ng-deep .mat-step-header .mat-step-icon {\n  background: #ff4081; }\n\n:host ::ng-deep .igx-calendar__header {\n  background-color: #ff4081;\n  color: #fff; }\n\n:host ::ng-deep .mat-grid-tile .mat-figure {\n  justify-content: start;\n  padding-bottom: 15px; }\n\n:host ::ng-depp .w-time {\n  margin: 0 10px; }\n\n:host ::ng-deep .w-timepicker-time-container.mat-toolbar.mat-accent.mat-toolbar-single-row {\n  height: 117px;\n  padding: 15px;\n  min-width: 160px;\n  width: 100%; }\n\n:host ::ng-deep .w-animation-zoom {\n  height: 100%; }\n\n:host ::ng-deep .mat-list-item.mat-3-line.ng-star-inserted {\n  border-bottom: 1px solid grey; }\n\n.date-time {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between; }\n\n.actions {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-between; }\n\n.actions.first-step {\n  justify-content: flex-end; }\n\n.client-img {\n  width: 33px;\n  height: 33px;\n  border-radius: 50%; }\n\n.post-img {\n  width: 33px;\n  height: 33px; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n  color: grey;\n  background-color: #2a2f34;\n  display: flex;\n  justify-content: center;\n  width: 160px;\n  border-radius: 10px; }\n\n.inputfile:focus + label,\n.inputfile + label:hover {\n  cursor: pointer; }\n\n.img-preview {\n  width: 160px;\n  height: 160px; }\n\n.img-preview-delete {\n  width: 160px;\n  height: 40px;\n  top: 112px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  opacity: 0.5;\n  position: absolute; }\n\n.img-preview-delete:hover {\n  cursor: pointer;\n  opacity: 1; }\n\n.time {\n  height: 100%;\n  margin: 0 5px; }\n\n.preview-text-color {\n  color: #ff4081; }\n\n.event {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.event-title {\n  height: 93px;\n  background: #ff4081;\n  padding: 1rem;\n  font-size: 3.5rem;\n  font-weight: 400;\n  display: flex;\n  justify-content: right;\n  align-items: center;\n  color: #fff; }\n\n.preview-content {\n  padding-left: 15px; }\n"

/***/ }),

/***/ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: SchedulePostDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePostDialogComponent", function() { return SchedulePostDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_wellcome_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/wellcome.service */ "./src/app/modules/wellcome/service/wellcome.service.ts");
/* harmony import */ var _app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/modules/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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







var SchedulePostDialogComponent = /** @class */ (function () {
    function SchedulePostDialogComponent(datepipe, snackBar, postForm, wellcomeService, dialog, data) {
        this.datepipe = datepipe;
        this.snackBar = snackBar;
        this.postForm = postForm;
        this.wellcomeService = wellcomeService;
        this.dialog = dialog;
        this.data = data;
        this.clients = [];
        this.events = [];
        this.clientsSelected = [];
        this.currentDateTime = new Date();
        this.selectedDateTime = new Date();
        this.content = '';
        this.imgPreview = '';
        this.base64textString = [];
        this.exportTime = {
            hour: this.currentDateTime.getHours(),
            minute: this.currentDateTime.getMinutes(),
            meriden: this.currentDateTime.getHours() >= 12 ? 'PM' : 'AM',
            format: 12
        };
        this.exportTime24 = { hour: 7, minute: 15, meriden: 'PM', format: 24 };
        this.isLinear = true;
        this.clientControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.dateControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date());
        this.timeControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.postControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.options = {
            title: 'Delete',
            message: 'This is mess in dialog',
            confirmButtonText: 'OK',
            cancelButtonText: 'Cancel'
        };
        this.options = __assign({}, this.options, data);
    }
    SchedulePostDialogComponent.prototype.ngOnInit = function () {
        this.getClients();
        this.firstFormGroup = this.postForm.group({
            clientControl: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
        this.secondFormGroup = this.postForm.group({
            dateControl: ['', []],
        });
        this.thirdFormGroup = this.postForm.group({
            postControl: ['', []]
        });
    };
    SchedulePostDialogComponent.prototype.getClients = function () {
        var _this = this;
        this.wellcomeService.getClients().subscribe(function (data) {
            return _this.clients = data;
        });
    };
    SchedulePostDialogComponent.prototype.checkClient = function (clients) {
        this.clientsSelected = clients;
        if (this.clientsSelected.length === 0) {
            this.isLinear = true;
            this.openDialog();
        }
    };
    SchedulePostDialogComponent.prototype.checkDateTime = function (selectedDateTime) {
        this.selectedDateTime = selectedDateTime;
    };
    SchedulePostDialogComponent.prototype.checkPost = function (post) {
        this.content = post;
    };
    SchedulePostDialogComponent.prototype.onAccept = function (evt) {
        var file = evt.target.files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    };
    SchedulePostDialogComponent.prototype.handleReaderLoaded = function (e) {
        this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
    };
    SchedulePostDialogComponent.prototype.onDeleteImgPreview = function (item) {
        var index = this.base64textString.indexOf(item);
        this.base64textString.splice(index, 1);
    };
    SchedulePostDialogComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            width: '250px',
            data: {
                title: 'Not yet choose',
                message: 'You must choose at leat one to continue ',
                confirmButtonText: 'Ok'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SchedulePostDialogComponent.prototype.onSelectedDate = function (event) {
        this.currentDateTime = event.value;
    };
    SchedulePostDialogComponent.prototype.onRevert = function () {
        this.snackBar.open("Revert time to " + this.exportTime24.hour + ":" + this.exportTime24.minute + " " + this.exportTime24.meriden, null, {
            duration: 500,
        });
    };
    SchedulePostDialogComponent.prototype.onSubmitTime = function (time) {
        this.snackBar.open("Saved time " + this.exportTime.hour + ":" + this.exportTime.minute + " " + this.exportTime.meriden, null, {
            duration: 500,
        });
        if (this.exportTime.meriden === 'PM') {
            this.selectedDateTime.setHours(this.exportTime.hour + 12);
        }
        else {
            this.selectedDateTime.setHours(this.exportTime.hour);
        }
        this.selectedDateTime.setMinutes(this.exportTime.minute);
        this.selectedDateTime.setSeconds(0);
    };
    SchedulePostDialogComponent.prototype.onSubmit = function () {
        var dialogRef = this.dialog.open(_app_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmDialogComponent"], {
            width: '250px',
            data: {
                title: 'Submit',
                message: 'Your post is saved to database ',
                confirmButtonText: 'Ok'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SchedulePostDialogComponent.prototype.verifyRange = function (dates) {
        var _this = this;
        var date = this.datepipe.transform(this.calendar.value, 'MM/dd/yyy');
        this.wellcomeService.getClientPostByClientDate(date).subscribe(function (result) {
            _this.events = result;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('calendar'),
        __metadata("design:type", igniteui_angular__WEBPACK_IMPORTED_MODULE_5__["IgxCalendarComponent"])
    ], SchedulePostDialogComponent.prototype, "calendar", void 0);
    SchedulePostDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-post-dialog',
            template: __webpack_require__(/*! ./schedule-post-dialog.component.html */ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.html"),
            styles: [__webpack_require__(/*! ./schedule-post-dialog.component.scss */ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.scss")]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _service_wellcome_service__WEBPACK_IMPORTED_MODULE_3__["WellcomeService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"], Object])
    ], SchedulePostDialogComponent);
    return SchedulePostDialogComponent;
}());



/***/ }),

/***/ "./src/app/modules/wellcome/components/total-data/total-data.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/total-data/total-data.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"total\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'total impressions' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>{{totalImpression}}</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'total engagement' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>{{totalEngagement}}</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'total clicks' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>{{totalClicks}}</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'avg. paid reach' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>{{avgPaidReach}}</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-subtitle>\n        {{ 'avg. organic reach' | uppercase }}\n      </mat-card-subtitle>\n      <mat-card-title>\n        <h1>{{avgOrganicReach}}</h1>\n      </mat-card-title>\n    </mat-card-header>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/wellcome/components/total-data/total-data.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/total-data/total-data.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 50px 0; }\n\n.total mat-card {\n  width: 15%;\n  background: #262A2F;\n  color: #fff; }\n\n.total mat-card mat-card-subtitle {\n  color: #8D98A9; }\n"

/***/ }),

/***/ "./src/app/modules/wellcome/components/total-data/total-data.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/wellcome/components/total-data/total-data.component.ts ***!
  \********************************************************************************/
/*! exports provided: TotalDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TotalDataComponent", function() { return TotalDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_wellcome_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/wellcome.service */ "./src/app/modules/wellcome/service/wellcome.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TotalDataComponent = /** @class */ (function () {
    function TotalDataComponent(service) {
        this.service = service;
        this.totalImpression = 0;
        this.totalEngagement = 0;
        this.totalClicks = 0;
        this.avgPaidReach = 0;
        this.avgOrganicReach = 0;
    }
    TotalDataComponent.prototype.ngOnInit = function () {
        this.getTotalImpression();
        this.getTotalEngagement();
        this.getTotalClicks();
        this.getAvgPaidReach();
        this.getAvgOrganicReach();
    };
    TotalDataComponent.prototype.getTotalImpression = function () {
        var _this = this;
        this.service.getClientPost().subscribe(function (data) {
            data.forEach(function (item) {
                _this.totalImpression = _this.totalImpression + item.impressions;
            });
            return _this.totalImpression;
        });
    };
    TotalDataComponent.prototype.getTotalEngagement = function () {
        var _this = this;
        this.service.getClientPost().subscribe(function (data) {
            data.forEach(function (item) {
                _this.totalEngagement = _this.totalEngagement + item.engagement;
            });
            return _this.totalEngagement;
        });
    };
    TotalDataComponent.prototype.getTotalClicks = function () {
        var _this = this;
        this.service.getClientPost().subscribe(function (data) {
            data.forEach(function (item) {
                _this.totalClicks = _this.totalClicks + item.clicks;
            });
            return _this.totalClicks;
        });
    };
    TotalDataComponent.prototype.getAvgPaidReach = function () {
        var _this = this;
        this.service.getClientPost().subscribe(function (data) {
            data.forEach(function (item) {
                _this.avgPaidReach = _this.avgPaidReach + item.padiRech;
            });
            return _this.avgPaidReach;
        });
    };
    TotalDataComponent.prototype.getAvgOrganicReach = function () {
        var _this = this;
        this.service.getClientPost().subscribe(function (data) {
            data.forEach(function (item) {
                _this.avgOrganicReach = _this.avgOrganicReach + item.organicReach;
            });
            return _this.avgOrganicReach;
        });
    };
    TotalDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-total-data',
            template: __webpack_require__(/*! ./total-data.component.html */ "./src/app/modules/wellcome/components/total-data/total-data.component.html"),
            styles: [__webpack_require__(/*! ./total-data.component.scss */ "./src/app/modules/wellcome/components/total-data/total-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_service_wellcome_service__WEBPACK_IMPORTED_MODULE_1__["WellcomeService"]])
    ], TotalDataComponent);
    return TotalDataComponent;
}());



/***/ }),

/***/ "./src/app/modules/wellcome/service/wellcome.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/wellcome/service/wellcome.service.ts ***!
  \**************************************************************/
/*! exports provided: WellcomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellcomeService", function() { return WellcomeService; });
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


var WellcomeService = /** @class */ (function () {
    function WellcomeService(http) {
        this.http = http;
    }
    WellcomeService.prototype.getClients = function () {
        return this.http.get('http://localhost:3000/clients');
    };
    WellcomeService.prototype.getClientPost = function () {
        return this.http.get('http://localhost:3000/client_post');
    };
    WellcomeService.prototype.getClientById = function (id) {
        return this.http.get("http://localhost:3000/clients?clientId=" + id);
    };
    WellcomeService.prototype.getClientPostByClientDate = function (date) {
        return this.http.get("http://localhost:3000/client_post?date=" + date);
    };
    WellcomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WellcomeService);
    return WellcomeService;
}());



/***/ }),

/***/ "./src/app/modules/wellcome/wellcome-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/wellcome/wellcome-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: routes, WellcomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellcomeRoutingModule", function() { return WellcomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wellcome/wellcome.component */ "./src/app/modules/wellcome/wellcome/wellcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_2__["WellcomeComponent"]
    },
];
var WellcomeRoutingModule = /** @class */ (function () {
    function WellcomeRoutingModule() {
    }
    WellcomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WellcomeRoutingModule);
    return WellcomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/wellcome/wellcome.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/wellcome/wellcome.module.ts ***!
  \*****************************************************/
/*! exports provided: WellcomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellcomeModule", function() { return WellcomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _wellcome_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wellcome-routing.module */ "./src/app/modules/wellcome/wellcome-routing.module.ts");
/* harmony import */ var _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wellcome/wellcome.component */ "./src/app/modules/wellcome/wellcome/wellcome.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _components_hello_hello_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/hello/hello.component */ "./src/app/modules/wellcome/components/hello/hello.component.ts");
/* harmony import */ var angular_calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-calendar */ "./node_modules/angular-calendar/fesm5/angular-calendar.js");
/* harmony import */ var _components_total_data_total_data_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/total-data/total-data.component */ "./src/app/modules/wellcome/components/total-data/total-data.component.ts");
/* harmony import */ var _components_schedule_post_dialog_schedule_post_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/schedule-post-dialog/schedule-post-dialog.component */ "./src/app/modules/wellcome/components/schedule-post-dialog/schedule-post-dialog.component.ts");
/* harmony import */ var ng5_time_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng5-time-picker */ "./node_modules/ng5-time-picker/index.js");
/* harmony import */ var ngx_input_file__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-input-file */ "./node_modules/ngx-input-file/fesm5/ngx-input-file.js");
/* harmony import */ var igniteui_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! igniteui-angular */ "./node_modules/igniteui-angular/fesm5/igniteui-angular.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var config = {};
var WellcomeModule = /** @class */ (function () {
    function WellcomeModule() {
    }
    WellcomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_wellcome_routing_module__WEBPACK_IMPORTED_MODULE_3__["routes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _wellcome_routing_module__WEBPACK_IMPORTED_MODULE_3__["WellcomeRoutingModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                angular_calendar__WEBPACK_IMPORTED_MODULE_9__["CalendarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                ng5_time_picker__WEBPACK_IMPORTED_MODULE_12__["Ng5TimePickerModule"],
                ngx_input_file__WEBPACK_IMPORTED_MODULE_13__["InputFileModule"].forRoot(config),
                igniteui_angular__WEBPACK_IMPORTED_MODULE_14__["IgxCalendarModule"],
                igniteui_angular__WEBPACK_IMPORTED_MODULE_14__["IgxDialogModule"]
            ],
            declarations: [
                _wellcome_wellcome_component__WEBPACK_IMPORTED_MODULE_4__["WellcomeComponent"],
                _components_hello_hello_component__WEBPACK_IMPORTED_MODULE_8__["HelloComponent"],
                _components_total_data_total_data_component__WEBPACK_IMPORTED_MODULE_10__["TotalDataComponent"],
                _components_schedule_post_dialog_schedule_post_dialog_component__WEBPACK_IMPORTED_MODULE_11__["SchedulePostDialogComponent"]
            ],
            entryComponents: [
                _components_schedule_post_dialog_schedule_post_dialog_component__WEBPACK_IMPORTED_MODULE_11__["SchedulePostDialogComponent"]
            ],
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]]
        })
    ], WellcomeModule);
    return WellcomeModule;
}());



/***/ }),

/***/ "./src/app/modules/wellcome/wellcome/wellcome.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/wellcome/wellcome/wellcome.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-hello></app-hello>\n\n<app-total-data></app-total-data>\n"

/***/ }),

/***/ "./src/app/modules/wellcome/wellcome/wellcome.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/wellcome/wellcome/wellcome.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".total {\n  display: flex;\n  justify-content: space-evenly;\n  margin: 50px 0; }\n\n.total mat-card {\n  width: 15%;\n  background: #262A2F;\n  color: #fff; }\n\n.total mat-card mat-card-subtitle {\n  color: #8D98A9; }\n"

/***/ }),

/***/ "./src/app/modules/wellcome/wellcome/wellcome.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/wellcome/wellcome/wellcome.component.ts ***!
  \*****************************************************************/
/*! exports provided: WellcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WellcomeComponent", function() { return WellcomeComponent; });
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

var WellcomeComponent = /** @class */ (function () {
    function WellcomeComponent() {
    }
    WellcomeComponent.prototype.ngOnInit = function () {
    };
    WellcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wellcome',
            template: __webpack_require__(/*! ./wellcome.component.html */ "./src/app/modules/wellcome/wellcome/wellcome.component.html"),
            styles: [__webpack_require__(/*! ./wellcome.component.scss */ "./src/app/modules/wellcome/wellcome/wellcome.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WellcomeComponent);
    return WellcomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=app-modules-wellcome-wellcome-module.js.map