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
    "url": "/ssr-index.html",
    "revision": "68f9fb011e0df697d14cb8e9825f6e42"
  },
  {
    "url": "static/scripts/0.js",
    "revision": "0766f250d3296ee58e956e9f2da81b84"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "8eb4fca2e73ad05fbc9e7205f04dfd3d"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "856c334e071812b9f5f274a7a1ebad74"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "48923a263a6fb5215314da984b4721ab"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "639c1995a12d25b02ffe07bf9264672f"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "e330ca7acb12ed72bc8177c564d2519e"
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
