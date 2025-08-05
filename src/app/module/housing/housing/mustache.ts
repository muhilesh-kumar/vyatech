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
    head:'பிளஸ்லாமா ஹிர்ஸ்லாமா குழுமம்',
    sub:'வடக்கு தெரு முஸ்லிம் ஜமாஅத், தொண்டி',
    sub1:'குடும்பங்களின் புள்ளி விவரப்படிவம்',
    varduhead: 'வார்டு எண்',
    doornohead: 'காது எண்',
    streethead: 'தெரு',
    agehead: 'வயது',
    headofhead: 'குடும்ப தலைவர் / தலைமைக் பெயர்',
    businesshead:'தொழில் விவரம்',
    marriagehead: 'திருமணம் : நல்ல நிலை / சுமாரி / விரும்பும் நிலை',
    marriagenamehead: 'திருமணிதின் முழுப்பெயர்',
    assethead: 'வீட்டு சொத்துக்கள் / தனிநிலத்துக்கேற்ப',
    househead: 'சொந்த வீடு / வாடகை வீடு',
    familyhead: 'குடும்ப உறுப்பினர்கள் விபரங்கள்',
    snohead: 'வ. எண்',
    namehead: 'பெயர்',
    tableagehead: 'வயது',
    genderhead: 'பாலினம் ஆ/பெ',
    relationhead: 'தலைமை உறவுமுறை',
    learnhead: 'கல்வித் தகுதி',
    secondbusiness: 'ஏற்கனவே ஒரு தொழிலா?',
    timehead:'ஜோப்னா நேரம் வேலை?',
    tablebusinesshead:'தொழில்',
    studenthead:'மாணவர்கள் இருப்பின் அவர்களின் குறித்து விபரம்',
    studentnamehead:'பெயர்',
    studentagehead:'வயது',
    studentstdhead:'படிக்கும் வகுப்பு',
    studentschoolheadgot: 'அரசுப்பள்ளி',
    studentschoolheadprivate: 'தனியார் பள்ளி',
    studenttalenthead:'மாணவர்களின் திறன்',
    percent35head: '35% க்கும் குறை',
    percent50head: '50% வரை',
    percent75head: '75% வரை',
    percentabove75head: '75% மேல்',
    rationhead: 'குடும்ப அட்டை உள்ளதா? ( ஆம் / இல்லை )',
    governmentschemehead: 'அரசு உதவி பெறுவாரா ? முதியோர் உதவி / மகளிர் உதவி / இதர உதவி / இல்லை',
    familyscheme: 'குடும்பத்தில் வாகனங்களை பெற்றிருப்பின் விபரம்',
    studentdetail:'உடல் ஊனமுற்றோர், மாணவர்களின் குற்றவியல் இருப்பின் விபரம்',
    businessend: 'உயர்கல்வி மற்றும் தொழில்கல்வி கற்றவர்கள் குடும்பத்தில் இருந்தால் : தொழில் முடிவுகளுக்கான காரணம்',
    detailhead: 'குடும்ப வருமுகத்தில் தங்களின் ஆதரவு உள்ள பெண் இருப்பின் விபரம்',    
    datehead: 'தேதி',
    signhead: 'தகவல் அளிப்பவர் கையொப்பம்',
    signhead2:'தகவல் சேகரிப்பவர் கையொப்பம்',
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