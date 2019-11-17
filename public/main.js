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

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".row\r\n{\r\n    padding-top: 2vw\r\n}\r\n@media only screen and (min-width: 600px) {\r\n    .section\r\n    {\r\n        padding-right: 10vw \r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7Q0FDbkI7QUFDRDtJQUNJOztRQUVJLG1CQUFtQjtLQUN0QjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3dcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDJ2d1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjAwcHgpIHtcclxuICAgIC5zZWN0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTB2dyBcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n  <h1 class=\"light-green-text text-darken-3\">About Us</h1>\n  <div class=\"row\">\n    <div class=\"col s12 l8\">\n      <p class=\"flow-text\">\n      Lost and found box is a dedicated spot in public buildings \n      especially hotels or offices where people can go on to recover \n      lost items that may be found by other visitors. \n      </p>\n      <p class=\"flow-text\">\n      This website (lostfoundtn.com) also caters to the similar purpose. \n      Here, people who have lost an item can post about it. \n      In turn, people who have found back the item can post here, \n      which will fasttrack easy retrieval of articles.\n      This is an intiative of Tamil Society of Inventors and Ecofreaks.\n      </p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
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

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-image\r\n{\r\n    width:80%;\r\n}\r\n\r\n.close-chip\r\n{\r\n    cursor: pointer;\r\n    float: right;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    padding-left: 8px;\r\n    font-weight: 700;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    opacity: .5;\r\n}\r\n\r\n.custom-grid\r\n{\r\n    width:100%;\r\n    display: grid;\r\n    grid-template-columns: 35vw auto;\r\n}\r\n\r\n.custom-col\r\n{\r\n    display: inline-grid;\r\n}\r\n\r\n.close-chip:not(:disabled):not(.disabled):hover {\r\n    opacity: .75;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .custom-grid\r\n    {\r\n        grid-template-columns: auto;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0NBQ2I7O0FBRUQ7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7O0FBRUQ7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7Q0FDcEM7O0FBRUQ7O0lBRUkscUJBQXFCO0NBQ3hCOztBQUdEO0lBQ0ksYUFBYTtDQUNoQjs7QUFFRDtJQUNJOztRQUVJLDRCQUE0QjtLQUMvQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LWltYWdlXHJcbntcclxuICAgIHdpZHRoOjgwJTtcclxufVxyXG5cclxuLmNsb3NlLWNoaXBcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLmN1c3RvbS1ncmlkXHJcbntcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzNXZ3IGF1dG87XHJcbn1cclxuXHJcbi5jdXN0b20tY29sXHJcbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ncmlkO1xyXG59XHJcblxyXG5cclxuLmNsb3NlLWNoaXA6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogLjc1O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY3VzdG9tLWdyaWRcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-item/add-item.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-item/add-item.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\r\n    <div class=\"row\">\r\n    <div class=\"col s12 l5\">\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">bookmark</i>\r\n        <input type=\"text\" [(ngModel)]=\"item.title\" id=\"titleInput\" name=\"title\">\r\n        <label for=\"titleInput\">Title</label>\r\n        <span class=\"helper-text\">For example, Blue hand bag</span>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">assignment</i>\r\n        <textarea class=\"materialize-textarea\" [(ngModel)]=\"item.description\" id=\"descriptionInput\" name=\"description\"></textarea>\r\n        <label for=\"descriptionInput\">Description</label>\r\n        <span class=\"helper-text\">Describe the item here, include specifics such as color, reference number, etc. Avoid sensitive informations</span>\r\n      </div>\r\n      <div class=\"row\">\r\n      <div class=\"input-field col s6\">\r\n        <i class=\"material-icons prefix\">date_range</i>\r\n        <input type=\"date\"  [(ngModel)]=\"item.date\" id=\"dateInput\" name=\"date\">\r\n        <label for=\"dateInput\">Date</label>\r\n        <span class=\"helper-text\">Lost or Found Date</span>\r\n      </div>\r\n      <div class=\"input-field transparent col s4 offset-s1\">\r\n        <select name = \"lostOrFound\"  [(ngModel)]=\"item.lostOrFound\" class=\"browser-default light-green lighten-5\">\r\n            <option value=\"\" disabled selected>Lost or Found</option>\r\n            <option value=\"Lost\" class=\"red-text\">Lost</option>\r\n            <option value=\"Found\" class=\"green-text\">Found</option>\r\n          </select>\r\n      </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field transparent col s4\">\r\n          <select name = \"city\" (change)=\"resetAreas()\" [(ngModel)]=\"cityId\" class=\"browser-default light-green lighten-5\">\r\n            <option value=\"\" disabled selected>City</option>\r\n            <option *ngFor=\"let city of cities\" value=\"{{city._id}}\" class=\"\">{{city.name}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"input-field transparent col s4 offset-s1\">\r\n          <select name = \"location\"  [(ngModel)]=\"item.location._id\" class=\"browser-default light-green lighten-5\">\r\n            <option value=\"\" disabled selected>Area</option>\r\n            <option *ngFor=\"let area of areas\" value=\"{{area._id}}\" class=\"\">{{area.name}}</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12 l6\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 l3\">\r\n          <img src=\"{{imagePath}}\" alt=\"\" class=\"responsive-img display-image z-depth-1\">\r\n        </div>\r\n        <div class=\"input-field col s12 l5 valign-wrapper\">\r\n          <input type=\"file\" id=\"imageInput\" (change)=\"setImage($event)\" name=\"image\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field transparent col s4\">\r\n          <select name = \"category\"  [(ngModel)]=\"item.category\" class=\"browser-default light-green lighten-5\">\r\n              <option value=\"\" disabled selected>Category</option>\r\n              <option *ngFor=\"let category of categories\" value=\"{{category}}\" class=\"\">{{category}}</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"input-field col s6 offset-s1\" (keydown)=\"keyDown($event)\">\r\n          <i class=\"material-icons prefix\">loyalty</i>\r\n          <input type=\"text\" [(ngModel)]=\"tag\" id=\"tagsInput\" name=\"tags\">\r\n          <label for=\"tagsInput\">Tags</label>\r\n          <span class=\"helper-text\">Press Enter to add tag</span>        \r\n        </div>\r\n      </div>\r\n      <div class=\"center\">\r\n        <div *ngFor=\"let tag of item.tags; index as i\" class=\"chip\">{{tag}}<i class=\"close-chip material-icons\" (click)=\"removeTag(i)\">close</i></div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"center\">\r\n      <div class=\"btn\" (click)=\"cancel()\">Cancel</div>\r\n      <div class=\"btn light-green darken-3 white-text\" (click)=\"saveItem()\">Save</div>\r\n    </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(app, itemsService, router) {
        var _this = this;
        this.app = app;
        this.itemsService = itemsService;
        this.router = router;
        this.item = { lostOrFound: "Lost", category: "", tags: [], location: { _id: '' } };
        this.tag = '';
        this.imagePath = '../../assets/images/noImage.jpg';
        this.cityId = '';
        this.areaId = '';
        this.cities = [];
        this.areas = [];
        this.categories = [];
        this.saveItem = function () {
            var formData = new FormData();
            formData.append('item', JSON.stringify(_this.item));
            formData.append('image', _this.itemImage);
            _this.itemsService.addItem(formData)
                .subscribe(function (result) {
                if (result.saved) {
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
                    _this.app.makeToast(result.error.message);
                    console.log(result.error);
                }
            });
        };
        this.cancel = function () {
            _this.router.navigateByUrl('/dashboard');
        };
        this.setImage = function (event) {
            _this.itemImage = event.target.files[0];
            _this.renderImage();
        };
        this.addTag = function () {
            if (_this.tag) {
                _this.item.tags.push(_this.tag);
                _this.tag = '';
            }
        };
        this.removeTag = function (i) {
            console.log(i);
            _this.item.tags.splice(i, 1);
        };
        this.renderImage = function () {
            var fileReader = new FileReader();
            fileReader.onload = function (event) {
                _this.imagePath = event.target.result;
            };
            fileReader.readAsDataURL(_this.itemImage);
        };
        this.keyDown = function (event) {
            if (event.key === "Enter") {
                _this.addTag();
            }
        };
        this.resetAreas = function () {
            _this.areas = [];
            _this.itemsService.getAreas(_this.cityId)
                .subscribe(function (areas) {
                _this.areas = areas;
            });
        };
    }
    AddItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getCities()
            .subscribe(function (cities) { return _this.cities = cities; });
        this.itemsService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule, routingComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routingComponents", function() { return routingComponents; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-in/sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_user_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards/user.guard */ "./src/app/guards/user.guard.ts");
/* harmony import */ var src_app_item_item_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/item/item.component */ "./src/app/item/item.component.ts");
/* harmony import */ var src_app_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var src_app_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/forgot-password/forgot-password.component */ "./src/app/forgot-password/forgot-password.component.ts");
/* harmony import */ var src_app_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/reset-password/reset-password.component */ "./src/app/reset-password/reset-password.component.ts");
/* harmony import */ var src_app_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/terms-and-conditions/terms-and-conditions.component */ "./src/app/terms-and-conditions/terms-and-conditions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'aboutUs', component: src_app_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"] },
    { path: 'termsAndConditions', component: src_app_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_14__["TermsAndConditionsComponent"] },
    { path: 'signIn', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'signUp', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'forgotPassword', component: src_app_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'resetPassword/:userId/:resetToken', component: src_app_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'items', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] },
    { path: 'items/:lostOrFound', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] },
    { path: 'item/:itemId', component: src_app_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"], canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_9__["UserGuard"]] },
    { path: 'addItem', component: _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__["AddItemComponent"], canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_9__["UserGuard"]] },
    { path: 'dashboard', component: _dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], canActivate: [_guards_user_guard__WEBPACK_IMPORTED_MODULE_9__["UserGuard"]] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], src_app_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_11__["AboutUsComponent"], src_app_terms_and_conditions_terms_and_conditions_component__WEBPACK_IMPORTED_MODULE_14__["TermsAndConditionsComponent"], src_app_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_13__["ResetPasswordComponent"], src_app_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_12__["ForgotPasswordComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__["AddItemComponent"], src_app_item_item_component__WEBPACK_IMPORTED_MODULE_10__["ItemComponent"]];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#toastDiv {\r\n    display: none; /* Hidden by default. Visible on click */\r\n    min-width: 250px; /* Set a default minimum width */\r\n    margin-left: -125px; /* Divide value of min-width by 2 */\r\n    background-color: #333; /* Black background color */\r\n    color: #fff; /* White text color */\r\n    text-align: center; /* Centered text */\r\n    border-radius: 2px; /* Rounded borders */\r\n    padding: 16px; /* Padding */\r\n    position: fixed; /* Sit on top of the screen */\r\n    z-index: 999; /* Add a z-index if needed */\r\n    left: 50%; /* Center the snackbar */\r\n    bottom: 30px; /* 30px from the bottom */\r\n  }\r\n  \r\n  .show-toast {\r\n    display: block !important;\r\n    -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n    animation: fadein 0.5s, fadeout 0.5s 2.5s;\r\n  }\r\n  \r\n  @-webkit-keyframes fadein {\r\n    from {bottom: 0; opacity: 0;} \r\n    to {bottom: 30px; opacity: 1;}\r\n  }\r\n  \r\n  @keyframes fadein {\r\n    from {bottom: 0; opacity: 0;}\r\n    to {bottom: 30px; opacity: 1;}\r\n  }\r\n  \r\n  @-webkit-keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;} \r\n    to {bottom: 0; opacity: 0;}\r\n  }\r\n  \r\n  @keyframes fadeout {\r\n    from {bottom: 30px; opacity: 1;}\r\n    to {bottom: 0; opacity: 0;}\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjLENBQUMseUNBQXlDO0lBQ3hELGlCQUFpQixDQUFDLGlDQUFpQztJQUNuRCxvQkFBb0IsQ0FBQyxvQ0FBb0M7SUFDekQsdUJBQXVCLENBQUMsNEJBQTRCO0lBQ3BELFlBQVksQ0FBQyxzQkFBc0I7SUFDbkMsbUJBQW1CLENBQUMsbUJBQW1CO0lBQ3ZDLG1CQUFtQixDQUFDLHFCQUFxQjtJQUN6QyxjQUFjLENBQUMsYUFBYTtJQUM1QixnQkFBZ0IsQ0FBQyw4QkFBOEI7SUFDL0MsYUFBYSxDQUFDLDZCQUE2QjtJQUMzQyxVQUFVLENBQUMseUJBQXlCO0lBQ3BDLGFBQWEsQ0FBQywwQkFBMEI7R0FDekM7O0VBRUQ7SUFDRSwwQkFBMEI7SUFDMUIsa0RBQWtEO0lBQ2xELDBDQUEwQztHQUMzQzs7RUFFRDtJQUNFLE1BQU0sVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUM3QixJQUFJLGFBQWEsQ0FBQyxXQUFXLENBQUM7R0FDL0I7O0VBRUQ7SUFDRSxNQUFNLFVBQVUsQ0FBQyxXQUFXLENBQUM7SUFDN0IsSUFBSSxhQUFhLENBQUMsV0FBVyxDQUFDO0dBQy9COztFQUVEO0lBQ0UsTUFBTSxhQUFhLENBQUMsV0FBVyxDQUFDO0lBQ2hDLElBQUksVUFBVSxDQUFDLFdBQVcsQ0FBQztHQUM1Qjs7RUFFRDtJQUNFLE1BQU0sYUFBYSxDQUFDLFdBQVcsQ0FBQztJQUNoQyxJQUFJLFVBQVUsQ0FBQyxXQUFXLENBQUM7R0FDNUIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN0b2FzdERpdiB7XHJcbiAgICBkaXNwbGF5OiBub25lOyAvKiBIaWRkZW4gYnkgZGVmYXVsdC4gVmlzaWJsZSBvbiBjbGljayAqL1xyXG4gICAgbWluLXdpZHRoOiAyNTBweDsgLyogU2V0IGEgZGVmYXVsdCBtaW5pbXVtIHdpZHRoICovXHJcbiAgICBtYXJnaW4tbGVmdDogLTEyNXB4OyAvKiBEaXZpZGUgdmFsdWUgb2YgbWluLXdpZHRoIGJ5IDIgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7IC8qIEJsYWNrIGJhY2tncm91bmQgY29sb3IgKi9cclxuICAgIGNvbG9yOiAjZmZmOyAvKiBXaGl0ZSB0ZXh0IGNvbG9yICovXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIENlbnRlcmVkIHRleHQgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDsgLyogUm91bmRlZCBib3JkZXJzICovXHJcbiAgICBwYWRkaW5nOiAxNnB4OyAvKiBQYWRkaW5nICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFNpdCBvbiB0b3Agb2YgdGhlIHNjcmVlbiAqL1xyXG4gICAgei1pbmRleDogOTk5OyAvKiBBZGQgYSB6LWluZGV4IGlmIG5lZWRlZCAqL1xyXG4gICAgbGVmdDogNTAlOyAvKiBDZW50ZXIgdGhlIHNuYWNrYmFyICovXHJcbiAgICBib3R0b206IDMwcHg7IC8qIDMwcHggZnJvbSB0aGUgYm90dG9tICovXHJcbiAgfVxyXG4gIFxyXG4gIC5zaG93LXRvYXN0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDAuNXMsIGZhZGVvdXQgMC41cyAyLjVzO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlaW4gMC41cywgZmFkZW91dCAwLjVzIDIuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO30gXHJcbiAgICB0byB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlaW4ge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAwOyBvcGFjaXR5OiAwO31cclxuICAgIHRvIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fVxyXG4gIH1cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZW91dCB7XHJcbiAgICBmcm9tIHtib3R0b206IDMwcHg7IG9wYWNpdHk6IDE7fSBcclxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGZhZGVvdXQge1xyXG4gICAgZnJvbSB7Ym90dG9tOiAzMHB4OyBvcGFjaXR5OiAxO31cclxuICAgIHRvIHtib3R0b206IDA7IG9wYWNpdHk6IDA7fVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<div id=\"toastDiv\"></div>\r\n<app-footer></app-footer>\r\n"

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
        this.title = 'LAF';
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _items_items_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./items/items.module */ "./src/app/items/items.module.ts");
/* harmony import */ var _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _items_items_module__WEBPACK_IMPORTED_MODULE_7__["ItemsModule"],
                _dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_8__["DashboardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
            ],
            providers: [
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_items_service__WEBPACK_IMPORTED_MODULE_11__["ItemsService"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_9__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard-item/dashboard-item.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-item/dashboard-item.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-holder\r\n{\r\n    width:16.67%;\r\n    margin-left: 12.5%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.truncated\r\n{\r\n    max-width: 35vw;\r\n    padding-bottom: 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.custom-grid\r\n{\r\n    width:100%;\r\n    display: grid;\r\n    grid-template-columns: 35vw auto;\r\n}\r\n\r\n.custom-col\r\n{\r\n    display: inline-grid;\r\n}\r\n\r\n.resolve-btn{\r\n    margin-top: 1vw;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .image-holder\r\n    {\r\n        width: 70%;\r\n    }\r\n    .custom-grid\r\n    {\r\n        grid-template-columns: auto;\r\n    }\r\n    .category-tag\r\n    {\r\n        width:90%;\r\n        margin-bottom: 1vw;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1pdGVtL2Rhc2hib2FyZC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0I7O0FBRUQ7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7Q0FDcEM7O0FBRUQ7O0lBRUkscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0k7O1FBRUksV0FBVztLQUNkO0lBQ0Q7O1FBRUksNEJBQTRCO0tBQy9CO0lBQ0Q7O1FBRUksVUFBVTtRQUNWLG1CQUFtQjtLQUN0QjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1pdGVtL2Rhc2hib2FyZC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtaG9sZGVyXHJcbntcclxuICAgIHdpZHRoOjE2LjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnRydW5jYXRlZFxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDM1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jdXN0b20tZ3JpZFxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzV2dyBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG5cclxuLnJlc29sdmUtYnRue1xyXG4gICAgbWFyZ2luLXRvcDogMXZ3O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuaW1hZ2UtaG9sZGVyXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgIH1cclxuICAgIC5jdXN0b20tZ3JpZFxyXG4gICAge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeS10YWdcclxuICAgIHtcclxuICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXZ3O1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */"

/***/ }),

/***/ "./src/app/dashboard/dashboard-item/dashboard-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-item/dashboard-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"image-holder\">\r\n    <img src=\"{{'./image/' + item.imageUrl}}\" alt=\"\" class=\"responsive-img materialboxed\">\r\n  </div>\r\n  <div class=\"col s12 l6 offset-l1 valign-wrapper\">\r\n  <div>\r\n    <h3 class=\"light-green-text text-darken-3\">{{item.title}}</h3>\r\n    <div class=\"truncated\">{{item.description}}</div>\r\n    <a href=\"\" class=\"btn light-green lighten-5 z-depth-0 category-tag\">\r\n      <i class=\"material-icons left\">class</i>\r\n      {{item.category}}\r\n    </a>\r\n    <div *ngFor=\"let tag of item.tags\" class=\"chip right\">{{tag}}</div>\r\n    <div class=\"custom-grid\"> \r\n      <div class=\"custom-col\">\r\n        <h5><span class=\"green-text\" *ngIf=\"item.lostOrFound=='Found'\">Found</span>\r\n        <span class=\"red-text\" *ngIf=\"item.lostOrFound=='Lost'\">Lost </span>\r\n        <span class=\"grey-text\">&nbsp;&nbsp;{{months[item.date.getMonth()]}} {{item.date.getDate()}}, {{item.date.getFullYear()}}</span></h5>\r\n        <h6>{{item.location.name}}, {{item.location.city.name}}</h6>\r\n      </div>\r\n      <div class=\"custom-col\">\r\n        <button (click)=\"resolveItem()\" class=\"btn white-text light-green darken-3 resolve-btn\">Resolve</button>\r\n      </div>\r\n      </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"divider light-green darken-3\"></div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard-item/dashboard-item.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-item/dashboard-item.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardItemComponent", function() { return DashboardItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/item.model */ "./src/app/models/item.model.ts");
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardItemComponent = /** @class */ (function () {
    function DashboardItemComponent(app, itemServices) {
        this.app = app;
        this.itemServices = itemServices;
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }
    DashboardItemComponent.prototype.ngOnInit = function () {
        this.item.date = new Date(this.item.date);
    };
    DashboardItemComponent.prototype.resolveItem = function () {
        var _this = this;
        this.itemServices.resolveItem(this.item._id)
            .subscribe(function (result) {
            if (result.error) {
                _this.app.makeToast('Error processring request');
                console.log(result.error);
            }
            else {
                _this.app.makeToast('Resolved');
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _models_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], DashboardItemComponent.prototype, "item", void 0);
    DashboardItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-item',
            template: __webpack_require__(/*! ./dashboard-item.component.html */ "./src/app/dashboard/dashboard-item/dashboard-item.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-item.component.css */ "./src/app/dashboard/dashboard-item/dashboard-item.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], src_app_services_items_service__WEBPACK_IMPORTED_MODULE_2__["ItemsService"]])
    ], DashboardItemComponent);
    return DashboardItemComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _dashboard_item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-item/dashboard-item.component */ "./src/app/dashboard/dashboard-item/dashboard-item.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _dashboard_item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_3__["DashboardItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
        })
    ], DashboardModule);
    return DashboardModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\r\n  <h6 *ngIf=\"!items.length\" class=\"center grey-text\">Dashboard is empty. You can report about lost or found items from home page</h6>\r\n  <app-dashboard-item *ngFor=\"let item of items, index as i\" [item]=\"item\"></app-dashboard-item>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/dashboard/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/items.service */ "./src/app/services/items.service.ts");
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
    function DashboardComponent(itemsService) {
        this.itemsService = itemsService;
        this.items = mockItems;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getMyItems()
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var mockItems = [];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (max-width: 1000px) {\r\n    .l-screen\r\n    {\r\n        display: none;\r\n    }\r\n}\r\n\r\n@media only screen and (min-width: 1001px) {\r\n    .s-screen\r\n    {\r\n        display: none;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7O1FBRUksY0FBYztLQUNqQjtDQUNKOztBQUVEO0lBQ0k7O1FBRUksY0FBYztLQUNqQjtDQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC5sLXNjcmVlblxyXG4gICAge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMXB4KSB7XHJcbiAgICAucy1zY3JlZW5cclxuICAgIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer light-green darken-3\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 l3 offset-s1 offset-l0\">\r\n          <h4>Connect</h4>\r\n          <ul>\r\n          <li><a href=\"https://www.facebook.com/csie.in/\" target=\"_blank\" class=\"grey-text text-lighten-3\">Facebook</a></li>\r\n          <li><a href=\"https://www.instagram.com/csieindia/\" target=\"_blank\" class=\"grey-text text-lighten-3\">Instagram</a></li>\r\n          <li><a href=\"https://twitter.com/csifortheworld\" target=\"_blank\" class=\"grey-text text-lighten-3\">Twitter</a></li>\r\n          </ul>\r\n        </div>\r\n        <div class=\"col s12 l7 valign-wrapper\">\r\n          <img class=\"l-screen\" src=\"../../assets/images/tsie-logo.png\" alt=\"\">\r\n          <img class=\"s-screen\" src=\"../../assets/images/tsie-logo-mobile.png\" alt=\"\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"footer-copyright light-green darken-4\">\r\n    <div class=\"container center-align\">All rights reserved*</div>\r\n  </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
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

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hide\r\n{\r\n    display: none !important\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLHdCQUF3QjtDQUMzQiIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oaWRlXHJcbntcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n  <h2 class=\"light-green-text text-darken-3 center\">Password Recovery</h2>\n  <div id=\"emailEntry\">\n  <div class=\"row\">\n    <div class=\"col s12 l4 offset-l8 pull-l4\">\n      <div class=\"input-field\">\n        <i class=\"material-icons prefix\">email</i>\n        <input type=\"email\" [(ngModel)]=\"email\" id=\"emailInput\" name=\"email\">\n        <label for=\"emailInput\">Enter your email</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"center\">\n    <a class=\"btn\" routerLink=\"/signIn\">Cancel</a>\n    <div class=\"btn light-green darken-3 white-text\" (click)=\"sendPasswordRecoveryRequest()\">Submit</div>\n  </div>\n  </div>\n  <div class=\"hide\" id=\"messageDiv\">\n  <div class=\"row\">\n    <div class=\"col s12 l8 offset-l4 pull-l2\">\n      An email containing the password reset link has been sent to your registered email id. \n      Please follow the link to reset your password.\n    </div>\n  </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/forgot-password/forgot-password.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(app, userService) {
        var _this = this;
        this.app = app;
        this.userService = userService;
        this.email = '';
        this.sendPasswordRecoveryRequest = function () {
            _this.userService.requestPasswordReset(_this.email)
                .subscribe(function (result) {
                if (result.success) {
                    _this.showMessage();
                    _this.app.makeToast('Done');
                }
                else {
                    if (result.error.status === 400)
                        _this.app.makeToast('Email does not exist');
                    else
                        _this.app.makeToast("Couldn't process request");
                }
            });
        };
        this.showMessage = function () {
            document.getElementById("emailEntry").classList.add('hide');
            document.getElementById("messageDiv").classList.remove('hide');
        };
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/forgot-password/forgot-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.userService.isLoggedIn()) {
            this.router.navigateByUrl('/dashboard');
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/user.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/user.guard.ts ***!
  \**************************************/
/*! exports provided: UserGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserGuard", function() { return UserGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserGuard = /** @class */ (function () {
    function UserGuard(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    UserGuard.prototype.canActivate = function (route) {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        var forwardTo = '';
        for (var i = 0; i < route.url.length; i++) {
            if (i > 0)
                forwardTo += '/';
            forwardTo += "" + route.url[i].path;
        }
        this.router.navigateByUrl("/signIn?forwardTo=" + forwardTo);
        return false;
    };
    UserGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserGuard);
    return UserGuard;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section\r\n{\r\n  padding-top: 6vw;\r\n  padding-bottom: 4vw; \r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n  .row\r\n  {\r\n    display: grid\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFOztJQUVFLGFBQWE7R0FDZDtDQUNGIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvblxyXG57XHJcbiAgcGFkZGluZy10b3A6IDZ2dztcclxuICBwYWRkaW5nLWJvdHRvbTogNHZ3OyBcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5yb3dcclxuICB7XHJcbiAgICBkaXNwbGF5OiBncmlkXHJcbiAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"section container\">\r\n  <div class=\"row\">\r\n  <div class=\"col s12 l6 hide-on-med-and-down valign-wrapper\">\r\n    <img src=\"../../assets/images/itemBox.jpg\" alt=\"\" class=\"responsive-img\">  \r\n  </div>  \r\n  <div class = \"col s12 l3 offset-l2\">\r\n    <div class=\"card\">\r\n        <div class=\"card-image\">\r\n            <img class=\"responsive-img\" src =\"../../assets/images/lostItem.jpg\"/>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">Lost Something?</span>\r\n            <button routerLink=\"/addItem\" class=\"btn red grey-text text-lighten-3\">Describe your Item</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class = \"col s12 l3\">\r\n    <div class=\"card\">\r\n        <div class=\"card-image\">\r\n            <img class=\"responsive-img\" src =\"../../assets/images/foundItem.jpg\"/>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">Found Something?</span>\r\n            <button class=\"btn green grey-text text-lighten-3\" routerLink=\"/addItem\">Post an Item</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/item/item.component.css":
/*!*****************************************!*\
  !*** ./src/app/item/item.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-holder\r\n{\r\n    width:16.67%;\r\n    margin-left: 12.5%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.truncated\r\n{\r\n    max-width: 35vw;\r\n    padding-bottom: 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.custom-grid\r\n{\r\n    width:100%;\r\n    display: grid;\r\n    grid-template-columns: 35vw auto;\r\n}\r\n\r\n.custom-col\r\n{\r\n    display: inline-grid;\r\n}\r\n\r\n.claim-btn{\r\n    margin-top: 1vw;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .image-holder\r\n    {\r\n        width: 70%;\r\n    }\r\n    .custom-grid\r\n    {\r\n        grid-template-columns: auto;\r\n    }\r\n    .category-tag\r\n    {\r\n        width:90%;\r\n        margin-bottom: 1vw;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0I7O0FBRUQ7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7Q0FDcEM7O0FBRUQ7O0lBRUkscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0k7O1FBRUksV0FBVztLQUNkO0lBQ0Q7O1FBRUksNEJBQTRCO0tBQy9CO0lBQ0Q7O1FBRUksVUFBVTtRQUNWLG1CQUFtQjtLQUN0QjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtaG9sZGVyXHJcbntcclxuICAgIHdpZHRoOjE2LjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnRydW5jYXRlZFxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDM1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jdXN0b20tZ3JpZFxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzV2dyBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG5cclxuLmNsYWltLWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltYWdlLWhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWdyaWRcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnktdGFnXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/item/item.component.html":
/*!******************************************!*\
  !*** ./src/app/item/item.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container section\">\n  <h4 class=\"\">Claim Item</h4>\n  <div class=\"row\">\n    <div class=\"image-holder\">\n      <img src=\"{{'./image/' + item.imageUrl}}\" alt=\"\" class=\"responsive-img materialboxed\">\n    </div>\n    <div class=\"col s12 l6 offset-l1 valign-wrapper\">\n    <div>\n      <h3 class=\"light-green-text text-darken-3\">{{item.title}}</h3>\n      <div class=\"truncated\">{{item.description}}</div>\n      <a href=\"\" class=\"btn light-green lighten-5 z-depth-0 category-tag\">\n        <i class=\"material-icons left\">class</i>\n        {{item.category}}\n      </a>\n      <div *ngFor=\"let tag of item.tags\" class=\"chip right\">{{tag}}</div>\n      <div class=\"custom-grid\"> \n      <div class=\"custom-col\">\n        <h5><span class=\"green-text\" *ngIf=\"item.lostOrFound=='Found'\">Found</span>\n        <span class=\"red-text\" *ngIf=\"item.lostOrFound=='Lost'\">Lost </span>\n        <span class=\"grey-text\">&nbsp;&nbsp;{{months[item.date.getMonth()]}} {{item.date.getDate()}}, {{item.date.getFullYear()}}</span></h5>\n        <h6>{{item.location.name}}, {{item.location.city.name}}</h6>\n      </div>\n      <div class=\"custom-col\">\n      </div>\n      </div>\n    </div>\n    </div>\n  </div>\n  <div class=\"divider light-green darken-3\"></div>\n  <div class=\"input-field\">\n    <i class=\"material-icons prefix\">assignment</i>\n    <textarea [(ngModel)]=\"itemRequestMessage\" class=\"materialize-textarea\" id=\"messageInput\" name=\"message\"></textarea>\n    <label for=\"messageInput\">Message</label>\n    <span class=\"helper-text\">Leave a message for the person who user who posted the item so that they could contact you back</span>\n  </div>\n  <div>\n    <button class=\"btn right light-green darken-3 white-text\" (click)=\"sendItemRequest()\">Send</button>\n    <button class=\"btn right\" routerLink=\"/items\">Cancel</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/item/item.component.ts":
/*!****************************************!*\
  !*** ./src/app/item/item.component.ts ***!
  \****************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemComponent = /** @class */ (function () {
    function ItemComponent(router, app, itemsService, routes) {
        var _this = this;
        this.router = router;
        this.app = app;
        this.itemsService = itemsService;
        this.routes = routes;
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.setItem = function (itemId) {
            _this.itemsService.getItem(itemId)
                .subscribe(function (item) {
                _this.item = item;
                _this.item.date = new Date(_this.item.date);
                _this.setItemRequestAction();
            });
        };
        this.setItemRequestAction = function () {
            if (_this.item.lostOrFound === 'Found')
                _this.itemRequestAction = _this.sendClaimRequest;
            else
                _this.itemRequestAction = _this.sendFoundRequest;
        };
        this.sendClaimRequest = function () {
            return _this.itemsService.sendItemClaimRequest(_this.itemRequestMessage, _this.item._id);
        };
        this.sendFoundRequest = function () {
            return _this.itemsService.sendItemFoundRequest(_this.itemRequestMessage, _this.item._id);
        };
    }
    ItemComponent.prototype.sendItemRequest = function () {
        var _this = this;
        this.itemRequestAction()
            .subscribe(function (result) {
            if (result.error) {
                console.log(result.error);
                _this.app.makeToast("Couldn't process request");
            }
            else {
                _this.app.makeToast('Done');
                _this.router.navigateByUrl('items');
            }
        });
    };
    ItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) { return _this.setItem(params['itemId']); });
    };
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-view',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/items/filter/filter.component.css":
/*!***************************************************!*\
  !*** ./src/app/items/filter/filter.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container\r\n{\r\n    padding-top: 1vw;\r\n    padding-bottom: 2vw;\r\n}\r\n\r\n.filter-div \r\n{\r\n    position: fixed;\r\n    top: 64px;\r\n    width: 100%;\r\n    z-index: 5    \r\n}\r\n\r\n.hide\r\n{\r\n    display: none !important\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n   .row\r\n   {\r\n       display: block\r\n   }\r\n   .filter-div\r\n   {\r\n       top: 56px\r\n   }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7O0lBRUksZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixZQUFZO0lBQ1osVUFBVTtDQUNiOztBQUdEOztJQUVJLHdCQUF3QjtDQUMzQjs7QUFFRDtHQUNHOztPQUVJLGNBQWM7SUFDakI7R0FDRDs7T0FFSSxTQUFTO0lBQ1o7R0FDRCIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2ZpbHRlci9maWx0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDF2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAydnc7XHJcbn1cclxuXHJcbi5maWx0ZXItZGl2IFxyXG57XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDY0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDUgICAgXHJcbn1cclxuXHJcblxyXG4uaGlkZVxyXG57XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnRcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAucm93XHJcbiAgIHtcclxuICAgICAgIGRpc3BsYXk6IGJsb2NrXHJcbiAgIH1cclxuICAgLmZpbHRlci1kaXZcclxuICAge1xyXG4gICAgICAgdG9wOiA1NnB4XHJcbiAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/items/filter/filter.component.html":
/*!****************************************************!*\
  !*** ./src/app/items/filter/filter.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-div\">\n  <div class=\"center container\" id=\"openFilter\">\n      <a class=\"btn-floating waves-effect waves-light light-green darken-3 right\" (click)=\"openFilter()\"><i class=\"material-icons\">youtube_searched_for</i></a>\n  </div>\n  <div class=\"hide\" id=\"filter\">\n  <div class=\"container white\">\n    <h6 class =\"center\">Filters</h6>\n    <div class=\"row\">\n      <div class=\"input-field transparent col l3\">\n        <select name = \"lostOrFound\"  [(ngModel)]=\"filters.lostOrFound\" class=\"browser-default light-green lighten-5\">\n            <option value=\"\" class=\"grey-text\">Lost or Found</option>\n            <option value=\"Lost\" class=\"red-text\">Lost</option>\n            <option value=\"Found\" class=\"green-text\">Found</option>\n          </select>\n      </div>\n      <div class=\"input-field transparent col l3\">\n        <select name = \"category\"  [(ngModel)]=\"filters.category\" class=\"browser-default light-green lighten-5\">\n            <option value=\"\" selected>Category</option>\n            <option *ngFor=\"let category of categories\" value=\"{{category}}\" class=\"\">{{category}}</option>\n          </select>\n      </div>\n      <div class=\"input-field transparent col l4\">\n        <select name = \"city\" (change)=\"resetAreas()\" [(ngModel)]=\"cityId\" class=\"browser-default light-green lighten-5\">\n          <option value=\"\" disabled selected>City</option>\n          <option *ngFor=\"let city of cities\" value=\"{{city._id}}\" class=\"\">{{city.name}}</option>\n        </select>\n      </div>\n      <div class=\"input-field transparent col l4\">\n        <select name = \"location\"  [(ngModel)]=\"filters.location\" class=\"browser-default light-green lighten-5\">\n          <option value=\"\" class=\"grey-text\">Area</option>\n          <option *ngFor=\"let area of areas\" value=\"{{area._id}}\" class=\"\">{{area.name}}</option>\n        </select>\n      </div>\n      <div class=\"input-field col l3\">\n        <i class=\"material-icons prefix\">date_range</i>\n        <input type=\"date\"  [(ngModel)]=\"filters.date\" id=\"dateInput\" name=\"date\">\n        <label for=\"dateInput\">Date</label>\n      </div>\n    </div>\n    <div class=\"center\">\n      <div class=\"btn white\" (click)=\"closeFilter()\">Close</div>\n      <div class=\"btn light-green darken-3 white-text\" (click)=\"applyFilter()\">Apply</div>\n    </div>\n  </div>\n  <div class=\"divider light-green darken-3 hide-on-med-and-down\"></div>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/items/filter/filter.component.ts":
/*!**************************************************!*\
  !*** ./src/app/items/filter/filter.component.ts ***!
  \**************************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/items.service */ "./src/app/services/items.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = /** @class */ (function () {
    function FilterComponent(itemsService) {
        var _this = this;
        this.itemsService = itemsService;
        this.cityId = '';
        this.cities = [];
        this.areas = [];
        this.categories = [];
        this.applyFilter = function () {
            _this.applyFilters();
            _this.closeFilter();
        };
        this.resetAreas = function () {
            _this.areas = [];
            _this.itemsService.getAreas(_this.cityId)
                .subscribe(function (areas) {
                _this.areas = areas;
            });
        };
        this.closeFilter = function () {
            document.getElementById('filter').classList.add('hide');
            document.getElementById('openFilter').classList.remove('hide');
        };
        this.openFilter = function () {
            document.getElementById('filter').classList.remove('hide');
            document.getElementById('openFilter').classList.add('hide');
        };
    }
    FilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getCities()
            .subscribe(function (cities) { return _this.cities = cities; });
        this.itemsService.getCategories()
            .subscribe(function (categories) { return _this.categories = categories; });
    };
    FilterComponent.prototype.ngOnDestroy = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('filters'),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('applyFilters'),
        __metadata("design:type", Object)
    ], FilterComponent.prototype, "applyFilters", void 0);
    FilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'items-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/items/filter/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.component.css */ "./src/app/items/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/items/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/items/item/item.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-holder\r\n{\r\n    width:16.67%;\r\n    margin-left: 12.5%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.truncated\r\n{\r\n    max-width: 35vw;\r\n    padding-bottom: 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n\r\n.custom-grid\r\n{\r\n    width:100%;\r\n    display: grid;\r\n    grid-template-columns: 35vw auto;\r\n}\r\n\r\n.custom-col\r\n{\r\n    display: inline-grid;\r\n}\r\n\r\n.claim-btn{\r\n    margin-top: 1vw;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .image-holder\r\n    {\r\n        width: 70%;\r\n    }\r\n    .custom-grid\r\n    {\r\n        grid-template-columns: auto;\r\n    }\r\n    .category-tag\r\n    {\r\n        width:90%;\r\n        margin-bottom: 1vw;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0I7O0FBRUQ7O0lBRUksV0FBVztJQUNYLGNBQWM7SUFDZCxpQ0FBaUM7Q0FDcEM7O0FBRUQ7O0lBRUkscUJBQXFCO0NBQ3hCOztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0k7O1FBRUksV0FBVztLQUNkO0lBQ0Q7O1FBRUksNEJBQTRCO0tBQy9CO0lBQ0Q7O1FBRUksVUFBVTtRQUNWLG1CQUFtQjtLQUN0QjtHQUNGIiwiZmlsZSI6InNyYy9hcHAvaXRlbXMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1hZ2UtaG9sZGVyXHJcbntcclxuICAgIHdpZHRoOjE2LjY3JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMi41JTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxufVxyXG5cclxuLnRydW5jYXRlZFxyXG57XHJcbiAgICBtYXgtd2lkdGg6IDM1dnc7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbn1cclxuXHJcbi5jdXN0b20tZ3JpZFxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzV2dyBhdXRvO1xyXG59XHJcblxyXG4uY3VzdG9tLWNvbFxyXG57XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtZ3JpZDtcclxufVxyXG5cclxuLmNsYWltLWJ0bntcclxuICAgIG1hcmdpbi10b3A6IDF2dztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgLmltYWdlLWhvbGRlclxyXG4gICAge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWdyaWRcclxuICAgIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnktdGFnXHJcbiAgICB7XHJcbiAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDF2dztcclxuICAgIH1cclxuICB9XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/items/item/item.component.html":
/*!************************************************!*\
  !*** ./src/app/items/item/item.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n<div class=\"row\">\r\n  <div class=\"image-holder\">\r\n    <img src=\"{{'./image/' + item.imageUrl}}\" alt=\"\" class=\"responsive-img materialboxed\">\r\n  </div>\r\n  <div class=\"col s12 l6 offset-l1 valign-wrapper\">\r\n  <div>\r\n    <h3 class=\"light-green-text text-darken-3\">{{item.title}}</h3>\r\n    <div class=\"truncated\">{{item.description}}</div>\r\n    <a href=\"\" class=\"btn light-green lighten-5 z-depth-0 category-tag\">\r\n      <i class=\"material-icons left\">class</i>\r\n      {{item.category}}\r\n    </a>\r\n    <div *ngFor=\"let tag of item.tags\" class=\"chip right\">{{tag}}</div>\r\n    <div class=\"custom-grid\"> \r\n    <div class=\"custom-col\">\r\n      <h5><span class=\"green-text\" *ngIf=\"item.lostOrFound=='Found'\">Found</span>\r\n      <span class=\"red-text\" *ngIf=\"item.lostOrFound=='Lost'\">Lost </span>\r\n      <span class=\"grey-text\">&nbsp;&nbsp;{{months[item.date.getMonth()]}} {{item.date.getDate()}}, {{item.date.getFullYear()}}</span></h5>\r\n      <h6>{{item.location.name}}, {{item.location.city.name}}</h6>\r\n    </div>\r\n    <div class=\"custom-col\">\r\n      <button *ngIf=\"item.lostOrFound=='Lost'\" (click)=\"claimButtonClick(item)\" class=\"btn white-text light-green darken-3 claim-btn\">Found It</button>\r\n      <button *ngIf=\"item.lostOrFound=='Found'\" (click)=\"claimButtonClick(item)\" class=\"btn white-text light-green darken-3 claim-btn\">Claim</button>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"divider light-green darken-3\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/items/item/item.component.ts":
/*!**********************************************!*\
  !*** ./src/app/items/item/item.component.ts ***!
  \**********************************************/
/*! exports provided: ItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemComponent", function() { return ItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_item_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/item.model */ "./src/app/models/item.model.ts");
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



var ItemComponent = /** @class */ (function () {
    function ItemComponent(router) {
        var _this = this;
        this.router = router;
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.claimButtonClick = function () {
            _this.router.navigateByUrl("item/" + _this.item._id);
        };
    }
    ItemComponent.prototype.ngOnInit = function () {
        this.item.date = new Date(this.item.date);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _models_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], ItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('isRequestDisabled'),
        __metadata("design:type", Boolean)
    ], ItemComponent.prototype, "isRequestDisabled", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/items/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/items/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ItemComponent);
    return ItemComponent;
}());



/***/ }),

/***/ "./src/app/items/items.component.css":
/*!*******************************************!*\
  !*** ./src/app/items/items.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".modal-container\r\n{\r\n    min-height: 100vh;\r\n    padding-top: 2vw;\r\n    padding-bottom: 2vw;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtDQUN2QiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGFpbmVyXHJcbntcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgcGFkZGluZy10b3A6IDJ2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAydnc7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<items-filter [filters]=\"filters\" [applyFilters]=\"applyFilters\"></items-filter>\r\n<div class=\"section container\">\r\n  <app-item *ngFor=\"let item of items, index as i\" [item]=\"item\"></app-item>\r\n</div>"

/***/ }),

/***/ "./src/app/items/items.component.ts":
/*!******************************************!*\
  !*** ./src/app/items/items.component.ts ***!
  \******************************************/
/*! exports provided: ItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_items_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/items.service */ "./src/app/services/items.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/guards/user.guard */ "./src/app/guards/user.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemsService, routes, userGuard) {
        var _this = this;
        this.itemsService = itemsService;
        this.routes = routes;
        this.userGuard = userGuard;
        this.filters = { lostOrFound: '', category: '', location: '' };
        this.applyFilters = function () {
            _this.setItems();
        };
    }
    ItemsComponent.prototype.setItems = function () {
        var _this = this;
        this.itemsService.getItems(this.filters)
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) {
            if (params['lostOrFound'])
                _this.filters.lostOrFound = params['lostOrFound'];
            _this.setItems();
        });
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_guards_user_guard__WEBPACK_IMPORTED_MODULE_3__["UserGuard"]])
    ], ItemsComponent);
    return ItemsComponent;
}());

var mockItems = [
    {
        _id: 'agagag', location: { name: 'Velechery', city: { name: 'Chennai' } },
        title: 'Yamaha Bike Key', date: new Date(),
        imageUrl: '../../assets/images/keys.jpg',
        lostOrFound: 'Found', category: 'Keys',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["bike key", "yamaha", "no keychain"]
    },
    {
        _id: 'agagaaf', location: { name: 'Polikarai', city: { name: 'Chennai' } },
        title: 'Ladies Handbag', date: new Date(),
        imageUrl: '../../assets/images/handBag.jpg',
        lostOrFound: 'Lost', category: 'Bags',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["Aswin", "Ebby", "Rss"]
    },
    {
        _id: 'agagag', location: { name: 'Vetturnimadam', city: { name: 'Chennai' } },
        title: 'Ebby', date: new Date(),
        imageUrl: '../../assets/images/Ebby.jpg',
        lostOrFound: 'Lost', category: 'Person',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["Kovai guy", "kidnapping", "childabuse"]
    },
    {
        _id: 'agagag', location: { name: 'Kottar', city: { name: 'Chennai' } },
        title: 'Yamaha Bike Key', date: new Date(),
        imageUrl: '../../assets/images/keys.jpg',
        lostOrFound: 'Found', category: 'Keys',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["bike key", "yamaha", "no keychain", "empty", "just joking"]
    }
];


/***/ }),

/***/ "./src/app/items/items.module.ts":
/*!***************************************!*\
  !*** ./src/app/items/items.module.ts ***!
  \***************************************/
/*! exports provided: ItemsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsModule", function() { return ItemsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _items_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items.component */ "./src/app/items/items.component.ts");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./item/item.component */ "./src/app/items/item/item.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter/filter.component */ "./src/app/items/filter/filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ItemsModule = /** @class */ (function () {
    function ItemsModule() {
    }
    ItemsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_5__["FilterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]]
        })
    ], ItemsModule);
    return ItemsModule;
}());



/***/ }),

/***/ "./src/app/models/item.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/item.model.ts ***!
  \**************************************/
/*! exports provided: Item, City, Area */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "City", function() { return City; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Area", function() { return Area; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());

var City = /** @class */ (function () {
    function City() {
    }
    return City;
}());

var Area = /** @class */ (function () {
    function Area() {
    }
    return Area;
}());

var LostOrFound;
(function (LostOrFound) {
    LostOrFound["LOST"] = "Lost";
    LostOrFound["FOUND"] = "Found";
})(LostOrFound || (LostOrFound = {}));
var Categories;
(function (Categories) {
    Categories["KEYS"] = "Keys";
    Categories["WALLET"] = "Wallet";
    Categories["OTHER"] = "Other";
})(Categories || (Categories = {}));


/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".side-nav-padded\r\n{\r\n    padding-left: 50px;\r\n}\r\n\r\n.sidenav\r\n{\r\n    padding-top: 50px;\r\n}\r\n\r\n.nav-z\r\n{\r\n    z-index: 9        \r\n}\r\n\r\n.sticky \r\n{\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\n.nav-offset\r\n{\r\n    width: 100%;\r\n    height: 64px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtDQUN0Qjs7QUFFRDs7SUFFSSxrQkFBa0I7Q0FDckI7O0FBRUQ7O0lBRUksVUFBVTtDQUNiOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixPQUFPO0NBQ1Y7O0FBRUQ7O0lBRUksWUFBWTtJQUNaLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1uYXYtcGFkZGVkXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuLnNpZGVuYXZcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5uYXYtelxyXG57XHJcbiAgICB6LWluZGV4OiA5ICAgICAgICBcclxufVxyXG5cclxuLnN0aWNreSBcclxue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4ubmF2LW9mZnNldFxyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNjRweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"navOffset\"></div>\r\n<nav class=\"light-green darken-3 nav-z\" id=\"navBar\">\r\n  <div class=\"nav-wrapper container\">\r\n    <a (click)=\"showMobileMenu()\" class=\"sidenav-trigger\">\r\n      <i class=\"material-icons\">menu</i>\r\n    </a>\r\n    <a href=\"#\" class=\"brand-logo\">\r\n      <img src=\"../../assets/images/lost-and-found.png\" alt=\"\">\r\n    </a>\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li><a routerLink=\"/home\" >Home</a></li>\r\n      <li id=\"itemTab\" (mouseenter)=\"showDropDown()\" (mouseleave)=\"hideDropDown($event)\">\r\n        <a routerLink=\"/items\" class=\"dropdown-trigger\">Items\r\n          <i class=\"material-icons right\">arrow_drop_down</i>\r\n        </a>\r\n          <ul id=\"navDropDown\" (mouseleave)=\"hideDropDown($event)\" class=\"dropdown-content\">\r\n              <li><a routerLink=\"/items/Lost\">Lost</a></li>\r\n              <li><a routerLink=\"/items/Found\">Found</a></li>\r\n          </ul>\r\n      </li>\r\n      <li><a routerLink=\"/aboutUs\">About Us</a></li>      \r\n      <li *ngIf=\"userService.isLoggedIn()\"><a routerLink=\"/dashboard\" >Dashboard</a></li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\"><a routerLink=\"/signIn\" >Sign In</a></li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\"><a routerLink=\"/signUp\" >Sign Up</a></li>      \r\n      <li *ngIf=\"userService.isLoggedIn()\"><a (click)=\"logOut()\">Log Out</a></li>      \r\n    </ul>\r\n    <ul class=\"sidenav\" id=\"mobileMenu\">\r\n      <li><a class=\"light-green-text text-darken-3\" routerLink=\"/home\" >Home</a></li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li><a routerLink=\"/items\" class=\"light-green-text text-darken-3\">Items\r\n      </a></li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <div class=\"side-nav-padded\">\r\n      <li><a class=\"red-text\" routerLink=\"/items/Lost\" >Lost</a></li>\r\n      <li><a class=\"green-text\" routerLink=\"/items/Found\" >Found</a></li>      \r\n      </div>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li><a class=\"light-green-text text-darken-3\" routerLink=\"/aboutUs\" >About Us</a></li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li *ngIf=\"userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" routerLink=\"/dashboard\" >Dashboard</a>\r\n      </li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" routerLink=\"/signIn\" >Sign In</a>\r\n      </li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" routerLink=\"/signUp\" >Sign Up</a>\r\n      </li>      \r\n      <li *ngIf=\"userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" (click)=\"logOut()\">Log Out</a>\r\n      </li>\r\n      <li><div class=\"divider\"></div></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
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



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.logOut = function () {
            _this.userService.logOut()
                .subscribe(function (loggedOut) {
                _this.router.navigateByUrl('/signIn');
            });
        };
        this.showMobileMenu = function () {
            document.getElementById('mobileMenu').style.transform = 'translateX(0)';
            setTimeout(function () {
                document.addEventListener('click', _this.hideMobileMenu);
            }, 300);
        };
        this.hideMobileMenu = function () {
            document.getElementById('mobileMenu').style.transform = 'translateX(-105%)';
            document.removeEventListener('click', _this.hideMobileMenu);
        };
        this.showDropDown = function () {
            _this.repositionDropDown();
            var dropDrown = document.getElementById('navDropDown');
            dropDrown.style.display = 'block';
            dropDrown.style.opacity = '1';
            document.addEventListener('click', _this.hideDropDown);
        };
        this.hideDropDown = function (event) {
            var dropDrown = document.getElementById('navDropDown');
            dropDrown.style.display = 'none';
            dropDrown.style.opacity = '0';
            document.removeEventListener('click', _this.hideDropDown);
        };
        this.repositionDropDown = function () {
            var dropDrown = document.getElementById('navDropDown');
            var itemTab = document.getElementById('itemTab');
            dropDrown.style.left = (2 * itemTab.getBoundingClientRect().left - itemTab.getBoundingClientRect().right) + 'px';
            dropDrown.style.top = itemTab.getBoundingClientRect().bottom + 'px';
        };
        this.stickNavbar = function (event) {
            var navbar = document.getElementById('navBar');
            var navOffset = document.getElementById('navOffset');
            if (window.pageYOffset >= navbar.offsetTop) {
                navbar.classList.add("sticky");
                navOffset.classList.add("nav-offset");
            }
            else {
                navOffset.classList.remove("nav-offset");
                navbar.classList.remove("sticky");
            }
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
        window.addEventListener('scroll', this.stickNavbar, true);
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        window.removeEventListener('scroll', this.stickNavbar, true);
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/reset-password/reset-password.component.css":
/*!*************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2V0LXBhc3N3b3JkL3Jlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.html":
/*!**************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n  <h2 class=\"light-green-text text-darken-3 center\">Reset Password</h2>\n  <p class=\"center\">Hi {{user.name}}, you can reset your password here</p>\n  <div class=\"row\">\n    <div class=\"col s12 l4 offset-l8 pull-l4\">\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">lock_open</i>\n          <input type=\"password\" [(ngModel)]=\"user.password\" id=\"passwordInput\" name=\"password\">\n          <label for=\"passwordInput\">New Password</label>\n        </div>\n        <div class=\"input-field\">\n          <i class=\"material-icons prefix\">lock</i>\n          <input type=\"password\" [(ngModel)]=\"password\" id=\"confirmPasswordInput\" name=\"confirmPassword\">\n          <label for=\"confirmPasswordInput\">Confirm Password</label>\n        </div>\n    </div>\n  </div>\n  <div class=\"center\">\n    <a class=\"btn\" routerLink=\"/signIn\">Cancel</a>\n    <div class=\"btn light-green darken-3 white-text\" (click)=\"resetPassword()\">Reset</div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reset-password/reset-password.component.ts":
/*!************************************************************!*\
  !*** ./src/app/reset-password/reset-password.component.ts ***!
  \************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");
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





var ResetPasswordComponent = /** @class */ (function () {
    function ResetPasswordComponent(app, userService, routes, router) {
        var _this = this;
        this.app = app;
        this.userService = userService;
        this.routes = routes;
        this.router = router;
        this.user = { name: '', password: '' };
        this.userId = '';
        this.resetToken = '';
        this.password = '';
        this.validatePassword = function () {
            return new Promise(function (resolve, reject) {
                if (_this.password != _this.user.password)
                    reject('Passwords do not match');
                var length = _this.password.lenght * 1;
                var passwordValidator = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                if (!passwordValidator.test(_this.password))
                    reject('Password is too short');
                passwordValidator = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                if (!passwordValidator.test(_this.password))
                    reject('Password is not strong enough');
                passwordValidator = new RegExp('password');
                if (passwordValidator.test(_this.password.toLowerCase()))
                    reject('Password should not contain password');
                resolve();
            });
        };
        this.resetPassword = function () {
            _this.validatePassword()
                .then(function () {
                _this.userService.resetPassword({ password: _this.user.password }, _this.userId, _this.resetToken)
                    .subscribe(function (result) {
                    if (result) {
                        _this.app.makeToast('Done');
                        _this.router.navigateByUrl('signIn');
                    }
                    else
                        _this.app.makeToast("Couldn't process request");
                });
            })
                .catch(function (error) { return _this.app.makeToast(error); });
        };
        this.setUser = function () {
            _this.userService.getUserName(_this.userId, _this.resetToken)
                .subscribe(function (response) {
                if (response.error) {
                    if (response.error.status === 400)
                        _this.app.makeToast('The reset link is broken');
                    else
                        _this.app.makeToast("Couldn't process request");
                    _this.router.navigateByUrl('signIn');
                }
                _this.user.name = response.name;
            });
        };
    }
    ResetPasswordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.routes.params.subscribe(function (params) {
            if (params['userId'])
                _this.userId = params['userId'];
            if (params['resetToken'])
                _this.resetToken = params['resetToken'];
            _this.setUser();
        });
    };
    ResetPasswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reset-password',
            template: __webpack_require__(/*! ./reset-password.component.html */ "./src/app/reset-password/reset-password.component.html"),
            styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/reset-password/reset-password.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ResetPasswordComponent);
    return ResetPasswordComponent;
}());



/***/ }),

/***/ "./src/app/services/app.config.ts":
/*!****************************************!*\
  !*** ./src/app/services/app.config.ts ***!
  \****************************************/
/*! exports provided: API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
var API_URL = './api/';



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
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

var AppService = /** @class */ (function () {
    function AppService() {
        this.makeToast = function (toast) {
            var toastDiv = document.getElementById('toastDiv');
            toastDiv.innerHTML = toast;
            toastDiv.className = "show-toast";
            setTimeout(function () { return toastDiv.classList.remove("show-toast"); }, 3000);
        };
    }
    AppService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AppService);
    return AppService;
}());



/***/ }),

/***/ "./src/app/services/items.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/items.service.ts ***!
  \*******************************************/
/*! exports provided: ItemsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsService", function() { return ItemsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.config */ "./src/app/services/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ItemsService = /** @class */ (function () {
    function ItemsService(http) {
        this.http = http;
    }
    ItemsService.prototype.getItem = function (itemId) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "item/" + itemId;
        return this.http.get(url);
    };
    ItemsService.prototype.getItems = function (searchParams) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'items';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set("params", JSON.stringify(searchParams));
        return this.http.get(url, { headers: headers, params: params });
    };
    ItemsService.prototype.getMyItems = function () {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'myItems';
        return this.http.get(url);
    };
    ItemsService.prototype.resolveItem = function (itemId) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "resolveItem/" + itemId;
        return this.http.patch(url, {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])({ resolved: true, error: null }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ resolved: false, error: error });
        }));
    };
    ItemsService.prototype.getCities = function () {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "cities";
        return this.http.get(url);
    };
    ItemsService.prototype.getCategories = function () {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "item/categories";
        return this.http.get(url);
    };
    ItemsService.prototype.getAreas = function (cityId) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "areas/" + cityId;
        return this.http.get(url);
    };
    ItemsService.prototype.sendItemClaimRequest = function (message, itemId) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "claimItem/" + itemId;
        return this.sendItemRequest(url, message);
    };
    ItemsService.prototype.sendItemFoundRequest = function (message, itemId) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + "foundItem/" + itemId;
        return this.sendItemRequest(url, message);
    };
    ItemsService.prototype.sendItemRequest = function (url, message) {
        return this.http.post(url, { message: message }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])({ saved: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ saved: false, error: error });
        }));
    };
    ItemsService.prototype.addItem = function (item) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'item';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({ 'enctype': 'multipart/form-data' });
        return this.http.post(url, item, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])({ saved: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ saved: false, error: error });
        }));
    };
    ItemsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ItemsService);
    return ItemsService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.config */ "./src/app/services/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = /** @class */ (function () {
    function UserService(http) {
        var _this = this;
        this.http = http;
        this.signUpUrl = _app_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + 'signUp';
        this.signInUrl = _app_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + 'signIn';
        this.logOutUrl = _app_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + 'logOut';
        this.passwordResetUrl = _app_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + 'resetPassword';
        this.JWT = 'JWT';
        this.requestPasswordReset = function (email) {
            return _this.http.post(_this.passwordResetUrl, { email: email }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])({ success: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ success: false, error: error }); }));
        };
        this.getUserName = function (userId, resetToken) {
            var url = _app_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "user/" + userId + "/" + resetToken;
            return _this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ error: error }); }));
        };
        this.resetPassword = function (password, userId, resetToken) {
            var url = _app_config__WEBPACK_IMPORTED_MODULE_4__["API_URL"] + "user/" + userId + "/" + resetToken;
            return _this.http.post(url, { password: password }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false); }));
        };
        this.isLoggedIn = function () {
            if (_this.getJwt())
                return true;
            return false;
        };
        this.getJwt = function () {
            return localStorage.getItem(_this.JWT);
        };
        this.clearTokens = function () {
            localStorage.removeItem(_this.JWT);
        };
        this.saveTokens = function (tokens) {
            localStorage.setItem(_this.JWT, tokens.jwt);
        };
    }
    UserService.prototype.signUp = function (user) {
        return this.http.post(this.signUpUrl, user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])({ created: true }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ created: false, error: error.error });
        }));
    };
    UserService.prototype.signIn = function (user) {
        var _this = this;
        return this.http.post(this.signInUrl, user, { responseType: 'json' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.saveTokens(response); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    UserService.prototype.logOut = function () {
        var _this = this;
        return this.http.post(this.logOutUrl, null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (response) { return _this.clearTokens(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])(true), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (error) {
            _this.clearTokens();
            console.log(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(false);
        }));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".section\r\n{\r\n    padding-top: 6vw; \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksaUJBQWlCO0NBQ3BCIiwiZmlsZSI6InNyYy9hcHAvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VjdGlvblxyXG57XHJcbiAgICBwYWRkaW5nLXRvcDogNnZ3OyBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\r\n  <div class=\"row\">\r\n  <div class=\"col s12 l4 offset-l8 pull-l4 center-align\">\r\n    <div class=\"input-field\">\r\n      <i class=\"material-icons prefix\">email</i>\r\n      <input type=\"email\" [(ngModel)]=\"credentials.email\" id=\"emailInput\" name=\"email\">\r\n      <label for=\"emailInput\">Email</label>\r\n    </div>\r\n    <div class=\"input-field\" (keydown)=\"keyDown($event)\">\r\n      <i class=\"material-icons prefix\">lock</i>\r\n      <input type=\"password\" [(ngModel)]=\"credentials.password\" id=\"passwordInput\" name=\"password\">\r\n      <label for=\"passwordInput\">Password</label>\r\n    </div>\r\n    <div class=\"input-field center\">\r\n      <button class=\"btn light-green darken-3 white-text\" (click)=\"signIn()\">Sign In</button>\r\n    </div>\r\n    <div class=\"\">New User? <a routerLink=\"/signUp\" [queryParams]=\"{forwardTo: '' + forwardTo}\">Create Account</a></div>\r\n    <div class=\"\" style=\"margin-top:1vw\"><a routerLink=\"/forgotPassword\">Forgot Password</a></div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(app, userService, router, activatedRoute) {
        var _this = this;
        this.app = app;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.credentials = { email: '', password: '' };
        this.signIn = function () {
            _this.userService.signIn(_this.credentials)
                .subscribe(function (signedIn) {
                if (signedIn) {
                    if (_this.forwardTo)
                        _this.router.navigateByUrl("/" + _this.forwardTo);
                    else
                        _this.router.navigateByUrl('/dashboard');
                }
                else {
                    _this.app.makeToast('Invalid Credentials');
                }
            });
        };
        this.keyDown = function (event) {
            if (event.key === "Enter") {
                _this.signIn();
            }
        };
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.forwardTo)
                _this.forwardTo = params.forwardTo;
        });
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\" (keydown)=\"keyDown($event)\">\r\n    <div class=\"row\">\r\n    <div class=\"col s12 l4 offset-l8 pull-l4 center-align\">\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">person</i>\r\n        <input type=\"text\" [(ngModel)]=\"user.name\" id=\"nameInput\" name=\"name\">\r\n        <label for=\"nameInput\">Name</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">email</i>\r\n        <input type=\"email\" [(ngModel)]=\"user.email\" id=\"emailInput\" name=\"email\">\r\n        <label for=\"emailInput\">Email</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">lock_open</i>\r\n        <input type=\"password\" [(ngModel)]=\"user.password\" id=\"passwordInput\" name=\"password\">\r\n        <label for=\"passwordInput\">Password</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">lock</i>\r\n        <input type=\"password\" [(ngModel)]=\"password\" id=\"confirmPasswordInput\" name=\"confirmPassword\">\r\n        <label for=\"confirmPasswordInput\">Confirm Password</label>\r\n      </div>\r\n      <div class=\"input-field center\">\r\n        <button class=\"btn light-green darken-3 white-text\" (click)=\"signUp(event)\">Sign Up</button>\r\n      </div>\r\n      <div class=\"\">Already have an account? <a routerLink=\"/signIn\">Sign In</a></div>\r\n    </div>\r\n    <div class=\"center-align\" style=\"width:100%; margin-top:1vw\">*By clicking sign up you agree to our <a routerLink=\"/termsAndConditions\">Terms and Conditions</a></div>\r\n  </div>\r\n  </div>\r\n  \r\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(app, userService, router, activatedRoute) {
        var _this = this;
        this.app = app;
        this.userService = userService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
        this.password = '';
        this.validateUser = function () {
            return new Promise(function (resolve, reject) {
                if (_this.user.name === '')
                    reject('Name is mandatory');
                var emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                if (!emailValidator.test(_this.user.email))
                    reject('Invalid email format');
                if (_this.password != _this.user.password)
                    reject('Passwords do not match');
                var length = _this.password.lenght * 1;
                var passwordValidator = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                if (!passwordValidator.test(_this.password))
                    reject('Password is too short');
                passwordValidator = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
                if (!passwordValidator.test(_this.password))
                    reject('Password is not strong enough');
                passwordValidator = new RegExp('password');
                if (passwordValidator.test(_this.password.toLowerCase()))
                    reject('Password should not contain password');
                resolve();
            });
        };
        this.signUp = function () {
            _this.validateUser().then(function () {
                _this.userService.signUp(_this.user)
                    .subscribe(function (result) {
                    if (result.created) {
                        if (_this.forwardTo)
                            _this.router.navigateByUrl("/" + _this.forwardTo);
                        else
                            _this.router.navigateByUrl('/signIn');
                    }
                    else {
                        _this.resetValues();
                        _this.app.makeToast(result.error.message);
                    }
                });
            })
                .catch(function (error) { return _this.app.makeToast(error); });
        };
        this.keyDown = function (event) {
            if (event.key === "Enter") {
                _this.signUp();
            }
        };
        this.resetValues = function () {
            _this.user = {
                name: '',
                email: '',
                password: ''
            };
            _this.password = '';
        };
    }
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            if (params.forwardTo)
                _this.forwardTo = params.forwardTo;
        });
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlcm1zLWFuZC1jb25kaXRpb25zL3Rlcm1zLWFuZC1jb25kaXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\n  <h2 class=\"light-green-text text-darken-3 center\">Terms and Conditions</h2>\n  <p class=\"flow-text\">We flex nuts</p>\n  <div class=\"center\">\n    <a routerLink='/signUp' class=\"btn center\">Close</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/terms-and-conditions/terms-and-conditions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/terms-and-conditions/terms-and-conditions.component.ts ***!
  \************************************************************************/
/*! exports provided: TermsAndConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsAndConditionsComponent", function() { return TermsAndConditionsComponent; });
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

var TermsAndConditionsComponent = /** @class */ (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsAndConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-and-conditions',
            template: __webpack_require__(/*! ./terms-and-conditions.component.html */ "./src/app/terms-and-conditions/terms-and-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-and-conditions.component.css */ "./src/app/terms-and-conditions/terms-and-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(userService, router) {
        this.userService = userService;
        this.router = router;
        this.addToken = function (request, token) {
            return request.clone({
                setHeaders: {
                    'Authorization': "Bearer " + token
                }
            });
        };
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        request = this.addToken(request, this.userService.getJwt());
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"] && error.status === 401) {
                return _this.handle401Error(request, next);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        }));
    };
    TokenInterceptor.prototype.handle401Error = function (request, next) {
        this.userService.clearTokens();
        this.router.navigateByUrl('/signIn');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Unauthorized Access');
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], TokenInterceptor);
    return TokenInterceptor;
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

module.exports = __webpack_require__(/*! D:\Shimo\Angular\Lost-And-Found-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map