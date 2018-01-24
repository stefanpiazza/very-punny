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
    "revision": "ecfd4986584514b9976ad9689be613b3"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "e9736432d30991f125575d861d5e690f"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "dd6dde43833ff4130ece771731ccdf3d"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "e33e4beb71849c6e8c02e165e95475e6"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "b31e7dc9164b1f4e6dc7c5ee86160d86"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "deb93193d6c861140103a90abf8f0a73"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "be8dfbf03ec8024ca28555c00bed10e8"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
