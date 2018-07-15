var gameBoardArray = [];
var playerData = [
	{ name: 'panda', image: 'images/panda.jpg'},
	{ name: 'llama', image: 'images/llama.jpg'}
]
var currentPlayer = 0;

//start up the game setup
function initializeApp(){

}

//add click handlers to elements
function initializeClickHandlers(){

}
//create our 8x8 game board with alternating tiles
function createGameBoard(){

}
//create our tokens on the game board
//input: array with player information, in this case player images and names
//return: the array of dom elements to populate the game board
//globals: game board multi dimensional array
function populateBoardWithTokens(){

}

//determine what moves the current chip has
//input: x and y coordinate of token in game board
//return: array of squares that are valid moves for the current token
//global: game board array
function getCurrentMovesForLocation(){

}
//get the current token at the given location in game board
//input: x and y value
//return: false if out of bounds or empty, otherwise the dom element token inside that square
//global: game board array
function getTokenFromLocation(){

}

//move the token to the given area
//input: object with x and y coordinates for origin, object with x and y coordinates for destination
//return: true or false depending on success (might be told to move to a non-empty square)
//global: game board array
function moveTokenToLocation(){

}

//remove token from given position
//input: x and y coordinate of token to remove
//output: true or false if token was removed or not
//global: game board array
function removeTokenFromLocation(){

}

//switch between players
//input: none
//output: current player object
//global: currentPlayer and playerData
function togglePlayers(){

}

//update playerInfo to show who is active
//input: none
//output: none
//global: currentPlayer, playerData
function displayCurrentPlayer(){

}










