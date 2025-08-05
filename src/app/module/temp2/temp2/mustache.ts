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
  currency: string;
  itemsTable: string;
  totalQuantity: number;
  invoiceNO: string;
  terms: { name: string }[]; 
}

export const mustachePayload: IMustachePayload = {
  companyName: 'Vyasaka Technologies',
  gMail: 'vyasaka@gmail.com',
  contactNumber: '8220348883',
  address: '8/1 B Block Madippakam, Chennai, Tamil Nadu, 600078',
  customerID: 'CUST12345',
  image: 'https://dashboard.vedna.in/assets/logo/vedna.jpg',
  customerName: 'Radhika',
  customerEmail: 'radhika@gmail.com',
  customerBilling: '23 South street, Mambalam, Kanchipuram, Tamil Nadu, 600044',
  currentDate: 'BILL-1228',
  BillDate: '11/07/2025',
  totalAmount: 1000,
  currency: 'INR',
  itemsTable: 'itm-69',
  totalQuantity: 10,
  terms: [
    { name: "Goods once sold can't be taken back." },
    { name: 'Interest will be 24% on bill if payment not received within 15 days.' },
    
  ],
  invoiceNO: 'INV-123456',
};
