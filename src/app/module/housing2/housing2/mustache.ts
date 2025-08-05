interface Irow{
   sno: string;
  name: string;
  age: number;
  gender: string;
  ration: string;
  learn: string;
  business: string;
  time: string;
  tablebusiness: string;
}
interface Irow2{
    name: string;
    age: number;
    std: string;
    govt: string;
    private: string;
    precent35: string;
    precent50: string;
    precent75: string;
    aboveprecent75: string;
}
export interface IMustachePayload { 
    head: string;
    sub: string;
    sub1: string;
    varduhead: string;
    doornohead: string;
    streethead: string,
    agehead: string;
    headofhead: string;
    businesshead: string;
    marriagehead: string;
    marriagenamehead: string;
    assethead: string;
    househead: string;
    familyhead: string;
    snohead: string;
    namehead: string;
    tableagehead: string;
    genderhead: string;
    relationhead: string;
    learnhead : string;
    secondbusiness: string;
    timehead : string;
    tablebusinesshead: string;
    studenthead : string;
    studentnamehead: string;
    studentagehead: string;
    studentstdhead: string;
    studentschoolheadgot: string;
    studentschoolheadprivate: string;
    studenttalenthead: string;
    percent35head: string;
    percent50head: string;
    percent75head: string;
    percentabove75head: string;
    rationhead: string;
    governmentschemehead: string;
    familyscheme: string;
    studentdetail: string;
    businessend: string;
    detailhead: string;
    datehead: string;
    signhead: string;
    signhead2: string;
    row:Irow[];
    row2: Irow2[];
    vardu: string;
    doorno: string;
    street: string,
    age: number;
    headof: string;
    business: string;
    marriage: string;
    marriagename: string;
    asset: string;
    house: string;
    relation: string; 
    govtscheme: string;
    familysch: string;
    studetail: string;
    businesses: string;
    detail: string;
    date: string;
}


export const mustachePayload: IMustachePayload = {
   head: 'Pluslama Hirsulama Group',
sub: 'North Street Muslim Jamaath, Thondi',
sub1: 'Family Statistical Information Form',
varduhead: 'Ward Number',
doornohead: 'Door Number',
streethead: 'Street',
agehead: 'Age',
headofhead: 'Head of Family / Head Name',
businesshead: 'Business Details',
marriagehead: 'Marriage: Good / Average / Looking',
marriagenamehead: 'Full Name of Spouse',
assethead: 'House Properties / As Per Ownership',
househead: 'Own House / Rental House',
familyhead: 'Family Member Details',
snohead: 'S. No.',
namehead: 'Name',
tableagehead: 'Age',
genderhead: 'Gender (M/F)',
relationhead: 'Relationship to Head',
learnhead: 'Educational Qualification',
secondbusiness: 'Already Doing a Job?',
timehead: 'Job Timing?',
tablebusinesshead: 'Occupation',
studenthead: 'If Students are Present, their Details',
studentnamehead: 'Name',
studentagehead: 'Age',
studentstdhead: 'Studying Class',
studentschoolheadgot: 'Government School',
studentschoolheadprivate: 'Private School',
studenttalenthead: 'Students’ Talents',
percent35head: 'Below 35%',
percent50head: 'Up to 50%',
percent75head: 'Up to 75%',
percentabove75head: 'Above 75%',
rationhead: 'Ration Card Available? (Yes / No)',
governmentschemehead: 'Receiving Govt. Assistance? (Old Age / Women / Others / None)',
familyscheme: 'Vehicle Ownership Details in the Family',
studentdetail: 'Details of Disabled / Students with Criminal Record',
businessend: 'If Higher/Technical Educated Members Exist: Reasons for Not Pursuing Career',
detailhead: 'Details of Women Supporting Family Income',
datehead: 'Date',
signhead: 'Signature of Informant',
signhead2: 'Signature of Data Collector',

     row:[
    {sno: '1',name: 'ram',age: 12,gender: 'male',ration: 'H40',learn: 'BCA',business: '-',time: '-',tablebusiness: '-'},
    {sno: '1',name: 'ram',age: 12,gender: 'male',ration: 'H40',learn: 'BCA',business: '-',time: '-',tablebusiness: '-'}
     
  ],
  row2:[
    {name: 'Arjun',age: 14, std: '9th std',govt: 'Govt Hr. Sec. School',private: '-',precent35: '-',precent50: '-',precent75: '-',
    aboveprecent75: 'yes'},
     

  ],
  vardu: '35',
    doorno: '10/2',
    street: 'ramnagar',
    age: 50,
    headof: 'Mahesh',
    business: 'NA',
    marriage: 'NA',
    marriagename:'NA',
    asset: 'NA',
    house: 'NA',
    relation: 'NA',
    govtscheme: 'NA',
    familysch: 'NA',
    studetail: 'NA',
    businesses: 'NA',
    detail: 'NA',
    date: '08-07-2025'
}