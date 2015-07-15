// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
  },
  enqueue: function(song) {
    this.push(song);
  },
  dequeue: function() {
    return this.shift();
  }

});