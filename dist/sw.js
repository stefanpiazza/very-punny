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
    "revision": "a98020731728b4d5fd52f947b2cdd5a4"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "05e0d2fe65eaefa0b8c5cf603a13fac2"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "50e32938a927a2ce47e97fec575c9d0e"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "90f599b36c137aca1743e510f8fa866d"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
