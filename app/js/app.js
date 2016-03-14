// start a game
// have the computer say something
// wait for players
// when at least one player, show option to start

(function () {
  var gameOptions = {
    game: $('#game')
  }

  var game = new GameBoard();
  game.init(gameOptions);
})();

