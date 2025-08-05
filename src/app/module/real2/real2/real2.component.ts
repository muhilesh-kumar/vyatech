import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Mustache from 'mustache';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import html2canvas from 'html2canvas';





@Component({
  selector: 'app-root',
  templateUrl: './real2.component.html',
  styleUrls: ['./real2.component.scss']
})
export class Real2Component {
  finalHtml: SafeHtml = '';
  companyLogo: string = 'https://dashboard.vedna.in/assets/logo/vedna.jpg';

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.data();
  }

  data(): void {
    const data = {
      logo: this.companyLogo,
      date: '02-May-2025',
      poNumber: 'POO-1305',
      requisitioner: 'Thiru',
      shippedVia: 'HH',
      fobPoint: '2',
      supplier: {
        name: 'Vyasaka01',
        address: 'Velachery,Chennai',
        contact: '+91-237127816216',
      },
      shipTo: {
        name: 'Vyasaka01',
        address: 'Velachery,Chennai',
        contact: '+91-237127816216',
      },
      billTo: {
        name: 'Vyasaka01',
        address: 'Velachery,Chennai',
        contact: '+91-237127816216',
      },
      items: [
         {
        code: 'ITM-1001',
        name: 'LUBE OIL &  MGO FOR VOYAGE',
        rate: '₹3,000.00',
        qty: 10,
        uom: 'LTRS',
        discount: '₹0.00',
        amount: '₹30,000.00',
        gst: '5',
        total: '₹31,500.00'
      },
      {
        code: 'ITM-1002',
        name: 'FRESH WATER MAKER SPARES',
        rate: '₹1,500.00',
        qty: 10,
        uom: 'PCS',
        discount: '₹0.00',
        amount: '₹15,000.00',
        gst: '12',
        total: '₹16,800.00'
      },
        {
    code: 'ITM-1003',
    name: 'ELECTRICAL SPARES',
    rate: '₹2,000.00',
    qty: 5,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹10,000.00',
    gst: '5',
    total: '₹10,500.00'
  },
  {
    code: 'ITM-1004',
    name: 'FABRICATION MATERIALS',
    rate: '₹5,000.00',
    qty: 5,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹25,000.00',
    gst: '5',
    total: '₹26,250.00'
  },
  {
    code: 'ITM-1005',
    name: 'FLOWMETER',
    rate: '₹1,000.00',
    qty: 15,
    uom: 'MTR',
    discount: '₹0.00',
    amount: '₹15,000.00',
    gst: '5',
    total: '₹15,750.00'
  },
  {
    code: 'ITM-1006',
    name: 'PROVISIONS',
    rate: '₹500.00',
    qty: 4,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹2,000.00',
    gst: '5',
    total: '₹2,100.00'
  },
  {
    code: 'ITM-1007',
    name: 'Drinking WATER BOTTLE',
    rate: '₹600.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹6,000.00',
    gst: '5',
    total: '₹6,300.00'
  },
  {
    code: 'ITM-1008',
    name: 'MEDICINES',
    rate: '₹100.00',
    qty: 5,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹500.00',
    gst: '12',
    total: '₹560.00'
  },
  {
    code: 'ITM-1009',
    name: 'DIGITAL STU PUBLICATION',
    rate: '₹200.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹2,000.00',
    gst: '18',
    total: '₹2,360.00'
  },
  {
    code: 'ITM-1010',
    name: 'CARGO HOSES',
    rate: '₹500.00',
    qty: 1,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹500.00',
    gst: '5',
    total: '₹525.00'
  },
  {
    code: 'ITM-1011',
    name: 'BEAN STRING',
    rate: '₹1,000.00',
    qty: 5,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹5,000.00',
    gst: '12',
    total: '₹5,600.00'
  },
  {
    code: 'ITM-1012',
    name: 'CABBAGE',
    rate: '₹80.00',
    qty: 5,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹400.00',
    gst: '5',
    total: '₹420.00'
  },
  {
    code: 'ITM-1013',
    name: 'TOMATO',
    rate: '₹100.00',
    qty: 6,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹600.00',
    gst: '12',
    total: '₹672.00'
  },
  {
    code: 'ITM-1014',
    name: 'ONION',
    rate: '₹150.00',
    qty: 5,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹750.00',
    gst: '5',
    total: '₹787.50'
  },
  {
    code: 'ITM-1015',
    name: 'HEADSET',
    rate: '₹100.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '12',
    total: '₹1,120.00'
  },
  {
    code: 'ITM-1016',
    name: 'MOBILE',
    rate: '₹20,000.00',
    qty: 1,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹20,000.00',
    gst: '5',
    total: '₹21,000.00'
  },
  {
    code: 'ITM-1017',
    name: 'LAPTOP',
    rate: '₹70,000.00',
    qty: 1,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹70,000.00',
    gst: '5',
    total: '₹73,500.00'
  },
  {
    code: 'ITM-1018',
    name: 'MOUSE',
    rate: '₹700.00',
    qty: 2,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹1,400.00',
    gst: '12',
    total: '₹1,568.00'
  },
  {
    code: 'ITM-1019',
    name: 'LIGHT',
    rate: '₹50.00',
    qty: 3,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹150.00',
    gst: '5',
    total: '₹157.50'
  },
  {
    code: 'ITM-1020',
    name: 'PEN',
    rate: '₹5.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹50.00',
    gst: '5',
    total: '₹52.50'
  },
  {
    code: 'ITM-1021',
    name: 'PENCIL',
    rate: '₹5.00',
    qty: 20,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹100.00',
    gst: '5',
    total: '₹105.00'
  },
  {
    code: 'ITM-1022',
    name: 'SCALE',
    rate: '₹5.00',
    qty: 5,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹25.00',
    gst: '5',
    total: '₹26.25'
  },
  {
    code: 'ITM-1023',
    name: 'FILE',
    rate: '₹10.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹100.00',
    gst: '5',
    total: '₹105.00'
  },
  {
    code: 'ITM-1024',
    name: 'CHAIR',
    rate: '₹200.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹2,000.00',
    gst: '5',
    total: '₹2,100.00'
  },
  {
    code: 'ITM-1025',
    name: 'WRITING TABLE',
    rate: '₹400.00',
    qty: 5,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹2,000.00',
    gst: '5',
    total: '₹2,100.00'
  },
  {
    code: 'ITM-1026',
    name: 'WATCH',
    rate: '₹500.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹5,000.00',
    gst: '5',
    total: '₹5,250.00'
  },
  {
    code: 'ITM-1027',
    name: 'NOTEBOOK',
    rate: '₹100.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '5',
    total: '₹1,050.00'
  },
  {
    code: 'ITM-1028',
    name: 'COMPUTER',
    rate: '₹80,000.00',
    qty: 1,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹80,000.00',
    gst: '5',
    total: '₹84,000.00'
  },
  {
    code: 'ITM-1029',
    name: 'BAG',
    rate: '₹500.00',
    qty: 1,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹500.00',
    gst: '5',
    total: '₹525.00'
  },
  {
    code: 'ITM-1030',
    name: 'FAN',
    rate: '₹200.00',
    qty: 5,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '5',
    total: '₹1,050.00'
  },
  {
    code: 'ITM-1031',
    name: 'BANANA',
    rate: '₹50.00',
    qty: 5,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹250.00',
    gst: '5',
    total: '₹262.50'
  },
  {
    code: 'ITM-1032',
    name: 'STRAWBERRY',
    rate: '₹100.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '5',
    total: '₹1,050.00'
  },
  {
    code: 'ITM-1033',
    name: 'MANGO',
    rate: '₹50.00',
    qty: 11,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹550.00',
    gst: '5',
    total: '₹577.50'
  },
  {
    code: 'ITM-1034',
    name: 'SWEET POTATO',
    rate: '₹30.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹300.00',
    gst: '5',
    total: '₹315.00'
  },
  {
    code: 'ITM-1035',
    name: 'CHOCOLATE',
    rate: '₹50.00',
    qty: 20,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '5',
    total: '₹1,050.00'
  },
  {
    code: 'ITM-1036',
    name: 'LAYS',
    rate: '₹20.00',
    qty: 50,
    uom: 'PCK',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '5',
    total: '₹1,050.00'
  },
  {
    code: 'ITM-1037',
    name: 'BISCUIT',
    rate: '₹10.00',
    qty: 100,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹1,000.00',
    gst: '5',
    total: '₹1,050.00'
  },
  {
    code: 'ITM-1038',
    name: 'CAULIFLOWER',
    rate: '₹20.00',
    qty: 10,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹200.00',
    gst: '5',
    total: '₹210.00'
  },
  {
    code: 'ITM-1039',
    name: 'POTATO',
    rate: '₹20.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹200.00',
    gst: '5',
    total: '₹210.00'
  },
  {
    code: 'ITM-1040',
    name: 'BRINJAL',
    rate: '₹30.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹300.00',
    gst: '5',
    total: '₹315.00'
  },
  {
    code: 'ITM-1041',
    name: 'MAGGIE',
    rate: '₹50.00',
    qty: 10,
    uom: 'PCK',
    discount: '₹0.00',
    amount: '₹500.00',
    gst: '5',
    total: '₹525.00'
  },
  {
    code: 'ITM-1042',
    name: 'PLAIN NOODLES',
    rate: '₹60.00',
    qty: 10,
    uom: 'PCK',
    discount: '₹0.00',
    amount: '₹600.00',
    gst: '5',
    total: '₹630.00'
  },
  {
    code: 'ITM-1043',
    name: 'AC',
    rate: '₹50,000.00',
    qty: 2,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹100,000.00',
    gst: '12',
    total: '₹112,000.00'
  },
  {
    code: 'ITM-1044',
    name: 'CAMERA',
    rate: '₹50,000.00',
    qty: 2,
    uom: 'PCS',
    discount: '₹0.00',
    amount: '₹100,000.00',
    gst: '18',
    total: '₹118,000.00'
  },
  {
    code: 'ITM-1045',
    name: 'ICE CREAM',
    rate: '₹20.00',
    qty: 10,
    uom: 'PCK',
    discount: '₹0.00',
    amount: '₹200.00',
    gst: '5',
    total: '₹210.00'
  },
  {
    code: 'ITM-1046',
    name: 'COFFEE POWDER',
    rate: '₹50.00',
    qty: 10,
    uom: 'PCK',
    discount: '₹0.00',
    amount: '₹500.00',
    gst: '5',
    total: '₹525.00'
  },
  {
    code: 'ITM-1047',
    name: 'TEA POWDER',
    rate: '₹50.00',
    qty: 10,
    uom: 'PCK',
    discount: '₹0.00',
    amount: '₹500.00',
    gst: '5',
    total: '₹525.00'
  },
  {
    code: 'ITM-1048',
    name: 'CARROT',
    rate: '₹20.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹200.00',
    gst: '5',
    total: '₹210.00'
  },
  {
    code: 'ITM-1049',
    name: 'BEANS',
    rate: '₹25.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹250.00',
    gst: '5',
    total: '₹262.50'
  },
  {
    code: 'ITM-1050',
    name: 'BEETROOT',
    rate: '₹10.00',
    qty: 10,
    uom: 'KGS',
    discount: '₹0.00',
    amount: '₹100.00',
    gst: '5',
    total: '₹105.00'
  }

      ],
      totalAmount: '₹552,916.25',
      gstSplit: {
        igst: '₹47,191.25',
        cgst: '₹0.00',
        sgst: '₹0.00'
      },
      totalPayable: '₹552,916.25',
      terms: [
        "Goods once sold can't be taken back.",
        "Interest will be 24% on bill,if payment not received within 15days.",
        "We are not responsible for any lose or damage in transit.",
        "Bussiness transactions are subject to Srivilliputhur Jurisdiction."
      ]
    };

    const template = this.template();
    const rendered = Mustache.render(template, data);
    this.finalHtml = this.sanitizer.bypassSecurityTrustHtml(rendered);
  }

  template(): string {
    return `
      <div id="printSection" class="container p-4" style="background: #fff; max-width: 1000px; margin: auto; font-family: Arial, sans-serif; border: 1px solid #ccc;">
      
                <div class="container-fluid"> 
  <div class="row align-items-center text-center">
    <!-- Address & Info -->
    <div class="col-6 text-start" style="padding: 0px; 10px; 10px; 15px;">
    <h1 class="fw-bold">Purchase Order</h1>
        <p><strong>Uma Marine Services</strong><br>
          info@umamarine.com,8148996678<br>
          8/1 B Block, Auto Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530012<br>
          POO-1397<br>
          <strong>24BMVPM5253M2ZBh</strong></p>
      </p>
    </div>
        <!-- Logo -->
    <div class="col-6 text-end">
      <img src="{{ logo }}" alt="logo" style="width: 100px;" />
    </div>
  </div>
</div>

        <div class="my-3" style="height: 4px; background: red; border: 0;"></div>
        <div class="row mb-4">
          <div class="col-4">
            <h5><strong>To</strong></h5>
            <p><strong>Name:</strong> {{supplier.name}}<br>
            <strong>Address:</strong> {{supplier.address}}<br>
            <strong>Contact:</strong> {{supplier.contact}}</p>
          </div>
          <div class="col-4">
            <h5><strong>Ship To</strong></h5>
            <p><strong>Name:</strong> {{shipTo.name}}<br>
            <strong>Address:</strong> {{shipTo.address}}<br>
            <strong>Contact:</strong> {{shipTo.contact}}</p>
          </div>
          <div class="col-4">
            <h5><strong>Bill To</strong></h5>
            <p><strong>Name:</strong> {{billTo.name}}<br>
            <strong>Address:</strong> {{billTo.address}}<br>
            <strong>Contact:</strong> {{billTo.contact}}</p>
          </div>
        </div>
       <div class="my-3" style="height: 4px; background: red; border: 0;"></div>
        <div class="container-fluid pt-0">
  <div class="row text-center g-2">

    <div class="col-3">
      <div class="border rounded bg-light py-2 h-100">
        P.O. DATE<br><strong>{{ date }}</strong>
      </div>
    </div>

    <div class="col-3">
      <div class="border rounded text-dark py-2 h-100" style="background-color: #ffcccc;">
        REQUISITIONER<br><strong>{{ requisitioner }}</strong>
      </div>
    </div>

    <div class="col-3">
      <div class="border rounded text-dark py-2 h-100" style="background-color: #add8e6;">
        SHIPPED VIA<br><strong>{{ shippedVia }}</strong>
      </div>
    </div>

    <div class="col-3">
      <div class="border rounded text-dark py-2 h-100" style="background-color: #ffe5b4;">
        F.O.B POINT<br><strong>{{ fobPoint }}</strong>
      </div>
    </div>

  </div>
</div>

<div class="my-3" style="height: 4px; background: red; border: 0;"></div>
        <h5 class="my-3"><i class="fa fa-list"></i> Item Details</h5>
        <table id="dataTable" class="table table-bordered">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Rate (INR)</th>
              <th>QTY</th>
              <th>UOM</th>
              <th>Disc (INR)</th>
              <th>Amount (INR)</th>
              <th>GST (%)</th>
              <th>Total (INR)</th>
            </tr>
          </thead>
          <tbody>
            {{#items}}
            <tr>
              <td>{{code}}</td>
              <td>{{name}}</td>
              <td>{{rate}}</td>
              <td>{{qty}}</td>
              <td>{{uom}}</td>
              <td>{{discount}}</td>
              <td>{{amount}}</td>
              <td>{{gst}}</td>
              <td>{{total}}</td>
            </tr>
            {{/items}}
            <tr class="table fw-bold">
      <td colspan="7" style="text-align: right;">Total Amount</td>
      <td colspan="3" style="text-align: right;">{{ totalPayable }}</td>
    </tr>
            
          </tbody>
        </table>
        <div class="my-3" style="height: 4px; background: red; border: 0;"></div>
       
        <div class="row" style="margin-bottom: 1rem;">
  <div class="col-6">
     <strong><h6>TERMS & CONDITIONS :</h6></strong>
        <ul>
          {{#terms}}<li>{{.}}</li>{{/terms}}
        </ul>
  </div>
  
          <div class="col-3">
            <table class="table table-bordered">
              <thead><tr><th>IGST</th><th>CGST</th><th>SGST</th></tr></thead>
              <tbody>
                <tr>
                  <td>{{gstSplit.igst}}</td>
                  <td>{{gstSplit.cgst}}</td>
                  <td>{{gstSplit.sgst}}</td>
                </tr>
              </tbody>
            </table>
          </div>
      

  
  <div class="col-3 ">
    <table class="col-6 ms-auto" style="border: 1px solid #dee2e6; border-collapse: collapse; width: 100%;">
      <tr>
        <td style="border: 1px solid #dee2e6; padding: 0.75rem;">
          <strong>Total GST :</strong>
        </td>
        <td style="border: 1px solid #dee2e6; padding: 0.75rem; text-align: right;">
          {{gstSplit.igst}}
        </td>
      </tr>
      <tr>
        <td style="border: 1px solid #dee2e6; padding: 0.75rem;">
          <strong>Total Payable:</strong>
        </td>
        <td style="font-weight: bold; border: 1px solid #dee2e6; padding: 0.75rem; text-align: right;">
          {{totalPayable}}
        </td>
      </tr>
    </table>
  </div>
  </div>
      </div>
    `;
  }

  





downloadTable() {
  const element = document.getElementById('printSection');
  const table = document.getElementById('dataTable');
  if (!element || !table) return;

  const originalDisplay = table.style.display;
  table.style.display = 'none';

  html2canvas(element, { scale: 2, useCORS: true }).then(canvas => {
    table.style.display = originalDisplay;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const headerHeight = 150;

   
    const pagePadding = 8; 
    const contentWidth = imgWidth - pagePadding * 2;

 
    pdf.addImage(imgData, 'PNG', pagePadding, 10, contentWidth, headerHeight);

    autoTable(pdf, {
      html: '#dataTable',
      startY: headerHeight + 15,
      margin: { left: pagePadding, right: pagePadding },   // <-- padding applied
      headStyles: { 
        fillColor: false,
        textColor: 0,
        fontStyle: 'bold',
        halign: 'center',
        lineWidth: 0.1,
        lineColor: 0,
        cellPadding: 3
      },
      bodyStyles: { 
        halign: 'center', 
        cellPadding: 3,
        lineWidth: 0.1,
        lineColor: 0
      },
      alternateRowStyles: { 
        fillColor: false,
        lineWidth: 0.1,
        lineColor: 0
      },
      styles: { 
        fontSize: 7, 
        overflow: 'linebreak',
        lineWidth: 0.1,
        lineColor: 0,
        cellPadding: 2  
      },
      columnStyles: {
        0: { cellWidth: 17, halign: 'left' },  
        1: { cellWidth: 37 , halign: 'left' },   
        2: { cellWidth: 20, halign: 'left' },  
        3: { cellWidth: 10, halign: 'center' }, 
        4: { cellWidth: 15, halign: 'center' }, 
        5: { cellWidth: 15, halign: 'center' },  
        6: { cellWidth: 30, halign: 'center' },   
        7: { cellWidth: 20, halign: 'center' },  
        8: { cellWidth: 30, halign: 'center' }    
      }
    });

    pdf.save('purchase-order.pdf');
  });
}





}