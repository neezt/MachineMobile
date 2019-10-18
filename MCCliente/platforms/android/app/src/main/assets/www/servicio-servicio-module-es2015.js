(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicio-servicio-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicio/servicio.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicio/servicio.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <a (click)=\"goToBack()\">\n        <ion-icon style=\"margin-top:10px;\" name=\"arrow-dropleft-circle\" size=\"large\" color=\"primary\"></ion-icon>\n        </a>\n      </ion-col>\n      <ion-col >\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n        <ion-item>\n          <ion-label position=\"floating\">Servicio:</ion-label>\n          <ion-input disabled value=\"{{servicio.servicio}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Tipo de Servicio:</ion-label>\n          <ion-input disabled value=\"{{servicio.tipo}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Servicio:</ion-label>\n          <ion-datetime disabled value=\"{{servicio.dateServicio}}\"></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Estatus de Servicio:</ion-label>\n          <ion-input disabled value=\"{{servicio.status}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Equipo:</ion-label>\n          <ion-input disabled value=\"{{servicio.equipo}}\"></ion-input>\n        </ion-item>\n        <div padding>\n        <img src=\"/assets/shapes.svg\" >\n        </div>\n        <ion-item>\n          <ion-label position=\"floating\">Descripción General de Servicio:</ion-label>          \n          <ion-textarea disabled value=\"{{servicio.descripcion}}\"></ion-textarea>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Sección de Falla:</ion-label>\n          <ion-input disabled value=\"{{servicio.seccionFalla}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Frecuencia de Falla:</ion-label>\n          <ion-input disabled value=\"{{servicio.frecuenciaFalla}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Severidad:</ion-label>\n          <ion-input disabled value=\"{{servicio.severidad}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Plataforma:</ion-label>\n          <ion-input disabled value=\"{{servicio.plataforma}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Estatus de Equipo:</ion-label>\n          <ion-input disabled value=\"{{servicio.statusEquipo}}\"></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Inicio de Servicio:</ion-label>       \n          <ion-datetime></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Fecha de Finalización de servicio:</ion-label>\n          <ion-datetime></ion-datetime>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Tiempo de Trabajo Total:</ion-label>\n          <ion-input></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Comentarios:</ion-label>          \n          <ion-textarea></ion-textarea>\n        </ion-item>\n        <ion-item padding>\n          <a href=\"/notas\">Notas de Especialistas</a>\n        </ion-item>\n        \n  <ion-grid>\n    <ion-row>\n      <ion-col offset=\"3\">\n        <ion-button [hidden]=showCancel color=\"danger\" size=\"small\" (click)=\"cancelaServicio()\">Cancelar Servicio</ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/servicio/servicio.module.ts":
/*!*********************************************!*\
  !*** ./src/app/servicio/servicio.module.ts ***!
  \*********************************************/
/*! exports provided: ServicioPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPageModule", function() { return ServicioPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicio_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicio.page */ "./src/app/servicio/servicio.page.ts");







const routes = [
    {
        path: '',
        component: _servicio_page__WEBPACK_IMPORTED_MODULE_6__["ServicioPage"]
    }
];
let ServicioPageModule = class ServicioPageModule {
};
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



/***/ }),

/***/ "./src/app/servicio/servicio.page.scss":
/*!*********************************************!*\
  !*** ./src/app/servicio/servicio.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvL3NlcnZpY2lvLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/servicio/servicio.page.ts":
/*!*******************************************!*\
  !*** ./src/app/servicio/servicio.page.ts ***!
  \*******************************************/
/*! exports provided: ServicioPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicioPage", function() { return ServicioPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/authentication.service */ "./src/app/api/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ServicioPage = class ServicioPage {
    constructor(authService, thisRoute, router, alertController) {
        this.authService = authService;
        this.thisRoute = thisRoute;
        this.router = router;
        this.alertController = alertController;
        this.servicio = { "servicio": 1,
            "id": "",
            "status": "" };
        this.showCancel = true;
        this.thisRoute.queryParams.subscribe(params => {
            this.getServicio(params.servicio);
        });
        console.log(this.thisRoute.snapshot.paramMap);
    }
    ngOnInit() {
    }
    getServicio(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(id);
            yield this.authService.getUrlClientPost("/servicio", { "servicio": id })
                .then(data => {
                this.servicio = data[0];
                if (this.servicio.status !== 'Cancelado') {
                    this.showCancel = false;
                }
                console.log(this.servicio);
            });
        });
    }
    goToBack() {
        this.router.navigateByUrl('/servicios');
    }
    ngOnDestroy() {
        this.backButtonSubscription.unsubscribe();
    }
    cancelaServicio() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Cancelar Servicio #' + this.servicio.servicio,
                message: 'Deseas cancelar el servicio',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Si',
                        handler: () => {
                            console.log(this.servicio.id);
                            let serv = { "servicio": this.servicio.id, "status": "Cancelado" };
                            this.authService.getUrlClientPost("/servicio/update", serv)
                                .then(data => {
                                console.log('Confirm Ok');
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ServicioPage.ctorParameters = () => [
    { type: _api_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
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



/***/ })

}]);
//# sourceMappingURL=servicio-servicio-module-es2015.js.map