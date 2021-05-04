const test = require("flug");
const proj4 = require("./proj4-fully-loaded");

const point = [-85.3097, 35.0456];

test("long/lat to web mercator", ({ eq }) => {
  const p2 = proj4("EPSG:4326", "EPSG:3857").forward(point);
  eq(p2, [-9496632.36372693, 4170079.729890518]);
});

test("utm", ({ eq }) => {
  const p2 = proj4("EPSG:4326", "EPSG:32617").forward(point);
  eq(p2, [106823.88325412886, 3886600.558377227]);
});
