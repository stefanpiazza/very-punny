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
    "revision": "b3d6c80b74727b33cb4f67ddcf484289"
  },
  {
    "url": "static/scripts/0.js",
    "revision": "dd4340e9f9029c485bf88121ceeb97f6"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "a0b613db7e0d23c9e378e3247aa00042"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "38e858fb63b2d5d1ee18d41d1b6ad1bb"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "443e8bffc8567054e1f6bc1b70528eb7"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "93993516595bb52b5d541e7cfb5ea890"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "f4daffffec23b372fcc1c50bc14fa364"
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
