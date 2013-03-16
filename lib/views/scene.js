// scene
var Backbone = require('backbone');
var _ = require('underscore');
var harness = require('cosmonaut-harness');

module.exports = Backbone.View.extend({

  initialize: function() {
    this.scene = new harness.scene({webgl: true});
  },

  // create all of the needed sub views for the editor
  render: function() {
    this.scene.attachToDom(this.$el);
    this.renderToCanvas(true);
    return this;
  },

  scale: function(wpx) {
    this.$el.height(wpx);
  },

  addObject: function(obj) {
    console.log(obj);
    this.scene.addObject(obj);
  },

  renderToCanvas: function(continuous) {
    if (continuous) {
      this.scene.startRenderLoop();
    } else {
      this.scene.renderFrame();
    }
  }

});