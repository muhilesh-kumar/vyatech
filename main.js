(self["webpackChunkvyabase"] = self["webpackChunkvyabase"] || []).push([["main"],{

/***/ 36953:
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navItems": () => (/* binding */ navItems)
/* harmony export */ });
const navItems = [
    // {
    //   name: 'Dashboard',
    //   url: '/dashboard',
    //   icon: 'icon-speedometer'
    // },
    // {
    //   title: true,
    //   name: "Sample"
    // },
    // {
    //   name: "Sample",
    //   url: "/sample",
    //   icon: "icon-pencil"
    // },
    // {
    //   name: "User Application",
    //   url: "/user-application",
    //   icon: "icon-pencil"
    // },
    {
        name: "Json Data",
        url: "/jsondata",
        icon: "icon-pencil"
    },
    //  {
    //   name: "Details",
    //   url: "/details",
    //   icon: "icon-pencil"
    // },
    {
        name: "Menu",
        url: "/menu",
        icon: "icon-pencil"
    },
    {
        name: "Expense",
        url: "/expense",
        icon: "icon-pencil"
    },
    {
        name: "Crud",
        url: "/crud",
        icon: "icon-pencil"
    }, {
        name: "Resume",
        url: "/resume",
        icon: "icon-pencil"
    }, {
        name: "Template",
        url: "/template",
        icon: "icon-pencil"
    }, {
        name: "Temp",
        url: "/temp",
        icon: "icon-pencil"
    },
    {
        name: "Divs",
        url: "/divs",
        icon: "icon-pencil"
    }, {
        name: "OTP",
        url: "/otp",
        icon: "icon-pencil"
    }, {
        name: "Order",
        url: "/order",
        icon: "icon-pencil"
    }, {
        name: "Reply",
        url: "/reply",
        icon: "icon-pencil"
    },
    {
        name: "Housing",
        url: "/housing",
        icon: "icon-pencil"
    }, {
        name: "Housing English",
        url: "/housing2",
        icon: "icon-pencil"
    },
    {
        name: "Order2",
        url: "/order2",
        icon: "icon-pencil"
    },
    {
        name: "Reply2",
        url: "/reply2",
        icon: "icon-pencil"
    },
    {
        name: "Design",
        url: "/design",
        icon: "icon-pencil"
    },
    {
        name: "Design2",
        url: "/design2",
        icon: "icon-pencil"
    },
    {
        name: "Design3",
        url: "/design3",
        icon: "icon-pencil"
    },
    {
        name: "Design4",
        url: "/design4",
        icon: "icon-pencil"
    },
    {
        name: "Temp2",
        url: "/temp2",
        icon: "icon-pencil"
    },
    {
        name: "Purchase",
        url: "/purchase",
        icon: "icon-pencil"
    },
    {
        name: "Maintain",
        url: "/maintain",
        icon: "icon-pencil"
    },
    {
        name: "Real",
        url: "/real",
        icon: "icon-pencil"
    },
    {
        name: "Real1",
        url: "/real1",
        icon: "icon-pencil"
    },
    {
        name: "Real2",
        url: "/real2",
        icon: "icon-pencil"
    },
    {
        name: "Blind",
        url: "/blind",
        icon: "icon-pencil"
    },
    {
        name: "table",
        url: "/table",
        icon: "icon-pencil"
    }
    /*
      {
        name:"Grid application",
        url:"/grid",
        icon:"icon-pencil"
      },
      {
        name:"Coupon",
        url:"/coupon",
        icon:"icon-pencil"
      },
      {
        name:"Payment",
        url:"/payment",
        icon:"icon-pencil"
      },
      {
        name:"Job Opening",
        url:"/job",
        icon:"icon-pencil"
      },
      {
        name:"Address",
        url:"/address",
        icon:"icon-star"
      },
      {
        name:"Sale",
        url:"/sale",
        icon:"icon-pencil"
      },
      {
        name:"Order",
        url:"/order",
        icon:"icon-pencil",
        children:[
          
          {
            name:"OrderPipeLine",
            url:"/orderpipeline",
            icon:"icon-layers",
          },
          {
            name:"OrderLedger",
            url:"/orderledger",
            icon:"icon-layers"
    
          }
        ]
      }
    */
];


/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);



class AppComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.router.events.subscribe(evt => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__.NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_0__.Router)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["body"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_0__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 73598);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @coreui/angular */ 58988);
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ng2-charts */ 53808);
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ 15896);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ 26528);
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/tabs */ 33445);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ 82808);
/* harmony import */ var primeng_tabview__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/tabview */ 12050);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);




// import { ToastrModule } from 'ngx-toastr';


// Import containers


// Import routing module
// Import 3rd party components













// import { AngularSlickgridModule } from 'angular-slickgrid'; 
// import { GridContentComponent } from './module/grid/grid-content/grid-content.component';
// @ts-ignore TS6133
const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
const APP_CONTAINERS = [_containers__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent];
/*
import { ReactiveFormsModule } from '@angular/forms';
import { GridModule } from './module/grid/grid.module';
import { CouponModule } from './module/coupon/coupon.module';
import { PaymentModule } from './module/payment/payment.module';
import { JobModule } from './module/jobopening/job.module';
import { AddressModule } from './module/address/address.module';
import { SaleModule } from './module/sale/sale.module';
import { OrderModule } from './module/order/order.module';
*/
// import { AddComponent } from './grid-content/add/add.component';
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_8__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_8__.HashLocationStrategy
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppAsideModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppBreadcrumbModule.forRoot(),
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppFooterModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppHeaderModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppSidebarModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbarModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_12__.TabViewModule,
        ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule.forRoot(),
        ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule.forRoot(),
        ng2_charts__WEBPACK_IMPORTED_MODULE_13__.ChartsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true,
        }),
        /*
            ReactiveFormsModule,
            GridModule,
            CouponModule,
            PaymentModule,
            JobModule,
            ToastrModule.forRoot(),
            AddressModule,
            SaleModule,
            OrderModule,
        */
        // AngularSlickgridModule.forRoot(),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.ModalModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _containers__WEBPACK_IMPORTED_MODULE_2__.DefaultLayoutComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule,
        _app_routing__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppAsideModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppBreadcrumbModule, _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppFooterModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppHeaderModule,
        _coreui_angular__WEBPACK_IMPORTED_MODULE_11__.AppSidebarModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__.PerfectScrollbarModule,
        primeng_tabview__WEBPACK_IMPORTED_MODULE_12__.TabViewModule, ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_3__.BsDropdownModule, ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_5__.TabsModule, ng2_charts__WEBPACK_IMPORTED_MODULE_13__.ChartsModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_14__.ToastrModule, 
        /*
            ReactiveFormsModule,
            GridModule,
            CouponModule,
            PaymentModule,
            JobModule,
            ToastrModule.forRoot(),
            AddressModule,
            SaleModule,
            OrderModule,
        */
        // AngularSlickgridModule.forRoot(),
        _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__.ModalModule] }); })();


/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule),
/* harmony export */   "routes": () => (/* binding */ routes)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./containers */ 52578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);

// Import Containers



const routes = [
    {
        path: "",
        component: _containers__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent,
        data: {
            title: "Home"
        },
        children: [
            // {
            //   path: "sample",
            //   loadChildren: () =>
            //     import("./module/sample/sample.module").then(m => m.SampleModule)
            // },
            // {
            //   path: "user-application",
            //   loadChildren: () =>
            //     import("./module/user/user.module").then(m => m.UserModule)
            // },
            {
                path: "jsondata",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("src_app_module_jsondata_jsondata_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/jsondata/jsondata.module */ 98407)).then(m => m.JsondataModule)
            },
            {
                path: "menu",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_module_menu_menu_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/menu/menu.module */ 13726)).then(m => m.MenuModule)
            },
            {
                path: "expense",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dropdown_mjs"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_expense_expense_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/expense/expense.module */ 81480)).then(m => m.ExpenseModule)
            },
            {
                path: "crud",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("src_app_module_fresh_fresh_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/fresh/fresh.module */ 24276)).then(m => m.FreshModule)
            },
            {
                path: "temp",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dropdown_mjs"), __webpack_require__.e("src_app_module_temp_temp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/temp/temp.module */ 88203)).then(m => m.TempModule)
            },
            {
                path: "divs",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_divs_divs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/divs/divs.module */ 46174)).then(m => m.DivsModule)
            }, {
                path: "template",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_template_template_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/template/template.module */ 74440)).then(m => m.TemplateModule)
            }, {
                path: "resume",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_angular_forms_fesm2015_forms_mjs"), __webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("common"), __webpack_require__.e("src_app_module_resume_resume_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/resume/resume.module */ 85499)).then(m => m.ResumeModule)
            }, {
                path: "otp",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("src_app_module_otp_otp_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/otp/otp.module */ 98095)).then(m => m.OtpModule)
            }, {
                path: "order",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("src_app_module_order_order_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/order/order.module */ 46417)).then(m => m.OrderModule)
            }, {
                path: "reply",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_primeng_fesm2015_primeng-dialog_mjs"), __webpack_require__.e("src_app_module_reply_reply_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/reply/reply.module */ 82075)).then(m => m.ReplyModule)
            },
            {
                path: "housing",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_housing_housing_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/housing/housing.module */ 39788)).then(m => m.HousingModule)
            },
            {
                path: "housing2",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_housing2_housing2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/housing2/housing2.module */ 99735)).then(m => m.Housing2Module)
            },
            {
                path: "order2",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_order2_order2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/order2/order2.module */ 92696)).then(m => m.Order2Module)
            },
            {
                path: "reply2",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_reply2_reply2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/reply2/reply2.module */ 94635)).then(m => m.Reply2Module)
            },
            {
                path: "design",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_design_design_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/design/design.module */ 17964)).then(m => m.DesignModule)
            },
            {
                path: "design2",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_design2_design2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/design2/design2.module */ 14959)).then(m => m.Design2Module)
            },
            {
                path: "design3",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_design3_design3_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/design3/design3.module */ 18512)).then(m => m.Design3Module)
            },
            {
                path: "design4",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_design4_design4_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/design4/design4.module */ 7728)).then(m => m.Design4Module)
            },
            {
                path: "temp2",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_temp2_temp2_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/temp2/temp2.module */ 46416)).then(m => m.Temp2Module)
            },
            {
                path: "purchase",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_purchase_purchase_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/purchase/purchase.module */ 92168)).then(m => m.PurchaseModule)
            }, {
                path: "maintain",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_mustache_mustache_mjs"), __webpack_require__.e("src_app_module_maintain_maintain_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/maintain/maintain.module */ 43299)).then(m => m.MaintainModule)
            },
            {
                path: "real",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_mustache_mustache_mjs"), __webpack_require__.e("src_app_module_real_real_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/real/real.module */ 59519)).then(m => m.RealModule)
            },
            {
                path: "real1",
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_module_real1_real1_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./module/real1/real1.module */ 44477)).then(m => m.Real1Module)
            },
            {
                path: "real2",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_mustache_mustache_mjs"), __webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_html2canvas_dist_html2canvas_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_mjs"), __webpack_require__.e("src_app_module_real2_real2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/real2/real2.module */ 50145)).then(m => m.Real2Module)
            },
            {
                path: "blind",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_mustache_mustache_mjs"), __webpack_require__.e("src_app_module_blind_blind_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/blind/blind.module */ 95884)).then(m => m.BlindModule)
            },
            {
                path: "table",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_jspdf_dist_jspdf_es_min_js"), __webpack_require__.e("default-node_modules_jspdf-autotable_dist_jspdf_plugin_autotable_mjs"), __webpack_require__.e("src_app_module_table_table_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./module/table/table.module */ 33034)).then(m => m.TableModule)
            },
            // {
            //   path: "employee",
            //   loadChildren: () =>
            //     import("./module/employee/employee.module").then(m => m.EmployeeModule)
            // },
            // {
            //   path: "student",
            //   loadChildren: () =>
            //     import("./module/student/student.module").then(m => m.StudentModule)
            // },
            // {
            //   path: "player",
            //   loadChildren: () =>
            //     import("./module/players/players.module").then(m => m.PlayersModule)
            // },
            // {
            //   path: "expense",
            //   loadChildren: () =>
            //     import("./module/expense/expense.module").then(m => m.ExpenseModule)
            // },
            // {
            //   path: "openings",
            //   loadChildren: () =>
            //     import("./module/jobopening/jobopening.module").then(m => m.JobopeningModule)
            // },
            // {
            //   path: "resume",
            //   loadChildren: () =>
            //     import("./module/resume/resume.module").then(m => m.ResumeModule)
            // },
            // {
            //   path: "dashboard",
            //   loadChildren: () =>
            //     import("./module/dashboard/dashboard.module").then(m => m.DashboardModule)
            // },
            // {
            //   path: "orderpipeline",
            //   loadChildren: () =>
            //     import("./module/orderpipeline/orderpipeline.module").then(m => m.OrderpipelineModule)
            // },
            // {
            //   path: "orderledger",
            //   loadChildren: () =>
            //     import("./module/orderledger/orderledger.module").then(m => m.OrderledgerModule)
            // },
            // {
            //   path: "forum",
            //   loadChildren: () =>
            //     import("./module/forum/forum.module").then(m => m.ForumModule)
            // },
            // {
            //   path: "board",
            //   loadChildren: () =>
            //     import("./module/board/board.module").then(m => m.BoardModule)
            // },
            // {
            //   path: "build",
            //   loadChildren: () =>
            //     import("./module/resumebuilder/resumebuilder.module").then(m => m.ResumebuilderModule)
            // },
            // {
            //   path: "chat",
            //   loadChildren: () =>
            //     import("./module/chart1/chart1.module").then(m => m.Chart1Module)
            // },
            /*
                   {
                   path:"grid",
                   loadChildren:() =>
                      import("./module/grid/grid.module").then(m => m.GridModule)
                   },
                   {
                     path:"coupon",
                     loadChildren:()=>
                     import("./module/coupon/coupon.module").then(m =>m.CouponModule)
                   },
                  {
                    path:"payment",
                    loadChildren:() =>
                    import("./module/payment/payment.module").then(m => m.PaymentModule)
                  },
                  {
                    path:"job",
                    loadChildren:()=>
                    import("./module/jobopening/job.module").then(m => m.JobModule)
                  },
                  {
                    path:"address",
                    loadChildren:()=>
                    import("./module/address/address.module").then(m =>m.AddressModule)
                  },
                  {
                    path:"sale",
                    loadChildren:()=>
                    import("./module/sale/sale.module").then(m => m.SaleModule)
                  },
                  {
                    path:"order",
                    loadChildren:()=>
                    import("./module/order/order.module").then(m => m.OrderModule)
                  },
            */
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 50830:
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* binding */ DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_nav */ 36953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/angular */ 58988);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 59403);





const _c0 = function () { return ["/dashboard"]; };
const _c1 = function () { return { src: "assets/img/brand/acadyme-logo.jpg", width: 89, height: 25, alt: "Vyasaka Logo" }; };
const _c2 = function () { return { src: "assets/img/brand/acadyme-logo.jpg", width: 30, height: 30, alt: "Vyasaka Logo" }; };
const _c3 = function () { return ["/settings"]; };
class DefaultLayoutComponent {
    constructor() {
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_0__.navItems;
    }
    toggleMinimize(event) {
        this.sidebarMinimized = event;
    }
}
DefaultLayoutComponent.ɵfac = function DefaultLayoutComponent_Factory(t) { return new (t || DefaultLayoutComponent)(); };
DefaultLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DefaultLayoutComponent, selectors: [["app-dashboard"]], decls: 42, vars: 18, consts: [[3, "navbarBrandRouterLink", "fixed", "navbarBrandFull", "navbarBrandMinimized", "sidebarToggler", "asideMenuToggler"], [1, "nav", "navbar-nav", "d-md-down-none"], [1, "nav", "navbar-nav", "ml-auto"], [1, "nav-item", "d-md-down-none"], ["href", "#", 1, "nav-link"], [1, "icon-bell"], [1, "badge", "badge-pill", "badge-danger"], [1, "icon-list"], [1, "icon-location-pin"], [1, "app-body"], [3, "fixed", "display", "minimized", "minimizedChange"], ["appSidebar", ""], [3, "navItems", "perfectScrollbar", "disabled"], [1, "main"], [1, "breadcrumb-menu", "d-md-down-none"], ["role", "group", "aria-label", "Button group with nested dropdown", 1, "btn-group"], ["href", "#", 1, "btn"], [1, "icon-speech"], [1, "btn", 3, "routerLink"], [1, "icon-graph"], ["href", "#", 1, "btn", 3, "routerLink"], [1, "icon-settings"], [1, "container-fluid"], ["href", "https://www.vyasaka.in/"], [1, "ml-auto"]], template: function DefaultLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "ul", 2)(3, "li", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "li", 3)(9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "li", 3)(12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 9)(15, "app-sidebar", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("minimizedChange", function DefaultLayoutComponent_Template_app_sidebar_minimizedChange_15_listener($event) { return ctx.toggleMinimize($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "app-sidebar-nav", 12)(18, "app-sidebar-minimizer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "main", 13)(20, "cui-breadcrumb")(21, "li", 14)(22, "div", 15)(23, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, " \u00A0Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " \u00A0Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "app-footer")(34, "span")(35, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Vyasaka");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, " \u00A9 2020 vyasaka.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Powered by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Vyasaka");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navbarBrandRouterLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c0))("fixed", true)("navbarBrandFull", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("navbarBrandMinimized", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](15, _c2))("sidebarToggler", "lg")("asideMenuToggler", "lg");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fixed", true)("display", "lg")("minimized", ctx.sidebarMinimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navItems", ctx.navItems)("disabled", _r0.minimized);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](16, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c3));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.CuiBreadcrumbComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.AppFooterComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.AppHeaderComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ɵo"], _coreui_angular__WEBPACK_IMPORTED_MODULE_4__.AppSidebarComponent, _coreui_angular__WEBPACK_IMPORTED_MODULE_4__["ɵq"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__.PerfectScrollbarDirective], encapsulation: 2 });


/***/ }),

/***/ 14639:
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout_component__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ 50830);



/***/ }),

/***/ 52578:
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DefaultLayoutComponent": () => (/* reexport safe */ _default_layout__WEBPACK_IMPORTED_MODULE_0__.DefaultLayoutComponent)
/* harmony export */ });
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ 14639);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false
};


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule, {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


/***/ }),

/***/ 46700:
/*!***************************************************!*\
  !*** ./node_modules/moment/locale/ sync ^\.\/.*$ ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./af": 58685,
	"./af.js": 58685,
	"./ar": 254,
	"./ar-dz": 4312,
	"./ar-dz.js": 4312,
	"./ar-kw": 32614,
	"./ar-kw.js": 32614,
	"./ar-ly": 18630,
	"./ar-ly.js": 18630,
	"./ar-ma": 28674,
	"./ar-ma.js": 28674,
	"./ar-sa": 49032,
	"./ar-sa.js": 49032,
	"./ar-tn": 24730,
	"./ar-tn.js": 24730,
	"./ar.js": 254,
	"./az": 53052,
	"./az.js": 53052,
	"./be": 60150,
	"./be.js": 60150,
	"./bg": 63069,
	"./bg.js": 63069,
	"./bm": 13466,
	"./bm.js": 13466,
	"./bn": 18516,
	"./bn-bd": 90557,
	"./bn-bd.js": 90557,
	"./bn.js": 18516,
	"./bo": 26273,
	"./bo.js": 26273,
	"./br": 9588,
	"./br.js": 9588,
	"./bs": 19815,
	"./bs.js": 19815,
	"./ca": 83331,
	"./ca.js": 83331,
	"./cs": 21320,
	"./cs.js": 21320,
	"./cv": 72219,
	"./cv.js": 72219,
	"./cy": 68266,
	"./cy.js": 68266,
	"./da": 66427,
	"./da.js": 66427,
	"./de": 67435,
	"./de-at": 52871,
	"./de-at.js": 52871,
	"./de-ch": 12994,
	"./de-ch.js": 12994,
	"./de.js": 67435,
	"./dv": 82357,
	"./dv.js": 82357,
	"./el": 95649,
	"./el.js": 95649,
	"./en-au": 59961,
	"./en-au.js": 59961,
	"./en-ca": 19878,
	"./en-ca.js": 19878,
	"./en-gb": 3924,
	"./en-gb.js": 3924,
	"./en-ie": 70864,
	"./en-ie.js": 70864,
	"./en-il": 91579,
	"./en-il.js": 91579,
	"./en-in": 30940,
	"./en-in.js": 30940,
	"./en-nz": 16181,
	"./en-nz.js": 16181,
	"./en-sg": 44301,
	"./en-sg.js": 44301,
	"./eo": 85291,
	"./eo.js": 85291,
	"./es": 54529,
	"./es-do": 53764,
	"./es-do.js": 53764,
	"./es-mx": 12584,
	"./es-mx.js": 12584,
	"./es-us": 63425,
	"./es-us.js": 63425,
	"./es.js": 54529,
	"./et": 35203,
	"./et.js": 35203,
	"./eu": 70678,
	"./eu.js": 70678,
	"./fa": 83483,
	"./fa.js": 83483,
	"./fi": 96262,
	"./fi.js": 96262,
	"./fil": 52521,
	"./fil.js": 52521,
	"./fo": 34555,
	"./fo.js": 34555,
	"./fr": 63131,
	"./fr-ca": 88239,
	"./fr-ca.js": 88239,
	"./fr-ch": 21702,
	"./fr-ch.js": 21702,
	"./fr.js": 63131,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 23821,
	"./ga.js": 23821,
	"./gd": 71753,
	"./gd.js": 71753,
	"./gl": 4074,
	"./gl.js": 4074,
	"./gom-deva": 92762,
	"./gom-deva.js": 92762,
	"./gom-latn": 5969,
	"./gom-latn.js": 5969,
	"./gu": 82809,
	"./gu.js": 82809,
	"./he": 45402,
	"./he.js": 45402,
	"./hi": 315,
	"./hi.js": 315,
	"./hr": 10410,
	"./hr.js": 10410,
	"./hu": 38288,
	"./hu.js": 38288,
	"./hy-am": 67928,
	"./hy-am.js": 67928,
	"./id": 71334,
	"./id.js": 71334,
	"./is": 86959,
	"./is.js": 86959,
	"./it": 34864,
	"./it-ch": 51124,
	"./it-ch.js": 51124,
	"./it.js": 34864,
	"./ja": 36141,
	"./ja.js": 36141,
	"./jv": 29187,
	"./jv.js": 29187,
	"./ka": 42136,
	"./ka.js": 42136,
	"./kk": 94332,
	"./kk.js": 94332,
	"./km": 18607,
	"./km.js": 18607,
	"./kn": 84305,
	"./kn.js": 84305,
	"./ko": 70234,
	"./ko.js": 70234,
	"./ku": 16003,
	"./ku.js": 16003,
	"./ky": 75061,
	"./ky.js": 75061,
	"./lb": 32786,
	"./lb.js": 32786,
	"./lo": 66183,
	"./lo.js": 66183,
	"./lt": 50029,
	"./lt.js": 50029,
	"./lv": 24169,
	"./lv.js": 24169,
	"./me": 68577,
	"./me.js": 68577,
	"./mi": 68177,
	"./mi.js": 68177,
	"./mk": 50337,
	"./mk.js": 50337,
	"./ml": 65260,
	"./ml.js": 65260,
	"./mn": 52325,
	"./mn.js": 52325,
	"./mr": 14695,
	"./mr.js": 14695,
	"./ms": 75334,
	"./ms-my": 37151,
	"./ms-my.js": 37151,
	"./ms.js": 75334,
	"./mt": 63570,
	"./mt.js": 63570,
	"./my": 97963,
	"./my.js": 97963,
	"./nb": 88028,
	"./nb.js": 88028,
	"./ne": 86638,
	"./ne.js": 86638,
	"./nl": 50302,
	"./nl-be": 66782,
	"./nl-be.js": 66782,
	"./nl.js": 50302,
	"./nn": 33501,
	"./nn.js": 33501,
	"./oc-lnc": 50563,
	"./oc-lnc.js": 50563,
	"./pa-in": 50869,
	"./pa-in.js": 50869,
	"./pl": 65302,
	"./pl.js": 65302,
	"./pt": 49687,
	"./pt-br": 74884,
	"./pt-br.js": 74884,
	"./pt.js": 49687,
	"./ro": 79107,
	"./ro.js": 79107,
	"./ru": 33627,
	"./ru.js": 33627,
	"./sd": 30355,
	"./sd.js": 30355,
	"./se": 83427,
	"./se.js": 83427,
	"./si": 11848,
	"./si.js": 11848,
	"./sk": 54590,
	"./sk.js": 54590,
	"./sl": 20184,
	"./sl.js": 20184,
	"./sq": 56361,
	"./sq.js": 56361,
	"./sr": 78965,
	"./sr-cyrl": 81287,
	"./sr-cyrl.js": 81287,
	"./sr.js": 78965,
	"./ss": 25456,
	"./ss.js": 25456,
	"./sv": 70451,
	"./sv.js": 70451,
	"./sw": 77558,
	"./sw.js": 77558,
	"./ta": 51356,
	"./ta.js": 51356,
	"./te": 73693,
	"./te.js": 73693,
	"./tet": 21243,
	"./tet.js": 21243,
	"./tg": 42500,
	"./tg.js": 42500,
	"./th": 55768,
	"./th.js": 55768,
	"./tk": 77761,
	"./tk.js": 77761,
	"./tl-ph": 35780,
	"./tl-ph.js": 35780,
	"./tlh": 29590,
	"./tlh.js": 29590,
	"./tr": 33807,
	"./tr.js": 33807,
	"./tzl": 93857,
	"./tzl.js": 93857,
	"./tzm": 60654,
	"./tzm-latn": 8806,
	"./tzm-latn.js": 8806,
	"./tzm.js": 60654,
	"./ug-cn": 30845,
	"./ug-cn.js": 30845,
	"./uk": 19232,
	"./uk.js": 19232,
	"./ur": 47052,
	"./ur.js": 47052,
	"./uz": 77967,
	"./uz-latn": 32233,
	"./uz-latn.js": 32233,
	"./uz.js": 77967,
	"./vi": 98615,
	"./vi.js": 98615,
	"./x-pseudo": 12320,
	"./x-pseudo.js": 12320,
	"./yo": 31313,
	"./yo.js": 31313,
	"./zh-cn": 64490,
	"./zh-cn.js": 64490,
	"./zh-hk": 55910,
	"./zh-hk.js": 55910,
	"./zh-mo": 98262,
	"./zh-mo.js": 98262,
	"./zh-tw": 44223,
	"./zh-tw.js": 44223
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 46700;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(14431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map