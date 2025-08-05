"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_divs_divs_module_ts"],{

/***/ 68303:
/*!****************************************************!*\
  !*** ./src/app/module/divs/divs-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivsRoutingModule": () => (/* binding */ DivsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _divs_divs_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divs/divs.component */ 50511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '', component: _divs_divs_component__WEBPACK_IMPORTED_MODULE_0__.DivsComponent
    }];
class DivsRoutingModule {
}
DivsRoutingModule.ɵfac = function DivsRoutingModule_Factory(t) { return new (t || DivsRoutingModule)(); };
DivsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DivsRoutingModule });
DivsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DivsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 46174:
/*!********************************************!*\
  !*** ./src/app/module/divs/divs.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivsModule": () => (/* binding */ DivsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _divs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./divs-routing.module */ 68303);
/* harmony import */ var _divs_divs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./divs/divs.component */ 50511);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class DivsModule {
}
DivsModule.ɵfac = function DivsModule_Factory(t) { return new (t || DivsModule)(); };
DivsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: DivsModule });
DivsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _divs_routing_module__WEBPACK_IMPORTED_MODULE_0__.DivsRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DivsModule, { declarations: [_divs_divs_component__WEBPACK_IMPORTED_MODULE_1__.DivsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _divs_routing_module__WEBPACK_IMPORTED_MODULE_0__.DivsRoutingModule] }); })();


/***/ }),

/***/ 50511:
/*!****************************************************!*\
  !*** ./src/app/module/divs/divs/divs.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DivsComponent": () => (/* binding */ DivsComponent)
/* harmony export */ });
/* harmony import */ var _mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mustache */ 68331);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function DivsComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10)(5, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", card_r1.label, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getCardValue(card_r1.key));
} }
class DivsComponent {
    constructor() {
        this.data = _mustache__WEBPACK_IMPORTED_MODULE_0__.mustachePayload;
    }
    ngOnInit() { }
    getCardValue(key) {
        return this.data[key] || '';
    }
}
DivsComponent.ɵfac = function DivsComponent_Factory(t) { return new (t || DivsComponent)(); };
DivsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DivsComponent, selectors: [["app-divs"]], decls: 9, vars: 1, consts: [[1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], [1, "card-body"], [1, "container", "mt-4"], [1, "row"], ["class", "col-md-4 mb-3", 4, "ngFor", "ngForOf"], [1, "col-md-4", "mb-3"], [1, "card", "h-100", "shadow-sm"], [1, "card-header", "text-center"], [1, "card-body", "text-center"], [1, "card-text"]], template: function DivsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Standard Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DivsComponent_div_8_Template, 7, 2, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.cards);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXZzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 68331:
/*!**********************************************!*\
  !*** ./src/app/module/divs/divs/mustache.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mustachePayload": () => (/* binding */ mustachePayload)
/* harmony export */ });
const mustachePayload = {
    cards: [
        { id: 2, key: 'card2', label: 'Card B' },
        { id: 1, key: 'card1', label: 'Card A' },
        { id: 3, key: 'card3', label: 'Card C' },
        { id: 4, key: 'card4', label: 'Card D' },
        { id: 5, key: 'card5', label: 'Card E' },
        { id: 6, key: 'card6', label: 'Card F' },
        { id: 7, key: 'card7', label: 'Card G' },
        { id: 8, key: 'card8', label: 'Card H' }
    ],
    card1: 'This is card 1 description',
    card2: 'This is card 2 description',
    card3: 'This is card 3 description',
    card4: 'This is card 4 description',
    card5: 'This is card 5 description',
    card6: 'This is card 6 description',
    card7: 'This is card 7 description',
    card8: 'This is card 8 description',
};


/***/ })

}]);
//# sourceMappingURL=src_app_module_divs_divs_module_ts.js.map