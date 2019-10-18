(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notas-notas-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/notas/notas.page.html": 
        /*!*****************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notas/notas.page.html ***!
          \*****************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<ion-card>\n  <ion-item>\n    <h2>Servicio #12323</h2>\n  </ion-item>\n  <ion-card-content>\n    <ion-row>\n      <ion-col>\n          <img src=\"/assets/shapes.svg\" height=\"75\" width=\"60\">\n      </ion-col>\n      <ion-col>\n        Una notal del especialista, demo, demo demo\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        30/09/2019\n      </ion-col>\n      <ion-col>\n        Néstor López\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-item>\n    <h2>Servicio #12323</h2>\n  </ion-item>\n  <ion-card-content>\n    <ion-row>\n      <ion-col>\n        Una notal del especialista, demo, demo demo\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        30/09/2019\n      </ion-col>\n      <ion-col>\n        Néstor López\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-item>\n    <h2>Servicio #12323</h2>\n  </ion-item>\n  <ion-card-content>\n    <ion-row>\n      <ion-col>\n          <img src=\"/assets/shapes.svg\" height=\"75\" width=\"60\">\n      </ion-col>\n      <ion-col>\n        Una notal del especialista, demo, demo demo\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        30/09/2019\n      </ion-col>\n      <ion-col>\n        Néstor López\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n<ion-card>\n  <ion-item>\n    <h2>Servicio #12326</h2>\n  </ion-item>\n  <ion-card-content>\n    <ion-row>\n      <ion-col>\n          <img src=\"/assets/shapes.svg\" height=\"75\" width=\"60\">\n      </ion-col>\n      <ion-col>\n        Una notal del especialista, demo, demo demo\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        30/09/2019\n      </ion-col>\n      <ion-col>\n        Néstor López\n      </ion-col>\n    </ion-row>\n  </ion-card-content>\n</ion-card>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/notas/notas.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/notas/notas.module.ts ***!
          \***************************************/
        /*! exports provided: NotasPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPageModule", function () { return NotasPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _notas_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notas.page */ "./src/app/notas/notas.page.ts");
            var routes = [
                {
                    path: '',
                    component: _notas_page__WEBPACK_IMPORTED_MODULE_6__["NotasPage"]
                }
            ];
            var NotasPageModule = /** @class */ (function () {
                function NotasPageModule() {
                }
                return NotasPageModule;
            }());
            NotasPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_notas_page__WEBPACK_IMPORTED_MODULE_6__["NotasPage"]]
                })
            ], NotasPageModule);
            /***/ 
        }),
        /***/ "./src/app/notas/notas.page.scss": 
        /*!***************************************!*\
          !*** ./src/app/notas/notas.page.scss ***!
          \***************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGFzL25vdGFzLnBhZ2Uuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/notas/notas.page.ts": 
        /*!*************************************!*\
          !*** ./src/app/notas/notas.page.ts ***!
          \*************************************/
        /*! exports provided: NotasPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotasPage", function () { return NotasPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var NotasPage = /** @class */ (function () {
                function NotasPage() {
                }
                NotasPage.prototype.ngOnInit = function () {
                };
                return NotasPage;
            }());
            NotasPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-notas',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notas.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/notas/notas.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notas.page.scss */ "./src/app/notas/notas.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], NotasPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=notas-notas-module-es2015.js.map
//# sourceMappingURL=notas-notas-module-es5.js.map
//# sourceMappingURL=notas-notas-module-es5.js.map