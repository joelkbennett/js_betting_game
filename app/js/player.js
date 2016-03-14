function Player(playerCard) {
  this.playerCard = playerCard;
  this.name = playerCard.find('.player-name').val();
  this.bankroll = 100;
  this.bet = 0;
  this.guess = null;
  this.setBankroll();
}

Player.prototype.play = function() {
  console.log('player is playing');
  this.playerCard.find('.no-player').hide();
  this.playerCard.find('.player-name').text(this.name);
  this.playerCard.find('.in-play').show();
}

Player.prototype.makeBet = function() {
  // grab the bet field
  console.log('make a bet');

}

Player.prototype.makeGuess = function(guess) {
  // guess must be between 1 and 10
  console.log('make a guess');
}

Player.prototype.setBankroll = function() {
  this.playerCard.find('.bankroll').text(this.bankroll);
}

Player.prototype.addBankroll = function(amount) {
  console.log(amount);
  console.log(this.bankroll);
  this.bankroll += parseInt(amount);
  this.setBankroll();
}

Player.prototype.reduceBankroll = function(amount) {
  console.log(amount);
  console.log(this.bankroll);  
  this.bankroll -= parseInt(amount);
  this.setBankroll();
}

Player.prototype.visualizeBankroll = function(amount) {

}

Player.prototype.isBroke = function() {
  return this.bankroll >= 5 ? true : false;
}
