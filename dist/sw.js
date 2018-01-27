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
    "revision": "8acd1f6cec77e42f589a5a24267c4069"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "44986136178bca7a63df59d9b5da16e3"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "839cabb9d46bd1d94553e917c5dea2e6"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "0a08c5639b224060a77fdf0b1a15c3c5"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "761837892cae804d15989b355c7fd60f"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "9752e932fa11243a2f8488a9a31d64e9"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "c3ea83617104c8be3385fc15cd9909fb"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
