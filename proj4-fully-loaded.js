let proj4 = require("proj4");
const defs = require("proj4js-definitions");

if (typeof proj4 === "object" && typeof proj4.defs !== "function" && typeof proj4.default === "function") {
  // probably inside an Angular project
  proj4 = proj4.default;
}

proj4.defs(defs);

module.exports = proj4;
