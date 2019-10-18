(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicios-servicios-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/servicios.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/servicios.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"1\">\n        <a href=\"#\" (click)=\"goToBack()\">\n          <ion-icon\n            style=\"margin-top:10px;\"\n            name=\"arrow-dropleft-circle\"\n            size=\"large\"\n            color=\"primary\"\n          ></ion-icon>\n        </a>\n      </ion-col>\n      <ion-col>\n        <img src=\"/assets/icon/logo.png\" style=\"padding-left:10px;\" />\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <div padding>\n    <ion-button fill=\"clear\" (click)=\"alive = !alive\" size=\"small\">\n      <ion-text *ngIf=\"!alive\">\n        Mostrar\n      </ion-text>\n      <ion-text *ngIf=\"alive\">\n        Ocultar\n      </ion-text>\n    </ion-button>\n  </div>\n\n  <div *ngIf=\"alive\">\n    <ion-item>\n      <ion-label position=\"floating\">Servicio:</ion-label>\n      <ion-input [(ngModel)]=\"filter.servicio\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Desde:</ion-label>\n      <ion-datetime></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Hasta:</ion-label>\n      <ion-datetime></ion-datetime>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Estatus:</ion-label>\n      <ion-select [(ngModel)]=\"filter.status\">\n        <ion-select-option value=\"Activo\">Activo</ion-select-option>\n        <ion-select-option value=\"Inactivo\">Inactivo</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Soporte Técnico:</ion-label>\n      <ion-toggle checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mtto Preventivo:</ion-label>\n      <ion-toggle checked></ion-toggle>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mtto Correctivo:</ion-label>\n      <ion-toggle checked></ion-toggle>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col offset=\"4\">\n          <ion-button color=\"primary\" size=\"small\">\n            <ion-icon name=\"search\"></ion-icon>\n            Buscar\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <ion-item>\n    <ion-label position=\"floating\">Ordenar Por:</ion-label>\n    <ion-select>\n      <ion-select-option value=\"Fecha\" selected>Fecha</ion-select-option>\n      <ion-select-option value=\"Estatus\">Estatus</ion-select-option>\n      <ion-select-option value=\"Ticket\">Ticket</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-card\n    *ngFor=\"let servicio of servicios\"\n    href=\"/servicio?servicio={{servicio.servicio}}\"\n  >\n    <ion-item>\n      <h2>Servicio #{{ servicio.servicio }}</h2>\n    </ion-item>\n    <ion-card-content>\n      <ion-row>\n        <ion-col>Estatus: {{ servicio.status }}</ion-col>\n        <ion-col>Equipo: {{ servicio.equipo }}</ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          Especialista: Néstor López\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>Fecha: {{ servicio.dateServicio }}</ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/servicios/servicios.module.ts":
/*!***********************************************!*\
  !*** ./src/app/servicios/servicios.module.ts ***!
  \***********************************************/
/*! exports provided: ServiciosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPageModule", function() { return ServiciosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicios_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicios.page */ "./src/app/servicios/servicios.page.ts");







const routes = [
    {
        path: '',
        component: _servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]
    }
];
let ServiciosPageModule = class ServiciosPageModule {
};
ServiciosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_servicios_page__WEBPACK_IMPORTED_MODULE_6__["ServiciosPage"]]
    })
], ServiciosPageModule);



/***/ }),

/***/ "./src/app/servicios/servicios.page.scss":
/*!***********************************************!*\
  !*** ./src/app/servicios/servicios.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2lvcy9zZXJ2aWNpb3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/servicios/servicios.page.ts":
/*!*********************************************!*\
  !*** ./src/app/servicios/servicios.page.ts ***!
  \*********************************************/
/*! exports provided: ServiciosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiciosPage", function() { return ServiciosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/authentication.service */ "./src/app/api/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ServiciosPage = class ServiciosPage {
    constructor(authService, router, platform) {
        this.authService = authService;
        this.router = router;
        this.platform = platform;
        this.servicios = [];
        this.filter = {};
    }
    ngOnInit() {
        this.authService.getUrlClientPost("/servicio/getAll", {})
            .then(data => {
            console.log(data);
            this.servicios = data;
            console.log(this.servicios);
        });
        this.backButtonSubscription = this.platform.backButton.subscribe(() => {
            this.router.navigate(['geolocation']);
        });
    }
    goToBack() {
        this.router.navigateByUrl('/geolocation');
    }
    ngOnDestroy() {
        this.backButtonSubscription.unsubscribe();
    }
    goToServicioPage(event) {
        console.log(event);
        this.router.navigate(['servicio', { id: event }]);
    }
};
ServiciosPage.ctorParameters = () => [
    { type: _api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
ServiciosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicios',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./servicios.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/servicios/servicios.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./servicios.page.scss */ "./src/app/servicios/servicios.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]])
], ServiciosPage);



/***/ })

}]);
//# sourceMappingURL=servicios-servicios-module-es2015.js.map