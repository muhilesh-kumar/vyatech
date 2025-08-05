"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_otp_otp_module_ts"],{

/***/ 72531:
/*!**************************************************!*\
  !*** ./src/app/module/otp/otp-routing.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpRoutingModule": () => (/* binding */ OtpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp/otp.component */ 32832);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '', component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_0__.OtpComponent
    }];
class OtpRoutingModule {
}
OtpRoutingModule.ɵfac = function OtpRoutingModule_Factory(t) { return new (t || OtpRoutingModule)(); };
OtpRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: OtpRoutingModule });
OtpRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OtpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 98095:
/*!******************************************!*\
  !*** ./src/app/module/otp/otp.module.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpModule": () => (/* binding */ OtpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-routing.module */ 72531);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp/otp.component */ 32832);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/dialog */ 33489);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





class OtpModule {
}
OtpModule.ɵfac = function OtpModule_Factory(t) { return new (t || OtpModule)(); };
OtpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: OtpModule });
OtpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpRoutingModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](OtpModule, { declarations: [_otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpRoutingModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_4__.DialogModule] }); })();


/***/ }),

/***/ 38114:
/*!********************************************!*\
  !*** ./src/app/module/otp/otp/mustache.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mustachePayload": () => (/* binding */ mustachePayload)
/* harmony export */ });
const mustachePayload = {
    username: 'Suresh',
    otp: 345786,
    email: 'support@example.com',
    team: 'The Inevito Team',
};


/***/ }),

/***/ 32832:
/*!*************************************************!*\
  !*** ./src/app/module/otp/otp/otp.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": () => (/* binding */ OtpComponent)
/* harmony export */ });
/* harmony import */ var _mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mustache */ 38114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


class OtpComponent {
    constructor() {
        this.data = _mustache__WEBPACK_IMPORTED_MODULE_0__.mustachePayload;
        this.userName = "Mahesh";
        this.status = 'System Updates in Progress';
        this.time = '10:00 AM';
        this.date = 'July 15, 2024';
        this.email = 'support@gmail.com';
        this.name = 'Ramesh';
        this.position = 'Developer';
        this.companyName = 'Vyasaka Technologies';
    }
    ngOnInit() {
    }
}
OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(); };
OtpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OtpComponent, selectors: [["app-otp"]], decls: 37, vars: 4, consts: [[1, "card-body"], [1, "email-container", 2, "font-family", "Arial, sans-serif", "margin", "0", "padding", "0", "width", "100%", "background-color", "#f4f4f4"], [1, "header", 2, "text-align", "center", "padding", "10px"], ["src", "https://dashboard.vedna.in/assets/logo/vedna.jpg", "alt", "Company Logo", 2, "max-width", "100%", "height", "100px"], [1, "content", 2, "padding", "20px", "background-color", "#ffffff", "border-radius", "8px", "width", "100%", "max-width", "600px", "margin", "0 auto"], [2, "font-size", "16px", "line-height", "1.5"], [2, "text-align", "center", "padding", "20px", "background-color", "#f8f8f8", "border-radius", "5px", "margin", "20px 0"], [2, "font-size", "32px", "font-weight", "bold", "letter-spacing", "5px", "color", "#4CAF50"], ["href", "mailto:support@example.com", 2, "color", "#1a0dab"], [1, "footer", 2, "text-align", "center", "padding", "20px", "font-size", "14px", "color", "#888888"], [2, "margin", "10px 0"], ["href", "https://example.com/privacy-policy", 2, "color", "#1a0dab", "text-decoration", "none", "margin-right", "15px"], ["href", "https://example.com/terms-of-service", 2, "color", "#1a0dab", "text-decoration", "none", "margin-left", "15px", "margin-right", "15px"], ["href", "https://example.com/contact-us", 2, "color", "#1a0dab", "text-decoration", "none", "margin-left", "15px"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Thank you for using our service. Here is your One-Time Password (OTP) for verification:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6)(10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "This OTP will expire in 15 minutes for security reasons.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "If you didn't request this OTP, please ignore this email.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "If you have any questions, feel free to contact our support team at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, ".");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Best regards,");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 9)(26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "\u00A9 2024 Inevito. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 10)(29, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Terms of Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "| ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Hello,", ctx.data.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.otp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.email);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.data.team);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_module_otp_otp_module_ts.js.map