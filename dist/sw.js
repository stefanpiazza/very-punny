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
    "revision": "5bc023948af68e98db423a84e3c430ae"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "30374e522620dcead446b4c2c54e23bf"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "a6d95bd1ee58392e78cbbec0de094a13"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "53707025880841baca16890f2fc18646"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "e5ea17a2266f64a0c9ba68274f174a5d"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "a231d4d585342b075ce7230d2d3b9af8"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
