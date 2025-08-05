import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Import Containers
import { DefaultLayoutComponent } from "./containers";

export const routes: Routes = [
  {
    path: "",
    component: DefaultLayoutComponent,
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
        loadChildren: () =>
          import("./module/jsondata/jsondata.module").then(m => m.JsondataModule)
      },
      {
        path: "menu",
        loadChildren: () =>
          import("./module/menu/menu.module").then(m => m.MenuModule)
      },
      {
        path: "expense",
        loadChildren: () =>
          import("./module/expense/expense.module").then(m => m.ExpenseModule)
      },
      {
        path: "crud",
        loadChildren: () =>
          import("./module/fresh/fresh.module").then(m => m.FreshModule)
      },
      {
        path: "temp",
        loadChildren: () =>
          import("./module/temp/temp.module").then(m => m.TempModule)
      },
      {
        path: "divs",
        loadChildren: () =>
          import("./module/divs/divs.module").then(m => m.DivsModule)
      },{
        path: "template",
        loadChildren: () =>
          import("./module/template/template.module").then(m => m.TemplateModule)
      },{
        path: "resume",
        loadChildren: () =>
          import("./module/resume/resume.module").then(m => m.ResumeModule)
      },{
        path: "otp",
        loadChildren: () =>
          import("./module/otp/otp.module").then(m => m.OtpModule)
      },{
        path: "order",
        loadChildren: () =>
          import("./module/order/order.module").then(m => m.OrderModule)
      },{
        path: "reply",
        loadChildren: () =>
          import("./module/reply/reply.module").then(m => m.ReplyModule)
      },
      {
        path: "housing",
        loadChildren: () =>
          import("./module/housing/housing.module").then(m => m.HousingModule)
      },
      {
        path: "housing2",
        loadChildren: () =>
          import("./module/housing2/housing2.module").then(m => m.Housing2Module)
      },
      {
        path: "order2",
        loadChildren: () =>
          import("./module/order2/order2.module").then(m => m.Order2Module)
      },
      {
        path: "reply2",
        loadChildren: () =>
          import("./module/reply2/reply2.module").then(m => m.Reply2Module)
      },
      {
        path: "design",
        loadChildren: () =>
          import("./module/design/design.module").then(m => m.DesignModule)
      },
      {
        path: "design2",
        loadChildren: () =>
          import("./module/design2/design2.module").then(m => m.Design2Module)
      },
      {
        path: "design3",
        loadChildren: () =>
          import("./module/design3/design3.module").then(m => m.Design3Module)
      },
      {
        path: "design4",
        loadChildren: () =>
          import("./module/design4/design4.module").then(m => m.Design4Module)
      },
      {
        path: "temp2",
        loadChildren: () =>
          import("./module/temp2/temp2.module").then(m => m.Temp2Module)
      },
      {
        path: "purchase",
        loadChildren: () =>
          import("./module/purchase/purchase.module").then(m => m.PurchaseModule)
      },{
        path: "maintain",
        loadChildren: () =>
          import("./module/maintain/maintain.module").then(m => m.MaintainModule)
      },
      {
        path: "real",
        loadChildren: () =>
          import("./module/real/real.module").then(m => m.RealModule)
      },
      {
        path: "real1",
        loadChildren: () =>
          import("./module/real1/real1.module").then(m => m.Real1Module)
      },
      {
        path: "real2",
        loadChildren: () =>
          import("./module/real2/real2.module").then(m => m.Real2Module)
      },
       {
        path: "blind",
        loadChildren: () =>
          import("./module/blind/blind.module").then(m => m.BlindModule)
      },
      {
        path: "table",
        loadChildren: () =>
          import("./module/table/table.module").then(m => m.TableModule)
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

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
