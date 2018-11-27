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
		var e = new Error("Cannot find module '" + req + "'");
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"country-wrap\">\n  <div>\n    Gas\n    <input type=\"text\"  [value]=\"gas\" (input)=\"gas = $event.target.value\" />\n    Oil\n    <input type=\"text\"  [value]=\"oil\" (input)=\"oil = $event.target.value\" />\n    Cooling Liquid\n    <input type=\"text\"  [value]=\"coolingLiquid\" (input)=\"coolingLiquid = $event.target.value\" />\n  </div>\n  <div>\n    <button (click)=\"isKeyIn = true\" >Put The Key In!</button>\n    <button (click)=\"ignite()\"  [disabled]=\"isKeyIn === false\" >Ignite!</button>\n    <button (click)=\"start()\" [disabled]=\"!isKeyIn || !ignited\" >Move The Car!</button>\n    <button (click)=\"stop()\" [disabled]=\"!isKeyIn || !ignited\">Stop The Car!</button>\n  </div>\n\t<div class=\"sun\"></div>\n\t<div class=\"grass\"></div>\n\t<div class=\"street\">\n\t\t<div class=\"car\" [ngClass]=\"{'running' : isRunning}\" >\n\t\t<div class=\"car-body\">\n\t\t\t<div class=\"car-top-back\">\n\t\t\t\t<div class=\"back-curve\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"car-gate\"></div>\n\t\t\t<div class=\"car-top-front\">\n\t\t\t\t<div class=\"wind-sheild\"></div>\n\t\t\t</div>\n\t\t\t<div class=\"bonet-front\"></div>\n\t\t\t<div class=\"stepney\"></div>\n\t\t</div>\n\t\t<div class=\"boundary-tyre-cover\">\n\t\t\t<div class=\"boundary-tyre-cover-back-bottom\"></div>\n\t\t\t<div class=\"boundary-tyre-cover-inner\"></div>\n\t\t</div>\n\t\t<div class=\"tyre-cover-front\">\n\t\t\t<div class=\"boundary-tyre-cover-inner-front\"></div>\n\t\t</div>\n\t\t<div class=\"base-axcel\">\n\n\t\t</div>\n\t\t<div class=\"front-bumper\"></div>\n\t\t<div class=\"tyre\" [ngClass]=\"{'running' : isRunning}\">\n\t\t\t<div class=\"gap\"></div>\n\t\t</div>\n\t\t<div class=\"tyre front\" [ngClass]=\"{'running' : isRunning}\">\n\t\t\t<div class=\"gap\"></div>\n\t\t</div>\n\t\t<div class=\"car-shadow\"></div>\n\t</div>\n\t</div>\n\t<div class=\"street-stripe\"></div>\n\t<div class=\"hill\">\n\t</div>\n\n</div>\n"

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
        this.title = "car-runner";
        this.ignited = false;
        this.isRunning = false;
        this.gas = 0;
        this.oil = 0;
        this.coolingLiquid = 0;
        this.isKeyIn = false;
    }
    AppComponent.prototype.ignite = function () {
        if (!this.isKeyIn ||
            this.gas === 0 ||
            this.oil === 0 ||
            this.coolingLiquid === 0) {
            alert("This car can't start! Probably there's no gas or oil!");
        }
        else {
            this.ignited = true;
        }
    };
    AppComponent.prototype.start = function () {
        var _this = this;
        if (this.ignited && this.gas > 0 && this.oil > 0) {
            this.isRunning = true;
        }
        else {
            this.ignited = false;
            alert("OOps we run out of fuel or oil!");
        }
        this.runningInterval = setInterval(function () {
            if (_this.isRunning) {
                _this.gas = _this.gas - 1;
                _this.oil = _this.oil - 0.01;
                // stop the car if run out of gas or oil
                if (_this.gas === 0 || _this.oil === 0) {
                    _this.ignited = false;
                    _this.isRunning = false;
                    _this.runningInterval = undefined;
                }
            }
        }, 1000);
    };
    AppComponent.prototype.stop = function () {
        this.runningInterval = undefined;
        this.isRunning = false;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-root",
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/tamas/Projects/car-runner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map