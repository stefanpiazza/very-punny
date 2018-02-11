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
    "revision": "41f0cfe89f26a90e076d8502a9a03daf"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "caf9df5a74c2b5d9d885a600464451fe"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "3d2544f046ca33033c78a5ed9590f20c"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "63826da10334d880001214836caf1e32"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "ef3bf5a8728eb42134d6a747b31b17a0"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "8ac96fea952663c7545a82af2749527c"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "167eb5c7f0ae89e3d2a7aa1516567c84"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
