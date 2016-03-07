var gameOptions = {
  game: $('#game');
}

var gameBoard = {
  init: function(config) {
    this.players = [];
  },

  bind: function() {
    // submit guess
    // add player
    // reset game
  },

  addPlayer: function() {

  },

  startGame: function() {

  },

  generateNumber: function() {
    return Math.floor(Math.random() * 10 + 1);
  },

  playerTurn: function() {

  },

  checkPlayerGuess: function() {
    // if the player guesses exactly, then the bet is added to the bankroll
    // if the player is off by 1, their bankroll stays the same
    // any other guess reduces their bankroll by the amount
  },

  payout: function(player) {

  },

  collect: function(player) {

  },

  restart: function() {
    gameBoard.init(gameOptions);
  }
}

gameBoard.init(gameOption);