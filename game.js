import Deck from './cards.js';
const deck = new Deck();
console.log("   Hello");
var ucode = 0x1f0a1;
ucode = ucode +1;
console.log(ucode);
//console.log(deck.cards);
//deck.shuffle();
//console.log(deck.cards);
deck.cards.forEach(element => {
    console.log(element.ucode);
});

