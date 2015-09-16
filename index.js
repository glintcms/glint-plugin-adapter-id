/**
 * Module dependencies.
 */
var debug = require('debug')('glint-plugin-adapter-id');

/**
 *  Dates Adapter Plugin
 *
 *  adds the id attribute.
 */
module.exports = function (o) {
  o = o || {};
  o.id = 'id';

  plugin.api = 'adapter-plugin';
  plugin.name = 'id';
  function plugin(adapter) {

    adapter.on('pre-save', function () {
      var args = [].slice.apply(arguments);
      var len = args.length, pos = 3;
      if (len <= pos) return debug('missing argument');
      var obj = args[pos];
      var id = args[pos - 1];
      obj[o.id] = id;
    });

  }

  return plugin;

};
