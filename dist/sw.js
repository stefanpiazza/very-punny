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
    "revision": "bc79f0d1c11b26912010e291c92c06a1"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "40157fea74d9dbc5a324edd739fb4e97"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "ac545362331d142ef67ef830abe5ad87"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "391dde6f85acfae2daae576676397bee"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
