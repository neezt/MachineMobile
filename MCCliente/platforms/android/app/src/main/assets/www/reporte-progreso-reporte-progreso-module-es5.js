(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporte-progreso-reporte-progreso-module"], {
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/reporte-progreso/reporte-progreso.page.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reporte-progreso/reporte-progreso.page.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n<div class=\"ion-text-center\" style=\"font-weight:bold; font-size:25px;\"> \n          Servicio<br/>\n          #21232<br/>\n        </div>\n        <div class=\"ion-text-center\"> \n            Reporte de Progreso\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Empresa:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Equipo:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <div padding>      \n          <img src=\"/assets/shapes.svg\">\n        </div>\n        <ion-grid padding>\n        <ion-row>\n          <ion-col>\n            Archivo Adjunto\n          </ion-col>\n          <ion-col>\n            <a > archivo.pdf</a>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n        <ion-item>\n          <ion-label position=\"floating\">Comentario:</ion-label>\n          <ion-textarea rows=\"5\"></ion-textarea>\n        </ion-item>\n</ion-content>\n");
            /***/ 
        }),
        /***/ "./src/app/reporte-progreso/reporte-progreso.module.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/reporte-progreso/reporte-progreso.module.ts ***!
          \*************************************************************/
        /*! exports provided: ReporteProgresoPageModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteProgresoPageModule", function () { return ReporteProgresoPageModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
            /* harmony import */ var _reporte_progreso_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reporte-progreso.page */ "./src/app/reporte-progreso/reporte-progreso.page.ts");
            var routes = [
                {
                    path: '',
                    component: _reporte_progreso_page__WEBPACK_IMPORTED_MODULE_6__["ReporteProgresoPage"]
                }
            ];
            var ReporteProgresoPageModule = /** @class */ (function () {
                function ReporteProgresoPageModule() {
                }
                return ReporteProgresoPageModule;
            }());
            ReporteProgresoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
                    ],
                    declarations: [_reporte_progreso_page__WEBPACK_IMPORTED_MODULE_6__["ReporteProgresoPage"]]
                })
            ], ReporteProgresoPageModule);
            /***/ 
        }),
        /***/ "./src/app/reporte-progreso/reporte-progreso.page.scss": 
        /*!*************************************************************!*\
          !*** ./src/app/reporte-progreso/reporte-progreso.page.scss ***!
          \*************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGUtcHJvZ3Jlc28vcmVwb3J0ZS1wcm9ncmVzby5wYWdlLnNjc3MifQ== */");
            /***/ 
        }),
        /***/ "./src/app/reporte-progreso/reporte-progreso.page.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/reporte-progreso/reporte-progreso.page.ts ***!
          \***********************************************************/
        /*! exports provided: ReporteProgresoPage */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReporteProgresoPage", function () { return ReporteProgresoPage; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ReporteProgresoPage = /** @class */ (function () {
                function ReporteProgresoPage() {
                }
                ReporteProgresoPage.prototype.ngOnInit = function () {
                };
                return ReporteProgresoPage;
            }());
            ReporteProgresoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-reporte-progreso',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reporte-progreso.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/reporte-progreso/reporte-progreso.page.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reporte-progreso.page.scss */ "./src/app/reporte-progreso/reporte-progreso.page.scss")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
            ], ReporteProgresoPage);
            /***/ 
        })
    }]);
//# sourceMappingURL=reporte-progreso-reporte-progreso-module-es2015.js.map
//# sourceMappingURL=reporte-progreso-reporte-progreso-module-es5.js.map
//# sourceMappingURL=reporte-progreso-reporte-progreso-module-es5.js.map