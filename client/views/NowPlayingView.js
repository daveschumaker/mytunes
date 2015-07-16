// Let's display the current song! Awwwwwwwwwww yeah.
var NowPlayingView = Backbone.View.extend({

  template: _.template('Now playing: <%= title %> by <%= artist %>'),

  initialize: function() {
    this.render();
  },

  setSong: function(song){
    this.model = song;
    this.render();
  },

  render: function() {
    if (this.model.has('title') && this.model.has('artist')) {
      return this.$el.html(this.template(this.model.attributes));
    } else {
      return this.$el.html('');
    }
  }

});