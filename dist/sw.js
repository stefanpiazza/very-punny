importScripts('workbox-sw.prod.v2.1.3.js');

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
    "url": "index.html",
    "revision": "ddaa6e3e137af43ebceaa6b2d6decd54"
  },
  {
    "url": "/static/scripts/0.js",
    "revision": "7f0ebf233c3e220f029d3fc65654a9dd"
  },
  {
    "url": "/static/scripts/1.js",
    "revision": "90c63c00a0e393090f0ae7c23e65e73f"
  },
  {
    "url": "/static/scripts/2.js",
    "revision": "81b3e1ba539df807d445f52f20988d50"
  },
  {
    "url": "/static/scripts/3.js",
    "revision": "30c29db95c6e7c116726410ef4195616"
  },
  {
    "url": "/static/scripts/app.js",
    "revision": "8702aa999c950814546cd3d50d834e95"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "147ac6539d1f9cef18783570ea6091c7"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "342699112ae8034e8b11c5a051abdcc2"
  },
  {
    "url": "/static/styles/common.css",
    "revision": "f7c5fb9a2cb21af81c493235893bb8ee"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
