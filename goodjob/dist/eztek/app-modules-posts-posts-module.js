(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app-modules-posts-posts-module"],{

/***/ "./node_modules/@ngrx/entity/fesm5/entity.js":
/*!***************************************************!*\
  !*** ./node_modules/@ngrx/entity/fesm5/entity.js ***!
  \***************************************************/
/*! exports provided: createEntityAdapter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEntityAdapter", function() { return createEntityAdapter; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/**
 * @license NgRx 6.0.1
 * (c) 2015-2018 Brandon Roberts, Mike Ryan, Rob Wormald, Victor Savkin
 * License: MIT
 */


function getInitialEntityState() {
    return {
        ids: [],
        entities: {},
    };
}
function createInitialStateFactory() {
    function getInitialState(additionalState) {
        if (additionalState === void 0) { additionalState = {}; }
        return Object.assign(getInitialEntityState(), additionalState);
    }
    return { getInitialState: getInitialState };
}

function createSelectorsFactory() {
    function getSelectors(selectState) {
        var selectIds = function (state) { return state.ids; };
        var selectEntities = function (state) { return state.entities; };
        var selectAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, selectEntities, function (ids, entities) {
            return ids.map(function (id) { return entities[id]; });
        });
        var selectTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectIds, function (ids) { return ids.length; });
        if (!selectState) {
            return {
                selectIds: selectIds,
                selectEntities: selectEntities,
                selectAll: selectAll,
                selectTotal: selectTotal,
            };
        }
        return {
            selectIds: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectIds),
            selectEntities: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectEntities),
            selectAll: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectAll),
            selectTotal: Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectState, selectTotal),
        };
    }
    return { getSelectors: getSelectors };
}

var __assign$1 = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __read = (undefined && undefined.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (undefined && undefined.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var DidMutate;
(function (DidMutate) {
    DidMutate[DidMutate["EntitiesOnly"] = 0] = "EntitiesOnly";
    DidMutate[DidMutate["Both"] = 1] = "Both";
    DidMutate[DidMutate["None"] = 2] = "None";
})(DidMutate || (DidMutate = {}));
function createStateOperator(mutator) {
    return function operation(arg, state) {
        var clonedEntityState = {
            ids: __spread(state.ids),
            entities: __assign$1({}, state.entities),
        };
        var didMutate = mutator(arg, clonedEntityState);
        if (didMutate === DidMutate.Both) {
            return Object.assign({}, state, clonedEntityState);
        }
        if (didMutate === DidMutate.EntitiesOnly) {
            return __assign$1({}, state, { entities: clonedEntityState.entities });
        }
        return state;
    };
}

var __values$1 = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createUnsortedStateAdapter(selectId) {
    function addOneMutably(entity, state) {
        var key = selectId(entity);
        if (key in state.entities) {
            return DidMutate.None;
        }
        state.ids.push(key);
        state.entities[key] = entity;
        return DidMutate.Both;
    }
    function addManyMutably(entities, state) {
        var didMutate = false;
        try {
            for (var entities_1 = __values$1(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                didMutate = addOneMutably(entity, state) !== DidMutate.None || didMutate;
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
        var e_1, _a;
    }
    function addAllMutably(entities, state) {
        state.ids = [];
        state.entities = {};
        addManyMutably(entities, state);
        return DidMutate.Both;
    }
    function removeOneMutably(key, state) {
        return removeManyMutably([key], state);
    }
    function removeManyMutably(keys, state) {
        var didMutate = keys
            .filter(function (key) { return key in state.entities; })
            .map(function (key) { return delete state.entities[key]; }).length > 0;
        if (didMutate) {
            state.ids = state.ids.filter(function (id) { return id in state.entities; });
        }
        return didMutate ? DidMutate.Both : DidMutate.None;
    }
    function removeAll(state) {
        return Object.assign({}, state, {
            ids: [],
            entities: {},
        });
    }
    function takeNewKey(keys, update, state) {
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectId(updated);
        var hasNewKey = newKey !== update.id;
        if (hasNewKey) {
            keys[update.id] = newKey;
            delete state.entities[update.id];
        }
        state.entities[newKey] = updated;
        return hasNewKey;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function updateManyMutably(updates, state) {
        var newKeys = {};
        updates = updates.filter(function (update) { return update.id in state.entities; });
        var didMutateEntities = updates.length > 0;
        if (didMutateEntities) {
            var didMutateIds = updates.filter(function (update) { return takeNewKey(newKeys, update, state); }).length > 0;
            if (didMutateIds) {
                state.ids = state.ids.map(function (id) { return newKeys[id] || id; });
                return DidMutate.Both;
            }
            else {
                return DidMutate.EntitiesOnly;
            }
        }
        return DidMutate.None;
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var added = [];
        var updated = [];
        try {
            for (var entities_2 = __values$1(entities), entities_2_1 = entities_2.next(); !entities_2_1.done; entities_2_1 = entities_2.next()) {
                var entity = entities_2_1.value;
                var id = selectId(entity);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (entities_2_1 && !entities_2_1.done && (_a = entities_2.return)) _a.call(entities_2);
            }
            finally { if (e_2) throw e_2.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
        var e_2, _a;
    }
    return {
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        addMany: createStateOperator(addManyMutably),
        addAll: createStateOperator(addAllMutably),
        updateOne: createStateOperator(updateOneMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        upsertMany: createStateOperator(upsertManyMutably),
        removeOne: createStateOperator(removeOneMutably),
        removeMany: createStateOperator(removeManyMutably),
    };
}

var __values = (undefined && undefined.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
function createSortedStateAdapter(selectId, sort) {
    var _a = createUnsortedStateAdapter(selectId), removeOne = _a.removeOne, removeMany = _a.removeMany, removeAll = _a.removeAll;
    function addOneMutably(entity, state) {
        return addManyMutably([entity], state);
    }
    function addManyMutably(newModels, state) {
        var models = newModels.filter(function (model) { return !(selectId(model) in state.entities); });
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            merge(models, state);
            return DidMutate.Both;
        }
    }
    function addAllMutably(models, state) {
        state.entities = {};
        state.ids = [];
        addManyMutably(models, state);
        return DidMutate.Both;
    }
    function updateOneMutably(update, state) {
        return updateManyMutably([update], state);
    }
    function takeUpdatedModel(models, update, state) {
        if (!(update.id in state.entities)) {
            return false;
        }
        var original = state.entities[update.id];
        var updated = Object.assign({}, original, update.changes);
        var newKey = selectId(updated);
        delete state.entities[update.id];
        models.push(updated);
        return newKey !== update.id;
    }
    function updateManyMutably(updates, state) {
        var models = [];
        var didMutateIds = updates.filter(function (update) { return takeUpdatedModel(models, update, state); }).length >
            0;
        if (models.length === 0) {
            return DidMutate.None;
        }
        else {
            var originalIds_1 = state.ids;
            var updatedIndexes_1 = [];
            state.ids = state.ids.filter(function (id, index) {
                if (id in state.entities) {
                    return true;
                }
                else {
                    updatedIndexes_1.push(index);
                    return false;
                }
            });
            merge(models, state);
            if (!didMutateIds &&
                updatedIndexes_1.every(function (i) { return state.ids[i] === originalIds_1[i]; })) {
                return DidMutate.EntitiesOnly;
            }
            else {
                return DidMutate.Both;
            }
        }
    }
    function upsertOneMutably(entity, state) {
        return upsertManyMutably([entity], state);
    }
    function upsertManyMutably(entities, state) {
        var added = [];
        var updated = [];
        try {
            for (var entities_1 = __values(entities), entities_1_1 = entities_1.next(); !entities_1_1.done; entities_1_1 = entities_1.next()) {
                var entity = entities_1_1.value;
                var id = selectId(entity);
                if (id in state.entities) {
                    updated.push({ id: id, changes: entity });
                }
                else {
                    added.push(entity);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (entities_1_1 && !entities_1_1.done && (_a = entities_1.return)) _a.call(entities_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var didMutateByUpdated = updateManyMutably(updated, state);
        var didMutateByAdded = addManyMutably(added, state);
        switch (true) {
            case didMutateByAdded === DidMutate.None &&
                didMutateByUpdated === DidMutate.None:
                return DidMutate.None;
            case didMutateByAdded === DidMutate.Both ||
                didMutateByUpdated === DidMutate.Both:
                return DidMutate.Both;
            default:
                return DidMutate.EntitiesOnly;
        }
        var e_1, _a;
    }
    function merge(models, state) {
        models.sort(sort);
        var ids = [];
        var i = 0;
        var j = 0;
        while (i < models.length && j < state.ids.length) {
            var model = models[i];
            var modelId = selectId(model);
            var entityId = state.ids[j];
            var entity = state.entities[entityId];
            if (sort(model, entity) <= 0) {
                ids.push(modelId);
                i++;
            }
            else {
                ids.push(entityId);
                j++;
            }
        }
        if (i < models.length) {
            state.ids = ids.concat(models.slice(i).map(selectId));
        }
        else {
            state.ids = ids.concat(state.ids.slice(j));
        }
        models.forEach(function (model, i) {
            state.entities[selectId(model)] = model;
        });
    }
    return {
        removeOne: removeOne,
        removeMany: removeMany,
        removeAll: removeAll,
        addOne: createStateOperator(addOneMutably),
        updateOne: createStateOperator(updateOneMutably),
        upsertOne: createStateOperator(upsertOneMutably),
        addAll: createStateOperator(addAllMutably),
        addMany: createStateOperator(addManyMutably),
        updateMany: createStateOperator(updateManyMutably),
        upsertMany: createStateOperator(upsertManyMutably),
    };
}

var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
function createEntityAdapter(options) {
    if (options === void 0) { options = {}; }
    var _a = __assign({ sortComparer: false, selectId: function (instance) { return instance.id; } }, options), selectId = _a.selectId, sortComparer = _a.sortComparer;
    var stateFactory = createInitialStateFactory();
    var selectorsFactory = createSelectorsFactory();
    var stateAdapter = sortComparer
        ? createSortedStateAdapter(selectId, sortComparer)
        : createUnsortedStateAdapter(selectId);
    return __assign({ selectId: selectId,
        sortComparer: sortComparer }, stateFactory, selectorsFactory, stateAdapter);
}

/**
 * DO NOT EDIT
 *
 * This file is automatically generated at build
 */

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=entity.js.map


/***/ }),

/***/ "./node_modules/rxjs-compat/_esm5/observable/of.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs-compat/_esm5/observable/of.js ***!
  \*********************************************************/
/*! exports provided: of */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "of", function() { return rxjs__WEBPACK_IMPORTED_MODULE_0__["of"]; });


//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/app/modules/posts/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/posts/components/index.ts ***!
  \***************************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var _post_table_post_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post-table/post-table.component */ "./src/app/modules/posts/components/post-table/post-table.component.ts");
/* harmony import */ var _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-form/post-form.component */ "./src/app/modules/posts/components/post-form/post-form.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./post/post.component */ "./src/app/modules/posts/components/post/post.component.ts");
/* harmony import */ var _schedule_calendar_schedule_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-calendar/schedule-calendar.component */ "./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.ts");




var components = [
    _post_post_component__WEBPACK_IMPORTED_MODULE_2__["PostComponent"],
    _post_form_post_form_component__WEBPACK_IMPORTED_MODULE_1__["PostFormComponent"],
    _post_table_post_table_component__WEBPACK_IMPORTED_MODULE_0__["PostTableComponent"],
    _schedule_calendar_schedule_calendar_component__WEBPACK_IMPORTED_MODULE_3__["ScheduleCalendarComponent"]
];


/***/ }),

/***/ "./src/app/modules/posts/components/post-form/post-form.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/posts/components/post-form/post-form.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\n  <form #f=\"ngForm\" novalidate (ngSubmit)=\"onSubmit()\">\n    <mat-form-field>\n      <input matInput placeholder=\"Input\" name=\"title\" required [(ngModel)]=\"post.title\">\n    </mat-form-field>\n\n    <mat-form-field>\n      <textarea matInput placeholder=\"Textarea\" name=\"body\" [(ngModel)]=\"post.body\"></textarea>\n    </mat-form-field>\n\n    <button mat-button type=\"submit\" [disabled]=\"f.invalid\">Save</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/posts/components/post-form/post-form.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/posts/components/post-form/post-form.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/modules/posts/components/post-form/post-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/posts/components/post-form/post-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: PostFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostFormComponent", function() { return PostFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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

var PostFormComponent = /** @class */ (function () {
    function PostFormComponent() {
        this.save = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PostFormComponent.prototype.ngOnInit = function () {
        if (!this.post) {
            this.post = { title: '' };
        }
    };
    PostFormComponent.prototype.onSubmit = function () {
        this.save.emit(__assign({}, this.post));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostFormComponent.prototype, "post", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PostFormComponent.prototype, "save", void 0);
    PostFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-form',
            template: __webpack_require__(/*! ./post-form.component.html */ "./src/app/modules/posts/components/post-form/post-form.component.html"),
            styles: [__webpack_require__(/*! ./post-form.component.scss */ "./src/app/modules/posts/components/post-form/post-form.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostFormComponent);
    return PostFormComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/components/post-table/post-table.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/posts/components/post-table/post-table.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n  max-height: 500px;\r\n  overflow: auto;\r\n}\r\n\r\n.mat-table .mat-row:hover{\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modules/posts/components/post-table/post-table.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/posts/components/post-table/post-table.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container mat-elevation-z8\">\n  <table mat-table #table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"id\">\n      <th mat-header-cell *matHeaderCellDef> ID</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.id}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title</th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.title}}</td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef></th>\n      <td mat-cell *matCellDef=\"let element\">\n        <button mat-button (click)=\"onDeleteClicked(element); $event.stopPropagation();\">\n          Delete\n        </button>\n      </td>\n    </ng-container>\n\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n        (click)=\"onRowClicked(row)\"></tr>\n  </table>\n</div>\n\n"

/***/ }),

/***/ "./src/app/modules/posts/components/post-table/post-table.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/posts/components/post-table/post-table.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostTableComponent", function() { return PostTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostTableComponent = /** @class */ (function () {
    function PostTableComponent() {
        this.rowSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.displayedColumns = ['id', 'title', 'actions'];
    }
    PostTableComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.posts);
    };
    PostTableComponent.prototype.onDeleteClicked = function (post) {
    };
    PostTableComponent.prototype.onRowClicked = function (row) {
        this.rowSelected.emit(row);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PostTableComponent.prototype, "posts", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PostTableComponent.prototype, "rowSelected", void 0);
    PostTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-table',
            template: __webpack_require__(/*! ./post-table.component.html */ "./src/app/modules/posts/components/post-table/post-table.component.html"),
            styles: [__webpack_require__(/*! ./post-table.component.css */ "./src/app/modules/posts/components/post-table/post-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostTableComponent);
    return PostTableComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/components/post/post.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/posts/components/post/post.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/posts/components/post/post.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/posts/components/post/post.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>Id: {{post.id}}</div>\n<div>Title: {{post.title}}</div>\n<div>Detail: {{post.body}}</div>\n"

/***/ }),

/***/ "./src/app/modules/posts/components/post/post.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/posts/components/post/post.component.ts ***!
  \*****************************************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
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

var PostComponent = /** @class */ (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PostComponent.prototype, "post", void 0);
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/modules/posts/components/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.css */ "./src/app/modules/posts/components/post/post.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  schedule-calendar works!\n</p>\n"

/***/ }),

/***/ "./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ScheduleCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleCalendarComponent", function() { return ScheduleCalendarComponent; });
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

var ScheduleCalendarComponent = /** @class */ (function () {
    function ScheduleCalendarComponent() {
    }
    ScheduleCalendarComponent.prototype.ngOnInit = function () {
    };
    ScheduleCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-calendar',
            template: __webpack_require__(/*! ./schedule-calendar.component.html */ "./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.html"),
            styles: [__webpack_require__(/*! ./schedule-calendar.component.scss */ "./src/app/modules/posts/components/schedule-calendar/schedule-calendar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleCalendarComponent);
    return ScheduleCalendarComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/containers/create-post-page/create-post-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/create-post-page/create-post-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-post-form (save)=\"onSave($event)\"></app-post-form>\r\n"

/***/ }),

/***/ "./src/app/modules/posts/containers/create-post-page/create-post-page.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/create-post-page/create-post-page.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/posts/containers/create-post-page/create-post-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/create-post-page/create-post-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CreatePostPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostPageComponent", function() { return CreatePostPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store */ "./src/app/modules/posts/store/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreatePostPageComponent = /** @class */ (function () {
    function CreatePostPageComponent(router, store) {
        this.router = router;
        this.store = store;
    }
    CreatePostPageComponent.prototype.ngOnInit = function () {
    };
    CreatePostPageComponent.prototype.onSave = function (post) {
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_1__["CreatePost"]({ post: post }));
    };
    CreatePostPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-post-page',
            template: __webpack_require__(/*! ./create-post-page.component.html */ "./src/app/modules/posts/containers/create-post-page/create-post-page.component.html"),
            styles: [__webpack_require__(/*! ./create-post-page.component.scss */ "./src/app/modules/posts/containers/create-post-page/create-post-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CreatePostPageComponent);
    return CreatePostPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/containers/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/posts/containers/index.ts ***!
  \***************************************************/
/*! exports provided: PostsPageComponent, PostDetailPageComponent, CreatePostPageComponent, SchedulePageComponent, containers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./posts-page/posts-page.component */ "./src/app/modules/posts/containers/posts-page/posts-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostsPageComponent", function() { return _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_0__["PostsPageComponent"]; });

/* harmony import */ var _post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post-detail-page/post-detail-page.component */ "./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostDetailPageComponent", function() { return _post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_1__["PostDetailPageComponent"]; });

/* harmony import */ var _create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./create-post-page/create-post-page.component */ "./src/app/modules/posts/containers/create-post-page/create-post-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostPageComponent", function() { return _create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_2__["CreatePostPageComponent"]; });

/* harmony import */ var _schedule_page_schedule_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schedule-page/schedule-page.component */ "./src/app/modules/posts/containers/schedule-page/schedule-page.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SchedulePageComponent", function() { return _schedule_page_schedule_page_component__WEBPACK_IMPORTED_MODULE_3__["SchedulePageComponent"]; });






var containers = [
    _posts_page_posts_page_component__WEBPACK_IMPORTED_MODULE_0__["PostsPageComponent"],
    _post_detail_page_post_detail_page_component__WEBPACK_IMPORTED_MODULE_1__["PostDetailPageComponent"],
    _create_post_page_create_post_page_component__WEBPACK_IMPORTED_MODULE_2__["CreatePostPageComponent"],
    _schedule_page_schedule_page_component__WEBPACK_IMPORTED_MODULE_3__["SchedulePageComponent"]
];


/***/ }),

/***/ "./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.css":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-post [post]=\"post$ | async\"></app-post>\r\n"

/***/ }),

/***/ "./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PostDetailPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostDetailPageComponent", function() { return PostDetailPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/modules/posts/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostDetailPageComponent = /** @class */ (function () {
    function PostDetailPageComponent(router, store) {
        this.router = router;
        this.store = store;
        this.post$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["selectPostDetail"]);
        this.loading$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["selectPostLoading"]);
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["GetPosts"]());
    }
    PostDetailPageComponent.prototype.ngOnInit = function () {
    };
    PostDetailPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post-detail-page',
            template: __webpack_require__(/*! ./post-detail-page.component.html */ "./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.html"),
            styles: [__webpack_require__(/*! ./post-detail-page.component.css */ "./src/app/modules/posts/containers/post-detail-page/post-detail-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PostDetailPageComponent);
    return PostDetailPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/containers/posts-page/posts-page.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/posts/containers/posts-page/posts-page.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-progress-bar *ngIf=\"loading$ | async\" mode=\"indeterminate\"></mat-progress-bar>\n\n<button mat-button routerLink=\"create\">Create new Post</button>\n\n<ng-container *ngIf=\"(posts$ | async).length > 0; else emptyInHere\">\n  <app-post-table [posts]=\"(posts$ | async)\"  (rowSelected)=\"onRowSelected($event)\"></app-post-table>\n</ng-container>\n\n<ng-template #emptyInHere>\n  <mat-spinner *ngIf=\"(loading$ | async)\" color=\"primary\" [diameter]=\"50\"></mat-spinner>\n  <app-lonely-in-here *ngIf=\"!(loading$ | async)\"\n                      subTitle=\"You don't have any posts yet.\"\n                      message=\"To get started click the button below to create your first post.\">\n  </app-lonely-in-here>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/modules/posts/containers/posts-page/posts-page.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/posts/containers/posts-page/posts-page.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/posts/containers/posts-page/posts-page.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/posts/containers/posts-page/posts-page.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PostsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsPageComponent", function() { return PostsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store */ "./src/app/modules/posts/store/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PostsPageComponent = /** @class */ (function () {
    function PostsPageComponent(router, store) {
        this.router = router;
        this.store = store;
        this.posts$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["selectAllPosts"]);
        this.loading$ = this.store.select(_store__WEBPACK_IMPORTED_MODULE_3__["selectPostLoading"]);
        this.store.dispatch(new _store__WEBPACK_IMPORTED_MODULE_3__["GetPosts"]());
    }
    PostsPageComponent.prototype.ngOnInit = function () {
    };
    PostsPageComponent.prototype.onRowSelected = function (post) {
        this.router.navigate(['posts/', post.id]);
    };
    PostsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts-page',
            template: __webpack_require__(/*! ./posts-page.component.html */ "./src/app/modules/posts/containers/posts-page/posts-page.component.html"),
            styles: [__webpack_require__(/*! ./posts-page.component.scss */ "./src/app/modules/posts/containers/posts-page/posts-page.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], PostsPageComponent);
    return PostsPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/containers/schedule-page/schedule-page.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/schedule-page/schedule-page.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  schedule-page works!\n</p>\n\n<app-schedule-calendar></app-schedule-calendar>"

/***/ }),

/***/ "./src/app/modules/posts/containers/schedule-page/schedule-page.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/posts/containers/schedule-page/schedule-page.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/posts/containers/schedule-page/schedule-page.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/posts/containers/schedule-page/schedule-page.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SchedulePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchedulePageComponent", function() { return SchedulePageComponent; });
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

var SchedulePageComponent = /** @class */ (function () {
    function SchedulePageComponent() {
    }
    SchedulePageComponent.prototype.ngOnInit = function () {
    };
    SchedulePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-page',
            template: __webpack_require__(/*! ./schedule-page.component.html */ "./src/app/modules/posts/containers/schedule-page/schedule-page.component.html"),
            styles: [__webpack_require__(/*! ./schedule-page.component.scss */ "./src/app/modules/posts/containers/schedule-page/schedule-page.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SchedulePageComponent);
    return SchedulePageComponent;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/posts/posts.module.ts ***!
  \***********************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store */ "./src/app/modules/posts/store/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services */ "./src/app/modules/posts/services/index.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components */ "./src/app/modules/posts/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./containers */ "./src/app/modules/posts/containers/index.ts");
/* harmony import */ var _posts_routing__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./posts.routing */ "./src/app/modules/posts/posts.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_posts_routing__WEBPACK_IMPORTED_MODULE_11__["routes"]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store__WEBPACK_IMPORTED_MODULE_7__["featureName"], _store__WEBPACK_IMPORTED_MODULE_7__["reducers"]),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forFeature(_store__WEBPACK_IMPORTED_MODULE_7__["effects"].slice()),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]
            ],
            declarations: _containers__WEBPACK_IMPORTED_MODULE_10__["containers"].concat(_components__WEBPACK_IMPORTED_MODULE_9__["components"]),
            providers: _services__WEBPACK_IMPORTED_MODULE_8__["services"].slice()
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ }),

/***/ "./src/app/modules/posts/posts.routing.ts":
/*!************************************************!*\
  !*** ./src/app/modules/posts/posts.routing.ts ***!
  \************************************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ "./src/app/modules/posts/containers/index.ts");

var routes = [
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["PostsPageComponent"]
    },
    {
        path: 'create',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["CreatePostPageComponent"],
        pathMatch: 'full'
    },
    {
        path: 'calendar',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["SchedulePageComponent"],
        pathMatch: 'full'
    },
    {
        path: ':id',
        component: _containers__WEBPACK_IMPORTED_MODULE_0__["PostDetailPageComponent"]
    }
];


/***/ }),

/***/ "./src/app/modules/posts/services/index.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/posts/services/index.ts ***!
  \*************************************************/
/*! exports provided: PostService, services */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var _post_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.service */ "./src/app/modules/posts/services/post.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return _post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"]; });



var services = [
    _post_service__WEBPACK_IMPORTED_MODULE_0__["PostService"]
];


/***/ }),

/***/ "./src/app/modules/posts/services/post.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/posts/services/post.service.ts ***!
  \********************************************************/
/*! exports provided: PostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostService", function() { return PostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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



var PostService = /** @class */ (function () {
    function PostService(http) {
        this.http = http;
    }
    PostService.prototype.getAll = function () {
        return this.http.get(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/posts");
    };
    PostService.prototype.getById = function (id) {
        return this.http.get(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/posts/" + id);
    };
    PostService.prototype.create = function (post) {
        return this.http.post(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/posts", post);
    };
    PostService.prototype.update = function (post) {
        return this.http.put(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/posts/" + post.id, post);
    };
    PostService.prototype.delete = function (id) {
        return this.http.delete(_app_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].rootApiUrl + "/posts/" + id);
    };
    PostService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PostService);
    return PostService;
}());



/***/ }),

/***/ "./src/app/modules/posts/store/actions/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/posts/store/actions/index.ts ***!
  \******************************************************/
/*! exports provided: GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_POST_BY_ID, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_FAILURE, CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, GetPosts, GetPostsSuccess, GetPostsFailure, GetPostById, GetPostByIdSuccess, GetPostByIdFailure, CreatePost, CreatePostSuccess, CreatePostFailure, UpdatePost, UpdatePostSuccess, UpdatePostFailure, DeletePost, DeletePostSuccess, DeletePostFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.action */ "./src/app/modules/posts/store/actions/post.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_FAILURE", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GET_POST_BY_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID_SUCCESS", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GET_POST_BY_ID_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID_FAILURE", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GET_POST_BY_ID_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_SUCCESS", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_FAILURE", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPosts", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GetPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostsSuccess", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GetPostsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostsFailure", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GetPostsFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostById", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GetPostById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostByIdSuccess", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GetPostByIdSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostByIdFailure", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["GetPostByIdFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePost", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["CreatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostSuccess", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["CreatePostSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostFailure", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["CreatePostFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePost", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["UpdatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePostSuccess", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["UpdatePostSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePostFailure", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["UpdatePostFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["DeletePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePostSuccess", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["DeletePostSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePostFailure", function() { return _post_action__WEBPACK_IMPORTED_MODULE_0__["DeletePostFailure"]; });




/***/ }),

/***/ "./src/app/modules/posts/store/actions/post.action.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/posts/store/actions/post.action.ts ***!
  \************************************************************/
/*! exports provided: GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_POST_BY_ID, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_FAILURE, CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, GetPosts, GetPostsSuccess, GetPostsFailure, GetPostById, GetPostByIdSuccess, GetPostByIdFailure, CreatePost, CreatePostSuccess, CreatePostFailure, UpdatePost, UpdatePostSuccess, UpdatePostFailure, DeletePost, DeletePostSuccess, DeletePostFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return GET_POSTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return GET_POSTS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_FAILURE", function() { return GET_POSTS_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID", function() { return GET_POST_BY_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID_SUCCESS", function() { return GET_POST_BY_ID_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID_FAILURE", function() { return GET_POST_BY_ID_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return CREATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_SUCCESS", function() { return CREATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_FAILURE", function() { return CREATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return UPDATE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return UPDATE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return UPDATE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return DELETE_POST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return DELETE_POST_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return DELETE_POST_FAILURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPosts", function() { return GetPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostsSuccess", function() { return GetPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostsFailure", function() { return GetPostsFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostById", function() { return GetPostById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostByIdSuccess", function() { return GetPostByIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPostByIdFailure", function() { return GetPostByIdFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePost", function() { return CreatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostSuccess", function() { return CreatePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePostFailure", function() { return CreatePostFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePost", function() { return UpdatePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostSuccess", function() { return UpdatePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePostFailure", function() { return UpdatePostFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return DeletePost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostSuccess", function() { return DeletePostSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletePostFailure", function() { return DeletePostFailure; });
var GET_POSTS = '[POSTS] Get Posts';
var GET_POSTS_SUCCESS = '[POSTS] Get Posts Success';
var GET_POSTS_FAILURE = '[POSTS] Get Posts Failure';
var GET_POST_BY_ID = '[POSTS] Get Post By Id';
var GET_POST_BY_ID_SUCCESS = '[POSTS] Get Post By Id Success';
var GET_POST_BY_ID_FAILURE = '[POSTS] Get Post By Id Failure';
var CREATE_POST = '[POSTS] Create Post';
var CREATE_POST_SUCCESS = '[POSTS] Create Post Success';
var CREATE_POST_FAILURE = '[POSTS] Create Post Failure';
var UPDATE_POST = '[POSTS] Update Post';
var UPDATE_POST_SUCCESS = '[POSTS] Update Post Success';
var UPDATE_POST_FAILURE = '[POSTS] Update Post Failure';
var DELETE_POST = '[POSTS] Delete Post';
var DELETE_POST_SUCCESS = '[POSTS] Delete Post Success';
var DELETE_POST_FAILURE = '[POSTS] Delete Post Failure';
var GetPosts = /** @class */ (function () {
    function GetPosts(payload) {
        this.payload = payload;
        this.type = GET_POSTS;
    }
    return GetPosts;
}());

var GetPostsSuccess = /** @class */ (function () {
    function GetPostsSuccess(payload) {
        this.payload = payload;
        this.type = GET_POSTS_SUCCESS;
    }
    return GetPostsSuccess;
}());

var GetPostsFailure = /** @class */ (function () {
    function GetPostsFailure(payload) {
        this.payload = payload;
        this.type = GET_POSTS_FAILURE;
    }
    return GetPostsFailure;
}());

var GetPostById = /** @class */ (function () {
    function GetPostById(payload) {
        this.payload = payload;
        this.type = GET_POST_BY_ID;
    }
    return GetPostById;
}());

var GetPostByIdSuccess = /** @class */ (function () {
    function GetPostByIdSuccess(payload) {
        this.payload = payload;
        this.type = GET_POST_BY_ID_SUCCESS;
    }
    return GetPostByIdSuccess;
}());

var GetPostByIdFailure = /** @class */ (function () {
    function GetPostByIdFailure(payload) {
        this.payload = payload;
        this.type = GET_POST_BY_ID_FAILURE;
    }
    return GetPostByIdFailure;
}());

var CreatePost = /** @class */ (function () {
    function CreatePost(payload) {
        this.payload = payload;
        this.type = CREATE_POST;
    }
    return CreatePost;
}());

var CreatePostSuccess = /** @class */ (function () {
    function CreatePostSuccess(payload) {
        this.payload = payload;
        this.type = CREATE_POST_SUCCESS;
    }
    return CreatePostSuccess;
}());

var CreatePostFailure = /** @class */ (function () {
    function CreatePostFailure(payload) {
        this.payload = payload;
        this.type = CREATE_POST_FAILURE;
    }
    return CreatePostFailure;
}());

var UpdatePost = /** @class */ (function () {
    function UpdatePost(payload) {
        this.payload = payload;
        this.type = UPDATE_POST;
    }
    return UpdatePost;
}());

var UpdatePostSuccess = /** @class */ (function () {
    function UpdatePostSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_POST_SUCCESS;
    }
    return UpdatePostSuccess;
}());

var UpdatePostFailure = /** @class */ (function () {
    function UpdatePostFailure(payload) {
        this.payload = payload;
        this.type = UPDATE_POST_FAILURE;
    }
    return UpdatePostFailure;
}());

var DeletePost = /** @class */ (function () {
    function DeletePost(payload) {
        this.payload = payload;
        this.type = DELETE_POST;
    }
    return DeletePost;
}());

var DeletePostSuccess = /** @class */ (function () {
    function DeletePostSuccess(payload) {
        this.payload = payload;
        this.type = DELETE_POST_SUCCESS;
    }
    return DeletePostSuccess;
}());

var DeletePostFailure = /** @class */ (function () {
    function DeletePostFailure(payload) {
        this.payload = payload;
        this.type = DELETE_POST_FAILURE;
    }
    return DeletePostFailure;
}());



/***/ }),

/***/ "./src/app/modules/posts/store/effects/index.ts":
/*!******************************************************!*\
  !*** ./src/app/modules/posts/store/effects/index.ts ***!
  \******************************************************/
/*! exports provided: effects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _post_effect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.effect */ "./src/app/modules/posts/store/effects/post.effect.ts");

var effects = [
    _post_effect__WEBPACK_IMPORTED_MODULE_0__["PostEffects"]
];


/***/ }),

/***/ "./src/app/modules/posts/store/effects/post.effect.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/posts/store/effects/post.effect.ts ***!
  \************************************************************/
/*! exports provided: PostEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostEffects", function() { return PostEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./src/app/modules/posts/services/index.ts");
/* harmony import */ var _actions_post_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/post.action */ "./src/app/modules/posts/store/actions/post.action.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PostEffects = /** @class */ (function () {
    function PostEffects(actions$, postService) {
        var _this = this;
        this.actions$ = actions$;
        this.postService = postService;
        this.getPosts = this.actions$.ofType(_actions_post_action__WEBPACK_IMPORTED_MODULE_5__["GET_POSTS"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function () {
            return _this.postService
                .getAll()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["GetPostsSuccess"]({ posts: response }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["GetPostsFailure"]({ error: error })); }));
        }));
        this.getPostById$ = this.actions$.ofType(_actions_post_action__WEBPACK_IMPORTED_MODULE_5__["GET_POST_BY_ID"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.postService
                .getById(payload.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (post) { return new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["GetPostByIdSuccess"]({ post: post }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["GetPostByIdFailure"]({ error: error })); }));
        }));
        this.createPost$ = this.actions$.ofType(_actions_post_action__WEBPACK_IMPORTED_MODULE_5__["CREATE_POST"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.postService
                .create(payload.post)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (post) { return new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["CreatePostSuccess"]({ post: post }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["CreatePostFailure"]({ error: error })); }));
        }));
        this.updatePost$ = this.actions$.ofType(_actions_post_action__WEBPACK_IMPORTED_MODULE_5__["UPDATE_POST"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.postService
                .update(payload.post)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (post) { return new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["UpdatePostSuccess"]({ post: post }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["UpdatePostFailure"]({ error: error })); }));
        }));
        this.deletePost$ = this.actions$.ofType(_actions_post_action__WEBPACK_IMPORTED_MODULE_5__["DELETE_POST"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (payload) {
            return _this.postService
                .delete(payload.id)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["DeletePostSuccess"](res); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_2__["of"])(new _actions_post_action__WEBPACK_IMPORTED_MODULE_5__["DeletePostFailure"]({ error: error })); }));
        }));
    }
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "getPosts", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "getPostById$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "createPost$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "updatePost$", void 0);
    __decorate([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Effect"])(),
        __metadata("design:type", Object)
    ], PostEffects.prototype, "deletePost$", void 0);
    PostEffects = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"],
            _services__WEBPACK_IMPORTED_MODULE_4__["PostService"]])
    ], PostEffects);
    return PostEffects;
}());



/***/ }),

/***/ "./src/app/modules/posts/store/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/posts/store/index.ts ***!
  \**********************************************/
/*! exports provided: effects, featureName, reducers, getFeatureState, getPostState, GET_POSTS, GET_POSTS_SUCCESS, GET_POSTS_FAILURE, GET_POST_BY_ID, GET_POST_BY_ID_SUCCESS, GET_POST_BY_ID_FAILURE, CREATE_POST, CREATE_POST_SUCCESS, CREATE_POST_FAILURE, UPDATE_POST, UPDATE_POST_SUCCESS, UPDATE_POST_FAILURE, DELETE_POST, DELETE_POST_SUCCESS, DELETE_POST_FAILURE, GetPosts, GetPostsSuccess, GetPostsFailure, GetPostById, GetPostByIdSuccess, GetPostByIdFailure, CreatePost, CreatePostSuccess, CreatePostFailure, UpdatePost, UpdatePostSuccess, UpdatePostFailure, DeletePost, DeletePostSuccess, DeletePostFailure, selectPostIds, selectPostEntities, selectAllPosts, selectTotalPosts, selectPostLoading, selectPostDetail, selectPostLoaded, selectPostError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ "./src/app/modules/posts/store/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POSTS_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POSTS_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST_BY_ID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST_BY_ID_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_POST_BY_ID_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GET_POST_BY_ID_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CREATE_POST_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_POST_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_POST_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_POST_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_POST_FAILURE", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DELETE_POST_FAILURE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPosts", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostsSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPostsSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostsFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPostsFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostById", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPostById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostByIdSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPostByIdSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GetPostByIdFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["GetPostByIdFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePost", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CreatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CreatePostSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreatePostFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["CreatePostFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePost", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdatePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePostSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdatePostSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdatePostFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["UpdatePostFailure"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePost", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeletePost"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePostSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeletePostSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DeletePostFailure", function() { return _actions__WEBPACK_IMPORTED_MODULE_0__["DeletePostFailure"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./effects */ "./src/app/modules/posts/store/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_1__["effects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/app/modules/posts/store/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostIds", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectPostIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostEntities", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectPostEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllPosts", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectAllPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotalPosts", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectTotalPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostLoading", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectPostLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostDetail", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectPostDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostLoaded", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectPostLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostError", function() { return _selectors__WEBPACK_IMPORTED_MODULE_2__["selectPostError"]; });

/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ "./src/app/modules/posts/store/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "featureName", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["featureName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getFeatureState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["getFeatureState"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getPostState", function() { return _reducers__WEBPACK_IMPORTED_MODULE_3__["getPostState"]; });







/***/ }),

/***/ "./src/app/modules/posts/store/reducers/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/posts/store/reducers/index.ts ***!
  \*******************************************************/
/*! exports provided: featureName, reducers, getFeatureState, getPostState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureName", function() { return featureName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFeatureState", function() { return getFeatureState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostState", function() { return getPostState; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _post_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./post.reducer */ "./src/app/modules/posts/store/reducers/post.reducer.ts");


var featureName = 'postState';
var reducers = {
    posts: _post_reducer__WEBPACK_IMPORTED_MODULE_1__["reducer"],
};
var getFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(featureName);
var getPostState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getFeatureState, function (state) { return state.posts; });


/***/ }),

/***/ "./src/app/modules/posts/store/reducers/post.reducer.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/posts/store/reducers/post.reducer.ts ***!
  \**************************************************************/
/*! exports provided: adapter, initialState, reducer, getPostLoading, getPostLoaded, getError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostLoading", function() { return getPostLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostLoaded", function() { return getPostLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getError", function() { return getError; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/fesm5/entity.js");
/* harmony import */ var _actions_post_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/post.action */ "./src/app/modules/posts/store/actions/post.action.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};


var adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
var initialState = adapter.getInitialState({
    loaded: false,
    loading: false,
    error: null
});
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["GET_POST_BY_ID"]:
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS"]: {
            return __assign({}, state, { loading: true, error: null });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_SUCCESS"]: {
            return adapter.addAll(action.payload.posts, __assign({}, state, { loaded: true, loading: false, error: null }));
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["GET_POSTS_FAILURE"]: {
            return __assign({}, state, { loading: false, loaded: false, error: action.payload.error });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["GET_POST_BY_ID_SUCCESS"]: {
            var update = { id: action.payload.post.id, changes: action.payload.post };
            return adapter.updateOne(update, __assign({}, state, { loading: false, loaded: true, error: null }));
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["GET_POST_BY_ID_FAILURE"]: {
            return __assign({}, state, { loading: false, loaded: false, error: action.payload.error });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST"]: {
            return __assign({}, state, { loading: true, error: null });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_SUCCESS"]: {
            return adapter.addOne(action.payload.post, __assign({}, state, { loading: false, error: null }));
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["CREATE_POST_FAILURE"]: {
            return __assign({}, state, { loading: false, error: action.payload.error });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST"]: {
            var update = { id: action.payload.post.id, changes: action.payload.post };
            return adapter.updateOne(update, __assign({}, state, { loading: true, error: null }));
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_SUCCESS"]: {
            return __assign({}, state, { loading: false, error: null });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["UPDATE_POST_FAILURE"]: {
            return __assign({}, state, { loading: false, error: action.payload.error });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST"]: {
            return __assign({}, state, { loading: true, error: null });
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_SUCCESS"]: {
            return adapter.removeOne(action.payload.id, __assign({}, state, { loading: false, error: null }));
        }
        case _actions_post_action__WEBPACK_IMPORTED_MODULE_1__["DELETE_POST_FAILURE"]: {
            return __assign({}, state, { loading: false, error: action.payload.error });
        }
        default: {
            return state;
        }
    }
}
var getPostLoading = function (state) { return state.loading; };
var getPostLoaded = function (state) { return state.loaded; };
var getError = function (state) { return state.error; };


/***/ }),

/***/ "./src/app/modules/posts/store/selectors/index.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/posts/store/selectors/index.ts ***!
  \********************************************************/
/*! exports provided: selectPostIds, selectPostEntities, selectAllPosts, selectTotalPosts, selectPostLoading, selectPostDetail, selectPostLoaded, selectPostError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _post_selector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./post.selector */ "./src/app/modules/posts/store/selectors/post.selector.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostIds", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectPostIds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostEntities", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectPostEntities"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectAllPosts", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectAllPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectTotalPosts", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectTotalPosts"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostLoading", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectPostLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostDetail", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectPostDetail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostLoaded", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectPostLoaded"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "selectPostError", function() { return _post_selector__WEBPACK_IMPORTED_MODULE_0__["selectPostError"]; });




/***/ }),

/***/ "./src/app/modules/posts/store/selectors/post.selector.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/posts/store/selectors/post.selector.ts ***!
  \****************************************************************/
/*! exports provided: selectPostIds, selectPostEntities, selectAllPosts, selectTotalPosts, selectPostLoading, selectPostDetail, selectPostLoaded, selectPostError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostIds", function() { return selectPostIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostEntities", function() { return selectPostEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllPosts", function() { return selectAllPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotalPosts", function() { return selectTotalPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostLoading", function() { return selectPostLoading; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostDetail", function() { return selectPostDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostLoaded", function() { return selectPostLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectPostError", function() { return selectPostError; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _app_core_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/core/store */ "./src/app/modules/core/store/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/app/modules/posts/store/reducers/index.ts");
/* harmony import */ var _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/post.reducer */ "./src/app/modules/posts/store/reducers/post.reducer.ts");




var selectPostIds = (_a = _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_3__["adapter"].getSelectors(_reducers__WEBPACK_IMPORTED_MODULE_2__["getPostState"]), _a.selectIds), selectPostEntities = _a.selectEntities, selectAllPosts = _a.selectAll, selectTotalPosts = _a.selectTotal;
var selectPostLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getPostState"], _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_3__["getPostLoading"]);
var selectPostDetail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectAllPosts, _app_core_store__WEBPACK_IMPORTED_MODULE_1__["selectRouterParams"], function (posts, routerParams) {
    console.log(routerParams);
    return posts[0];
});
var selectPostLoaded = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getPostState"], _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_3__["getPostLoaded"]);
var selectPostError = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(_reducers__WEBPACK_IMPORTED_MODULE_2__["getPostState"], _reducers_post_reducer__WEBPACK_IMPORTED_MODULE_3__["getError"]);
var _a;


/***/ })

}]);
//# sourceMappingURL=app-modules-posts-posts-module.js.map