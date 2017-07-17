console.log("Up and running!");
//Create an object for each card in the game
var cards = [
  {
    rank: "queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
},
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
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2 && cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  } else if (cardsInPlay.length === 2) {
    console.log("Sorry, try again.");
  } else {
    console.log("Please flip another card");
  }
}
//Function to log what cards were flipped
var flipCard = function() {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank + ".");
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  //This adds the flipped card to the array of "Cards in play"
  cardsInPlay.push(cards[cardId].rank);
  //This runs the checkForMatch function above
  checkForMatch();
}
//Function to create the game board
var createBoard = function() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', "images/back.png");
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.querySelector('game-board').appendChild(cardElement);
}

//Call the createBoard function
createBoard();
