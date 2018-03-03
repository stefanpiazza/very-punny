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
    "url": "/index.html",
    "revision": "4ff0ec7e5d56fa9901264a276cfbb271"
  },
  {
    "url": "/static/scripts/0.js",
    "revision": "6a4d12018177ed3baf47568a4c9f1280"
  },
  {
    "url": "/static/scripts/1.js",
    "revision": "2b5ba2629baaf1abedcb7124cfc36361"
  },
  {
    "url": "/static/scripts/2.js",
    "revision": "c211557985eef54dd3a57d0588e8b579"
  },
  {
    "url": "/static/scripts/3.js",
    "revision": "fbf95d53838dd6e7b988b8dc49247ff8"
  },
  {
    "url": "/static/scripts/4.js",
    "revision": "94f1e7c3d8155c895813688bd116e78e"
  },
  {
    "url": "/static/scripts/app.js",
    "revision": "800ee1ffd66af173e5e16d57cde4b77b"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "21c3c50b768eccf5738b00e870e1a680"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "d3828a441413f350d9566ecbfc0107c8"
  },
  {
    "url": "/static/styles/common.css",
    "revision": "768f3991d68bde890832571d5306fc36"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js",
    "revision": "685d1ceb6b9a9f94aacf71d6aeef8b51"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
