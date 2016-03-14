var Computer = {
  mood: 0,
  moods: ['Happy', 'Angry'],

  generateNumber: function() {
    return Math.floor(Math.random() * 10 + 1);
  },

  setMood: function(moodIndex) {
    this.mood = moodIndex;
  }
}