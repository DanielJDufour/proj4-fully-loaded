let proj4 = require("proj4");
const defs = require("proj4js-definitions");

// - inside an Angular project, proj4 could be an object
// - inside a Vite project, proj4 could be the proj4 function
//   but with the defs property/function mysteriously removed
if ((typeof proj4 === "object" || typeof proj4 === "function") && typeof proj4.defs !== "function" && typeof proj4.default === "function" && typeof proj4.default.defs === "function") {
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

