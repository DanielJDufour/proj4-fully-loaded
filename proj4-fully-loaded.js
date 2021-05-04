const proj4 = require("proj4");
const defs = require("proj4js-definitions");

proj4.defs(defs);

module.exports = proj4;
