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
    "revision": "1f435aefae107925f3ab70f3290d0d6a"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "3be2629b818567a82ffe29d3db9ce709"
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
