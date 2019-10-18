(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-cancelado-servicio-cancelado-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-cancelado/servicio-cancelado.page.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-cancelado/servicio-cancelado.page.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n        <div class=\"ion-text-center\" style=\"font-weight:bold; font-size:25px;\"> \n          Servicio<br/>\n          #21232<br/>\n        </div>\n        <div class=\"ion-text-center\"> \n          Cancelado\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Empresa:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Cliente:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Especialista:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Solicitada:</ion-label>\n          <ion-datetime></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Comentarios:</ion-label>          \n          <ion-textarea></ion-textarea>\n        </ion-item>\n        <div class=\"ion-text-center\" \n        style=\"font-weight:bold; font-size:20px;\"> \n          Contactar a<br>\n          Néstor Lópéz\n        </div>\n         <ion-grid>\n          <ion-row>\n            <ion-col align-self-center offset=\"2\">\n                <ion-icon name=\"call\" style=\"font-size:80px;\" color=\"primary\"></ion-icon>\n            </ion-col>\n            <ion-col align-self-center>\n              <ion-icon name=\"chatboxes\" style=\"font-size:80px;\" color=\"success\"></ion-icon>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/servicio-cancelado/servicio-cancelado.module.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/servicio-cancelado/servicio-cancelado.module.ts ***!
          \*****************************************************************/
        /*! exports provided: ServicioCanceladoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioCanceladoPageModule", function () { return ServicioCanceladoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _servicio_cancelado_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio-cancelado.page */ "./src/app/servicio-cancelado/servicio-cancelado.page.ts");
            var routes = [
                {
                    path: '',
                    component: _servicio_cancelado_page__WEBPACK_IMPORTED_MODULE_6__["ServicioCanceladoPage"]
                }
            ];
            var ServicioCanceladoPageModule = /** @class */ (function () {
                function ServicioCanceladoPageModule() {
                }
                return ServicioCanceladoPageModule;
            }());
            ServicioCanceladoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_servicio_cancelado_page__WEBPACK_IMPORTED_MODULE_6__["ServicioCanceladoPage"]]
                })
            ], ServicioCanceladoPageModule);
            /***/ 
        }),
        /***/ "./src/app/servicio-cancelado/servicio-cancelado.page.scss": 
        /*!*****************************************************************!*\
          !*** ./src/app/servicio-cancelado/servicio-cancelado.page.scss ***!
          \*****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvLWNhbmNlbGFkby9zZXJ2aWNpby1jYW5jZWxhZG8ucGFnZS5zY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/servicio-cancelado/servicio-cancelado.page.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/servicio-cancelado/servicio-cancelado.page.ts ***!
          \***************************************************************/
        /*! exports provided: ServicioCanceladoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioCanceladoPage", function () { return ServicioCanceladoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ServicioCanceladoPage = /** @class */ (function () {
                function ServicioCanceladoPage() {
                }
                ServicioCanceladoPage.prototype.ngOnInit = function () {
                };
                return ServicioCanceladoPage;
            }());
            ServicioCanceladoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-servicio-cancelado',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicio-cancelado.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio-cancelado/servicio-cancelado.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servicio-cancelado.page.scss */ "./src/app/servicio-cancelado/servicio-cancelado.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ServicioCanceladoPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=servicio-cancelado-servicio-cancelado-module-es2015.js.map
//# sourceMappingURL=servicio-cancelado-servicio-cancelado-module-es5.js.map
//# sourceMappingURL=servicio-cancelado-servicio-cancelado-module-es5.js.map