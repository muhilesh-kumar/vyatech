export interface IMustachePayload { 
  companyName: string;
  gMail: string;
  contactNumber: string;
  address: string;
  customerID: string;
  image: string;
  customerName: string;
  customerEmail: string;
  customerBilling: string;
  currentDate: string;
  BillDate: string;
  totalAmount: number;
  currency: number;
  itemsTable: string;
  totalQuantity: number;
  terms: { name: string }[]; 
}

export const mustachePayload: IMustachePayload = {
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
