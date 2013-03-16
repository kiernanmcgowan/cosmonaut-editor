// generator

var Backbone = require('backbone');
var _ = require('underscore');
var harness = require('cosmonaut-harness');

// set a default material
function fromType(name, params) {
  params = (params || {});
  var obj = new harness.primitive.cube(params);
  obj.set('material', new harness.material());
  return obj;
}

module.exports.fromType = fromType;
