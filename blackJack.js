/*
Blackjack
by Muhammad
*/
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
  values  = ['Ace', 'King', 'Queen', 'Jack',
             'Ten', 'Nine', 'Eight', 'Seven', 'Six',
             'Five', 'Four', 'Three', 'Two'];

function createDeck() {
  let deck = [];
  for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < values.length; valueIdx++) {
         let card = {
           suit: suits[suitIdx],
           value: values[valueIdx]
         };
         //deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
         deck.push(card);
    } 
  }
  return deck;
}

function getNextCard() {
  return deck.shift();
}

let deck = createDeck();

function getCardString(card){
  return card.value + " of" + card.suit;
}

//for (let i = 0; i < deck.length; i++) {
//  console.log(deck[i]); 
//} //- This loop was used to display the contents of each entry as the deck is being created 

//let deck = [
//        "Ace of Spades",
//        "Ten of Hearts",
//        "Three of Spades"
//  ];
//let card1 = "Ace of Spades",
//    card2 = "Ten of Hearts"; // since we are creating arrays to simplify


let playerCards = [getNextCard(), getNextCard()];

console.log("Welcome to Blackjack!");
console.log("You are dealt:");

//console.log(" " + card1); //referring to the array elements now
//console.log(" " + card2);

console.log(" " + getCardString(playerCards[0]));
console.log(" " + getCardString(playerCards[1])); 


// console.log(" "+ (playerCards[0]).value + " of " + (playerCards[0].suit)) - this is way you would do it without 
//utilizing the function
