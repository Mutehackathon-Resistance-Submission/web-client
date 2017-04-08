webpackJsonp([1,4],{

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorRetrievingLocationDialogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorRetrievingLocationDialogComponent = (function () {
    function ErrorRetrievingLocationDialogComponent() {
    }
    ErrorRetrievingLocationDialogComponent.prototype.ngOnInit = function () {
    };
    return ErrorRetrievingLocationDialogComponent;
}());
ErrorRetrievingLocationDialogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-error-retrieving-location-dialog',
        template: __webpack_require__(250),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [])
], ErrorRetrievingLocationDialogComponent);

//# sourceMappingURL=error-retrieving-location-dialog.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppDetailsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppDetailsService = (function () {
    function AppDetailsService() {
        this.appName = 'Photolocation';
    }
    AppDetailsService.prototype.getAppName = function () {
        return this.appName;
    };
    return AppDetailsService;
}());
AppDetailsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], AppDetailsService);

//# sourceMappingURL=app-details.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsTrackingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GpsTrackingService = (function () {
    function GpsTrackingService() {
        var _this = this;
        this.latlon$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_ReplaySubject__["ReplaySubject"](1);
        if ('geolocation' in navigator) {
            navigator.geolocation.watchPosition(function (pos) {
                _this.latlon$.next({
                    'lat': pos.coords.latitude,
                    'lon': pos.coords.longitude,
                    'zoom': 17
                });
            }, function () {
                _this.latlon$.next(null);
            });
        }
        else {
            this.latlon$.next(null);
        }
    }
    GpsTrackingService.prototype.getLatLon$ = function () {
        return this.latlon$;
    };
    return GpsTrackingService;
}());
GpsTrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], GpsTrackingService);

//# sourceMappingURL=gps-tracking.service.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomelessTrackingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomelessTrackingService = (function () {
    function HomelessTrackingService(http) {
        this.http = http;
    }
    HomelessTrackingService.prototype.submitHomelessSighting = function (lat, lon, picture, extraInfo) {
        return this.http
            .post('https://ancient-brook-44784.herokuapp.com/sightings', {
            lat: lat,
            lon: lon,
            timestamp: Date.now(),
            picture: picture,
            extraInfo: JSON.stringify(extraInfo)
        })
            .map(function (response) {
            return response === null ? { success: false } : JSON.parse(response['_body']);
        });
    };
    HomelessTrackingService.prototype.getAllHomelessSightings = function () {
        return this.http
            .get('https://ancient-brook-44784.herokuapp.com/sightings')
            .map(function (response) {
            return response === null ? { success: false } : JSON.parse(response['_body']);
        });
    };
    return HomelessTrackingService;
}());
HomelessTrackingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], HomelessTrackingService);

var _a;
//# sourceMappingURL=homeless-tracking.service.js.map

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 148;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(177);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(249),
        styles: [__webpack_require__(241)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_image_upload__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angular2_image_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angular2_image_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_app_details_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_gps_tracking_service__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_homeless_tracking_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_home_component__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__login_login_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__map_map_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__error_retrieving_location_dialog_error_retrieving_location_dialog_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__toolbar_toolbar_component__ = __webpack_require__(176);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// 3rd Party


// App Services



// App Components





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_17__map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_18__error_retrieving_location_dialog_error_retrieving_location_dialog_component__["a" /* ErrorRetrievingLocationDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_19__toolbar_toolbar_component__["a" /* ToolbarComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                { path: '', component: __WEBPACK_IMPORTED_MODULE_15__home_home_component__["a" /* HomeComponent */] },
                { path: 'map', component: __WEBPACK_IMPORTED_MODULE_17__map_map_component__["a" /* MapComponent */] },
                { path: 'login', component: __WEBPACK_IMPORTED_MODULE_16__login_login_component__["a" /* LoginComponent */] },
            ]),
            __WEBPACK_IMPORTED_MODULE_10_angular2_google_maps_core__["AgmCoreModule"].forRoot({
                apiKey: 'AIzaSyCgIV6IM82_ySNaGaopPe1UaUwXl1sJoQw'
            }),
            __WEBPACK_IMPORTED_MODULE_11_angular2_image_upload__["ImageUploadModule"].forRoot()
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_18__error_retrieving_location_dialog_error_retrieving_location_dialog_component__["a" /* ErrorRetrievingLocationDialogComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_app_details_service__["a" /* AppDetailsService */],
            __WEBPACK_IMPORTED_MODULE_13__services_gps_tracking_service__["a" /* GpsTrackingService */],
            __WEBPACK_IMPORTED_MODULE_14__services_homeless_tracking_service__["a" /* HomelessTrackingService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_app_details_service__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(details, router) {
        this.details = details;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.appName = this.details.getAppName();
    };
    HomeComponent.prototype.recordSighting = function () {
        this.router.navigate(['/map']);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(251),
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_app_details_service__["a" /* AppDetailsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_app_details_service__["a" /* AppDetailsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(252),
        styles: [__webpack_require__(244)]
    }),
    __metadata("design:paramtypes", [])
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__error_retrieving_location_dialog_error_retrieving_location_dialog_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_homeless_tracking_service__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_gps_tracking_service__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapComponent = (function () {
    function MapComponent(dialog, router, gpsTracking, homelessTracking, snackBar) {
        this.dialog = dialog;
        this.router = router;
        this.gpsTracking = gpsTracking;
        this.homelessTracking = homelessTracking;
        this.snackBar = snackBar;
        this.genders = [
            { value: 'u', viewValue: 'Unknown' },
            { value: 'm', viewValue: 'Male' },
            { value: 'f', viewValue: 'Female' }
        ];
        this.races = [
            { value: 'u', viewValue: 'Unknown' },
            { value: 'w', viewValue: 'Caucasian' },
            { value: 'b', viewValue: 'African American' },
            { value: 'h', viewValue: 'Hispanic' },
            { value: 'a', viewValue: 'Asian' }
        ];
        this.pictureUpladed = null;
        this.mapConfig = null;
        this.selectedGender = 'u';
        this.selectedRace = 'u';
        this.comments = '';
    }
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.gpsTracking.getLatLon$().subscribe(function (pos) {
            if (pos === null) {
                _this.errorOut();
            }
            else {
                _this.mapConfig = pos;
            }
        });
    };
    MapComponent.prototype.errorOut = function () {
        var _this = this;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_2__error_retrieving_location_dialog_error_retrieving_location_dialog_component__["a" /* ErrorRetrievingLocationDialogComponent */])
            .afterClosed()
            .subscribe(function (result) {
            _this.router.navigate(['/']);
        });
    };
    MapComponent.prototype.fileUploaded = function (event) {
        this.pictureUpladed = event.src;
    };
    MapComponent.prototype.submitData = function () {
        var _this = this;
        if (this.pictureUpladed != null && this.mapConfig != null) {
            this.homelessTracking.submitHomelessSighting(this.mapConfig.lat, this.mapConfig.lon, this.pictureUpladed, {})
                .subscribe(function (response) {
                console.log(response);
                if (response.status === 'success') {
                    _this.router.navigate(['/']);
                    _this.snackBar.open('Succesfully Submitted', null, {
                        duration: 2000
                    });
                }
            }, function (e) {
                _this.snackBar.open('Error Submitting! Please Try Again Later', null, {
                    duration: 2000
                });
            });
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-map',
        template: __webpack_require__(253),
        styles: [__webpack_require__(245)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_gps_tracking_service__["a" /* GpsTrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_gps_tracking_service__["a" /* GpsTrackingService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_homeless_tracking_service__["a" /* HomelessTrackingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_homeless_tracking_service__["a" /* HomelessTrackingService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MdSnackBar */]) === "function" && _e || Object])
], MapComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(38);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarComponent = (function () {
    function ToolbarComponent(router) {
        this.router = router;
        this.title = '';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]; })
            .map(function (route) {
            switch (route.url) {
                case '/':
                    return 'muteh';
                case '/map':
                    return 'Tag Your Hobomon';
                default:
                    return '';
            }
        })
            .subscribe(function (route) {
            console.log(route);
            _this.title = route;
        });
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__(254),
        styles: [__webpack_require__(246)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], ToolbarComponent);

var _a;
//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "small {\r\n    padding-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 244:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "sebm-google-map {\r\n    height: 100%;\r\n}\r\n\r\n.mat-raised-button {\r\n    background-color: #9cba64;\r\n}\r\n\r\nmd-select {\r\n    margin-top: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 246:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(12)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "<md-sidenav-container fxLayout=\"column\" fxFlex>\n\n    <md-sidenav #sidenav mode=\"side\">\n        Hey\n    </md-sidenav>\n\n    <div fxLayout=\"column\" fxFlex>\n\n        <app-toolbar></app-toolbar>\n\n        <div fxLayout=\"column\" fxFlex>\n            <router-outlet></router-outlet>\n        </div>\n\n    </div>\n\n</md-sidenav-container>"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<h1 md-dialog-title>\n    Error Retrieving Location\n</h1>\n<p md-dialog-content>\n    There was an error retriving your location. Unfortuantly you will be unable to record any sighting\n</p>"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<div fxLayoutAlign=\"start center\" fxFlex fxLayout=\"column\">\n    <div fxFlex></div>\n    <img style=\"width: 60%;\" src=\"http://localhost:4200/assets/L-Muteh-Logo-Black.png\">\n    <h2>{{appName}}</h2>\n    <h5 style=\"margin-top:0px\">Stopping Homelessness One Photo At A Time</h5>\n    <button (click)=\"recordSighting()\" md-raised-button>Record Sighting</button>\n    <div fxFlex></div>\n    <small>\n      <a href=\"https://github.com/EliCDavis\">Eli Davis</a> - \n      <a href=\"http://joshua.church\">Joshua Church</a> - \n      <a href=\"https://github.com/ChandlerRDill\">Chandler Dill</a>\n    </small>\n</div>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div fxFlex fxLayout=\"column\">\n\n    <sebm-google-map *ngIf=\"mapConfig != null\" fxFlex [latitude]=\"mapConfig.lat\" [longitude]=\"mapConfig.lon\" [zoom]=\"mapConfig.zoom\">\n        <sebm-google-map-marker [latitude]=\"mapConfig.lat\" [longitude]=\"mapConfig.lon\">\n        </sebm-google-map-marker>\n    </sebm-google-map>\n\n    <image-upload *ngIf=\"pictureUpladed == null\" (onFileUploadFinish)=\"fileUploaded($event)\" [buttonCaption]=\"'Provide Image (Required)'\"></image-upload>\n\n    <div *ngIf=\"pictureUpladed != null\" fxLayout=\"column\" style=\"margin: 10px\">\n\n        <small>\n            Provide Any Extra Data:\n        </small>\n\n        <md-select placeholder=\"Gender\" [(ngModel)]=\"selectedGender\" name=\"gender\">\n            <md-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\n                {{gender.viewValue}}\n            </md-option>\n        </md-select>\n\n        <md-select placeholder=\"Race\" [(ngModel)]=\"selectedRace\" name=\"race\">\n            <md-option *ngFor=\"let race of races\" [value]=\"race.value\">\n                {{race.viewValue}}\n            </md-option>\n        </md-select>\n\n        <md-input-container class=\"example-full-width\">\n            <textarea mdInput [value]=\"comments\" placeholder=\"Enter Any Comments...\"></textarea>\n        </md-input-container>\n\n\n        <button (click)=\"submitData()\" style=\"background-color: #9cba64 \" md-raised-button>Submit</button>\n\n    </div>\n\n</div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<md-toolbar fxLayout=\"column\">\n    <!--<button md-raised-button (click)=\"sidenav.toggle()\">\n        <md-icon>home</md-icon>\n    </button>-->\n\n    <div style=\"color: white\">{{title}}</div>\n\n</md-toolbar>"

/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ })

},[304]);
//# sourceMappingURL=main.bundle.js.map