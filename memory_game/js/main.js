console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

var checkForMatch = function() {if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else if (cardsInPlay.length === 2) {
  console.log("Sorry, try again.");
} else {console.log("Please flip another card");
}
}
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId] + ".");
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}
flipCard(0);
flipCard(3);
