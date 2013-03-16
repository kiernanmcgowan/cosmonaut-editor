// set up backbone
require('backbone').$ = $;

// engine.js
var harness = require('cosmonaut-harness');
module.exports.harness = harness;

// views and such
var editor = require('./views/editor');
