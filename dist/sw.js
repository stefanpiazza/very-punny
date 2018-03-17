importScripts('workbox-sw.prod.v2.1.3.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "index.html",
    "revision": "ddaa6e3e137af43ebceaa6b2d6decd54"
  },
  {
    "url": "/static/scripts/0.js",
    "revision": "ec6e3d1d0cb5b628cb3f2d494b8cf503"
  },
  {
    "url": "/static/scripts/1.js",
    "revision": "acc06e9eb421dba3e9ef86791ebdc83e"
  },
  {
    "url": "/static/scripts/2.js",
    "revision": "5e48ff117c834d5320343a04092762d6"
  },
  {
    "url": "/static/scripts/3.js",
    "revision": "6d903255476f3a2ced115997f29b703a"
  },
  {
    "url": "/static/scripts/4.js",
    "revision": "8ca1f9aa69cab369cf138c3d4c049248"
  },
  {
    "url": "/static/scripts/app.js",
    "revision": "54f75fd7d948e3f34e4ba59a960f118d"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "292f5fcbf37e758e4dc188b224336747"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "164f7e1273155d241bb7045bf204f771"
  },
  {
    "url": "/static/styles/common.css",
    "revision": "bcace371bde45bd68761d9c749d9b930"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
