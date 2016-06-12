'use strict';
var gitSemverTags = require('@marionebl/git-semver-tags');

module.exports = function(callback) {
  gitSemverTags(function(error, tags) {
    if (error) {
      return callback(error);
    }
    callback(null, tags[0] || '');
  });
};
