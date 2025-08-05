import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import Mustache from 'mustache';

@Component({
  selector: 'app-root',
  templateUrl: './blind.component.html',
  styleUrls: ['./blind.component.scss']
})
export class BlindComponent {
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
      <div class="container border p-5 bg-white mt-5 mb-5 p-0 border shadow" style=" max-width: 210mm; width: 100%; min-height: 100vh; background-color: #fff; max-width: 800px;">
    <div class="row">
      <div class="col text-end">
        <h1 class="text-uppercase fw-bold">Purchase Order</h1>
      </div>
    </div>

    <div class="row">
      <div class="col">
        <img src="{{ logo }}" alt="staff photo" style="border-radius: 0.25rem; width: 120px; height: auto; object-fit: cover;" /><br>
        <br><h5 class="fw-bold">Uma Marine Services</h5>
        
        <p class="mb-1">8/1 B Block, Auto Nagar, Gajuwaka, Visakhapatnam, Andhra Pradesh 530012</p>
        <p class="mb-1">info@umamarine.com,8148996678</p>
        <p class="mb-1">POO-1397</p>
        <p class="mb-1">24BMVPM5253M2ZBh</p>
      </div>
      <div class="col text-end">
        <p><strong>GST:</strong> 24BMVPM5253M2ZBh</p>
        <p><strong>PO Number:</strong> POO-1397</p>
        <p><strong>Date:</strong> {{ date }}</p>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col">
        <h6 class="fw-bold">To :</h6>
        <p class="mb-1">{{supplier.name}}</p>
        <p class="mb-1">{{supplier.address}}</p>
        <p class="mb-1">{{supplier.contact}}</p>
      </div>
      <div class="col text-end">
        <br>
        <p style="margin-bottom: 0.25rem;">PO Date: <strong>{{ date }}</strong></p>
        <p style="margin-bottom: 0;">Requisitioner: <strong>{{ requisitioner }}</strong></p>
        <h5><strong>Bill To</strong></h5>
            <p><strong>Name:</strong> {{billTo.name}}<br>
            <strong>Address:</strong> {{billTo.address}}<br>
            <strong>Contact:</strong> {{billTo.contact}}</p>
      </div>
    </div>
<br>
<div class="table-responsive">
    <table class="table  text-center" style="margin-bottom: 1rem;">
  <thead class="table bg-black text-white">
    <tr>
      <th style="padding: 0.75rem;">Code</th>
      <th style="padding: 0.75rem;">Name</th>
      <th style="padding: 0.75rem;">UOM</th>
      <th style="padding: 0.75rem;">QTY</th>
      <th style="padding: 0.75rem;">Rate (INR)</th>
      <th style="padding: 0.75rem;">Disc (INR)</th>
      <th style="padding: 0.75rem;">Amount (INR)</th>
      <th style="padding: 0.75rem;">Total (INR)</th>
    </tr>
  </thead>
  <tbody>
    {{#items}}
    <tr>
      <td>{{code}}</td>
      <td>{{name}}</td>
      <td>{{uom}}</td>
      <td>{{qty}}</td>
      <td style="text-align: right;"><i class="fa fa-inr"></i>{{rate}}</td>
      <td>{{discount}}</td>
      <td>{{amount}}</td>
      <td style="text-align: right; font-weight: bold;"><i class="fa fa-inr"></i>{{total}}</td>
    </tr>
    {{/items}}
    <tr class="table fw-bold">
      <td colspan="6" style="text-align: right;">Total Amount</td>
      <td colspan="2" style="text-align: right;"><i class="fa fa-inr"></i>{{ totalPayable }}</td>
    </tr>
  </tbody>
</table>
</div>
    <div class="row justify-content-end">
      <div class="col-md-4">
        <table class="table">
          <tr>
            <th>Subtotal</th>
            <td class="text-end">{{ totalPayable }}</td>
          </tr>
          <tr>
            <th>Total GST</th>
            <td class="text-end">{{gstSplit.igst}}</td>
          </tr>
          
          <tr class="table-secondary">
            <th>Total Payable</th>
            <td class="text-end fw-bold">{{ totalPayable }}</td>
          </tr> 
        </table>
      </div>
    </div>
<div class="row">
    <div class="col-6">
    <hr>
    <strong>Bank Details:</strong><br>
    <br>
          <p style="margin-bottom: 0.25rem;">Account Name: Uma Marine Services</p>
          <p style="margin-bottom: 0.25rem;">Account Number: [Your Account Number]</p>
          <p style="margin-bottom: 0.25rem;">Bank: [Your Bank Name]</p>
          <p style="margin-bottom: 0.25rem;">Branch: [Your Branch]</p>
          <p style="margin-bottom: 0;">IFSC: [Your IFSC Code]</p>
          </div>
<div class="col-6"><br><br>
        <p>
          <strong>TERMS & CONDITIONS:</strong>
        </p>
        <ul style="margin-bottom: 0; padding-left: 1rem;">
          {{#terms}}<li>{{.}}</li>{{/terms}}
        </ul><hr>
</div>
<div style="text-align: center; padding-top: 0.5rem;">
        <small style="color: #6c757d;">Thank you for your business!</small>
      </div>
  </div>
    `;
  }
}
