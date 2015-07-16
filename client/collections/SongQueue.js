// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(event) {
      if (this.length === 1) {
        this.playFirst();
      }
    });
  },
  dequeue: function() {
    console.log('DQin!');
    console.log(this);
    this.shift();
    console.log(this);
  },
  playFirst: function() {
    this.first().play();
  }

});