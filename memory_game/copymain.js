console.log("Up and running!");
//Create an object for each card in the game
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  }
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  }
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
}
{
    rank: "king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
}
];
// Create an array for the cards in play
var cardsInPlay = [];
//Function to check if the 2 cards in play match each other
var checkForMatch = function() {
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else if (cardsInPlay.length === 2) {
    console.log("Sorry, try again.");
  } else {
    console.log("Please flip another card");
  }
}
//Function to log what cards were flipped and then check for a match using the function above
var flipCard = function(cardId) {
  console.log("User flipped " + cards[cardId].rank + ".");
  //This adds the flipped card to the array of "Cards in play"
  cardsInPlay.push(cards[cardId].rank);
  checkForMatch();
  console.log(cards[cardID].cardImage);
  console.log(cards[cardID].suit)
}
//The two cards that are flipped
flipCard(0);
flipCard(3);
