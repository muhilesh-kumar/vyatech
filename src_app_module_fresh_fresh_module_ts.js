"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_fresh_fresh_module_ts"],{

/***/ 22509:
/*!*****************************************************!*\
  !*** ./src/app/module/fresh/crud/crud.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrudComponent": () => (/* binding */ CrudComponent)
/* harmony export */ });
/* harmony import */ var _mustache_payload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mustache-payload */ 39711);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);




function CrudComponent_img_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 65);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r1.data.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function CrudComponent_div_183_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r8 = ctx.index;
    const rating_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", i_r8 < ctx_r6.Math.floor(rating_r5.rating) ? "fa-star" : i_r8 < rating_r5.rating ? "fa-star-half-o" : "fa-star-o");
} }
const _c0 = function () { return []; };
function CrudComponent_div_183_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 43)(1, "div", 66)(2, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CrudComponent_div_183_ng_container_7_Template, 2, 1, "ng-container", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const rating_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rating_r5.role, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", rating_r5.email, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0).constructor(5));
} }
const _c1 = function (a0) { return { "background-color": a0 }; };
function CrudComponent_div_226_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 71)(1, "div", 72)(2, "small", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const meter_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](meter_r10.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", meter_r10.value, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("width", meter_r10.value, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](6, _c1, meter_r10.color1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-valuenow", meter_r10.value);
} }
function CrudComponent_tr_244_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr")(1, "td", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td")(5, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_tr_244_Template_input_ngModelChange_5_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const metric_r11 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](metric_r11.rating = $event); })("ngModelChange", function CrudComponent_tr_244_Template_input_ngModelChange_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r15.calculateAverage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td")(7, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_tr_244_Template_input_ngModelChange_7_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const metric_r11 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](metric_r11.person1 = $event); })("ngModelChange", function CrudComponent_tr_244_Template_input_ngModelChange_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r17.calculateAverage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td")(9, "input", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_tr_244_Template_input_ngModelChange_9_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const metric_r11 = restoredCtx.$implicit; return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](metric_r11.person2 = $event); })("ngModelChange", function CrudComponent_tr_244_Template_input_ngModelChange_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r19.calculateAverage()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const metric_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", metric_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "rating_", i_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", metric_r11.rating);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "person1_", i_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", metric_r11.person1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("name", "person2_", i_r12, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", metric_r11.person2);
} }
class CrudComponent {
    constructor() {
        this.Math = Math;
        this.data = _mustache_payload__WEBPACK_IMPORTED_MODULE_0__.mustachePayload;
    }
    ngOnInit() {
    }
    calculateAverage() {
        if (this.data.reviewMetrics && this.data.reviewMetrics.length > 0) {
            const sum = this.data.reviewMetrics.reduce((total, metric) => total + metric.rating, 0);
            this.data.averageRate = parseFloat((sum / this.data.reviewMetrics.length).toFixed(1));
        }
    }
}
CrudComponent.ɵfac = function CrudComponent_Factory(t) { return new (t || CrudComponent)(); };
CrudComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CrudComponent, selectors: [["app-crud"]], decls: 258, vars: 33, consts: [[1, "card"], [1, "card-header"], [1, "fa", "fa-align-justify"], ["id", "screen", 1, "card-body"], ["screen", ""], [1, "scroll-mobile"], [1, "book"], [1, "page"], [1, "subpage"], [1, "row"], [1, "col-md-12"], [1, "card-header01"], [1, "row", "align-items-center"], [1, "col-md-4", "text-start"], [1, "fw-bold", "mb-2"], [1, "company-info"], [1, "mb-1"], [1, "col-md-4", "d-flex", "justify-content-center"], [1, "bg-white", "p-3", "rounded", "border", 2, "min-width", "300px"], [1, "row", "g-2", "text-center"], [1, "col-4"], [1, "text-muted"], [1, "text-info", "mb-0"], [1, "text-secondary", "mb-0"], [1, "text-dark", "mb-0"], [1, "col-md-4", "text-end"], ["alt", "staff photo", "class", "rounded", "style", "width: 120px; height: auto; object-fit: cover;", 3, "src", 4, "ngIf"], [1, "card-body"], [1, "red-line"], [1, "col-12"], [1, "col-6"], [1, "text-success", "mb-0"], [1, "text-danger", "mb-0"], [1, "text-warning", "mb-0"], [1, "text-primary", "mb-0"], [1, "row", "mb-3"], [1, "text-center", "mb-3", "fw-bold", "text-primary", "d-flex", "justify-content-center", "align-items-center", "gap-2"], [1, "fa", "fa-star", "text-warning"], [1, "row", "g-2"], ["class", "col-12 col-sm-6", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-3", "fw-bold", "text-danger", "d-flex", "justify-content-center", "align-items-center", "gap-2"], [1, "fa", "fa-exclamation-circle", "text-danger"], [1, "fa", "fa-check-circle", "text-success"], [1, "col-12", "col-sm-6"], [1, "border", "rounded-3", "p-3", "bg-light", "h-100"], [1, "fw-semibold", "text-center", "text-danger", "mb-2"], [1, "text-center"], [1, "text-danger", "mb-1"], [1, "text-center", "mt-2"], [1, "fw-semibold", "text-center", "text-success", "mb-2"], [1, "text-primary", "mb-1"], [1, "text-success", "mb-1"], [1, "row", "g-1", "mt-2"], [1, "card", "border-0"], [1, "card-header", "fw-semibold", "bg-light", "border-bottom"], [1, "card-body", "py-2", "px-3"], ["class", "mb-3", 4, "ngFor", "ngForOf"], [1, "table", "table-bordered", "table-sm", "mb-2", "text-center", "align-middle"], [1, "table-light"], [1, "text-start"], [4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-end", "align-items-center", "gap-2"], [1, "fw-semibold", "mb-0"], ["type", "number", "name", "averageRate", "readonly", "", 1, "form-control", "form-control-sm", 2, "width", "70px", 3, "ngModel", "ngModelChange"], ["rows", "8", "name", "overallReview", "placeholder", "Write review...", 1, "form-control", 3, "ngModel", "ngModelChange"], ["alt", "staff photo", 1, "rounded", 2, "width", "120px", "height", "auto", "object-fit", "cover", 3, "src"], [1, "border", "rounded-3", "p-3", "h-100", "d-flex", "flex-column", "justify-content-center", "align-items-center", "bg-light"], [1, "fw-semibold", "mb-1", "text-truncate", "w-100", "text-center"], [1, "small", "text-muted", "mb-2", "text-truncate", "w-100", "text-center"], [1, "fs-4", "text-warning"], [1, "fa", 3, "ngClass"], [1, "mb-3"], [1, "d-flex", "justify-content-between", "mb-1"], [1, "fw-semibold"], [1, "progress", 2, "height", "6px"], ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", 3, "ngStyle"], [1, "text-start", "small"], [1, "fa", "fa-angle-double-right", "me-1", "text-muted"], ["type", "number", 1, "form-control", "form-control-sm", 3, "ngModel", "name", "ngModelChange"]], template: function CrudComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Standard Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3, 4)(6, "div", 5)(7, "div", 6)(8, "div", 7)(9, "div", 8)(10, "form")(11, "div", 9)(12, "div", 10)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "h2", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 15)(19, "p", 16)(20, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "p", 16)(27, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17)(30, "div", 18)(31, "div", 19)(32, "div", 20)(33, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Joined");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 20)(38, "div")(39, "h5", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Intern Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 20)(44, "div")(45, "h5", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "Staff Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](50, CrudComponent_img_50_Template, 1, 1, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](52, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 9)(54, "div", 29)(55, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "div", 17)(58, "div", 18)(59, "div", 19)(60, "div", 30)(61, "div")(62, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Present Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 30)(67, "div")(68, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](71, "Absent Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 30)(73, "div")(74, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "Leave Days");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 30)(79, "div")(80, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Permission Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 20)(85, "div")(86, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "WFH Hours");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "div", 20)(91, "div")(92, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "WFH Dates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 20)(97, "div")(98, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Job Work IDs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 17)(103, "div", 18)(104, "div", 19)(105, "div", 30)(106, "div")(107, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Assigned Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 30)(112, "div")(113, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Completed");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 20)(118, "div")(119, "h5", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](120);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](121, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](122, "Rework");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 20)(124, "div")(125, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](126);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "In Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "div", 20)(130, "div")(131, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](132);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Total Jobs");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "div", 17)(136, "div", 18)(137, "div", 19)(138, "div", 20)(139, "div")(140, "h5", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Estimated Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "div", 20)(145, "div")(146, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](149, "Time Taken");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 20)(151, "div")(152, "h5", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](155, "Efficiency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 20)(157, "div")(158, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](159);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](161, "Overall Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 20)(163, "div")(164, "h5", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](165);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](167, "Actual Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "div", 20)(169, "div")(170, "h5", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Spent Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 35)(176, "div", 30)(177, "h5", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](180, "Ratings");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "i", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, CrudComponent_div_183_Template, 8, 4, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 30)(185, "h5", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "i", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](187, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](188, "Performance Summary");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](189, "i", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "div", 38)(191, "div", 43)(192, "div", 44)(193, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](194, "Rework Stats");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 46)(196, "h5", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](199, "Jobs Reworked");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](200, "div", 48)(201, "h6", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](204, "Rework Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](205, "div", 43)(206, "div", 44)(207, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "Positive Metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "div", 46)(210, "h5", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](211);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](212, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](213, "Efficiency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 48)(215, "h6", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](216);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](217, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](218, "Overall Quality");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](219, "hr", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "div", 52)(221, "div", 20)(222, "div", 53)(223, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](224, " Performance Meter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](226, CrudComponent_div_226_Template, 8, 8, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "div", 20)(228, "div", 53)(229, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](230, " Review Metrics ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "div", 55)(232, "table", 57)(233, "thead", 58)(234, "tr")(235, "th", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](236, "Metric");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](237, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](238, "P");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](239, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](240, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](241, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](242, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](243, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](244, CrudComponent_tr_244_Template, 10, 7, "tr", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 61)(246, "label", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](247, "Average:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](248, "input", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_Template_input_ngModelChange_248_listener($event) { return ctx.data.averageRate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 20)(250, "div", 53)(251, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](252, " Overall Review ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](253, "div", 55)(254, "textarea", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function CrudComponent_Template_textarea_ngModelChange_254_listener($event) { return ctx.data.overallReview = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "div", 46)(256, "small", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](257, "This is a computer-generated document. No signature is required.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.companyName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.data.email, " / ", ctx.data.contactNumber, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.gstNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.workingDuration, " ago ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data.image);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.presentDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.absentDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.leaveDays);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.permissionHours, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.wfhHours, " min ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.wfhDateCountLength || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.data.wfhTotalJobWorkIds || 0, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.totalAssigned) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.totalCompleted) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.totalRework) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.totalInProgress) || 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.jobWork.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx.data.managementSummary == null ? null : ctx.data.managementSummary.totalEstimatedTime) || 0, " min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", (ctx.data.managementSummary == null ? null : ctx.data.managementSummary.totalTimeTaken) || 0, " min");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.efficiency) || "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.overallQuality) || "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.jobWork.formattedTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.jobWork.formattedTakenTime);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.managementSummary.starRatings);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.efficiency) || "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"]((ctx.data.managementSummary == null ? null : ctx.data.managementSummary.overallQuality) || "N/A");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.qualityMeterData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.data.reviewMetrics);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.averageRate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.data.overallReview);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm], styles: [".red-hr[_ngcontent-%COMP%] {\n  border: 1px solid red;\n  margin: 10px 0;\n}\n\nbody[_ngcontent-%COMP%] {\n  font-family: Arial, sans-serif;\n  background-color: #f4f4f4;\n  color: #333;\n  margin: 0;\n  padding: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 8px;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n  background-color: #fff;\n}\n\n.card-header1[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #000;\n  padding: 0.2rem;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom: none;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  line-height: 1;\n}\n\n.card-header1[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.card-header1[_ngcontent-%COMP%]   .align-self-center[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.card-header01[_ngcontent-%COMP%] {\n  background-color: #fff;\n  color: #000;\n  padding: 15px;\n  border-top-left-radius: 8px;\n  border-top-right-radius: 8px;\n  border-bottom: none;\n  margin-bottom: 0;\n  padding: 0.5rem;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding-top: 0;\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  max-height: none;\n  overflow: visible;\n}\n\n.invoice-title[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin: 0;\n  text-align: left;\n}\n\n.logo[_ngcontent-%COMP%] {\n  max-width: 120px;\n  margin-bottom: 10px;\n}\n\n.company-info[_ngcontent-%COMP%] {\n  text-align: left;\n  font-size: 14px;\n  margin-top: 5px;\n}\n\nh5[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  font-size: larger;\n  color: #000;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 20px 0;\n  border-collapse: collapse;\n  margin-bottom: 0 !important;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  color: #000;\n  padding: 10px;\n  border: 1px solid #ddd;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #ddd;\n  vertical-align: middle;\n  text-align: center;\n}\n\n.table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   span.item-amount[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n\n.summary-row[_ngcontent-%COMP%] {\n  font-weight: bold;\n  background-color: #e9ecef;\n  font-size: 16px;\n}\n\n.text-right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n@media (max-width: 768px) {\n  .logo[_ngcontent-%COMP%] {\n    max-width: 100px;\n  }\n  .invoice-title[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .company-info[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .invoice-header[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n\n.red-line[_ngcontent-%COMP%] {\n  border: 0;\n  height: 5px;\n  background-color: red;\n  margin: 10px 0;\n  opacity: 100% !important;\n}\n\n.date-box[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 10px;\n}\n\n.date-item[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0 3px;\n  text-align: center;\n  padding: 5px;\n  border-radius: 3px;\n  color: black;\n}\n\n.date-item.red[_ngcontent-%COMP%] {\n  background-color: #ffcccc;\n}\n\n.date-item.orange[_ngcontent-%COMP%] {\n  background-color: #ffe5b4;\n}\n\n.date-item.cement[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n\n.date-item.blue[_ngcontent-%COMP%] {\n  background-color: #add8e6;\n}\n\n.proforma-title[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: bold;\n  margin: 0;\n}\n\n.signature[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n}\n\n\n\n@media only screen and (max-width: 768px) {\n  .page[_ngcontent-%COMP%] {\n    transform: scale(0.5); \n    transform-origin: top left;\n    margin: 0 5px; \n  }\n  .scroll-mobile[_ngcontent-%COMP%] {\n    overflow-x: auto; \n    -webkit-overflow-scrolling: touch; \n  }\n  \n  .table[_ngcontent-%COMP%] {\n    width: 100%;\n    font-size: medium;\n    margin: 3px 0;\n    table-layout: fixed; \n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1px; \n    border: 1px solid #ddd;\n    text-align: center;\n    overflow: hidden; \n    white-space: nowrap; \n    font-size: medium;\n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    background-color: #f8f9fa;\n  }\n  \n  .logo[_ngcontent-%COMP%] {\n    height: auto;\n  }\n  .invoice-title[_ngcontent-%COMP%] {\n    font-size: 10px;\n    text-align: center;\n  }\n  .company-info[_ngcontent-%COMP%] {\n    font-size: 5px;\n  }\n  .date-item[_ngcontent-%COMP%], .signature[_ngcontent-%COMP%], .summary-row[_ngcontent-%COMP%] {\n    font-size: 4px;\n  }\n  .date-box[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n  }\n  .date-item[_ngcontent-%COMP%] {\n    flex: 1;\n    padding: 4px;\n  }\n  .proforma-title[_ngcontent-%COMP%] {\n    font-size: 0.5rem;\n  }\n  .col-4[_ngcontent-%COMP%], .col-8[_ngcontent-%COMP%] {\n    font-size: larger;\n  }\n  \n  *[_ngcontent-%COMP%] {\n    margin: 0;\n    padding: 0;\n  }\n  \n  .text-right[_ngcontent-%COMP%], .text-center[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n\n\n\n@media only screen and (max-width: 1000px) {\n  .page[_ngcontent-%COMP%] {\n    transform: scale(0.37); \n    width: 210mm;\n    height: 110mm;\n  }\n  .invoice-title[_ngcontent-%COMP%], .company-info[_ngcontent-%COMP%], .table[_ngcontent-%COMP%], .date-item[_ngcontent-%COMP%], .signature[_ngcontent-%COMP%], .summary-row[_ngcontent-%COMP%] {\n    font-size: 15px; \n  }\n  .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1px; \n  }\n  .proforma-title[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  strong[_ngcontent-%COMP%] {\n    font-weight: bolder;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNydWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFRTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7QUFDRjs7QUFFSTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVFO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUU7RUFDQSxTQUFBO0FBQ0Y7O0FBRUU7RUFDQSxVQUFBO0FBQ0Y7O0FBRUU7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUU7RUFDQSxjQUFBO0FBQ0Y7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUU7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUU7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUU7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUU7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVFO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUU7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFRTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFRTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUU7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVFO0VBQ0EsaUJBQUE7QUFDRjs7QUFFRTtFQUNBO0lBQ0UsZ0JBQUE7RUFDRjtFQUVBO0lBQ0UsZUFBQTtFQUFGO0VBR0E7SUFDRSxlQUFBO0VBREY7RUFJQTtJQUNFLDJCQUFBO0VBRkY7QUFDRjs7QUFLRTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esd0JBQUE7QUFIRjs7QUFNRTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBTUU7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1FO0VBQ0EseUJBQUE7QUFIRjs7QUFPRTtFQUNBLHlCQUFBO0FBSkY7O0FBT0U7RUFDQSx5QkFBQTtBQUpGOztBQU9FO0VBQ0EseUJBQUE7QUFKRjs7QUFPRTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FBSkY7O0FBVUU7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBUEY7O0FBaUJFLHNDQUFBOztBQUNBO0VBQ0U7SUFDRSxxQkFBQSxFQUFBLHFDQUFBO0lBQ0EsMEJBQUE7SUFHQSxhQUFBLEVBQUEsb0JBQUE7RUFoQko7RUFvQkU7SUFDRSxnQkFBQSxFQUFBLDZDQUFBO0lBQ0EsaUNBQUEsRUFBQSw0QkFBQTtFQWxCSjtFQXFCRSxzQkFBQTtFQUNBO0lBQ0UsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBLEVBQUEsMkJBQUE7RUFuQko7RUFzQkU7SUFDRSxZQUFBLEVBQUEsbUNBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0lBQ0EsZ0JBQUEsRUFBQSxxQkFBQTtJQUNBLG1CQUFBLEVBQUEsMEJBQUE7SUFDQSxpQkFBQTtFQXBCSjtFQXVCRTtJQUNFLHlCQUFBO0VBckJKO0VBd0JFLHdCQUFBO0VBQ0E7SUFFRSxZQUFBO0VBdkJKO0VBMEJFO0lBQ0UsZUFBQTtJQUNBLGtCQUFBO0VBeEJKO0VBMkJFO0lBQ0UsY0FBQTtFQXpCSjtFQTRCRTtJQUNFLGNBQUE7RUExQko7RUE2QkU7SUFDRSxhQUFBO0lBQ0EsOEJBQUE7RUEzQko7RUE4QkU7SUFDRSxPQUFBO0lBQ0EsWUFBQTtFQTVCSjtFQStCRTtJQUNFLGlCQUFBO0VBN0JKO0VBZ0NFO0lBQ0UsaUJBQUE7RUE5Qko7RUFpQ0UsOEJBQUE7RUFDQTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBL0JKO0VBa0NFLG9CQUFBO0VBQ0E7SUFDRSxrQkFBQTtFQWhDSjtBQUNGOztBQW1DRSx3RUFBQTs7QUFDQTtFQUNFO0lBQ0Usc0JBQUEsRUFBQSwrQ0FBQTtJQUNBLFlBQUE7SUFDQSxhQUFBO0VBakNKO0VBb0NFO0lBQ0UsZUFBQSxFQUFBLDhDQUFBO0VBbENKO0VBcUNFO0lBQ0UsWUFBQSxFQUFBLG1DQUFBO0VBbkNKO0VBc0NFO0lBQ0UsaUJBQUE7RUFwQ0o7RUF1Q0c7SUFDQyxtQkFBQTtFQXJDSjtBQUNGIiwiZmlsZSI6ImNydWQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVkLWhyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIFxyXG4gIGJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O1xyXG4gIGNvbG9yOiAjMzMzO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICAgIC5jYXJkIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IG5vbmU7XHJcbiAgICB9XHJcbiAgLmNhcmQtaGVhZGVyMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgXHJcbiAgY29sb3I6ICMwMDA7IFxyXG4gIHBhZGRpbmc6IDAuMnJlbTsgXHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIGZvbnQtc2l6ZTogMC44NzVyZW07IFxyXG4gIGxpbmUtaGVpZ2h0OiAxOyBcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyMSAucm93IHtcclxuICBtYXJnaW46IDA7IFxyXG4gIH1cclxuICBcclxuICAuY2FyZC1oZWFkZXIxIC5hbGlnbi1zZWxmLWNlbnRlciB7XHJcbiAgcGFkZGluZzogMDsgXHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkLWhlYWRlcjAxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZS1yZXNwb25zaXZlIHtcclxuICAgIG1heC1oZWlnaHQ6IG5vbmU7IFxyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IFxyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIG1hcmdpbjogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICAubG9nbyB7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDsgXHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbXBhbnktaW5mbyB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIH1cclxuICBcclxuICBoNSB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IGxhcmdlcjtcclxuICBjb2xvcjogIzAwMDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDIwcHggMDtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICB9XHJcbiAgXHJcbiAgLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC50YWJsZSB0ZCBzcGFuLml0ZW0tYW1vdW50IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcbiAgXHJcbiAgLnN1bW1hcnktcm93IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubG9nbyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb21wYW55LWluZm8ge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuICBcclxuICAuaW52b2ljZS1oZWFkZXIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICB9XHJcbiAgXHJcbiAgLnJlZC1saW5lIHtcclxuICBib3JkZXI6IDA7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIG9wYWNpdHk6IDEwMCUgICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5kYXRlLWJveCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGUtaXRlbSB7XHJcbiAgZmxleDogMTtcclxuICBtYXJnaW46IDAgM3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLmRhdGUtaXRlbS5yZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5kYXRlLWl0ZW0ub3JhbmdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlNWI0O1xyXG4gIH1cclxuICBcclxuICAuZGF0ZS1pdGVtLmNlbWVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcclxuICB9XHJcbiAgXHJcbiAgLmRhdGUtaXRlbS5ibHVlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWRkOGU2O1xyXG4gIH1cclxuICBcclxuICAucHJvZm9ybWEtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtOyBcclxuICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgbWFyZ2luOiAwOyBcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLnNpZ25hdHVyZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7IFxyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICBcclxuICAvKiBNb2JpbGUgVmlldyAtIEdlbmVyYWwgQWRqdXN0bWVudHMgKi9cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTsgLyogU2NhbGUgZG93biB0byBmaXQgd2l0aGluIEE0IHNpemUgKi9cclxuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XHJcbiAgICAgIC8vIHdpZHRoOiAyMTBtbTsgLyogQTQgd2lkdGggKi9cclxuICAgICAgLy8gaGVpZ2h0OiAxMzBtbTsgLyogQTQgaGVpZ2h0ICovXHJcbiAgICAgIG1hcmdpbjogMCA1cHg7IC8qIENlbnRlciB0aGUgcGFnZSAqL1xyXG4gICAgICAvLyBvdmVyZmxvdzogaGlkZGVuOyAvKiBIaWRlIG92ZXJmbG93ICovXHJcbiAgICB9XHJcbiAgXHJcbiAgICAuc2Nyb2xsLW1vYmlsZSB7XHJcbiAgICAgIG92ZXJmbG93LXg6IGF1dG87IC8qIEVuYWJsZXMgaG9yaXpvbnRhbCBzY3JvbGwgb25seSBpZiBuZWVkZWQgKi9cclxuICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyAvKiBTbW9vdGggc2Nyb2xsaW5nIG9uIGlPUyAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyogVGFibGUgYWRqdXN0bWVudHMgKi9cclxuICAgIC50YWJsZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgdGFibGUtbGF5b3V0OiBmaXhlZDsgLyogRW5zdXJlIHRhYmxlIGNlbGxzIGZpdCAqL1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhYmxlIHRoLCAudGFibGUgdGQge1xyXG4gICAgICBwYWRkaW5nOiAxcHg7IC8qIFJlZHVjZSBwYWRkaW5nIGZvciBjb21wYWN0bmVzcyAqL1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47IC8qIFByZXZlbnQgb3ZlcmZsb3cgKi9cclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgLyogUHJldmVudCB0ZXh0IHdyYXBwaW5nICovXHJcbiAgICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnRhYmxlIHRoIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgIH1cclxuICBcclxuICAgIC8qIENvbnRlbnQgYWRqdXN0bWVudHMgKi9cclxuICAgIC5sb2dvIHtcclxuICAgICAgLy8gbWF4LXdpZHRoOiA0MHB4O1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW52b2ljZS10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmNvbXBhbnktaW5mbyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNXB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRhdGUtaXRlbSwgLnNpZ25hdHVyZSwgLnN1bW1hcnktcm93IHtcclxuICAgICAgZm9udC1zaXplOiA0cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGF0ZS1ib3gge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuZGF0ZS1pdGVtIHtcclxuICAgICAgZmxleDogMTtcclxuICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLnByb2Zvcm1hLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAwLjVyZW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuY29sLTQsIC5jb2wtOCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLyogUmVzZXQgbWFyZ2lucyBhbmQgcGFkZGluZyAqL1xyXG4gICAgKiB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICBcclxuICAgIC8qIFRleHQgYWxpZ25tZW50cyAqL1xyXG4gICAgLnRleHQtcmlnaHQsIC50ZXh0LWNlbnRlciB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogVWx0cmEtU21hbGwgU2NyZWVuIFZpZXcgLSBBZGRpdGlvbmFsIHNjYWxpbmcgZm9yIHZlcnkgc21hbGwgc2NyZWVucyAqL1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAucGFnZSB7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4zNyk7IC8qIEZ1cnRoZXIgc2NhbGUgZG93biBmb3IgdWx0cmEtc21hbGwgc2NyZWVucyAqL1xyXG4gICAgICB3aWR0aDogMjEwbW07XHJcbiAgICAgIGhlaWdodDogMTEwbW07XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW52b2ljZS10aXRsZSwgLmNvbXBhbnktaW5mbywgLnRhYmxlLCAuZGF0ZS1pdGVtLCAuc2lnbmF0dXJlLCAuc3VtbWFyeS1yb3cge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7IC8qIFNtYWxsZXIgZm9udCBzaXplIGZvciB1bHRyYS1zbWFsbCBzY3JlZW5zICovXHJcbiAgICB9XHJcbiAgXHJcbiAgICAudGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICAgIHBhZGRpbmc6IDFweDsgLyogUmVkdWNlZCBwYWRkaW5nIGZvciBiZXR0ZXIgZml0ICovXHJcbiAgICB9XHJcbiAgXHJcbiAgICAucHJvZm9ybWEtdGl0bGUge1xyXG4gICAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIH1cclxuICBcclxuICAgICBzdHJvbmcge1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgICAvLyBmb250LXNpemU6IDcwJTtcclxuICB9XHJcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 84958:
/*!******************************************************!*\
  !*** ./src/app/module/fresh/fresh-routing.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreshRoutingModule": () => (/* binding */ FreshRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud/crud.component */ 22509);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '', component: _crud_crud_component__WEBPACK_IMPORTED_MODULE_0__.CrudComponent
    }];
class FreshRoutingModule {
}
FreshRoutingModule.ɵfac = function FreshRoutingModule_Factory(t) { return new (t || FreshRoutingModule)(); };
FreshRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FreshRoutingModule });
FreshRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FreshRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 24276:
/*!**********************************************!*\
  !*** ./src/app/module/fresh/fresh.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FreshModule": () => (/* binding */ FreshModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _fresh_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fresh-routing.module */ 84958);
/* harmony import */ var _crud_crud_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crud/crud.component */ 22509);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);






class FreshModule {
}
FreshModule.ɵfac = function FreshModule_Factory(t) { return new (t || FreshModule)(); };
FreshModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: FreshModule });
FreshModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _fresh_routing_module__WEBPACK_IMPORTED_MODULE_0__.FreshRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](FreshModule, { declarations: [_crud_crud_component__WEBPACK_IMPORTED_MODULE_1__.CrudComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _fresh_routing_module__WEBPACK_IMPORTED_MODULE_0__.FreshRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule] }); })();


/***/ }),

/***/ 39711:
/*!*************************************!*\
  !*** ./src/app/mustache-payload.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mustachePayload": () => (/* binding */ mustachePayload)
/* harmony export */ });
const mustachePayload = {
    name: 'Kavi',
    companyName: 'Vyasaka',
    email: 'kavi@gmail.com',
    contactNumber: '1234567890',
    address: '123 Main St, City',
    gstNumber: '123456',
    workingDuration: '1 years',
    image: 'assets/img/brand/image2.webp',
    presentDays: 220,
    absentDays: 5,
    leaveDays: 10,
    permissionHours: '2 hr 30 min',
    wfhHours: '5 hr 45 min',
    attendanceSummary: [
        { label: 'Present', value: 220 },
        { label: 'Absent', value: 5 }
    ],
    leaveSummary: [
        { label: 'Leave Days', value: 10 }
    ],
    permissionSummary: [
        { label: 'Permission Hours', hours: 2, minutes: 30 }
    ],
    wfhPermissionSummary: [
        { label: 'WFH Hours', hours: 5, minutes: 45 }
    ],
    wfhDateCountLength: 12,
    wfhTotalJobWorkIds: 7,
    managementSummary: {
        totalAssigned: 50,
        totalCompleted: 45,
        totalRework: 3,
        totalInProgress: 2,
        totalEstimatedTime: 1200,
        totalTimeTaken: 1100,
        efficiency: '92%',
        overallQuality: '95%',
        starRatings: [
            { role: 'Manager', email: 'manager@example.com', rating: 4.5 }
        ]
    },
    jobWork: {
        total: 50,
        formattedTime: '20h 30m',
        formattedTakenTime: '18h 45m'
    },
    qualityMeterData: [
        { label: 'Accuracy', value: 85, color1: '#4caf50' },
        { label: 'Speed', value: 75, color1: '#2196f3' }
    ],
    reviewMetrics: [
        { name: 'Quality', rating: 4, person1: 5, person2: 4 },
        { name: 'Speed', rating: 3, person1: 4, person2: 3 }
    ],
    averageRate: 4.1,
    overallReview: 'Excellent performance overall with good efficiency and minimal rework.'
};


/***/ })

}]);
//# sourceMappingURL=src_app_module_fresh_fresh_module_ts.js.map