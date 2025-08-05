"use strict";
(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["src_app_module_real_real_module_ts"],{

/***/ 78255:
/*!****************************************************!*\
  !*** ./src/app/module/real/real-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealRoutingModule": () => (/* binding */ RealRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _real_real_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./real/real.component */ 38532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{
        path: '', component: _real_real_component__WEBPACK_IMPORTED_MODULE_0__.RealComponent
    }];
class RealRoutingModule {
}
RealRoutingModule.ɵfac = function RealRoutingModule_Factory(t) { return new (t || RealRoutingModule)(); };
RealRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RealRoutingModule });
RealRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RealRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 59519:
/*!********************************************!*\
  !*** ./src/app/module/real/real.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealModule": () => (/* binding */ RealModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _real_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./real-routing.module */ 78255);
/* harmony import */ var _real_real_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./real/real.component */ 38532);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class RealModule {
}
RealModule.ɵfac = function RealModule_Factory(t) { return new (t || RealModule)(); };
RealModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: RealModule });
RealModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _real_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](RealModule, { declarations: [_real_real_component__WEBPACK_IMPORTED_MODULE_1__.RealComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _real_routing_module__WEBPACK_IMPORTED_MODULE_0__.RealRoutingModule] }); })();


/***/ }),

/***/ 38532:
/*!****************************************************!*\
  !*** ./src/app/module/real/real/real.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RealComponent": () => (/* binding */ RealComponent)
/* harmony export */ });
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mustache */ 35942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 50318);



class RealComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.finalHtml = '';
        this.companyLogo = 'https://dashboard.vedna.in/assets/logo/vedna.jpg';
    }
    ngOnInit() {
        this.data();
    }
    template() {
        return `
    <div class="container p-4" style="background-color: white; font-family: Arial, sans-serif; max-width: 800px; margin: auto; border: 1px solid #000;">
    <div style="padding: 15px;">
      <div class="row mb-4 align-items-center justify-content-between">
        <div class="col-auto text-start">
          <h2 class="mb-0"><strong>{{companyName}}</strong></h2>
          <h3 class="mt-2"><strong>{{companyType}}</strong></h3>
          <h3 class="mt-0"><strong>{{pvd}}</strong></h3>
        </div>
        <div class="col-auto mt-3 mt-md-0">
           <img 
    class="company-logo" 
    src="{{companyLogo}}"
    alt="staff photo" 
    style="width: 150px !important; height: auto; border-radius: 0.25rem;">

        </div>
      </div>
      <div class="my-3" style="height: 4px; background: #000; border: 0;"></div><br>
      <p class="fw-bold" style="color: #d6007b;">Ref: {{reference}}</p><br>
      <h4 class="text-center">To Whomsoever it may concern</h4><br><br>
      <p class="fs-6 lh-lg">
        This is to certify that <strong>{{name}}</strong> was working as <strong>{{role}}</strong> with {{companyName}}, {{location}}.<br>
        His intern particulars are as given below.
      </p>
      <table class="table table-bordered w-100 mb-4 border border-dark border-2">
        <thead class="table-light">
          <tr>
            <th class="border border-dark border-2">Designation</th>
            <th class="border border-dark border-2">Period</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border border-dark border-2">{{designation}}</td>
            <td class="border border-dark border-2">{{period}}</td>
          </tr>
        </tbody>
      </table>
      <p class="fs-6 lh-lg">
        {{his}} responsibilities were in {{responsibilities}}. {{he}} has gained good knowledge in the technology, application development, integration process and customization.
      </p>
      <p class="fs-6">We have found him to be a good learner.</p>
      <p class="fs-6">
        We at {{companyShort}}, {{location}} wish him all success in his future endeavors.
      </p>
      <p class="fs-6 mt-3">
        For {{companyShort}}, {{location}}, India
      </p>
      <br>
      <p class="fs-6 mt-4">{{signName}}<br><strong>{{signRole}}</strong></p><br>
      <br>
      <div class="my-3" style="height: 4px; background: #000; border: 0;"></div><br>
      <p class="fs-6">  
        {{ street }}, {{ address }}, {{ district }} - {{ postal }}, {{ state }}, {{ country }}<br><br>
        Contact: {{phone}} / Email: {{email}}
      </p>
      </div>
      </div> `;
    }
    data() {
        const data = {
            companyName: 'Vyasaka',
            companyType: 'Technologies',
            pvd: 'Pvt Ltd',
            companyLogo: this.companyLogo,
            he: 'He',
            his: 'His',
            companyShort: 'Vyasaka Technologies',
            location: 'Chennai',
            reference: 'IN25/HR/I01 dated 08,May 25',
            name: 'Mr.Mohamed Salman',
            role: 'Project Intern',
            designation: "Master's Project Internship Trainee",
            period: '23, Dec 24 to 03, May 25 (70 days)',
            responsibilities: 'Angular application development and integration',
            signName: 'Alex Mathews',
            signRole: 'HR Manager',
            street: 'Plot No 5179,Ram Nagar North Extn, 8th St',
            address: 'Puzhuthivakkam',
            district: 'Chennai',
            postal: '600 091',
            state: 'TamilNadu',
            country: 'India',
            phone: '+91-789562900',
            email: 'hr@vyasaka.in',
        };
        const template = this.template();
        const renderedHtml = mustache__WEBPACK_IMPORTED_MODULE_0__["default"].render(template, data);
        this.finalHtml = this.sanitizer.bypassSecurityTrustHtml(renderedHtml);
    }
}
RealComponent.ɵfac = function RealComponent_Factory(t) { return new (t || RealComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
RealComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RealComponent, selectors: [["app-root"]], decls: 1, vars: 1, consts: [[3, "innerHTML"]], template: function RealComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx.finalHtml, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWFsLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_module_real_real_module_ts.js.map