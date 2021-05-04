# proj4-fully-loaded
Proj4JS Projector Fully Loaded with Projections

# install
```bash
npm install -S proj4-fully-loaded
```

# motivation
One of the most popular questions I hear from users of [georaster](https://github.com/geotiff/georaster)
is how do I use a GeoTIFF that's in UTM or another projection not included in the default build of proj4.
I've created this library, so users can use [georaster](https://github.com/geotiff/georaster) and [georaster-layer-for-leaflet](https://github.com/geotiff/georaster-layer-for-leaflet) 
without worrying about how to find and load the projection information for their data.

# usage
Use it just like you would [proj4](https://www.npmjs.com/package/proj4),
except you don't have to load your projection.

```javascript
const proj4 = require("proj4-fully-loaded");

const pointIn4326 = [-85.3097, 35.0456];

// EPSG:32617 is automatically included in proj4-fully-loaded
const pointInUTM = proj4("EPSG:4326", "EPSG:32617").forward(pointIn4326);
// pointInUTM is [106823.88325412886, 3886600.558377227]
```

# manual way
For your reference, here is the way to manually load the projection information
without the proj4-fully-loaded library.
```javascript
const proj4 = require("proj4");

// find and load projection specific definition
// taken from http://epsg.io/32617
proj4.defs("EPSG:32617", "+proj=utm +zone=17 +datum=WGS84 +units=m +no_defs");

const pointIn4326 = [-85.3097, 35.0456];

const pointInUTM = proj4("EPSG:4326", "EPSG:32617").forward(pointIn4326);
// pointInUTM is [106823.88325412886, 3886600.558377227]
```

# what about file size?
One of the inevitable questions will be, "don't you increase your bundle size by loading all this projection information?"  This is a very valid question.  This library (as compared to vanilla proj4) should only
increase your bundle size by about 175 Kilobytes.  If you are creating a library or application that
supports multiple projections, please consider using this library and evaluating if the trade off is worth it.
If you are building something that supports just one specific projection, you probably want to save size
and load projection information using the approach above.

# support
If you have any questions or comments, please post an issue [here](https://github.com/DanielJDufour/proj4-fully-loaded/issues) or email me at daniel.j.dufour@gmail.com
