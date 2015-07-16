// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on('add', function(event) {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.dequeue();
      if (this.length > 0) {
        this.playFirst();
      }
    });

    this.on('dequeue', function(song) {
      if (this.first() === song && this.length > 1) {
        this.remove(song);
        this.playFirst();
      } else {
        this.remove(song);
      }
    });
  },
  dequeue: function() {
    this.shift();
  },
  playFirst: function() {
    this.first().play();
  }

});