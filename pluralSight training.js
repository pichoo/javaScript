/*
Blackjack
by Muhammad
*/
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'],
  values = ['Ace', 'King', 'Queen', 'Jack',
    'Ten', 'Nine', 'Eight', 'Seven', 'Six',
    'Five', 'Four', 'Three', 'Two'
  ];

let deck = [];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
  for (let valueIdx = 0; valueIdx < values.length; valueIdx++)
    deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
}

for (let i = 0; i < deck.length; i++) {
  console.log(deck[i]);
}

//let deck = [
//        "Ace of Spades",
//        "Ten of Hearts",
//        "Three of Spades"
//  ];
//let card1 = "Ace of Spades",
//    card2 = "Ten of Hearts"; // since we are creating arrays to simplify


let playerCards = [
  deck[0],
  deck[2]
];

console.log("Welcome to Blackjack!");
console.log("You are dealt:");
//console.log(" " + card1); //referring to the array elements now
//console.log(" " + card2);

console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);