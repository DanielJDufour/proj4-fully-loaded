let proj4 = require("proj4");
const defs = require("proj4js-definitions");

if (typeof proj4 === "object" && typeof proj4.defs !== "function" && typeof proj4.default === "function") {
  // probably inside an Angular project
  proj4 = proj4.default;
}

proj4.defs(defs);

if (typeof define === "function" && define.amd) {
  define(function() { return proj4; });
}

if (typeof module === "object") {
  module.exports = proj4;
  module.exports.default = proj4;
}

