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

/***/ "./src/app/add-item/add-item.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-item/add-item.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".display-image\r\n{\r\n    width:80%;\r\n}\r\n\r\n.close-chip\r\n{\r\n    cursor: pointer;\r\n    float: right;\r\n    font-size: 16px;\r\n    line-height: 32px;\r\n    padding-left: 8px;\r\n    font-weight: 700;\r\n    color: #000;\r\n    text-shadow: 0 1px 0 #fff;\r\n    opacity: .5;\r\n}\r\n\r\n.close-chip:not(:disabled):not(.disabled):hover {\r\n    opacity: .75;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxVQUFVO0NBQ2I7O0FBRUQ7O0lBRUksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixZQUFZO0NBQ2Y7O0FBRUQ7SUFDSSxhQUFhO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWl0ZW0vYWRkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaXNwbGF5LWltYWdlXHJcbntcclxuICAgIHdpZHRoOjgwJTtcclxufVxyXG5cclxuLmNsb3NlLWNoaXBcclxue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtc2hhZG93OiAwIDFweCAwICNmZmY7XHJcbiAgICBvcGFjaXR5OiAuNTtcclxufVxyXG5cclxuLmNsb3NlLWNoaXA6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogLjc1O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-item/add-item.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-item/add-item.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\r\n    <div class=\"row\">\r\n    <div class=\"col s12 l5\">\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">bookmark</i>\r\n        <input type=\"text\" [(ngModel)]=\"item.title\" id=\"titleInput\" name=\"title\">\r\n        <label for=\"titleInput\">Title</label>\r\n        <span class=\"helper-text\">For example, Blue hand bag</span>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">assignment</i>\r\n        <textarea class=\"materialize-textarea\" [(ngModel)]=\"item.description\" id=\"descriptionInput\" name=\"description\"></textarea>\r\n        <label for=\"descriptionInput\">Description</label>\r\n        <span class=\"helper-text\">Describe the item here, include specifics such as color, reference number, etc. Avoid sensitive informations</span>\r\n      </div>\r\n      <div class=\"row\">\r\n      <div class=\"input-field col s6\">\r\n        <i class=\"material-icons prefix\">date_range</i>\r\n        <input type=\"date\"  [(ngModel)]=\"item.date\" id=\"dateInput\" name=\"date\">\r\n        <label for=\"dateInput\">Date</label>\r\n        <span class=\"helper-text\">Lost or Found Date</span>\r\n      </div>\r\n      <div class=\"input-field transparent col s4 offset-s1\">\r\n        <select name = \"lostOrFound\"  [(ngModel)]=\"item.lostOrFound\" class=\"browser-default light-green lighten-5\">\r\n            <option value=\"\" disabled selected>Lost or Found</option>\r\n            <option value=\"Lost\" class=\"red-text\">Lost</option>\r\n            <option value=\"Found\" class=\"green-text\">Found</option>\r\n          </select>\r\n      </div>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">room</i>\r\n        <input type=\"text\" id=\"placeInput\" [(ngModel)]=\"item.location\" name=\"location\">\r\n        <label for=\"placeInput\">Place</label>\r\n        <span class=\"helper-text\">For example, \"Near Statue of Liberty, NY\"</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col s12 l6\">\r\n      <div class=\"row\">\r\n        <div class=\"col s3\">\r\n          <img src=\"{{imagePath}}\" alt=\"\" class=\"responsive-img display-image z-depth-1\">\r\n        </div>\r\n        <div class=\"input-field col s5 valign-wrapper\">\r\n          <input type=\"file\" id=\"imageInput\" (change)=\"setImage($event)\" name=\"image\">\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"input-field transparent col s4\">\r\n          <select name = \"category\"  [(ngModel)]=\"item.category\" class=\"browser-default light-green lighten-5\">\r\n              <option value=\"\" disabled selected>Category</option>\r\n              <option value=\"Keys\" class=\"\">Keys</option>\r\n              <option value=\"Wallets\" class=\"\">Wallets</option>\r\n              <option value=\"Documents\" class=\"\">Documents</option>\r\n              <option value=\"Bags\" class=\"\">Bags</option>\r\n              <option value=\"Others\" class=\"\">Others</option>\r\n            </select>\r\n        </div>\r\n        <div class=\"input-field col s6 offset-s1\" (keydown)=\"keyDown($event)\">\r\n          <i class=\"material-icons prefix\">loyalty</i>\r\n          <input type=\"text\" [(ngModel)]=\"tag\" id=\"tagsInput\" name=\"tags\">\r\n          <label for=\"tagsInput\">Tags</label>\r\n          <span class=\"helper-text\">Press Enter to add tag</span>        \r\n        </div>\r\n      </div>\r\n      <div class=\"center\">\r\n        <div *ngFor=\"let tag of item.tags; index as i\" class=\"chip\">{{tag}}<i class=\"close-chip material-icons\" (click)=\"removeTag(i)\">close</i></div>\r\n      </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"center\">\r\n      <div class=\"btn\" (click)=\"cancel()\">Cancel</div>\r\n      <div class=\"btn light-green darken-3\" (click)=\"saveItem()\">Save</div>\r\n    </div>\r\n  </div>\r\n  \r\n"

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
    function AddItemComponent(itemsService, router) {
        var _this = this;
        this.itemsService = itemsService;
        this.router = router;
        this.item = { lostOrFound: "", category: "", tags: [] };
        this.tag = '';
        this.imagePath = '../../assets/images/noImage.jpg';
        this.saveItem = function () {
            console.log({ image: _this.itemImage, item: _this.item });
            var formData = new FormData();
            formData.append('item', JSON.stringify(_this.item));
            formData.append('image', _this.itemImage);
            console.log(formData);
            _this.itemsService.addItem(formData)
                .subscribe(function (result) {
                if (result.saved) {
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
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
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'signIn', component: _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'signUp', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]] },
    { path: 'lostItems', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] },
    { path: 'foundItems', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] },
    { path: 'items', component: _items_items_component__WEBPACK_IMPORTED_MODULE_5__["ItemsComponent"] },
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

var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], _sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _add_item_add_item_component__WEBPACK_IMPORTED_MODULE_7__["AddItemComponent"]];


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

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

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

module.exports = ".image-holder\r\n{\r\n    width:16.67%;\r\n    margin-left: 12.5%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.truncated\r\n{\r\n    max-width: 35vw;\r\n    padding-bottom: 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1pdGVtL2Rhc2hib2FyZC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLWl0ZW0vZGFzaGJvYXJkLWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1ob2xkZXJcclxue1xyXG4gICAgd2lkdGg6MTYuNjclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4udHJ1bmNhdGVkXHJcbntcclxuICAgIG1heC13aWR0aDogMzV2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard-item/dashboard-item.component.html":
/*!************************************************************************!*\
  !*** ./src/app/dashboard/dashboard-item/dashboard-item.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"image-holder\">\r\n    <img src=\"{{item.imageUrl}}\" alt=\"\" class=\"responsive-img materialboxed\">\r\n  </div>\r\n  <div class=\"col s12 l6 offset-l1 valign-wrapper\">\r\n  <div>\r\n    <h3 class=\"light-green-text text-darken-3\">{{item.title}}</h3>\r\n    <div class=\"truncated\">{{item.description}}</div>\r\n    <a href=\"\" class=\"btn light-green lighten-5 z-depth-0\">\r\n      <i class=\"material-icons left\">class</i>\r\n      {{item.category}}\r\n    </a>\r\n    <div *ngFor=\"let tag of item.tags\" class=\"chip right\">{{tag}}</div>\r\n    <h5><span class=\"green-text\" *ngIf=\"item.lostOrFound=='Found'\">Found</span>\r\n    <span class=\"red-text\" *ngIf=\"item.lostOrFound=='Lost'\">Lost </span>\r\n    <span class=\"grey-text\">&nbsp;&nbsp;{{item.date}}</span></h5>\r\n    <h6>{{item.location}}</h6>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"divider light-green darken-3\"></div>\r\n"

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
    function DashboardItemComponent() {
    }
    DashboardItemComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"section container\">\r\n  <app-dashboard-item *ngFor=\"let item of items, index as i\" [item]=\"item\"></app-dashboard-item>\r\n</div>\r\n"

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

var mockItems = [
    {
        id: 'agagag', location: 'Near Statue of Liberty',
        title: 'Yamaha Bike Key', date: 'August 10, 2019',
        imageUrl: '../../assets/images/keys.jpg',
        lostOrFound: 'Found', category: 'Keys',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["bike key", "yamaha", "no keychain"]
    },
    {
        id: 'agagaaf', location: 'Gandhi Park',
        title: 'Ladies Handbag', date: 'August 22, 2019',
        imageUrl: '../../assets/images/handBag.jpg',
        lostOrFound: 'Lost', category: 'Bags',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["Aswin", "Ebby", "Rss"]
    },
    {
        id: 'agagag', location: 'Mars Foundations',
        title: 'Ebby', date: 'August 10, 2019',
        imageUrl: '../../assets/images/Ebby.jpg',
        lostOrFound: 'Lost', category: 'Person',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["Kovai guy", "kidnapping", "childabuse"]
    },
    {
        id: 'agagag', location: 'Near Statue of Liberty',
        title: 'Yamaha Bike Key', date: 'August 10, 2019',
        imageUrl: '../../assets/images/keys.jpg',
        lostOrFound: 'Found', category: 'Keys',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["bike key", "yamaha", "no keychain", "empty", "just joking"]
    }
];


/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"page-footer light-green darken-3\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 l6\">\r\n          <h4>About Us</h4>\r\n          <p>We are this, we are that blah blah blah.\r\n          We do this, we do that blah blah blah.</p>\r\n        </div>\r\n        <div class=\"col s12 l4 offset-l2\">\r\n          <h4>Connect</h4>\r\n          <ul>\r\n          <li><i class=\"fab fa-facebook-f pr-1\"></i><a href=\"https://www.facebook.com/csie.in/\" target=\"_blank\" class=\"grey-text textlighten-5\">Facebook</a></li>\r\n          <li><a href=\"https://www.instagram.com/csieindia/\" target=\"_blank\" class=\"grey-text textlighten-5\">Instagram</a></li>\r\n          <li><a href=\"https://twitter.com/csifortheworld\" target=\"_blank\" class=\"grey-text textlighten-5\">Twitter</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  <div class=\"footer-copyright light-green darken-4\">\r\n    <div class=\"container center-align\">All rights reserved*</div>\r\n  </div>\r\n  </footer>\r\n"

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
    UserGuard.prototype.canActivate = function () {
        if (this.userService.isLoggedIn()) {
            return true;
        }
        this.router.navigateByUrl('/signIn');
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

module.exports = ".section\r\n{\r\n  padding-top: 6vw;\r\n  padding-bottom: 4vw; \r\n}\r\n\r\n.home-buttons{\r\n  margin-top: 50%;\r\n}\r\n\r\n.button-found {\r\ncolor: #20bf6b ;\r\ntext-transform: uppercase;\r\nbackground: #ffffff;\r\npadding: 20px;\r\nborder: 4px solid #20bf6b ;\r\nborder-radius: 6px;\r\ndisplay: inline-block;\r\ntransition: all 0.3s ease 0s;\r\n}\r\n\r\n.button-found:hover {\r\ncolor: #d9d9d9;\r\nborder-radius: 50px;\r\nborder-color: #d9d9d9;\r\ntransition: all 0.3s ease 0s;\r\nbackground: #20bf6b;\r\n}\r\n\r\n.button-lost {\r\ncolor: #e60000 ;\r\ntext-transform: uppercase;\r\nbackground: #ffffff;\r\npadding: 20px;\r\nborder: 4px solid #e60000 ;\r\nborder-radius: 6px;\r\ndisplay: inline-block;\r\ntransition: all 0.3s ease 0s;\r\n}\r\n\r\n.button-lost:hover {\r\ncolor: #494949 ;\r\nborder-radius: 50px;\r\nborder-color: #494949;\r\ntransition: all 0.3s ease 0s;\r\nbackground: #e60000;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsaUJBQWlCO0VBQ2pCLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLGdCQUFnQjtDQUNqQjs7QUFFRDtBQUNBLGdCQUFnQjtBQUNoQiwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLGNBQWM7QUFDZCwyQkFBMkI7QUFDM0IsbUJBQW1CO0FBQ25CLHNCQUFzQjtBQUN0Qiw2QkFBNkI7Q0FDNUI7O0FBRUQ7QUFDQSxlQUFlO0FBQ2Ysb0JBQW9CO0FBQ3BCLHNCQUFzQjtBQUN0Qiw2QkFBNkI7QUFDN0Isb0JBQW9CO0NBQ25COztBQUdEO0FBQ0EsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsY0FBYztBQUNkLDJCQUEyQjtBQUMzQixtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCLDZCQUE2QjtDQUM1Qjs7QUFFRDtBQUNBLGdCQUFnQjtBQUNoQixvQkFBb0I7QUFDcEIsc0JBQXNCO0FBQ3RCLDZCQUE2QjtBQUM3QixvQkFBb0I7Q0FDbkIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uXHJcbntcclxuICBwYWRkaW5nLXRvcDogNnZ3O1xyXG4gIHBhZGRpbmctYm90dG9tOiA0dnc7IFxyXG59XHJcblxyXG4uaG9tZS1idXR0b25ze1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG5cclxuLmJ1dHRvbi1mb3VuZCB7XHJcbmNvbG9yOiAjMjBiZjZiIDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuYmFja2dyb3VuZDogI2ZmZmZmZjtcclxucGFkZGluZzogMjBweDtcclxuYm9yZGVyOiA0cHggc29saWQgIzIwYmY2YiA7XHJcbmJvcmRlci1yYWRpdXM6IDZweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnV0dG9uLWZvdW5kOmhvdmVyIHtcclxuY29sb3I6ICNkOWQ5ZDk7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmJvcmRlci1jb2xvcjogI2Q5ZDlkOTtcclxudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuYmFja2dyb3VuZDogIzIwYmY2YjtcclxufVxyXG5cclxuXHJcbi5idXR0b24tbG9zdCB7XHJcbmNvbG9yOiAjZTYwMDAwIDtcclxudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuYmFja2dyb3VuZDogI2ZmZmZmZjtcclxucGFkZGluZzogMjBweDtcclxuYm9yZGVyOiA0cHggc29saWQgI2U2MDAwMCA7XHJcbmJvcmRlci1yYWRpdXM6IDZweDtcclxuZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG50cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xyXG59XHJcblxyXG4uYnV0dG9uLWxvc3Q6aG92ZXIge1xyXG5jb2xvcjogIzQ5NDk0OSA7XHJcbmJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbmJvcmRlci1jb2xvcjogIzQ5NDk0OTtcclxudHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcclxuYmFja2dyb3VuZDogI2U2MDAwMDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"section container\">\r\n  <div class=\"row\">\r\n  <div class=\"col s12 l6 hide-on-med-and-down valign-wrapper\">\r\n    <img src=\"../../assets/images/itemBox.jpg\" alt=\"\" class=\"responsive-img\">  \r\n  </div>  \r\n  <div class = \"col s12 l3 offset-l2\">\r\n    <div class=\"card\">\r\n        <div class=\"card-image\">\r\n            <img class=\"responsive-img\" src =\"../../assets/images/lostItem.jpg\"/>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">Lost Something?</span>\r\n            <button routerLink=\"/addItem\" class=\"btn red\">Describe your Item</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <div class = \"col s12 l3\">\r\n    <div class=\"card\">\r\n        <div class=\"card-image\">\r\n            <img class=\"responsive-img\" src =\"../../assets/images/foundItem.jpg\"/>\r\n        </div>\r\n        <div class=\"card-content\">\r\n            <span class=\"card-title\">Found Something?</span>\r\n            <button class=\"btn green\" routerLink=\"/addItem\">Post an Item</button>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</div>"

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

/***/ "./src/app/items/item/item.component.css":
/*!***********************************************!*\
  !*** ./src/app/items/item/item.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".image-holder\r\n{\r\n    width:16.67%;\r\n    margin-left: 12.5%;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n}\r\n\r\n.truncated\r\n{\r\n    max-width: 35vw;\r\n    padding-bottom: 10px;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaXRlbXMvaXRlbS9pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0NBQ3RCOztBQUVEOztJQUVJLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQix3QkFBd0I7Q0FDM0IiLCJmaWxlIjoic3JjL2FwcC9pdGVtcy9pdGVtL2l0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1ob2xkZXJcclxue1xyXG4gICAgd2lkdGg6MTYuNjclO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEyLjUlO1xyXG4gICAgcGFkZGluZy10b3A6IDIlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIlO1xyXG59XHJcblxyXG4udHJ1bmNhdGVkXHJcbntcclxuICAgIG1heC13aWR0aDogMzV2dztcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/items/item/item.component.html":
/*!************************************************!*\
  !*** ./src/app/items/item/item.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"image-holder\">\r\n    <img src=\"{{item.imageUrl}}\" alt=\"\" class=\"responsive-img materialboxed\">\r\n  </div>\r\n  <div class=\"col s12 l6 offset-l1 valign-wrapper\">\r\n  <div>\r\n    <h3 class=\"light-green-text text-darken-3\">{{item.title}}</h3>\r\n    <div class=\"truncated\">{{item.description}}</div>\r\n    <a href=\"\" class=\"btn light-green lighten-5 z-depth-0\">\r\n      <i class=\"material-icons left\">class</i>\r\n      {{item.category}}\r\n    </a>\r\n    <div *ngFor=\"let tag of item.tags\" class=\"chip right\">{{tag}}</div>\r\n    <h5><span class=\"green-text\" *ngIf=\"item.lostOrFound=='Found'\">Found</span>\r\n    <span class=\"red-text\" *ngIf=\"item.lostOrFound=='Lost'\">Lost </span>\r\n    <span class=\"grey-text\">&nbsp;&nbsp;{{item.date}}</span></h5>\r\n    <h6>{{item.location}}</h6>\r\n  </div>\r\n  </div>\r\n</div>\r\n<div class=\"divider light-green darken-3\"></div>\r\n"

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
    function ItemComponent() {
    }
    ItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('item'),
        __metadata("design:type", _models_item_model__WEBPACK_IMPORTED_MODULE_1__["Item"])
    ], ItemComponent.prototype, "item", void 0);
    ItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item',
            template: __webpack_require__(/*! ./item.component.html */ "./src/app/items/item/item.component.html"),
            styles: [__webpack_require__(/*! ./item.component.css */ "./src/app/items/item/item.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2l0ZW1zL2l0ZW1zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/items/items.component.html":
/*!********************************************!*\
  !*** ./src/app/items/items.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"section container\">\r\n  <app-item *ngFor=\"let item of items, index as i\" [item]=\"item\"></app-item>\r\n</div>"

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
    function ItemsComponent(itemsService) {
        this.itemsService = itemsService;
        this.items = mockItems;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsService.getItems(this.filters)
            .subscribe(function (items) {
            _this.items = items;
        });
    };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items',
            template: __webpack_require__(/*! ./items.component.html */ "./src/app/items/items.component.html"),
            styles: [__webpack_require__(/*! ./items.component.css */ "./src/app/items/items.component.css")]
        }),
        __metadata("design:paramtypes", [_services_items_service__WEBPACK_IMPORTED_MODULE_1__["ItemsService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());

var mockItems = [
    {
        id: 'agagag', location: 'Near Statue of Liberty',
        title: 'Yamaha Bike Key', date: 'August 10, 2019',
        imageUrl: '../../assets/images/keys.jpg',
        lostOrFound: 'Found', category: 'Keys',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["bike key", "yamaha", "no keychain"]
    },
    {
        id: 'agagaaf', location: 'Gandhi Park',
        title: 'Ladies Handbag', date: 'August 22, 2019',
        imageUrl: '../../assets/images/handBag.jpg',
        lostOrFound: 'Lost', category: 'Bags',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["Aswin", "Ebby", "Rss"]
    },
    {
        id: 'agagag', location: 'Mars Foundations',
        title: 'Ebby', date: 'August 10, 2019',
        imageUrl: '../../assets/images/Ebby.jpg',
        lostOrFound: 'Lost', category: 'Person',
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        tags: ["Kovai guy", "kidnapping", "childabuse"]
    },
    {
        id: 'agagag', location: 'Near Statue of Liberty',
        title: 'Yamaha Bike Key', date: 'August 10, 2019',
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
            declarations: [_items_component__WEBPACK_IMPORTED_MODULE_2__["ItemsComponent"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["ItemComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
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
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
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

module.exports = ".side-nav-padded\r\n{\r\n    padding-left: 50px;\r\n}\r\n\r\n.sidenav\r\n{\r\n    padding-top: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG1CQUFtQjtDQUN0Qjs7QUFFRDs7SUFFSSxrQkFBa0I7Q0FDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1uYXYtcGFkZGVkXHJcbntcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxufVxyXG5cclxuLnNpZGVuYXZcclxue1xyXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n<ul id=\"navDropDown\" (mouseleave)=\"hideDropDown($event)\" class=\"dropdown-content\">\r\n    <li><a routerLink=\"/items\">Lost</a></li>\r\n    <li><a routerLink=\"/items\">Found</a></li>\r\n</ul>\r\n</div>\r\n<nav class=\"light-green darken-3\">\r\n  <div class=\"nav-wrapper container\">\r\n    <a (click)=\"showMobileMenu()\" class=\"sidenav-trigger\">\r\n      <i class=\"material-icons\">menu</i>\r\n    </a>\r\n    <a href=\"#\" class=\"brand-logo\">CSEI</a>\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <li><a routerLink=\"/home\" >Home</a></li>\r\n      <li id=\"itemTab\" (mouseenter)=\"showDropDown()\"><a routerLink=\"/items\" class=\"dropdown-trigger\">Items\r\n          <i class=\"material-icons right\">arrow_drop_down</i>\r\n      </a></li>\r\n      <li *ngIf=\"userService.isLoggedIn()\"><a routerLink=\"/dashboard\" >Dashboard</a></li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\"><a routerLink=\"/signIn\" >Sign In</a></li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\"><a routerLink=\"/signUp\" >Sign Up</a></li>      \r\n      <li *ngIf=\"userService.isLoggedIn()\"><a (click)=\"logOut()\">Log Out</a></li>      \r\n    </ul>\r\n    <ul class=\"sidenav light-green lighten-5\" id=\"mobileMenu\">\r\n      <li><a class=\"light-green-text text-darken-3\" routerLink=\"/home\" >Home</a></li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li><a routerLink=\"/items\" class=\"light-green-text text-darken-3\">Items\r\n      </a></li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <div class=\"side-nav-padded\">\r\n      <li><a class=\"red-text\" routerLink=\"/items\" >Lost</a></li>\r\n      <li><a class=\"green-text\" routerLink=\"/items\" >Found</a></li>      \r\n      </div>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li *ngIf=\"userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" routerLink=\"/dashboard\" >Dashboard</a>\r\n      </li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" routerLink=\"/signIn\" >Sign In</a>\r\n      </li>\r\n      <li><div class=\"divider\"></div></li>\r\n      <li *ngIf=\"!userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" routerLink=\"/signUp\" >Sign Up</a>\r\n      </li>      \r\n      <li *ngIf=\"userService.isLoggedIn()\">\r\n        <a class=\"light-green-text text-darken-3\" (click)=\"logOut()\">Log Out</a>\r\n      </li>\r\n      <li><div class=\"divider\"></div></li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

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
            dropDrown.style.left = itemTab.getBoundingClientRect().left + 'px';
            dropDrown.style.top = itemTab.getBoundingClientRect().bottom + 'px';
        };
    }
    NavbarComponent.prototype.ngOnInit = function () {
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
    ItemsService.prototype.getItems = function (searchParams) {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'items';
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headers.append('Content-Type', 'application/json');
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]()
            .set("params", searchParams);
        return this.http.get(url, { headers: headers, params: params });
    };
    ItemsService.prototype.getMyItems = function () {
        var url = _app_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"] + 'myItems';
        return this.http.get(url);
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
        this.JWT = 'JWT';
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
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({ created: false, error: error });
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

module.exports = "<div class=\"section container\">\r\n  <div class=\"row\">\r\n  <div class=\"col s12 l4 offset-l8 pull-l4 center-align\">\r\n    <div class=\"input-field\">\r\n      <i class=\"material-icons prefix\">email</i>\r\n      <input type=\"email\" [(ngModel)]=\"credentials.email\" id=\"emailInput\" name=\"email\">\r\n      <label for=\"emailInput\">Email</label>\r\n    </div>\r\n    <div class=\"input-field\" (keydown)=\"keyDown($event)\">\r\n      <i class=\"material-icons prefix\">lock</i>\r\n      <input type=\"password\" [(ngModel)]=\"credentials.password\" id=\"passwordInput\" name=\"password\">\r\n      <label for=\"passwordInput\">Password</label>\r\n    </div>\r\n    <div class=\"input-field center\">\r\n      <button class=\"btn light-green darken-3 white-text\" (click)=\"signIn()\">Sign In</button>\r\n    </div>\r\n    <div class=\"\">New User? <a routerLink=\"/signUp\">Create Account</a></div>\r\n  </div>\r\n  </div>\r\n</div>\r\n"

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
    function SignInComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.credentials = { email: '', password: '' };
        this.signIn = function () {
            _this.userService.signIn(_this.credentials)
                .subscribe(function (signedIn) {
                if (signedIn) {
                    _this.router.navigateByUrl('/dashboard');
                }
                else {
                    console.log('check credentials');
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
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
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

module.exports = "<div class=\"section container\" (keydown)=\"keyDown($event)\">\r\n    <div class=\"row\">\r\n    <div class=\"col s12 l4 offset-l8 pull-l4 center-align\">\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">person</i>\r\n        <input type=\"text\" [(ngModel)]=\"user.name\" id=\"nameInput\" name=\"name\">\r\n        <label for=\"nameInput\">Name</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">email</i>\r\n        <input type=\"email\" [(ngModel)]=\"user.email\" id=\"emailInput\" name=\"email\">\r\n        <label for=\"emailInput\">Email</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">lock_open</i>\r\n        <input type=\"password\" [(ngModel)]=\"user.password\" id=\"passwordInput\" name=\"password\">\r\n        <label for=\"passwordInput\">Password</label>\r\n      </div>\r\n      <div class=\"input-field\">\r\n        <i class=\"material-icons prefix\">lock</i>\r\n        <input type=\"password\" [(ngModel)]=\"password\" id=\"confirmPasswordInput\" name=\"confirmPassword\">\r\n        <label for=\"confirmPasswordInput\">Confirm Password</label>\r\n      </div>\r\n      <div class=\"input-field center\">\r\n        <button class=\"btn light-green darken-3 white-text\" (click)=\"signUp(event)\">Sign Up</button>\r\n      </div>\r\n      <div class=\"\">Already have an account? <a routerLink=\"/signIn\">Sign In</a></div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n  \r\n"

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
    function SignUpComponent(userService, router) {
        var _this = this;
        this.userService = userService;
        this.router = router;
        this.user = {
            name: '',
            email: '',
            password: ''
        };
        this.password = '';
        this.signUp = function () {
            console.log(event.target);
            _this.userService.signUp(_this.user)
                .subscribe(function (result) {
                if (result.created) {
                    _this.router.navigateByUrl('/signIn');
                }
                else {
                    _this.resetValues();
                    console.log(result.error);
                }
            });
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
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
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