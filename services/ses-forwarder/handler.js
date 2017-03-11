'use strict';

var sesForwarder = require('aws-lambda-ses-forwarder')

module.exports.sesForwarder = function (evt, ctx, cb) {
  // See aws-lambda-ses-forwarder/index.js for all options
  var overrides = {
    config: {
      fromEmail: "noreply@habd.as",
      emailBucket: "habd.as-ses-email",
      emailKeyPrefix: "",
      forwardMapping: {
        "@habd.as": [
          "jhabdas@gmail.com"
        ]
      }
    }
  };
  sesForwarder.handler(evt, ctx, cb, overrides);
}
