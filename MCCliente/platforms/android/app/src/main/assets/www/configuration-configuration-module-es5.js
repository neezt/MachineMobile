(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["configuration-configuration-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration.page.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration.page.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n<ion-content>\n   <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <a (click)=\"goToBack()\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n        </a>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<ion-card>\n  <ion-card-content>\n        <ion-item>\n          <ion-label position=\"floating\">Empresa:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.empresa\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Nombre:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.name\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Correo:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.email\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Correo Alterno:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.emailAdicional\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Teléfono:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.telefono\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Celular:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.celular\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Dirección:</ion-label>\n          <ion-input [(ngModel)]=\"empresa.direccion\"></ion-input>\n        </ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col offset=\"3\">\n              <ion-button color=\"primary\" size=\"small\">\n                Solicitar Cambios\n              </ion-button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      \n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/configuration/configuration.module.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/configuration/configuration.module.ts ***!
          \*******************************************************/
        /*! exports provided: ConfigurationPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPageModule", function () { return ConfigurationPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _configuration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./configuration.page */ "./src/app/configuration/configuration.page.ts");
            var routes = [
                {
                    path: '',
                    component: _configuration_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationPage"]
                }
            ];
            var ConfigurationPageModule = /** @class */ (function () {
                function ConfigurationPageModule() {
                }
                return ConfigurationPageModule;
            }());
            ConfigurationPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_configuration_page__WEBPACK_IMPORTED_MODULE_6__["ConfigurationPage"]]
                })
            ], ConfigurationPageModule);
            /***/ 
        }),
        /***/ "./src/app/configuration/configuration.page.scss": 
        /*!*******************************************************!*\
          !*** ./src/app/configuration/configuration.page.scss ***!
          \*******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/configuration/configuration.page.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/configuration/configuration.page.ts ***!
          \*****************************************************/
        /*! exports provided: ConfigurationPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationPage", function () { return ConfigurationPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/authentication.service */ "./src/app/api/authentication.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var ConfigurationPage = /** @class */ (function () {
                function ConfigurationPage(router, authService) {
                    this.router = router;
                    this.authService = authService;
                    this.empresa = {};
                }
                ConfigurationPage.prototype.ngOnInit = function () {
                    var _this = this;
                    console.log("inicia conf");
                    this.authService.getUrlClientGet("/cliente", {})
                        .then(function (data) {
                        console.log(data);
                        _this.empresa = data.credentials;
                    });
                };
                ConfigurationPage.prototype.goToBack = function () {
                    this.router.navigateByUrl('/geolocation');
                };
                ConfigurationPage.prototype.ngOnDestroy = function () {
                    this.backButtonSubscription.unsubscribe();
                };
                return ConfigurationPage;
            }());
            ConfigurationPage.ctorParameters = function () { return [
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
                { type: _api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
            ]; };
            ConfigurationPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-configuration',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./configuration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/configuration/configuration.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./configuration.page.scss */ "./src/app/configuration/configuration.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
                    _api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
            ], ConfigurationPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=configuration-configuration-module-es2015.js.map
//# sourceMappingURL=configuration-configuration-module-es5.js.map
//# sourceMappingURL=configuration-configuration-module-es5.js.map