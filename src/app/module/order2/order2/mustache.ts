interface Irow{
    item: string;
    qty: string;
    price: string;
}
export interface IMustachePayload { 
username: string;
orderno: string;
orderdate: string;
delivery: string;
row: Irow[];
    
}
export const mustachePayload: IMustachePayload = {
username: 'Karthick',
orderno: 'ABK1832',
orderdate: '09-07-2025',
delivery: 'Two days',
row:[
    {item: 'Shoe',qty: '2',price: '2000'},
]

}