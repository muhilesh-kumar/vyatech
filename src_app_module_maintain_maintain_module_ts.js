"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_maintain_maintain_module_ts"],{

/***/ 79087:
/*!************************************************************!*\
  !*** ./src/app/module/maintain/maintain-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintainRoutingModule": () => (/* binding */ MaintainRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _maintain_maintain_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintain/maintain.component */ 91557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _maintain_maintain_component__WEBPACK_IMPORTED_MODULE_0__.MaintainComponent }];
class MaintainRoutingModule {
}
MaintainRoutingModule.ɵfac = function MaintainRoutingModule_Factory(t) { return new (t || MaintainRoutingModule)(); };
MaintainRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MaintainRoutingModule });
MaintainRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MaintainRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 43299:
/*!****************************************************!*\
  !*** ./src/app/module/maintain/maintain.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintainModule": () => (/* binding */ MaintainModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _maintain_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./maintain-routing.module */ 79087);
/* harmony import */ var _maintain_maintain_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maintain/maintain.component */ 91557);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class MaintainModule {
}
MaintainModule.ɵfac = function MaintainModule_Factory(t) { return new (t || MaintainModule)(); };
MaintainModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MaintainModule });
MaintainModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _maintain_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintainRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MaintainModule, { declarations: [_maintain_maintain_component__WEBPACK_IMPORTED_MODULE_1__.MaintainComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _maintain_routing_module__WEBPACK_IMPORTED_MODULE_0__.MaintainRoutingModule] }); })();


/***/ }),

/***/ 91557:
/*!****************************************************************!*\
  !*** ./src/app/module/maintain/maintain/maintain.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MaintainComponent": () => (/* binding */ MaintainComponent)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ 35942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 50318);



class MaintainComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.finalHtml = '';
    }
    ngOnInit() {
        this.renderTemplate();
    }
    template() {
        return `
    <div class="email-container"
      style="font-family: Arial, sans-serif; margin: 0; padding: 0; width: 100%; background-color: #f4f4f4;">
      <!-- Header with Logo -->
      <div class="header" style="text-align: center; padding: 10px;">
          <img src="https://dashboard.vedna.in/assets/logo/vedna.jpg" alt="Company Logo"
              style="max-width: 100%; height: 100px;">
      </div>
      <!-- Content -->
      <div class="content"
          style="padding: 20px; background-color: #ffffff;  width: 100%; max-width: 600px; margin: 0 auto;">
          <p style="font-size: 16px; line-height: 1.5;"> Hello <strong>{{userName}}</strong>,</p>
          <p style="font-size: 16px; line-height: 1.5;">We are currently performing scheduled maintenance to improve our
              services and enhance your experience.</p>
          <div class="card"
              style="border: 2px solid #dee2e6;border-radius: 10px;padding: 20px;margin: 20px auto;max-width: 500px;background-color: #f9f9f9; text-align: center; font-size: 16px; line-height: 1.5; color: #333;">
              <p><i class="fa fa-wrench"></i> Status: <strong>{{status}}</strong></p>
              <p><i class="fa fa-calendar-o"></i> Expected Completion: <strong>{{date}} at {{time}}</strong></p>
          </div>
          <p style="font-size: 16px; line-height: 1.5;">During this time, the platform will be temporarily unavailable. We
              apologize for any inconvenience caused and appreciate your patience.</p>
          <p style="font-size: 16px; line-height: 1.5;">
              If you have any questions or require assistance, feel free to contact us at
              <a href="mailto:support@example.com" style="color: #1a0dab;">{{email}}</a>.
          </p>
          <p style="font-size: 16px; line-height: 1.5;text-align: center;">Thank you for your patience and understanding.
          </p>
          <p class="mb-1 fw-bold">Best Regards,</p>
          <p class="mb-1">{{name}}</p>
          <p class="mb-1">{{position}}</p>
          <p>{{companyName}}</p>
      </div>
      <!-- Footer -->
      <div class="footer" style="text-align: center; padding: 20px; font-size: 14px; color: #888888;">
          <p>&copy; 2024 Inevito. All rights reserved.</p>
          <p style="margin: 10px 0;">
              <a href="https://example.com/privacy-policy"
                  style="color: #1a0dab; text-decoration: none; margin-right: 15px;">Privacy Policy</a>|
              <a href="https://example.com/terms-of-service"
                  style="color: #1a0dab; text-decoration: none; margin-left: 15px; margin-right: 15px;">Terms of
                  Service</a>|
              <a href="https://example.com/contact-us"
                  style="color: #1a0dab; text-decoration: none; margin-left: 15px;">Contact Us</a>
          </p>
      </div>
    </div>`;
    }
    renderTemplate() {
        const data = {
            userName: "Mahesh",
            status: 'System Updates in Progress',
            time: '10:00 AM',
            date: 'July 15, 2024',
            email: 'support@gmail.com',
            name: 'Ramesh',
            position: 'Developer',
            companyName: 'Vyasaka Technologies'
        };
        const template = this.template();
        const renderedHtml = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(template, data);
        this.finalHtml = this.sanitizer.bypassSecurityTrustHtml(renderedHtml);
    }
}
MaintainComponent.ɵfac = function MaintainComponent_Factory(t) { return new (t || MaintainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
MaintainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MaintainComponent, selectors: [["app-maintain"]], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function MaintainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.finalHtml, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWludGFpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_module_maintain_maintain_module_ts.js.map