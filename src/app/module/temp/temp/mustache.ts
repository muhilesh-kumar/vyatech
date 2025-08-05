interface Irow {
  code: string;
  des: string;
  uom: string;
  qty: number;
  rate: number;
  dic: number;
  itemamt: number;
  totalamt: number;
}
// interface Iblock {
//   type: string;
//   children?: Iblock[];
// }
export interface IChild {
  type: string;
  image?: string;
}
export interface Iblock {
  type: string;
  children?: IChild[];
}



export interface IMustachePayload {
  bill: string;
  company: string;
  name: string;
  address: string;
  state: string;
  district: string;
  city: string;
  postal: number;
  cmpaddress: string;
  cmpstate: string;
  cmpdistrict: string;
  cmpcity: string;
  cmppostal: number;
  contactperson: string;
  email: string;
  phone: number;
  gstno: string;
  duedate: string;
  totalamount: number;
  totalquantity: number;
  subtotal: number;
  totaldiscount: number;
  shipping: number;
  totalgst: number;
  igst: number;
  cgst: number;
  sgst: number;
  adjustments: number;
  image: string;
  namehead: string;
  cmpemail: string;
  cmpphone: number;
  emailhead: string;
  addresshead: string;
  numberhead: string;
  gsthead: string;
  duehead: string;
  invoicehead: string;
  totamounthead: string;
  itemhead: string;
  codehead: string;
  deshead: string;
  uomhead: string;
  qtyhead: string;
  ratehead: string;
  dichead: string;
  itemamthead: string;
  totalamthead: string;
  row: Irow[];
  terms: string;
  totalgsthead: string;
  totalpayhead: string;
  bankdetailhead: string;
  accnamehead: string;
  accnohead: string;
  bankhead: string;
  branchhead: string;
  ifschead: string;
  bank: string;
  branch: string;
  code: string;
  accno: string;
  accname: string;
  billhead: string;
  cmpgst: string;
  billno: string;
  condition1: string;
  condition2: string;
  condition3: string;
  condition4: string;
  billdate: string;
  to: string;
  totalamtans: number;
  totalgstans: number;
  totalpayable: number;
  gstin: string;
  text: string;
  blocks: Iblock[];

}
export const mustachePayload: IMustachePayload = {
  image: 'assets/img/brand/image2.webp',
  company: 'Vyasaka',
  bill: 'BILL',
  name: 'Radhika',
  address: '23 South street',
  state: 'TamilNadu',
  district: 'Kanchipuram',
  city: 'Mambalam',
  postal: 600044,
  cmpaddress: '8/1 B Block Madippakam',
  cmpstate: 'TamilNadu',
  cmpdistrict: 'chennai',
  cmpcity: 'Chennai',
  cmppostal: 600078,
  contactperson: 'Jeni',
  email: 'rradhika1r11@gmail.com',
  phone: 8220348883,
  cmpgst: '543069KJHSJS0',
  gstno: '993839KJHSJS',
  duedate: '2025-Jul-16',
  totalamount: 890,
  totalquantity: 10,
  subtotal: 890,
  totaldiscount: 0,
  shipping: 0,
  totalgst: 0,
  igst: 0,
  cgst: 0,
  sgst: 0,
  adjustments: 0,
  namehead: 'Name',
  cmpemail: 'vyasaka@gmail.com',
  emailhead: 'Email',
  cmpphone: 8148996678,
  addresshead: 'Address',
  numberhead: 'Contact Number',
  gsthead: 'GSTIN',
  duehead: 'Due Date',
  invoicehead: 'Bill No/Date',
  totamounthead: 'Total Amount',
  itemhead: 'item Details',
  codehead: 'Item Code',
  deshead: 'Description',
  uomhead: 'UOM',
  qtyhead: 'Quantity',
  ratehead: 'Rate',
  dichead: 'Discount',
  itemamthead: 'Item Amount',
  totalamthead: 'Total Amount',
  row: [
    { code: 'itm-98', des: 'Oil', uom: 'LTRS', qty: 10, rate: 100, dic: 0, itemamt: 0, totalamt: 890 }
  ],
  terms: 'Terms And Conditions',
  totalgsthead: 'Total GST',
  totalpayhead: 'Total Payable',
  bankdetailhead: 'Bank Details',
  accnamehead: 'Current A/c Name',
  accnohead: 'Current A/c Number',
  bankhead: 'Bank',
  branchhead: 'Branch',
  ifschead: 'IFSC Code',
  accno: '110056749823',
  accname: 'Subash',
  bank: 'Canara Bank',
  branch: 'Chennai',
  code: 'CNBR000121',
  billhead: 'BILL NO',
  billno: 'BIL-1302',
  billdate: '2025-07-01T06:37:18.000Z',
  condition1: "Goods once sold can't be taken back.",
  condition2: 'Interest will be 24% on bill if payment not received within 15 days.',
  condition3: 'We are not responsible for any loss or damage in transit.',
  condition4: 'Business transactions are subject to Srivilliputhur Jurisdiction.',
  to: 'To',
  totalamtans: 890,
  totalgstans: 20,
  totalpayable: 910,
  gstin: '123HF',
  text: 'This is a computer-generated document. No signature is required.',

blocks: [
    {
      type: 'row',
      children: [
        { type: 'bill' },
        { type: 'image' }
      ]
    },
    {
      type: 'row',
      children: [
        { type: 'to' },
        { type: 'billno' }
      ]
    },
    { type: 'card' },
    { type: 'items' },
    {
      type: 'row',
      children: [
        { type: 'terms' },
        { type: 'table' }
      ]
    },
    { type: 'bank' },
    { type: 'footer' }
  ]
  
};