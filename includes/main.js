var gameBoardArray = [];
var playerData = [
	{ name: 'panda', image: 'images/panda.jpg'},
	{ name: 'llama', image: 'images/llama.jpg'}
]
var currentPlayer = 0;
var squareClasses = ['whiteSquare', 'blackSquare'];
//start up the game setup
function initializeApp(){
	var numberOfRows = 8;
	var numberOfColumns = 8;
	initializeClickHandlers();
	createGameBoard(numberOfRows, numberOfColumns);
	populateBoardWithTokens(playerData, numberOfRows);
}

//add click handlers to elements
function initializeClickHandlers(){

}
//create our 8x8 game board with alternating tiles
//input: rowCount and columnCount, number of rows and columns.  Not really used effectively yet
//output: none
//global: gameBoardArray, squareClasses
function createGameBoard(rowCount, columnCount){
	
	var currentSquare = 0;
	var gameBoardElement = document.querySelector('.board');
	for(var row = 0; row< rowCount; row++){
		gameBoardArray[row] = [];
		for(var column = 0; column < columnCount; column++){
			var square = document.createElement('div');
			square.classList.add( 'square', squareClasses[currentSquare]);
			currentSquare = 1 - currentSquare;
			gameBoardElement.appendChild(square);
			gameBoardArray[row][column] = square;
		}
		currentSquare = 1 - currentSquare;
	}
	console.log(gameBoardArray);
}
//create our tokens on the game board
//input: array with player information, in this case player images and names, row count
//return: 
//globals: game board multi dimensional array, squareClasses
function populateBoardWithTokens(playerInfo, rowCount){
	var playerImage = playerData[0].image;
	var playerSquare = squareClasses[1];
	for(var row = 0; row< 2; row++){
		for(var column = 0; column < gameBoardArray[row].length; column++){
			if(gameBoardArray[row][column].classList.contains( playerSquare )){
				gameBoardArray[row][column].appendChild( generateToken(playerImage) );
			}
		}
		
	}
	var playerImage = playerData[1].image;
	for(var row = gameBoardArray.length-2; row< gameBoardArray.length ; row++){
		for(var column = 0; column < gameBoardArray[row].length; column++){
			if(gameBoardArray[row][column].classList.contains( playerSquare )){
				gameBoardArray[row][column].appendChild( generateToken(playerImage) );
			}
		}
	}
}
//add a token to the specifed location
//intput: image to add to token
//return: the token dom element
//global: none
function generateToken(tokenImage){
	var token = document.createElement('div');
	token.classList.add('token');
	token.style.backgroundImage = 'url('+tokenImage+ ')';
	return token;
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

initializeApp();








