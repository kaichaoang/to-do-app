(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/lMs":
/*!**************************************!*\
  !*** ./src/app/tasks/task.module.ts ***!
  \**************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/header/header.component */ "47fO");
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/main.component */ "EZYg");
/* harmony import */ var _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/task/task.component */ "P/MT");
/* harmony import */ var _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/tasks/tasks.component */ "4P2t");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "Cl7R");
/* harmony import */ var _services_tasks_storage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/tasks-storage.service */ "aGHT");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _reducers_tasks_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./reducers/tasks.reducer */ "G7nA");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ "fXoL");


















const MaterialComponents = [
    _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]
];
const routes = [
    {
        path: '',
        component: _components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"],
    }
];
class TaskModule {
}
TaskModule.ɵfac = function TaskModule_Factory(t) { return new (t || TaskModule)(); };
TaskModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineNgModule"]({ type: TaskModule });
TaskModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineInjector"]({ providers: [_services_tasks_storage_service__WEBPACK_IMPORTED_MODULE_7__["TasksStorageService"]], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreModule"].forRoot({
                tasks: _reducers_tasks_reducer__WEBPACK_IMPORTED_MODULE_9__["TaskReducer"],
            }),
            MaterialComponents
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵsetNgModuleScope"](TaskModule, { declarations: [_components_tasks_tasks_component__WEBPACK_IMPORTED_MODULE_5__["TasksComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _components_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _components_task_task_component__WEBPACK_IMPORTED_MODULE_4__["TaskComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_8__["StoreRootModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_13__["MatListModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_14__["MatCheckboxModule"]] }); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\angka\Desktop\to-do-app\to-do-app\src\main.ts */"zUnb");


/***/ }),

/***/ "47fO":
/*!*************************************************************!*\
  !*** ./src/app/tasks/components/header/header.component.ts ***!
  \*************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "EcEN");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tasks.actions */ "BiRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





//Component for the header, used for input when adding a new task
class HeaderComponent {
    constructor(store) {
        this.store = store;
    }
    //add a new task with default isEditing, isCompleted and image_url
    addTask() {
        if (this.newTaskDescription != '') {
            const task = {
                id: Object(uuid__WEBPACK_IMPORTED_MODULE_0__["v4"])(),
                text: this.newTaskDescription,
                isEditing: false,
                isCompleted: false,
                image_url: ''
            };
            this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__["addTask"]({ task: task }));
            //a way to reset task description
            this.newTaskDescription = '';
        }
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-tasks-header"]], inputs: { newTaskDescription: "newTaskDescription" }, decls: 4, vars: 1, consts: [[1, "header"], [1, "mat-display-3"], ["placeholder", "What needs to be done?", "autoFocus", "", 1, "new-task", 3, "ngModel", "ngModelChange", "keyup.enter"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "to do!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function HeaderComponent_Template_input_ngModelChange_3_listener($event) { return ctx.newTaskDescription = $event; })("keyup.enter", function HeaderComponent_Template_input_keyup_enter_3_listener() { return ctx.addTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.newTaskDescription);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], encapsulation: 2 });


/***/ }),

/***/ "4P2t":
/*!***********************************************************!*\
  !*** ./src/app/tasks/components/tasks/tasks.component.ts ***!
  \***********************************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ "47fO");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../main/main.component */ "EZYg");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer/footer.component */ "Cl7R");




//Component for the entire task app
class TasksComponent {
}
TasksComponent.ɵfac = function TasksComponent_Factory(t) { return new (t || TasksComponent)(); };
TasksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksComponent, selectors: [["app-tasks"]], decls: 4, vars: 0, consts: [[1, "taskapp"]], template: function TasksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-tasks-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-tasks-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-tasks-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], encapsulation: 2 });


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "BiRL":
/*!************************************************!*\
  !*** ./src/app/tasks/actions/tasks.actions.ts ***!
  \************************************************/
/*! exports provided: loadTasks, addTask, editTask, removeTask, completeAllTasks, clearTasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTasks", function() { return loadTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addTask", function() { return addTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editTask", function() { return editTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTask", function() { return removeTask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeAllTasks", function() { return completeAllTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearTasks", function() { return clearTasks; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");

// load all tasks, mainly used for init() call
const loadTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Tasks] Load Tasks', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// add a new task
const addTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Tasks] Add Task', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// edits a single task with the new TaskInterface object
const editTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Tasks] Edit Task', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// removes a single task with the given id
const removeTask = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Tasks] Delete Task', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// marks all tasks as completed
const completeAllTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Tasks] Completes All Task', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
// clear all tasks at once
const clearTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Tasks] Clear Tasks');


/***/ }),

/***/ "Cl7R":
/*!*************************************************************!*\
  !*** ./src/app/tasks/components/footer/footer.component.ts ***!
  \*************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/tasks.selectors */ "iGwk");
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/tasks.actions */ "BiRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







const _c0 = function (a0) { return { hidden: a0 }; };
//Component for the footer, consisting of task count and clearing all tasks at once
class FooterComponent {
    constructor(store) {
        this.store = store;
        this.noTasksClass$ = this.store.select(_selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__["selectAllTasks"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(tasks => tasks.length === 0));
        this.activeCount$ = this.store.select(_selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__["selectAllTasks"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(tasks => tasks.filter(task => !task.isCompleted).length));
        this.itemsLeftText$ = this.activeCount$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])(activeCount => `item${activeCount > 1 ? 's' : ''} uncompleted`));
    }
    //A way for user to clear all tasks, destructive operation
    clearAllTasks() {
        this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_2__["clearTasks"]());
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-tasks-footer"]], decls: 11, vars: 11, consts: [[1, "footer", 3, "ngClass"], [1, "task-count"], ["mat-raised-button", "", "color", "warn", 1, "clear-all-button", 3, "click"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FooterComponent_Template_button_click_9_listener() { return ctx.clearAllTasks(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Clear All");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](9, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 3, ctx.noTasksClass$)));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 5, ctx.activeCount$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 7, ctx.itemsLeftText$), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "EZYg":
/*!*********************************************************!*\
  !*** ./src/app/tasks/components/main/main.component.ts ***!
  \*********************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../selectors/tasks.selectors */ "iGwk");
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/tasks.actions */ "BiRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _services_tasks_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/tasks-storage.service */ "aGHT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../task/task.component */ "P/MT");








function MainComponent_app_tasks_task_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-tasks-task", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("setEditingId", function MainComponent_app_tasks_task_6_Template_app_tasks_task_setEditingId_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.setEditingId($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("task", task_r1)("isEditing", ctx_r0.editingId === task_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", task_r1.text, " ");
} }
//Component displaying all of the current tasks
class MainComponent {
    constructor(store, syncStorage) {
        this.store = store;
        this.syncStorage = syncStorage;
        this.editingId = null;
        //checks if every task is completed
        this.isAllTasksSelected$ = this.store.select(_selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__["selectAllTasks"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((tasks => tasks.every(task => task.isCompleted))));
        this.visibleTasks = this.store.select(_selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__["selectAllTasks"]);
        //initialises storage syncing
        this.syncStorage.init();
    }
    setEditingId(editingId) {
        this.editingId = editingId;
    }
    //function to mark all tasks as completed at once
    checkAllTasks(isCompleted) {
        const updatedTasks = [];
        var taskIds;
        this.store.select(_selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_1__["selectTaskIds"]).subscribe(x => taskIds = x);
        taskIds.forEach(task_id => {
            var editedTask = {
                id: task_id,
                changes: { isCompleted: isCompleted }
            };
            updatedTasks.push(editedTask);
        });
        this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_2__["completeAllTasks"]({ updates: updatedTasks }));
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_tasks_storage_service__WEBPACK_IMPORTED_MODULE_5__["TasksStorageService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-tasks-main"]], decls: 8, vars: 6, consts: [[1, "main"], ["id", "toggle-all", "type", "checkbox", 1, "toggle-all", 3, "checked", "change"], ["for", "toggle-all"], [1, "task-list"], [3, "task", "isEditing", "setEditingId", 4, "ngFor", "ngForOf"], [3, "task", "isEditing", "setEditingId"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function MainComponent_Template_input_change_1_listener($event) { return ctx.checkAllTasks($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Mark all as completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MainComponent_app_tasks_task_6_Template, 2, 3, "app-tasks-task", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("checked", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 2, ctx.isAllTasksSelected$));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](7, 4, ctx.visibleTasks));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _task_task_component__WEBPACK_IMPORTED_MODULE_7__["TaskComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], encapsulation: 2 });


/***/ }),

/***/ "G7nA":
/*!*************************************************!*\
  !*** ./src/app/tasks/reducers/tasks.reducer.ts ***!
  \*************************************************/
/*! exports provided: TaskReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskReducer", function() { return TaskReducer; });
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/tasks.actions */ "BiRL");
/* harmony import */ var _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/app-state.model */ "cKIv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(_models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["initialState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__["addTask"], (state, { task }) => {
    return _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["taskAdapter"].addOne(task, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__["editTask"], (state, { edit }) => {
    return _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["taskAdapter"].updateOne(edit, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__["removeTask"], (state, { id }) => {
    return _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["taskAdapter"].removeOne(id, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__["loadTasks"], (state, { tasks }) => {
    return _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["taskAdapter"].setAll(tasks, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__["completeAllTasks"], (state, { updates }) => {
    return _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["taskAdapter"].updateMany(updates, state);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_0__["clearTasks"], state => {
    return _models_app_state_model__WEBPACK_IMPORTED_MODULE_1__["taskAdapter"].removeAll(Object.assign(Object.assign({}, state), { selectedTaskId: null }));
}));
function TaskReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "P/MT":
/*!*********************************************************!*\
  !*** ./src/app/tasks/components/task/task.component.ts ***!
  \*********************************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../actions/tasks.actions */ "BiRL");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");








const _c0 = ["textInput"];
function TaskComponent_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.taskProps.image_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function TaskComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input", 12, 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function TaskComponent_ng_container_18_Template_input_keyup_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editText($event); })("keyup.enter", function TaskComponent_ng_container_18_Template_input_keyup_enter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.editTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_ng_container_18_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.editTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "done");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.editingText);
} }
const _c1 = function (a0) { return { editing: a0 }; };
//Component displaying each individual task
class TaskComponent {
    constructor(store) {
        this.store = store;
        this.setEditingIdEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editingText = '';
    }
    ngOnInit() {
        this.editingText = this.taskProps.text;
    }
    //A way to focus on text during editting mode
    ngOnChanges(changes) {
        if (changes.isEditingProps.currentValue) {
            setTimeout(() => {
                this.textInput.nativeElement.focus();
            }, 0);
        }
    }
    setTaskInEditMode() {
        this.setEditingIdEvent.emit(this.taskProps.id);
    }
    removeTask() {
        this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__["removeTask"]({ id: this.taskProps.id }));
    }
    //toggles the completion of a task
    toggleCompletion() {
        const completedTask = {
            id: this.taskProps.id,
            changes: { isCompleted: !this.taskProps.isCompleted }
        };
        this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__["editTask"]({ edit: completedTask }));
    }
    //capture only the final editted text
    editText(event) {
        const value = event.target.value;
        this.editingText = value;
    }
    //handle task editing, rollback to original state if given text is empty
    editTask() {
        if (this.editingText != '') {
            const editedTask = {
                id: this.taskProps.id,
                changes: { text: this.editingText, isEditing: false }
            };
            this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__["editTask"]({ edit: editedTask }));
            this.editingText = '';
        }
        this.setEditingIdEvent.emit(null);
    }
    //add or edit a given image, converts to url
    editImageUrl(event) {
        if (event.target.files) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                const taskWithImage = {
                    id: this.taskProps.id,
                    changes: { image_url: e.target.result }
                };
                this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_1__["editTask"]({ edit: taskWithImage }));
            };
        }
    }
}
TaskComponent.ɵfac = function TaskComponent_Factory(t) { return new (t || TaskComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"])); };
TaskComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskComponent, selectors: [["app-tasks-task"]], viewQuery: function TaskComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textInput = _t.first);
    } }, inputs: { taskProps: ["task", "taskProps"], isEditingProps: ["isEditing", "isEditingProps"] }, outputs: { setEditingIdEvent: "setEditingId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 20, vars: 8, consts: [[1, "task", 3, "ngClass"], [1, "view"], ["type", "checkbox", 1, "toggle", 3, "checked", "change"], ["class", "task-image", "alt", "No image", 3, "src", 4, "ngIf"], [3, "ngClass"], ["mat-mini-fab", "", "color", "warn", "aria-label", "delete", 1, "remove-task", 3, "click"], ["mat-mini-fab", "", "color", "primary", "aria-label", "upload-image", 1, "upload-image", 3, "click"], ["hidden", "", "type", "file", "id", "file", "accept", "image/gif,image/jpeg,image/jpg,image/png", 3, "change"], ["fileInput", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "edit", 1, "edit-task", 3, "click"], [4, "ngIf"], ["alt", "No image", 1, "task-image", 3, "src"], [1, "edit", 3, "value", "keyup", "keyup.enter"], ["textInput", ""], ["mat-mini-fab", "", "color", "primary", "aria-label", "edit", 1, "editting-mode", 3, "click"]], template: function TaskComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskComponent_Template_input_change_2_listener() { return ctx.toggleCompletion(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TaskComponent_img_4_Template, 1, 1, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_7_listener() { return ctx.removeTask(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "delete");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); return _r1.click(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TaskComponent_Template_input_change_13_listener($event) { return ctx.editImageUrl($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskComponent_Template_button_click_15_listener() { return ctx.setTaskInEditMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, TaskComponent_ng_container_18_Template, 6, 1, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.isEditingProps));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.taskProps.isCompleted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.taskProps.image_url == ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.taskProps.isCompleted ? "strikethrough" : "null");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.taskProps.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEditingProps);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"]], encapsulation: 2 });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class AppComponent {
    constructor() {
        this.title = 'app works!';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _tasks_task_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks/task.module */ "/lMs");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");






class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _tasks_task_module__WEBPACK_IMPORTED_MODULE_2__["TaskModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _tasks_task_module__WEBPACK_IMPORTED_MODULE_2__["TaskModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"]] }); })();


/***/ }),

/***/ "aGHT":
/*!*********************************************************!*\
  !*** ./src/app/tasks/services/tasks-storage.service.ts ***!
  \*********************************************************/
/*! exports provided: TASKS_LOCAL_STORAGE_KEY, TasksStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TASKS_LOCAL_STORAGE_KEY", function() { return TASKS_LOCAL_STORAGE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksStorageService", function() { return TasksStorageService; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "l7P3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../selectors/tasks.selectors */ "iGwk");
/* harmony import */ var _actions_tasks_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/tasks.actions */ "BiRL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");






const TASKS_LOCAL_STORAGE_KEY = 'task-key';
class TasksStorageService {
    constructor(store) {
        this.store = store;
        this.isInitialized = false;
    }
    init() {
        if (this.isInitialized) {
            return;
        }
        this.isInitialized = true;
        // loading of task entities from user local storage
        this.loadFromStorage();
        // saving into local storage
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["select"])(_selectors_tasks_selectors__WEBPACK_IMPORTED_MODULE_2__["tasksFeatureSelector"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(state => !!state)).subscribe(state => {
            localStorage.setItem(TASKS_LOCAL_STORAGE_KEY, JSON.stringify(state));
        });
        // load tasks from local storage, when storage changes
        window.addEventListener('storage', () => this.loadFromStorage());
    }
    //load entities from local storage, if exists
    loadFromStorage() {
        const storageState = localStorage.getItem(TASKS_LOCAL_STORAGE_KEY);
        if (storageState) {
            const taskEntities = JSON.parse(storageState)["entities"];
            const isEmpty = (object) => {
                for (var i in object) {
                    return false;
                }
                return true;
            };
            //prevent error from empty storage
            if (!isEmpty(taskEntities)) {
                this.store.dispatch(_actions_tasks_actions__WEBPACK_IMPORTED_MODULE_3__["loadTasks"]({
                    tasks: JSON.parse(JSON.stringify(Object.values(taskEntities)))
                }));
            }
        }
    }
}
TasksStorageService.ɵfac = function TasksStorageService_Factory(t) { return new (t || TasksStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["Store"])); };
TasksStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TasksStorageService, factory: TasksStorageService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "cKIv":
/*!*************************************************!*\
  !*** ./src/app/tasks/models/app-state.model.ts ***!
  \*************************************************/
/*! exports provided: taskAdapter, initialState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taskAdapter", function() { return taskAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "R0sL");

// create entity state adapter for tasks
const taskAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])();
const tasksDefaultState = {
    ids: [],
    entities: {},
};
const initialState = taskAdapter.getInitialState(tasksDefaultState);


/***/ }),

/***/ "iGwk":
/*!****************************************************!*\
  !*** ./src/app/tasks/selectors/tasks.selectors.ts ***!
  \****************************************************/
/*! exports provided: tasksFeatureSelector, selectTaskIds, selectTaskEntities, selectAllTasks, selectTaskTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tasksFeatureSelector", function() { return tasksFeatureSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTaskIds", function() { return selectTaskIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTaskEntities", function() { return selectTaskEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAllTasks", function() { return selectAllTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTaskTotal", function() { return selectTaskTotal; });
/* harmony import */ var _models_app_state_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/app-state.model */ "cKIv");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "l7P3");


const tasksFeatureSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createFeatureSelector"])('tasks');
// get the selectors
const { selectIds, selectEntities, selectAll, selectTotal, } = _models_app_state_model__WEBPACK_IMPORTED_MODULE_0__["taskAdapter"].getSelectors();
//obtain an array of task ids
const selectTaskIds = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(tasksFeatureSelector, selectIds);
//obtain dictionary of task entities
const selectTaskEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(tasksFeatureSelector, selectEntities);
//obtain an array of task entities
const selectAllTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(tasksFeatureSelector, selectAll);
//obtain the total number of task entities in store
const selectTaskTotal = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(tasksFeatureSelector, selectTotal);


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map