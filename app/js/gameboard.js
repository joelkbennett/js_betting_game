var GameBoard = function() {
  var _self;
  var _states = $('.state');
  $('.in-play').hide();

  return {
    init: function(config) {
      _self = this;
      _self.board = config.game;
      _self.players = [Computer, null, null];
      _self.bind();
      _self.hideStates();
      _self.state = 1;
      
      // show the initial state
      $('[data-state="' + _self.state + '"]').show();
    },

    bind: function() {
      // add player
      _self.board.find('.join-game').on('click', function() {
        var playerNum = $(this).data('join');
        if (playerNum === 1) {
          _self.addPlayer(1)
        } else if (playerNum === 2) {
          _self.addPlayer(2)
        } else {
          console.log('player out of range');
        }
        _self.changeState(2);
      });

      //reset game
      _self.board.find('.restart-game').on('click', function() {
        _self.changeState(3);
        _self.startGame();
      });

      // start game
      _self.board.find('.start-game').on('click', function() {
        _self.changeState();
        _self.startGame();
      });
    },

    addPlayer: function(index) {
      // TODO: Validate the player name
      var playerCard = $('#p' + index);
      _self.players[index] = (new Player(playerCard));
      _self.players[index].play();
    },

    removePlayer: function(player) {
      var index = this.players.indexOf(player);
      players.splice(index, 1);
    },

    startGame: function() {
      if ( _self.players[1] === null && _self.players[2] === null ) {
        console.log('No players in the game!')
      } else {
        // TODO: put a check in to see if current players are broke or have left the game
        _self.playTurn();  
      }  
    },

    playTurn: function() {
      console.log('Play a turn');
      var computerNum = _self.players[0].generateNumber();
      console.log(computerNum);
      $('.answer').text(computerNum);
      $('.play-turn').on('click', function() {
        for (var i = 1; i <= 2 ; i++) {
          if ( _self.players[i] != null ) {
            var player = _self.players[i];
            player.bet = $('.bet').val();
            player.guess =  player.playerCard.find('.guess').val();
            _self.checkPlayerGuess(player, computerNum);
          }
        }
        _self.changeState();
      });

      $('.show-result').on('click', function() {
        _self.changeState();
      });
    },

    checkPlayerGuess: function(player, num) {
      console.log('check player guess');
      // Add the check for one off
      if (player.guess == num) {
        player.addBankroll(player.bet);
      } else {
        player.reduceBankroll(player.bet);
      }
    },

    payout: function(player) {
      player.addBankroll(player.bet);
    },

    collect: function(player) {
      player.reduceBankroll(player.bet);
    },

    hideStates: function() {
      _states.each (function() {
        $(this).hide();
      });
    },

    changeState: function(state) {
      console.log('old state: ', _self.state);
      _self.hideStates();

      if (state) {
        $('[data-state="' + state + '"]').show();
        _self.state = state;
      } else {
        _self.state += 1;
        $('[data-state="' + _self.state + '"]').show();
      }
      console.log('showing a new state: ', _self.state);
    }

    // restart: function() {
    //   _self.init(gameOptions);
    // }
  };
}