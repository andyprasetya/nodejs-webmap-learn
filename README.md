# nodejs-webmap-learn
## Let's build a webmap with NodeJS, Express and Leaflet!
Webmap - or simply deploying an interactive map on the web - is still a _terra incognita_ for many web developers and GIS specialists. Why? Because webmap can significantly reduce the gap between the experts and the dummies just via a web browser. Moreover, in terms of flexibility and integration capability, a webmap can leverage many modern scripting or API capabilities of other applications, in conjunction with the deployed webmap platform. For instance, we can integrate a webmap with [ArcGIS REST API](http://esri.github.io/node-arcgis/) or [Geomatica's Python API](https://support.pcigeomatics.com/hc/en-us/articles/207601873-Getting-Started-with-Geomatica-and-Python) into a comprehensive geospatial analysis tool for everyone!

Wait, ...what about [R](https://www.r-project.org/), especially [R Spatial](http://www.rspatial.org/)? Yes. Absolutely you can. With the right choice of webmap application platform, you can integrate R's powerful statistical and spatial analysis capabilities into a beautiful and intriguing webmap that will open your _**GIS-illiterate**_ top-level managers' mind.

So, let's start from the scratch. We will use [NodeJS](https://nodejs.org/en/) as our main engine, as it is freely available for most OS.

1. Install [NodeJS](https://nodejs.org/en/).
2. Update [NPM](https://www.npmjs.com/) which is installed automatically when installing NodeJS, by issuing command (as a superuser/root):
```
# npm update -g npm
```
3. Install [nodemon](http://nodemon.io/) package for our deployment and monitoring tool via NPM command:
```
# npm install -g nodemon
```
That's all, and now you're ready to build amazing things.
