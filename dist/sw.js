importScripts('workbox-sw.prod.v2.1.2.js');

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
    "url": "/index.html",
    "revision": "5cc089d917ca5e534f7e262c5ff2b7e3"
  },
  {
    "url": "static/scripts/0.js",
    "revision": "1b8472ff8ad95d96a471d72ac1a579d1"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "36ad35c246a5c34c7548b5bd5c472a70"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "4e9168a7f1f0dc62ee581407ce83ea7e"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "443e8bffc8567054e1f6bc1b70528eb7"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "89182f21279cec5d229af4e946718ee8"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "d154771608254b76e34690305177d6fb"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "1fe1b7f99e21ec3bb0befa5d3a1a3318"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
