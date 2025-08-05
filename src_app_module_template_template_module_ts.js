"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_template_template_module_ts"],{

/***/ 96934:
/*!************************************************************!*\
  !*** ./src/app/module/template/template-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateRoutingModule": () => (/* binding */ TemplateRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template/template.component */ 93883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '', component: _template_template_component__WEBPACK_IMPORTED_MODULE_0__.TemplateComponent
    }];
class TemplateRoutingModule {
}
TemplateRoutingModule.ɵfac = function TemplateRoutingModule_Factory(t) { return new (t || TemplateRoutingModule)(); };
TemplateRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TemplateRoutingModule });
TemplateRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TemplateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 74440:
/*!****************************************************!*\
  !*** ./src/app/module/template/template.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateModule": () => (/* binding */ TemplateModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _template_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template-routing.module */ 96934);
/* harmony import */ var _template_template_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template/template.component */ 93883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class TemplateModule {
}
TemplateModule.ɵfac = function TemplateModule_Factory(t) { return new (t || TemplateModule)(); };
TemplateModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _template_routing_module__WEBPACK_IMPORTED_MODULE_0__.TemplateRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_template_template_component__WEBPACK_IMPORTED_MODULE_1__.TemplateComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _template_routing_module__WEBPACK_IMPORTED_MODULE_0__.TemplateRoutingModule] }); })();


/***/ }),

/***/ 55338:
/*!**************************************************************!*\
  !*** ./src/app/module/template/template/mustache-payload.ts ***!
  \**************************************************************/
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
    image: 'assets/img/brand/image2.webp',
    customerName: 'Radhika',
    customerEmail: 'radhika@gmail.com',
    customerBilling: '23 South street, Mambalam, Kanchipuram, Tamil Nadu, 600044',
    currentDate: '11/07/2025',
    BillDate: '11/07/2025',
    totalAmount: 1000,
    currency: 1000,
    itemsTable: 'itm-69',
    totalQuantity: 10,
    terms: [
        { name: "Goods once sold can't be taken back." },
        { name: 'Interest will be 24% on bill if payment not received within 15 days.' },
    ]
};


/***/ }),

/***/ 93883:
/*!****************************************************************!*\
  !*** ./src/app/module/template/template/template.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TemplateComponent": () => (/* binding */ TemplateComponent)
/* harmony export */ });
/* harmony import */ var _mustache_payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mustache-payload */ 55338);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function TemplateComponent_li_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const term_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](term_r1.name);
} }
class TemplateComponent {
    constructor() {
        this.terms = [];
    }
    ngOnInit() {
        Object.assign(this, _mustache_payload__WEBPACK_IMPORTED_MODULE_0__.mustachePayload);
    }
}
TemplateComponent.ɵfac = function TemplateComponent_Factory(t) { return new (t || TemplateComponent)(); };
TemplateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TemplateComponent, selectors: [["app-template"]], decls: 122, vars: 12, consts: [[1, "bg-white", "mx-auto", "p-4", "shadow", 2, "width", "794px", "height", "1123px", "border", "1px solid #000"], [1, "card-header", "border"], [1, "row"], [1, "col-2", "d-flex", "align-items-center", "justify-content-center"], ["alt", "staff photo", 1, "rounded", "border", 2, "width", "130px", "height", "151px", "object-fit", "cover", 3, "src"], [1, "col-10", "text-left"], [1, "font-weight-bold", "text-center"], [1, "bg-dark", "p-1", "rounded", "mb-1"], [1, "fw-bold", "mt-2"], [1, "d-flex", "justify-content-between"], [1, "mb-1"], [1, "table", "table-bordered", "w-100", 2, "margin", "0", "border-collapse", "collapse"], [1, "col-8", 2, "border", "1px solid #000"], [2, "border", "1px solid #000"], [2, "text-align", "center"], [2, "width", "0", "border", "1px solid #000"], [2, "width", "180px", "border", "1px solid #000"], [2, "width", "50px", "border", "1px solid #000"], [2, "width", "80px", "border", "1px solid #000"], [2, "width", "150px", "border", "1px solid #000"], [2, "text-align", "right", "border", "1px solid #000"], ["colspan", "3", "rowspan", "5", 2, "border", "1px solid #000"], [1, "mb-2"], [1, "table"], [1, "table-bordered"], [1, "border-end"], [4, "ngFor", "ngForOf"], [2, "position", "relative"], [1, "mb-5"], [1, "text-center", "fw-bold", 2, "position", "absolute", "bottom", "10px", "right", "10px"]], template: function TemplateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "h4")(9, "strong", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "TAX INVOICE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9)(15, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "h5", 10)(21, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div")(23, "table", 11)(24, "tbody")(25, "tr")(26, "td", 12)(27, "div", 10)(28, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Client : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 10)(32, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Email: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 10)(36, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "CustomerID: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 10)(40, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Address: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td", 13)(44, "div", 10)(45, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Date: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 10)(49, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Transport:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 10)(52, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "LR No:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 10)(55, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Bundle :");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "table", 11)(58, "thead", 14)(59, "tr")(60, "th", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "S.no");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "th", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Particulars");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "HSN");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "th", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "th", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "TExable Value");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "tbody")(73, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "td", 13)(75, "td", 13)(76, "td", 13)(77, "td", 20)(78, "td", 20)(79, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "tr")(81, "td", 21)(82, "strong", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Bank Details :-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "br")(85, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, " Current A/c Name :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](87, "strong")(88, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, " Current A/c No :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "strong")(91, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " Bank :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "strong")(94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, " Branch :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](96, "strong")(97, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](98, " IFSC code :- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "strong")(100, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "td", 13)(102, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Grand Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](104, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](106, "td", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "table", 23)(108, "tbody", 24)(109, "tr")(110, "td", 25)(111, "div", 22)(112, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Terms : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](114, TemplateComponent_li_114_Template, 2, 1, "li", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "td", 27)(116, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "For ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](119);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Authorised Signatory");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.address, ",");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.contactNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customerEmail);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.customerID);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx.customerBilling, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.BillDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.totalAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.terms);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.companyName);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_module_template_template_module_ts.js.map