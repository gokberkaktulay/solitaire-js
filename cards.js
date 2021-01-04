const SUITS = ['♠','♥','♦','♣'];
const VALUES = [1,2,3,4,5,6,7,8,9,10,11,12,13]
class Card {
    constructor(suit, value){
        this.suit = suit;
        this.value = value;
        switch(suit){
            case '♠':
                this.ucode = 0x1F0A0;
                break;
            case '♥':
                this.ucode = 0x1F0B0;
                break;
            case '♦':
                this.ucode = 0x1F0C0;
                break;
            case '♣':
                this.ucode = 0x1F0D0;
                break;
            default:
                this.ucode = 0;
                break;
        }
        this.ucode = (value >= 12) ? this.ucode + value + 1 : this.ucode + value; //the ucode values contain knight between jack and queen
        console.log(this.ucode.toString(16));
        this.ucode = String.fromCodePoint(this.ucode);
    }

    getHTML(){
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
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