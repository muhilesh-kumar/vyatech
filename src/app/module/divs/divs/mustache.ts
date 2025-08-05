export interface ICardData {
  id: number;
  key: string;
  label: string;
}

export interface IMustachePayload {
  cards: ICardData[];
  [key: string]: any;
}

export const mustachePayload: IMustachePayload = {
  cards: [
    
    
    { id: 2, key: 'card2', label: 'Card B' },
    { id: 1, key: 'card1', label: 'Card A' },
    { id: 3, key: 'card3', label: 'Card C' },
    { id:4, key: 'card4', label: 'Card D' },
    { id: 5, key: 'card5', label: 'Card E' },
    { id: 6, key: 'card6', label: 'Card F' },
    { id: 7, key: 'card7', label: 'Card G' },
    { id: 8, key: 'card8', label: 'Card H' }
    
    
    
    
  ],
  card1: 'This is card 1 description',
  card2: 'This is card 2 description',
  card3: 'This is card 3 description',
  card4: 'This is card 4 description',
  card5: 'This is card 5 description',
  card6: 'This is card 6 description',
  card7: 'This is card 7 description',
  card8: 'This is card 8 description',
  
};
