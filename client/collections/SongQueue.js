// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },
  add: function(song) {
    Songs.prototype.add.call(this, song);

    if (this.length === 1) {
      this.playFirst();
    }
  },
  dequeue: function() {
    return this.shift();
  },
  playFirst: function() {
    this.first().play();
  }

});