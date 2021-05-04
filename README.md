# proj4-fully-loaded
Proj4JS Projector Fully Loaded with Projections

# install
```bash
npm install -S proj4-fully-loaded
```

# motivation
One of the most popular questions I hear from users of [georaster](https://github.com/geotiff/georaster)
is how do I use a GeoTIFF that's in UTM or another projection not included in the default build of proj4.
I've created this library, so users can use [georaster](https://github.com/geotiff/georaster)
without worrying about how to find and load the projection information for their data.

# usage
Use it just like you would [proj4](https://www.npmjs.com/package/proj4),
except you don't have to load your projection.

```javascript
const proj4 = require("proj4-fully-loaded");

const pointIn4326 = [-85.3097, 35.0456];

const pointInUTM = proj4("EPSG:4326", "EPSG:32617").forward(point);
// pointInUTM is [106823.88325412886, 3886600.558377227]
```

# old way
For your reference, here is the way to do the above with the proj4-fully-loaded library:
```javascript
const proj4 = require("proj4-fully-loaded");

// find and load projection specific definition
proj4.defs("EPSG:32617", "+proj=utm +zone=17 +datum=WGS84 +units=m +no_defs");

const pointIn4326 = [-85.3097, 35.0456];

const pointInUTM = proj4("EPSG:4326", "EPSG:32617").forward(point);
// pointInUTM is [106823.88325412886, 3886600.558377227]
```