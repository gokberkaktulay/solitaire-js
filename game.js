import Deck from './cards.js';
const deck = new Deck();
console.log("   Hello");
var ucode = 0x1f0a1;
ucode = ucode +1;
console.log(ucode);
//console.log(deck.cards);
deck.shuffle();
//console.log(deck.cards);
deck.cards.forEach(element => {
    console.log(element.ucode);
});

var wastePile = [];
$(document).ready(function(){
    $(".stock").on("click",function(){
        //$( ".card:last-child" ).draggable('disable');
        if (wastePile.length > 0){
            let prevCard = wastePile[wastePile.length-1];
            prevCard.hidden = false;
            $( ".card:last-child" ).replaceWith(prevCard.getHTML());
        }
        console.log("clicked stock");
        let card = deck.cards.pop();
        document.getElementById("wastePile").appendChild(card.getHTML());
        wastePile.push(card);
        
        //$( function() {
            $( ".card:last-child" ).draggable(/*{ revert: true }*/);
        //  } );
    });
});




