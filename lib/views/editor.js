// root view
var Backbone = require('backbone');
var _ = require('underscore');

// other views
var sceneView = require('./scene');
var sidebarView = require('./sidebar');

module.exports = Backbone.View.extend({

  el: $('body'),

  initialize: function() {
    var self = this;
    $(window).on('resize', function() {
      self.scaleLayout();
    });
    this.scene = new sceneView({el: this.$el.find('#scene')});
    this.sidebar = new sidebarView({el: this.$el.find('#sidebar')});

    this.sidebar.on('addObject', function(obj) {
      self.scene.addObject(obj.object);
    });
  },

  // throttle the function to make sure we dont flood browser
  scaleLayout: _.throttle(function() {
    var h = $(window).height();
    this.scene.scale(h);
    this.sidebar.scale(h);
  }, 250),

  // create all of the needed sub views for the editor
  render: function() {
    // create a new render target
    this.scene.render();
    // create a new left sidebar
    this.sidebar.render();
    // now size everything
    this.scaleLayout();
  }

});

// start the app
var tmp = new module.exports();
tmp.render();
