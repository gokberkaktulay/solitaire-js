const SUITS = ['♠','♥','♦','♣'];
const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13]
class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
    }
}

export default class Deck{
    constructor(){
        this.cards = SUITS.flatMap((suit => {
            return VALUES.map(value => {return new Card(suit,value)}
            )}
        ));
    }

    // Fisher-Yates shuffle algorithm
    shuffle(){
        for (let i = this.cards.length - 1;i > 0;--i){
            let targetIndex = Math.floor(Math.random() * (i+1));    // an integer less than or equal to i
            let tmp = this.cards[i];
            this.cards[i] = this.cards[targetIndex];  // swap cards
            this.cards[targetIndex] = tmp;
        }
    }
}