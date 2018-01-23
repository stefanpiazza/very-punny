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
    "revision": "1efabe0c691759ec33db902e30a19a94"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "81b94b4fa881bc5fe21eb1bb5bf8fdb8"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "ae84355b715171c57b5ac83bd484be58"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "ca01cbd4cd34e7b1c60835f1e98aff85"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "d62991b754396e65cfe6d116ab8a5391"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "12ee739a2c80be5a7212a531eb85f602"
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
