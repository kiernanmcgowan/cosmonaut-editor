// root view
var Backbone = require('backbone');
var _ = require('underscore');

module.exports = Backbone.View.extend({

  el: $('body'),

  initialize: function() {
    console.log('init');
    //this.on(window.resize, 'change', this.scaleLayout);
    $(window).on('resize', this.scaleLayout, 250);
  },

  scaleLayout: function() {
    console.log('adsfa');
  },

  // create all of the needed sub views for the editor
  render: function() {
    // create a new render target

    // create a new left sidebar

    // create a new bottom side bar
  }

});

var tmp = new module.exports();
