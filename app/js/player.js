function Player() {
  this.bankroll = 100;
  this.lastBet = 0;
  this.lastGuess = null;
}

Player.prototype.makeBet = function(bet) {
  // bet must be between 5 and 10
}

Player.prototype.makeGuess = function(guess) {
  // guess must be between 1 and 10
}

Player.prototype.addBankroll = function(amount) {

}

Player.prototype.reduceBankroll = function(amoutn) {

}
