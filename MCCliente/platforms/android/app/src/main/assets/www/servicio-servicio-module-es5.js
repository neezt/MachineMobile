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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-servicio-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio/servicio.page.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicio/servicio.page.html ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <a (click)=\"goToBack()\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n        </a>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n        <ion-item>\n          <ion-label position=\"floating\">Servicio:</ion-label>\n          <ion-input disabled value=\"{{servicio.servicio}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Tipo de Servicio:</ion-label>\n          <ion-input disabled value=\"{{servicio.tipo}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Servicio:</ion-label>\n          <ion-datetime disabled value=\"{{servicio.dateServicio}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Estatus de Servicio:</ion-label>\n          <ion-input disabled value=\"{{servicio.status}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Equipo:</ion-label>\n          <ion-input disabled value=\"{{servicio.equipo}}\"></ion-input>\n        </ion-item>\n        <div padding>\n        <img src=\"/assets/shapes.svg\" >\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Descripción General de Servicio:</ion-label>          \n          <ion-textarea disabled value=\"{{servicio.descripcion}}\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Sección de Falla:</ion-label>\n          <ion-input disabled value=\"{{servicio.seccionFalla}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Frecuencia de Falla:</ion-label>\n          <ion-input disabled value=\"{{servicio.frecuenciaFalla}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Severidad:</ion-label>\n          <ion-input disabled value=\"{{servicio.severidad}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Plataforma:</ion-label>\n          <ion-input disabled value=\"{{servicio.plataforma}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Estatus de Equipo:</ion-label>\n          <ion-input disabled value=\"{{servicio.statusEquipo}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Inicio de Servicio:</ion-label>       \n          <ion-datetime></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Finalización de servicio:</ion-label>\n          <ion-datetime></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Tiempo de Trabajo Total:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Comentarios:</ion-label>          \n          <ion-textarea></ion-textarea>\n        </ion-item>\n        <ion-item padding>\n          <a href=\"/notas\">Notas de Especialistas</a>\n        </ion-item>\n        \n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"3\">\n        <ion-button [hidden]=showCancel color=\"danger\" size=\"small\" (click)=\"cancelaServicio()\">Cancelar Servicio</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/servicio/servicio.module.ts": 
        /*!*********************************************!*\
          !*** ./src/app/servicio/servicio.module.ts ***!
          \*********************************************/
        /*! exports provided: ServicioPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPageModule", function () { return ServicioPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio.page */ "./src/app/servicio/servicio.page.ts");
            var routes = [
                {
                    path: '',
                    component: _servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]
                }
            ];
            var ServicioPageModule = /** @class */ (function () {
                function ServicioPageModule() {
                }
                return ServicioPageModule;
            }());
            ServicioPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]]
                })
            ], ServicioPageModule);
            /***/ 
        }),
        /***/ "./src/app/servicio/servicio.page.scss": 
        /*!*********************************************!*\
          !*** ./src/app/servicio/servicio.page.scss ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/servicio/servicio.page.ts": 
        /*!*******************************************!*\
          !*** ./src/app/servicio/servicio.page.ts ***!
          \*******************************************/
        /*! exports provided: ServicioPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPage", function () { return ServicioPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/authentication.service */ "./src/app/api/authentication.service.ts");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            var ServicioPage = /** @class */ (function () {
                function ServicioPage(authService, thisRoute, router, alertController) {
                    var _this = this;
                    this.authService = authService;
                    this.thisRoute = thisRoute;
                    this.router = router;
                    this.alertController = alertController;
                    this.servicio = { "servicio": 1,
                        "id": "",
                        "status": "" };
                    this.showCancel = true;
                    this.thisRoute.queryParams.subscribe(function (params) {
                        _this.getServicio(params.servicio);
                    });
                    console.log(this.thisRoute.snapshot.paramMap);
                }
                ServicioPage.prototype.ngOnInit = function () {
                };
                ServicioPage.prototype.getServicio = function (id) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    console.log(id);
                                    return [4 /*yield*/, this.authService.getUrlClientPost("/servicio", { "servicio": id })
                                            .then(function (data) {
                                            _this.servicio = data[0];
                                            if (_this.servicio.status !== 'Cancelado') {
                                                _this.showCancel = false;
                                            }
                                            console.log(_this.servicio);
                                        })];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                ServicioPage.prototype.goToBack = function () {
                    this.router.navigateByUrl('/servicios');
                };
                ServicioPage.prototype.ngOnDestroy = function () {
                    this.backButtonSubscription.unsubscribe();
                };
                ServicioPage.prototype.cancelaServicio = function () {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var alert;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertController.create({
                                        header: 'Cancelar Servicio #' + this.servicio.servicio,
                                        message: 'Deseas cancelar el servicio',
                                        buttons: [
                                            {
                                                text: 'No',
                                                role: 'cancel',
                                                cssClass: 'secondary',
                                                handler: function () {
                                                    console.log('Confirm Cancel');
                                                }
                                            }, {
                                                text: 'Si',
                                                handler: function () {
                                                    console.log(_this.servicio.id);
                                                    var serv = { "servicio": _this.servicio.id, "status": "Cancelado" };
                                                    _this.authService.getUrlClientPost("/servicio/update", serv)
                                                        .then(function (data) {
                                                        console.log('Confirm Ok');
                                                    });
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
                return ServicioPage;
            }());
            ServicioPage.ctorParameters = function () { return [
                { type: _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
            ]; };
            ServicioPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-servicio',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicio.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio/servicio.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servicio.page.scss */ "./src/app/servicio/servicio.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
                    _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]])
            ], ServicioPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=servicio-servicio-module-es2015.js.map
//# sourceMappingURL=servicio-servicio-module-es5.js.map
//# sourceMappingURL=servicio-servicio-module-es5.js.map