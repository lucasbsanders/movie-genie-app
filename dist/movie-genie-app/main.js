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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _genierec_genierec_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./genierec/genierec.component */ "./src/app/genierec/genierec.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/archive/archive.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");










var routes = [
    //{ path: '', redirectTo: '/land', pathMatch: 'full' },
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"] },
    { path: 'home', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'rec', component: _genierec_genierec_component__WEBPACK_IMPORTED_MODULE_5__["GenieRecComponent"] },
    { path: 'login', component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_6__["LoginFormComponent"] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
    { path: 'archive', component: _archive_archive_component__WEBPACK_IMPORTED_MODULE_8__["ArchiveComponent"] },
    { path: 'reg', component: _register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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

module.exports = "<router-outlet></router-outlet>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'movie-genie-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/landing/landing.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _genierec_genierec_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./genierec/genierec.component */ "./src/app/genierec/genierec.component.ts");
/* harmony import */ var _back_logout_back_logout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./back-logout/back-logout.component */ "./src/app/back-logout/back-logout.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _archive_archive_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./archive/archive.component */ "./src/app/archive/archive.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _movies_movies_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movies/movies.component */ "./src/app/movies/movies.component.ts");
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_4__["LandingComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _genierec_genierec_component__WEBPACK_IMPORTED_MODULE_6__["GenieRecComponent"],
                _back_logout_back_logout_component__WEBPACK_IMPORTED_MODULE_7__["BackLogoutComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_8__["LoginFormComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _archive_archive_component__WEBPACK_IMPORTED_MODULE_12__["ArchiveComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_14__["MovieComponent"],
                _movies_movies_component__WEBPACK_IMPORTED_MODULE_15__["MoviesComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/archive/archive.component.css":
/*!***********************************************!*\
  !*** ./src/app/archive/archive.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-columns{\n  background-color: #fcdebe;\n  padding: 3em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXJjaGl2ZS9hcmNoaXZlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXJjaGl2ZS9hcmNoaXZlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1jb2x1bW5ze1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNkZWJlO1xuICBwYWRkaW5nOiAzZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/archive/archive.component.html":
/*!************************************************!*\
  !*** ./src/app/archive/archive.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card-columns\">\n        <app-movies></app-movies>\n  </div>\n</div>\n\n<app-back-logout></app-back-logout>\n"

/***/ }),

/***/ "./src/app/archive/archive.component.ts":
/*!**********************************************!*\
  !*** ./src/app/archive/archive.component.ts ***!
  \**********************************************/
/*! exports provided: ArchiveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArchiveComponent", function() { return ArchiveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var ArchiveComponent = /** @class */ (function () {
    function ArchiveComponent(movieService) {
        this.movieService = movieService;
    }
    ArchiveComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    ArchiveComponent.prototype.getMovies = function () {
        this.movies = this.movieService.getMovies();
    };
    ArchiveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-archive',
            template: __webpack_require__(/*! ./archive.component.html */ "./src/app/archive/archive.component.html"),
            styles: [__webpack_require__(/*! ./archive.component.css */ "./src/app/archive/archive.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], ArchiveComponent);
    return ArchiveComponent;
}());



/***/ }),

/***/ "./src/app/back-logout/back-logout.component.css":
/*!*******************************************************!*\
  !*** ./src/app/back-logout/back-logout.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2stbG9nb3V0L2JhY2stbG9nb3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/back-logout/back-logout.component.html":
/*!********************************************************!*\
  !*** ./src/app/back-logout/back-logout.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"goBack()\">Back</button>\n        <a routerLink=\"/\">\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"logOut()\">Log Out</button>\n        </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/back-logout/back-logout.component.ts":
/*!******************************************************!*\
  !*** ./src/app/back-logout/back-logout.component.ts ***!
  \******************************************************/
/*! exports provided: BackLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackLogoutComponent", function() { return BackLogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var BackLogoutComponent = /** @class */ (function () {
    function BackLogoutComponent(location) {
        this.location = location;
    }
    BackLogoutComponent.prototype.ngOnInit = function () {
    };
    BackLogoutComponent.prototype.goBack = function () {
        this.location.back();
    };
    BackLogoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-back-logout',
            template: __webpack_require__(/*! ./back-logout.component.html */ "./src/app/back-logout/back-logout.component.html"),
            styles: [__webpack_require__(/*! ./back-logout.component.css */ "./src/app/back-logout/back-logout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], BackLogoutComponent);
    return BackLogoutComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card{\n  display: inline-block;\n}\n\n.card-center{\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmR7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmNhcmQtY2VudGVye1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <a routerLink=\"/rec\">\n        <div class=\"card border-0 text-center\">\n          <img src=\"../../assets/img/genie-face.png\" class=\"card-img-top\" alt=\"genie-face.png\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" href=\"https://facebook.com\">Recommendation</h5>\n          </div>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-sm-4\">\n      <a routerLink=\"/profile\">\n        <div class=\"card border-0 text-center\">\n          <img src=\"../../assets/img/scroll-mini.png\" class=\"card-img-top\" alt=\"scroll-mini.png\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" href=\"https://facebook.com\">Profile</h5>\n          </div>\n        </div>\n      </a>\n    </div>\n    <div class=\"col-sm-4\">\n      <a routerLink=\"/archive\">\n        <div class=\"card border-0 text-center\">\n          <img src=\"../../assets/img/lamp.png\" class=\"card-img-top\" alt=\"lamp.png\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\" href=\"https://facebook.com\">Archive</h5>\n          </div>\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n<app-back-logout></app-back-logout>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/genierec/genierec.component.css":
/*!*************************************************!*\
  !*** ./src/app/genierec/genierec.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-center {\n  position: relative;\n  top: 40px;\n  padding-left: 3em;\n  padding-right: 3em;\n  padding-top: 1em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuaWVyZWMvZ2VuaWVyZWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9nZW5pZXJlYy9nZW5pZXJlYy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWNlbnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiA0MHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNlbTtcbiAgcGFkZGluZy1yaWdodDogM2VtO1xuICBwYWRkaW5nLXRvcDogMWVtO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/genierec/genierec.component.html":
/*!**************************************************!*\
  !*** ./src/app/genierec/genierec.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card border-0 text-center\">\n        <img src=\"../../assets/img/genie.png\" class=\"card-img-top\" alt=\"genie.png\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Jeanni the Genie</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card border-0 text-center\">\n        <img src=\"../../assets/img/speech-bubble.png\" class=\"card-img\" alt=\"speech-bubble.png\">\n        <div class=\"card-img-overlay\">\n          <div class=\"vertical-center\">\n            <p class=\"card-text\">I recommend you watch:</p>\n            <app-movie></app-movie>\n            <p class=\"card-text\">Come back when you've seen it!</p>\n          </div>\n        </div>\n      </div>\n      <div style=\"padding-left: 4em\">\n          <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"archive(this.movie)\">Seen it!</button>\n      </div>\n      <div style=\"padding-top: 1em; padding-left: 4em;\">\n          <p>Clicking \"Seen it!\" will add the movie to your archive, so I won't recommended it again. You can always edit movies in your archive.</p>\n      </div>\n    </div>\n  </div>\n</div>\n<app-back-logout></app-back-logout>\n"

/***/ }),

/***/ "./src/app/genierec/genierec.component.ts":
/*!************************************************!*\
  !*** ./src/app/genierec/genierec.component.ts ***!
  \************************************************/
/*! exports provided: GenieRecComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenieRecComponent", function() { return GenieRecComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var GenieRecComponent = /** @class */ (function () {
    function GenieRecComponent(userService) {
        this.userService = userService;
    }
    GenieRecComponent.prototype.ngOnInit = function () {
    };
    GenieRecComponent.prototype.getUser = function () {
        this.user = this.userService.getUser();
    };
    GenieRecComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-genierec',
            template: __webpack_require__(/*! ./genierec.component.html */ "./src/app/genierec/genierec.component.html"),
            styles: [__webpack_require__(/*! ./genierec.component.css */ "./src/app/genierec/genierec.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], GenieRecComponent);
    return GenieRecComponent;
}());



/***/ }),

/***/ "./src/app/landing/landing.component.css":
/*!***********************************************!*\
  !*** ./src/app/landing/landing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".speech {\n  position: relative;\n  padding: 6.5em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFuZGluZy9sYW5kaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNwZWVjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogNi41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/landing/landing.component.html":
/*!************************************************!*\
  !*** ./src/app/landing/landing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card border-0 text-center\">\n        <img src=\"../../assets/img/genie.png\" class=\"card-img-top\" alt=\"genie.png\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">Jeanni the Genie</h5>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\">\n      <div class=\"card border-0\">\n        <img src=\"../../assets/img/speech-bubble.png\" class=\"card-img\" alt=\"speech-bubble.png\">\n        <div class=\"card-img-overlay\">\n          <div class=\"speech\">\n            <h5 class=\"card-title\">Hi! I'm Jeanni, the Movie Genie!</h5>\n            <p class=\"card-text\">With my infinite movie knowledge, I'll recommend a movie to you (just one at a time, though!) based on machine analysis of your twitter feed.\n            <br><br>Be warned, I'm currently under construction!</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"container\">\n        <div style=\"padding-left: 4em\">\n          <a routerLink=\"/reg\">\n            <button type=\"button\" class=\"btn btn-primary\" (click)=\"this.register()\">Register Here</button>\n          </a>\n          <a routerLink=\"/login\">\n            <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"this.login()\">Log In</button>\n          </a>\n        </div>\n        <div style=\"padding-top: 2em; padding-left: 4em\">\n            <a href=\"https://www.youtube.com\">Privacy statement</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/landing/landing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
    }
    LandingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__(/*! ./landing.component.html */ "./src/app/landing/landing.component.html"),
            styles: [__webpack_require__(/*! ./landing.component.css */ "./src/app/landing/landing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".scroll {\n  background-image:\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Nyb2xsIHtcbiAgYmFja2dyb3VuZC1pbWFnZTpcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <p class=\"lead\">Log in to see if Jeanni has a new movie recommendation!</p>\n    <hr class=\"my-4\">\n    <form>\n      <div class=\"form-group row\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Username</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Username\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n        </div>\n      </div>\n\n      <div class=\"form-group row\" style=\"padding-top: 2em;\">\n        <div class=\"col-sm-10\">\n          <a routerLink=\"/home\">\n            <button type=\"submit\" class=\"btn btn-primary\">Confirm</button>\n          </a>\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"goBack()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(userService, location) {
        this.userService = userService;
        this.location = location;
    }
    LoginFormComponent.prototype.signup = function () {
        this.userService.addUser(this.user);
    };
    LoginFormComponent.prototype.goBack = function () {
        this.location.back();
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/mock-movies.ts":
/*!********************************!*\
  !*** ./src/app/mock-movies.ts ***!
  \********************************/
/*! exports provided: MOVIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVIES", function() { return MOVIES; });
var MOVIES = [
    { title: 'Titanic (1997)', description: 'James Cameron\'s "Titanic" is an epic, action-packed romance set against the ill-fated maiden voyage of the R.M.S. Titanic; the pride and joy of the White Star Line and, at the time, the largest moving object ever built.', poster: './movie-posters/titanic.png' },
    { title: 'Gattaca (1997)', description: 'The film presents a biopunk vision of a future society driven by eugenics where potential children are conceived through genetic selection to ensure they possess the best hereditary traits of their parents.[5] The film centers on Vincent Freeman, played by Hawke, who was conceived outside the eugenics program and struggles to overcome genetic discrimination to realize his dream of going into space. ', poster: '../movie-posters/gattaca.png' },
    { title: 'Spirited Away (2001)', description: 'Tells the story of Chihiro Ogino (Hiiragi), a sullen 10-year-old girl who, while moving to a new neighborhood, enters the world of Kami (spirits) of Japanese Shinto folklore', poster: '../movie-posters/spiritedaway.png' },
    { title: 'The Avengers (2012)', description: 'When Thor\'s evil brother, Loki (Tom Hiddleston), gains access to the unlimited power of the energy cube called the Tesseract, Nick Fury (Samuel L. Jackson), director of S.H.I.E.L.D., initiates a superhero recruitment effort to defeat the unprecedented threat to Earth', poster: '../movie-posters/avengers.png' }
];


/***/ }),

/***/ "./src/app/mock-users.ts":
/*!*******************************!*\
  !*** ./src/app/mock-users.ts ***!
  \*******************************/
/*! exports provided: USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
var USERS = [
    { username: 'Lucas', password: 'password0', twitter: 'lucasbs13' },
    { username: 'Ash', password: 'password1', twitter: 'asharibbb' },
    { username: 'Dr. Chu', password: 'password2', twitter: 'drchu' }
];


/***/ }),

/***/ "./src/app/movie.service.ts":
/*!**********************************!*\
  !*** ./src/app/movie.service.ts ***!
  \**********************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_movies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-movies */ "./src/app/mock-movies.ts");



var MovieService = /** @class */ (function () {
    function MovieService() {
    }
    MovieService.prototype.getMovies = function () {
        return _mock_movies__WEBPACK_IMPORTED_MODULE_2__["MOVIES"];
    };
    MovieService.prototype.getMovie = function () {
        return _mock_movies__WEBPACK_IMPORTED_MODULE_2__["MOVIES"][0];
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.css":
/*!*******************************************!*\
  !*** ./src/app/movie/movie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  background-color: rgba(0,0,0,0);\n  padding-left: 2em;\n  padding-right: 2em;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcbiAgcGFkZGluZy1sZWZ0OiAyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDJlbTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{movie.title}}</h5>\n    <p class=\"card-text\">{{movie.description}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var MovieComponent = /** @class */ (function () {
    function MovieComponent(movieService) {
        this.movieService = movieService;
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.getMovies();
        this.getMovie();
    };
    MovieComponent.prototype.getMovies = function () {
        this.movies = this.movieService.getMovies();
    };
    MovieComponent.prototype.getMovie = function () {
        this.movie = this.movieService.getMovie();
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.css */ "./src/app/movie/movie.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/movies/movies.component.css":
/*!*********************************************!*\
  !*** ./src/app/movies/movies.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vdmllcy9tb3ZpZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/movies/movies.component.html":
/*!**********************************************!*\
  !*** ./src/app/movies/movies.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li *ngFor=\"let movie of movies\">\n  <div class=\"card\">\n    <img class=\"card-img-top\" src=\"{{movie.poster}}\" alt=\"[movie poster]\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">{{movie.title}}</h5>\n      <p class=\"card-text\">{{movie.description}}</p>\n    </div>\n  </div>\n</li>\n"

/***/ }),

/***/ "./src/app/movies/movies.component.ts":
/*!********************************************!*\
  !*** ./src/app/movies/movies.component.ts ***!
  \********************************************/
/*! exports provided: MoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesComponent", function() { return MoviesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _movie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../movie.service */ "./src/app/movie.service.ts");



var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(movieService) {
        this.movieService = movieService;
    }
    MoviesComponent.prototype.ngOnInit = function () {
        this.getMovies();
    };
    MoviesComponent.prototype.getMovies = function () {
        this.movies = this.movieService.getMovies();
    };
    MoviesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-movies',
            template: __webpack_require__(/*! ./movies.component.html */ "./src/app/movies/movies.component.html"),
            styles: [__webpack_require__(/*! ./movies.component.css */ "./src/app/movies/movies.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_movie_service__WEBPACK_IMPORTED_MODULE_2__["MovieService"]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <form>\n      <div class=\"form-group row\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Username</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Username\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"inputEmail4\" class=\"col-sm-2 col-form-label\">Twitter</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Twitter\">\n        </div>\n      </div>\n      \n      <div class=\"form-group row\">\n        <div class=\"col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-primary\">Confirm</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<app-back-logout></app-back-logout>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.getUser();
    };
    ProfileComponent.prototype.getUser = function () {
        this.user = this.userService.getUser();
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <p class=\"lead\">Create a profile to get all of Jeannie's recommendations</p>\n    <hr class=\"my-4\">\n    <form>\n      <div class=\"form-group row\">\n        <label for=\"inputEmail3\" class=\"col-sm-2 col-form-label\">Username</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Username\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"inputPassword3\" class=\"col-sm-2 col-form-label\">Password</label>\n        <div class=\"col-sm-10\">\n          <input type=\"password\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Password\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <label for=\"inputEmail4\" class=\"col-sm-2 col-form-label\">Twitter</label>\n        <div class=\"col-sm-10\">\n          <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Twitter\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col-sm-10\">\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck1\">\n            <label class=\"form-check-label\" for=\"gridCheck1\">\n              Agree to terms and conditions\n            </label>\n          </div>\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-sm-10\">\n          <a routerLink=\"/home\">\n            <button type=\"submit\" class=\"btn btn-primary\">Confirm</button>\n          </a>\n          <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"goBack()\">Cancel</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(location) {
        this.location = location;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-users */ "./src/app/mock-users.ts");



var UserService = /** @class */ (function () {
    function UserService() {
        this.isLoggedIn = false;
    }
    UserService.prototype.getUser = function () {
        return _mock_users__WEBPACK_IMPORTED_MODULE_2__["USERS"][0];
    };
    UserService.prototype.getUsers = function () {
        return _mock_users__WEBPACK_IMPORTED_MODULE_2__["USERS"];
    };
    UserService.prototype.addUser = function (user) {
        //call add user api
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserService);
    return UserService;
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

module.exports = __webpack_require__(/*! /Users/lucas/Documents/dev/movie-genie-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map