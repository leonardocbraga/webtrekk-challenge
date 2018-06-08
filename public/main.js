(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <h1>\n    {{title}}!!\n  </h1>\n  <nav class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\">\n          <a routerLink=\"create\" routerLinkActive=\"active\">\n            Add Costumers\n          </a>\n        </li>    \n      </ul>\n    </div>\n  </nav>\n  \n  <div class=\"container\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Welcome to Webtrekk';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _routerConfig__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routerConfig */ "./src/app/routerConfig.ts");
/* harmony import */ var _service_costumer_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/costumer.service */ "./src/app/service/costumer.service.ts");
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_index_index_component__WEBPACK_IMPORTED_MODULE_6__["IndexComponent"],
                _components_create_create_component__WEBPACK_IMPORTED_MODULE_7__["CreateComponent"],
                _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_8__["EditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routerConfig__WEBPACK_IMPORTED_MODULE_9__["appRoutes"]), _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            providers: [_service_costumer_service__WEBPACK_IMPORTED_MODULE_10__["CostumerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/create/create.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/create/create.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/create/create.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/create/create.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{ title }}\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Coin Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name />\n      </div>\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['name'].errors.required\">\n          Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Coin Price</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"price\" #price/>\n      </div>\n      <div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['price'].errors.required\">\n          Price is required.\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"addCoin(name.value, price.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Add</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/create/create.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/create/create.component.ts ***!
  \*******************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_costumer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../service/costumer.service */ "./src/app/service/costumer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(costumerservice, fb) {
        this.costumerservice = costumerservice;
        this.fb = fb;
        this.title = 'Add Costumer';
        this.createForm();
    }
    CreateComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            first_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            last_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    CreateComponent.prototype.addCoin = function (first_name, last_name) {
        this.costumerservice.addCostumer({ name: { first: first_name, last: last_name } });
    };
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/components/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/components/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_service_costumer_service__WEBPACK_IMPORTED_MODULE_1__["CostumerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/components/edit/edit.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/edit/edit.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/edit/edit.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/edit/edit.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    {{ title }}\n  </div>\n  <div class=\"panel-body\">\n    <form [formGroup]=\"angForm\" novalidate>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Coin Name</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"name\" #name [(ngModel)] = \"coin.name\"/>\n      </div>\n      <div *ngIf=\"angForm.controls['name'].invalid && (angForm.controls['name'].dirty || angForm.controls['name'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['name'].errors.required\">\n          Name is required.\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"col-md-4\">Coin Price</label>\n        <input type=\"text\" class=\"form-control\" formControlName=\"price\" #price [(ngModel)] = \"coin.price\" />\n      </div>\n      <div *ngIf=\"angForm.controls['price'].invalid && (angForm.controls['price'].dirty || angForm.controls['price'].touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"angForm.controls['price'].errors.required\">\n          Price is required.\n        </div>\n      </div>\n        <div class=\"form-group\">\n          <button (click)=\"updateCoin(name.value, price.value)\" [disabled]=\"angForm.pristine || angForm.invalid\" class=\"btn btn-primary\">Update</button>\n        </div>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/edit/edit.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/edit/edit.component.ts ***!
  \***************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_costumer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../service/costumer.service */ "./src/app/service/costumer.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, router, service, fb) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.fb = fb;
        this.title = 'Edit Costumer';
        this.createForm();
    }
    EditComponent.prototype.createForm = function () {
        this.angForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    EditComponent.prototype.updateCostumer = function (first_name, last_name) {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.service.updateCostumer({ name: { first: first_name, last: last_name } }, params['id']);
            _this.router.navigate(['index']);
        });
    };
    EditComponent.prototype.deleteCostumer = function (id) {
        this.service.deleteCostumer(id).subscribe(function (res) {
            console.log('Deleted');
        });
    };
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.costumer = _this.service.editCostumer(params['id']).subscribe(function (res) {
                _this.costumer = res;
            });
        });
    };
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/components/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/components/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _service_costumer_service__WEBPACK_IMPORTED_MODULE_2__["CostumerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/components/index/index.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/index/index.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/index/index.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/index/index.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-hover\">\n  <thead>\n  <tr>\n      <td>Coin Name</td>\n      <td>Coin Price</td>\n      <td colspan=\"2\">Actions</td>\n  </tr>\n  </thead>\n\n  <tbody>\n      <tr *ngFor=\"let coin of coins\">\n          <td>{{ coin.name }}</td>\n          <td>{{ coin.price }}</td>\n          <td><a [routerLink]=\"['/edit', coin._id]\" class=\"btn btn-primary\">Edit</a></td>\n          <td><button (click)=\"deleteCoin(coin._id)\"  class=\"btn btn-danger\">Delete</button></td>\n      </tr>\n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/components/index/index.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/index/index.component.ts ***!
  \*****************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var _service_costumer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../service/costumer.service */ "./src/app/service/costumer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var IndexComponent = /** @class */ (function () {
    function IndexComponent(http, service) {
        this.http = http;
        this.service = service;
    }
    IndexComponent.prototype.ngOnInit = function () {
        this.getCostumers();
    };
    IndexComponent.prototype.getCostumers = function () {
        var _this = this;
        this.service.getCostumers().subscribe(function (res) {
            _this.costumers = res;
        });
    };
    IndexComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/components/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/components/index/index.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _service_costumer_service__WEBPACK_IMPORTED_MODULE_0__["CostumerService"]])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/routerConfig.ts":
/*!*********************************!*\
  !*** ./src/app/routerConfig.ts ***!
  \*********************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/create/create.component */ "./src/app/components/create/create.component.ts");
/* harmony import */ var _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/edit/edit.component */ "./src/app/components/edit/edit.component.ts");
/* harmony import */ var _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/index/index.component */ "./src/app/components/index/index.component.ts");



var appRoutes = [
    { path: 'create',
        component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_0__["CreateComponent"]
    },
    {
        path: 'edit/:id',
        component: _components_edit_edit_component__WEBPACK_IMPORTED_MODULE_1__["EditComponent"]
    },
    { path: 'index',
        component: _components_index_index_component__WEBPACK_IMPORTED_MODULE_2__["IndexComponent"]
    }
];


/***/ }),

/***/ "./src/app/service/costumer.service.ts":
/*!*********************************************!*\
  !*** ./src/app/service/costumer.service.ts ***!
  \*********************************************/
/*! exports provided: CostumerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CostumerService", function() { return CostumerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CostumerService = /** @class */ (function () {
    function CostumerService(http) {
        this.http = http;
    }
    CostumerService.prototype.addCostumer = function (costumer) {
        var uri = 'http://localhost:8080/costumers/add';
        this
            .http
            .post(uri, costumer)
            .subscribe(function (res) {
            return console.log('Done');
        });
    };
    CostumerService.prototype.getCostumers = function () {
        var uri = 'http://localhost:8080/costumers';
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    CostumerService.prototype.editCostumer = function (id) {
        var uri = 'http://localhost:8080/costumers/edit/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    CostumerService.prototype.updateCostumer = function (costumer, id) {
        var uri = 'http://localhost:8080/costumers/update/' + id;
        this
            .http
            .post(uri, costumer)
            .subscribe(function (res) { return console.log('Done'); });
    };
    CostumerService.prototype.deleteCostumer = function (id) {
        var uri = 'http://localhost:8080/costumers/delete/' + id;
        return this
            .http
            .get(uri)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            return res;
        }));
    };
    CostumerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CostumerService);
    return CostumerService;
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
    production: false
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

module.exports = __webpack_require__(/*! /home/t0665148/Documents/git/webtrekk-challenge/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map