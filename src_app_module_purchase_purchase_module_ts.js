"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_purchase_purchase_module_ts"],{

/***/ 49178:
/*!************************************************************!*\
  !*** ./src/app/module/purchase/purchase-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseRoutingModule": () => (/* binding */ PurchaseRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase/purchase.component */ 46163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '', component: _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_0__.PurchaseComponent
    }];
class PurchaseRoutingModule {
}
PurchaseRoutingModule.ɵfac = function PurchaseRoutingModule_Factory(t) { return new (t || PurchaseRoutingModule)(); };
PurchaseRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PurchaseRoutingModule });
PurchaseRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PurchaseRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 92168:
/*!****************************************************!*\
  !*** ./src/app/module/purchase/purchase.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseModule": () => (/* binding */ PurchaseModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-routing.module */ 49178);
/* harmony import */ var _purchase_purchase_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase/purchase.component */ 46163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class PurchaseModule {
}
PurchaseModule.ɵfac = function PurchaseModule_Factory(t) { return new (t || PurchaseModule)(); };
PurchaseModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PurchaseModule });
PurchaseModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PurchaseModule, { declarations: [_purchase_purchase_component__WEBPACK_IMPORTED_MODULE_1__.PurchaseComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchaseRoutingModule] }); })();


/***/ }),

/***/ 89879:
/*!******************************************************!*\
  !*** ./src/app/module/purchase/purchase/mustache.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mustachePayload": () => (/* binding */ mustachePayload)
/* harmony export */ });
const mustachePayload = {
    companyName: 'Vyasaka Technologies',
    gMail: 'vyasaka@gmail.com',
    contactNumber: '8220348883',
    address: '8/1 B Block Madippakam, Chennai, Tamil Nadu, 600078',
    customerID: 'CUST12345',
    image: 'https://dashboard.vedna.in/assets/logo/vedna.jpg',
    customerName: 'Radhika',
    customerEmail: 'radhika@gmail.com',
    customerBilling: '23 South street, Mambalam, Kanchipuram, Tamil Nadu, 600044',
    currentDate: '11/07/2025',
    BillDate: '11/07/2025',
    totalAmount: 1000,
    currency: 'INR',
    itemsTable: 'itm-69',
    totalQuantity: 10,
    terms: [
        { name: "Goods once sold can't be taken back." },
        { name: 'Interest will be 24% on bill if payment not received within 15 days.' },
    ]
};


/***/ }),

/***/ 46163:
/*!****************************************************************!*\
  !*** ./src/app/module/purchase/purchase/purchase.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchaseComponent": () => (/* binding */ PurchaseComponent)
/* harmony export */ });
/* harmony import */ var _mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mustache */ 89879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function PurchaseComponent_li_188_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const term_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](term_r1.name);
} }
class PurchaseComponent {
    constructor() {
        this.terms = [];
    }
    ngOnInit() {
        Object.assign(this, _mustache__WEBPACK_IMPORTED_MODULE_0__.mustachePayload);
    }
}
PurchaseComponent.ɵfac = function PurchaseComponent_Factory(t) { return new (t || PurchaseComponent)(); };
PurchaseComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PurchaseComponent, selectors: [["app-purchase"]], decls: 203, vars: 14, consts: [[2, "max-width", "210mm", "width", "100%", "min-height", "100vh", "background-color", "white", "margin", "0 auto", "font-family", "Arial, sans-serif", "font-size", "clamp(12px, 2vw, 14px)", "border", "1px solid #000", "padding", "5%", "box-sizing", "border-box"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-between", "align-items", "center", "gap", "1rem"], ["alt", "staff photo", 2, "border-radius", "0.25rem", "max-width", "120px", "height", "auto", "object-fit", "cover", 3, "src"], [2, "margin", "0", "font-size", "clamp(1.25rem, 4vw, 1.5rem)"], [2, "display", "block", "height", "2px", "background-color", "black"], ["width", "100%", "cellpadding", "6", "cellspacing", "0", 1, "table-bordered", 2, "border", "1px", "border-collapse", "collapse", "margin", "0"], ["width", "50%", 2, "border", "1px solid #000"], [2, "border", "1px solid #000"], ["width", "100%", "cellpadding", "6", "cellspacing", "0", 1, "table", "table-bordered", 2, "margin-bottom", "0px", "margin-top", "1px", "border-collapse", "collapse"], [2, "overflow-x", "auto"], ["width", "100%", "cellpadding", "6", "cellspacing", "0", 1, "table", "table-bordered", 2, "border", "1px solid", "border-collapse", "collapse", "margin-top", "1px", "text-align", "center"], [2, "background-color", "#f2f2f2"], [2, "border", "1px solid #000", "padding", "6px", "white-space", "nowrap"], [2, "border", "1px solid #000", "padding", "6px"], [2, "display", "flex", "flex-wrap", "wrap", "gap", "0.5rem", "margin-top", "0.5rem"], [2, "flex", "2", "min-width", "250px"], [2, "margin-bottom", "0", "padding-left", "1rem"], [4, "ngFor", "ngForOf"], [2, "flex", "1", "min-width", "200px"], ["width", "100%", 2, "border-collapse", "collapse"]], template: function PurchaseComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Price quotation");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br")(7, "span", 4)(8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table", 5)(10, "tr")(11, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "From");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "To");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tr")(16, "td", 7)(17, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "td", 7)(21, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "tr")(25, "td", 7)(26, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td", 7)(30, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "tr")(34, "td", 7)(35, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "GSTIN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td", 7)(38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "GSTIN:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr")(41, "td", 7)(42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Phone#/Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "td", 7)(46, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Phone#/Email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "table", 8)(50, "tr")(51, "td", 7)(52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Date:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "td", 7)(56, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Total Payable:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 9)(60, "table", 10)(61, "tr", 11)(62, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Item Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "UOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](73, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](74, "th", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "tr")(77, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "ITM-1001");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "LUBE OIL & MGO FOR VOYAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "\u20B93,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "LTRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](90, "\u20B930,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "tr")(92, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "ITM-1001");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "LUBE OIL & MGO FOR VOYAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](97, "\u20B93,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "LTRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105, "\u20B930,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "tr")(107, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "ITM-1002");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "FRESH WATER MAKER SPARES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](112, "\u20B91,500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, "PCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](118, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120, "\u20B915,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "tr")(122, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](123, "ITM-1001");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "LUBE OIL & MGO FOR VOYAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "\u20B93,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](129, "LTRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](131, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](133, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "\u20B930,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "tr")(137, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "ITM-1002");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](140, "FRESH WATER MAKER SPARES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](142, "\u20B91,500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](144, "PCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](146, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "\u20B915,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "tr")(152, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "ITM-1001");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "LUBE OIL & MGO FOR VOYAGE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "\u20B93,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159, "LTRS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](163, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165, "\u20B930,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "tr")(167, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "ITM-1002");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "FRESH WATER MAKER SPARES");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](172, "\u20B91,500.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "PCS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](176, "10");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "\u20B90.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "\u20B915,000.00");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 14)(182, "div", 15)(183, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "TERMS & CONDITIONS:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](185, "br")(186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, PurchaseComponent_li_188_Template, 2, 1, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "div", 18)(190, "table", 19)(191, "tr")(192, "td", 13)(193, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Total qty :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](196);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "tr")(198, "td", 13)(199, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "Total Payable:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customerBilling);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", ctx.contactNumber, " / ", ctx.gMail, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.customerEmail, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.BillDate, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.totalAmount, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Amount (", ctx.currency, ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalAmount);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_module_purchase_purchase_module_ts.js.map