// sidebar
var Backbone = require('backbone');
var _ = require('underscore');
var generator = require('../utils/generator');

module.exports = Backbone.View.extend({

  events: {
    'click .add': 'addObject'
  },

  initialize: function() {

  },

  // create all of the needed sub views for the editor
  render: function() {
    return this;
  },

  scale: function(wpx) {
    this.$el.height(wpx);
  },

  addObject: function(evt) {
    // add a cube
    var cube = generator.fromType('cube');

    this.trigger('addObject', {object: cube});
  }

});