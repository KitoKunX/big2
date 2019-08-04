//reference points
var ref = {
	"1": ["Ace", 12],
	"2": ["2", 13],
	"3": ["3", 1],
	"4": ["4", 2],
	"5": ["5", 3],
	"6": ["6", 4],
	"7": ["7", 5],
	"8": ["8", 6],
	"9": ["9", 7],
	"10": ["10", 8],
	"11": ["Jack", 9],
	"12": ["Queen", 10],
	"13": ["King", 11]
};

//Empty dictionary to generate hands into
var hands = {};

//suits array for later
var suits = ["diamonds", "clubs", "hearts", "spades"];

//Array object representing deck
var deck = [];

//Stack of cards that has been played already
var stack = [];

//Card constructor function
var Card = function(suit, number) {
  this.number = number;
  this.name = ref[this.number][0];
  this.rank = ref[this.number][1];
  this.suit = suit;
}

//Create deck using card constructor (only 13 cards for now)
function createDeck(){
	for(var i in ref) {
		var card = new Card("diamonds", i);
		deck.push(card);
	}
}

//Check if card1 is higher than card2 in game ranking
function checkRankHigher(card1, card2){
	return card1.rank > card2.rank;
}

//Shuffle deck array randomly
function shuffleDeck(){
	shuffle(deck);
}

//Create hands from deck based on amount of players
function createHands(amount){
	var rem = Math.floor(13/amount);
	for (x = 0; x < amount; x++){
		hands[x] = [];
		for (i = 0; i < rem - 1; i++) {
			hands[x].push(deck[i]);
			deck.splice(i, 1);
		}
	}
}

//Play card from hand
function playCard(card){
	var prevCard = stack[stack.length - 1];
	if (checkRankHigher
}
