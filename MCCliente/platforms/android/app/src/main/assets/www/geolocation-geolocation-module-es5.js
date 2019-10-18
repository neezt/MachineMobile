var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["geolocation-geolocation-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/geolocation/geolocation.page.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/geolocation/geolocation.page.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  \n  <ion-fab>\n    <ion-fab-button color=\"success\" size=\"small\" href=\"/configuration\">\n      <ion-icon ios=\"ios-settings\" md=\"md-settings\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  <ion-fab horizontal=\"end\" vertical=\"top\">\n    <ion-fab-button color=\"secondary\" size=\"small\" href=\"/servicios\">\n          <ion-icon ios=\"ios-list-box\" md=\"md-list-box\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n  \n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"3\">\n        <ion-fab \n            vertical=\"top\" >\n          <ion-fab-button class=\"fabMap\" (click)=\"presentAlert()\" color=\"light\">\n            <img src=\"/assets/images/logo_sh.png\">\n          </ion-fab-button>\n        </ion-fab>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <div #mapElement [ngClass]=\"ishidden ? 'map100' : 'map'\" ></div>\n\n  <ion-grid fixed [hidden]=ishidden>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-segment scrollable color=\"tertiary\">\n          <ion-segment-button\n            *ngFor=\"let servicio of servicios\"\n            value =\"{{ servicio}}\"\n            (click)=\"clickServicio(servicio)\">\n              <ion-label \n                style=\"padding-left:20px;padding-right:20px; font-weight:bold;\">\n                  {{ servicio }}\n              </ion-label>\n          </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  \n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/geolocation/geolocation.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/geolocation/geolocation.module.ts ***!
          \***************************************************/
        /*! exports provided: GeolocationPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPageModule", function () { return GeolocationPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _geolocation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geolocation.page */ "./src/app/geolocation/geolocation.page.ts");
            /* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
            var routes = [
                {
                    path: '',
                    component: _geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]
                }
            ];
            var GeolocationPageModule = /** @class */ (function () {
                function GeolocationPageModule() {
                }
                return GeolocationPageModule;
            }());
            GeolocationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_geolocation_page__WEBPACK_IMPORTED_MODULE_6__["GeolocationPage"]],
                    providers: [_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_7__["GoogleMaps"]]
                })
            ], GeolocationPageModule);
            /***/ 
        }),
        /***/ "./src/app/geolocation/geolocation.page.scss": 
        /*!***************************************************!*\
          !*** ./src/app/geolocation/geolocation.page.scss ***!
          \***************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".fabMap {\n  height: 150px !important;\n  width: 150px !important;\n  font-size: 18px;\n}\n\n.imgHeader {\n  height: 35%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VvbG9jYXRpb24vQzpcXFVzZXJzXFxuZXN0b3IubG9wZXpcXERvY3VtZW50c1xcbmVzdG9yXFxNQ01vYmlsZVxcTUNDbGllbnRlL3NyY1xcYXBwXFxnZW9sb2NhdGlvblxcZ2VvbG9jYXRpb24ucGFnZS5zY3NzIiwic3JjL2FwcC9nZW9sb2NhdGlvbi9nZW9sb2NhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2dlb2xvY2F0aW9uL2dlb2xvY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYWJNYXB7XHJcbiAgICBoZWlnaHQ6IDE1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuLmltZ0hlYWRlcntcclxuICAgIGhlaWdodDogMzUlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iLCIuZmFiTWFwIHtcbiAgaGVpZ2h0OiAxNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaW1nSGVhZGVyIHtcbiAgaGVpZ2h0OiAzNSU7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/geolocation/geolocation.page.ts": 
        /*!*************************************************!*\
          !*** ./src/app/geolocation/geolocation.page.ts ***!
          \*************************************************/
        /*! exports provided: GeolocationPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationPage", function () { return GeolocationPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/authentication.service */ "./src/app/api/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/fcm/ngx */ "./node_modules/@ionic-native/fcm/ngx/index.js");
            var GeolocationPage = /** @class */ (function () {
                function GeolocationPage(alertController, authService, platform, router, fcm) {
                    var _this = this;
                    this.alertController = alertController;
                    this.authService = authService;
                    this.platform = platform;
                    this.router = router;
                    this.fcm = fcm;
                    this.servicios = ['12121', '12234', '00121', '010121', '121212', '12121', '12234', '20121', '514131', '124232'];
                    this.ishidden = false;
                    this.fcm.getToken().then(function (token) {
                        console.log(token);
                        _this.authService.getUrlClientPost("/cliente/update", { "fcm": token })
                            .then(function (data) {
                            console.log(data);
                        });
                    });
                    this.fcm.onNotification().subscribe(function (data) {
                        console.log(data);
                        if (data.wasTapped) {
                            console.log('Received in background');
                        }
                        else {
                            console.log('Received in foreground');
                        }
                        _this.router.navigate([data.landing_page, data.servicio]);
                    });
                }
                GeolocationPage.prototype.ngOnInit = function () {
                    this.authService.getUrlClientGet("/cliente", {})
                        .then(function (data) {
                        console.log(data);
                    });
                };
                GeolocationPage.prototype.ngAfterViewInit = function () {
                    var _this = this;
                    this.platform.ready().then(function () {
                        _this.loadMap();
                    });
                };
                GeolocationPage.prototype.presentAlert = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var serv, alert;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    serv = {};
                                    serv["tipo"] = "";
                                    serv["seccionFalla"] = "";
                                    serv["frecuenciaFalla"] = "";
                                    serv["equipo"] = "";
                                    serv["descripcion"] = "";
                                    serv["status"] = "Nuevo";
                                    serv["statusEquipo"] = "";
                                    serv["plataforma"] = "";
                                    this.authService.getUrlClientPost("/servicio/add", { "servicio": serv })
                                        .then(function (data) {
                                    });
                                    return [4 /*yield*/, this.alertController.create({
                                            header: 'Solicitud enviada',
                                            message: 'Su solicitud ha sido creada, gracias',
                                            buttons: ['Enterado']
                                        })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                GeolocationPage.prototype.presentAlertPrompt = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var alert;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertController.create({
                                        header: 'Para continuar necesitas registrarte',
                                        inputs: [
                                            {
                                                name: 'name1',
                                                type: 'text',
                                                placeholder: 'Nombre Completo'
                                            },
                                            {
                                                name: 'name1',
                                                type: 'text',
                                                placeholder: 'Correo'
                                            },
                                            {
                                                name: 'name2',
                                                type: 'number',
                                                placeholder: 'Celular'
                                            }
                                        ],
                                        buttons: [
                                            {
                                                text: 'Cancelar',
                                                role: 'cancel',
                                                cssClass: 'secondary',
                                                handler: function () {
                                                    console.log('Confirm Cancel');
                                                }
                                            }, {
                                                text: 'Registrar',
                                                handler: function () {
                                                    console.log('Confirm Ok');
                                                }
                                            }
                                        ]
                                    })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                GeolocationPage.prototype.clickServicio = function (servicio) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            console.log("es un servicio " + servicio);
                            return [2 /*return*/];
                        });
                    });
                };
                GeolocationPage.prototype.loadMap = function () {
                    var map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMaps"].create('mapElement');
                    map.one(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["GoogleMapsEvent"].MAP_READY).then(function (data) {
                        var coordinates = new _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_2__["LatLng"](36.7783, 119.4179);
                        var position = {
                            target: coordinates,
                            zoom: 14
                        };
                        map.animateCamera(position);
                        var markerOptions = {
                            position: coordinates,
                            icon: "assets/icon/logopqno.png",
                            title: 'Hello California'
                        };
                        var marker = map.addMarker(markerOptions)
                            .then(function (marker) {
                            marker.showInfoWindow();
                        });
                    });
                };
                return GeolocationPage;
            }());
            GeolocationPage.ctorParameters = function () { return [
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
                { type: _api_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
                { type: _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('mapElement', { static: true }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
            ], GeolocationPage.prototype, "mapNativeElement", void 0);
            GeolocationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-geolocation',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./geolocation.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/geolocation/geolocation.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./geolocation.page.scss */ "./src/app/geolocation/geolocation.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
                    _api_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["Platform"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
                    _ionic_native_fcm_ngx__WEBPACK_IMPORTED_MODULE_6__["FCM"]])
            ], GeolocationPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=geolocation-geolocation-module-es2015.js.map
//# sourceMappingURL=geolocation-geolocation-module-es5.js.map
//# sourceMappingURL=geolocation-geolocation-module-es5.js.map