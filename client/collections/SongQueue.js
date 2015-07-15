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
    return this.shift();
  },
  playFirst: function() {
    this.first().play();
  }

});