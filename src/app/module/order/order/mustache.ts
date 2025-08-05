interface Irow{
   item: string;
  qty: number;
  unit : number;
  Total: number;
}


export interface IMustachePayload { 

username: string;
orderno: string;


date: string;




row:Irow[];
grand: number;
cmpaddress: string;
cmpstate : string;
cmpdistrict: string;
cmpcity: string;
cmppostal: number;
cmphead: string;
cmpemail: string;
  cmpphone: number;
  emailhead: string;
  addresshead: string;
  numberhead: string;
  
  
  address: string;
  dist: string;
  post: number;
  stat: string;
  
    
}
export const mustachePayload: IMustachePayload = {
username: 'Ramesh',
orderno: '#ORD123456',
date: 'Aug 7,2025',
 row:[
    { item: 'Wireless Bluetooth Headphones', qty: 100,unit : 15, Total: 1500 },
    { item: 'Wireless Bluetooth Headphones', qty: 100,unit : 15, Total: 1500 },
     { item: 'Wireless Bluetooth Headphones', qty: 100,unit : 15, Total: 1500 },
    
   
  ],
  grand: 1500,
  cmpaddress: '8/1 B Block Madippakam',
  cmpstate: 'TamilNadu',
  cmpdistrict: 'chennai',
  cmpcity: 'Chennai',
  cmppostal: 600078,
  cmpemail: 'vyasaka@gmail.com',
  cmpphone: 8144887905,
  emailhead: 'Email',
  addresshead: 'Address',
  numberhead: 'Phone Number',
  cmphead: 'Vyasaka',
    address:'1234 Elm Street',
  dist:'Wasington',
  post: 62704,
  stat: 'United states',
  
  

}