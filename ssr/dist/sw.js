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
    "url": "static/scripts/0.js",
    "revision": "538f65fca34d6f1f8816edd81aedac93"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "da199b9c39d76e3fbfeca2e85abcb984"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "d1d6872352d32594081e08f069de41ff"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "48923a263a6fb5215314da984b4721ab"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "2f90094c7dc949466b74c2e1d2486215"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "9b15c2a333a338703deb5b856fb1c8ec"
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
