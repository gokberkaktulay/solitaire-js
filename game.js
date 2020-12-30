import Deck from './cards.js';

const deck = new Deck();
console.log("   Hello");
console.log(deck.cards);
deck.shuffle();
console.log(deck.cards);