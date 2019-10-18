(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-rechazado-servicio-rechazado-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-rechazado/servicio-rechazado.page.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-rechazado/servicio-rechazado.page.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n        <div class=\"ion-text-center\" style=\"font-weight:bold; font-size:25px;\"> \n          Servicio<br/>\n          #21232<br/>\n        </div>\n        <div class=\"ion-text-center\"> \n          Rechazado<br/>\n          Contactar con un Supervisor\n        </div>\n         \n  <ion-grid padding>\n    <ion-row>\n      <ion-col>\n        Néstor López\n      </ion-col>\n      <ion-col class=\"ion-text-right\">\n        <ion-icon name=\"call\" size=\"large\"></ion-icon>\n        <ion-icon name=\"chatboxes\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Matias Marin\n      </ion-col>\n      <ion-col class=\"ion-text-right\">\n        <ion-icon name=\"call\" size=\"large\"></ion-icon>\n        <ion-icon name=\"chatboxes\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        Lydia Gonzalez\n      </ion-col>\n      <ion-col class=\"ion-text-right\">\n        <ion-icon name=\"call\" size=\"large\"></ion-icon>\n        <ion-icon name=\"chatboxes\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n        \n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/servicio-rechazado/servicio-rechazado.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/servicio-rechazado/servicio-rechazado.module.ts ***!
          \*****************************************************************/
        /*! exports provided: ServicioRechazadoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioRechazadoPageModule", function () { return ServicioRechazadoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _servicio_rechazado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio-rechazado.page */ "./src/app/servicio-rechazado/servicio-rechazado.page.ts");
            var routes = [
                {
                    path: '',
                    component: _servicio_rechazado_page__WEBPACK_IMPORTED_MODULE_6__["ServicioRechazadoPage"]
                }
            ];
            var ServicioRechazadoPageModule = /** @class */ (function () {
                function ServicioRechazadoPageModule() {
                }
                return ServicioRechazadoPageModule;
            }());
            ServicioRechazadoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_servicio_rechazado_page__WEBPACK_IMPORTED_MODULE_6__["ServicioRechazadoPage"]]
                })
            ], ServicioRechazadoPageModule);
            /***/ 
        }),
        /***/ "./src/app/servicio-rechazado/servicio-rechazado.page.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/servicio-rechazado/servicio-rechazado.page.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvLXJlY2hhemFkby9zZXJ2aWNpby1yZWNoYXphZG8ucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/servicio-rechazado/servicio-rechazado.page.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/servicio-rechazado/servicio-rechazado.page.ts ***!
          \***************************************************************/
        /*! exports provided: ServicioRechazadoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioRechazadoPage", function () { return ServicioRechazadoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ServicioRechazadoPage = /** @class */ (function () {
                function ServicioRechazadoPage() {
                }
                ServicioRechazadoPage.prototype.ngOnInit = function () {
                };
                return ServicioRechazadoPage;
            }());
            ServicioRechazadoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-servicio-rechazado',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicio-rechazado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-rechazado/servicio-rechazado.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servicio-rechazado.page.scss */ "./src/app/servicio-rechazado/servicio-rechazado.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ServicioRechazadoPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=servicio-rechazado-servicio-rechazado-module-es2015.js.map
//# sourceMappingURL=servicio-rechazado-servicio-rechazado-module-es5.js.map
//# sourceMappingURL=servicio-rechazado-servicio-rechazado-module-es5.js.map