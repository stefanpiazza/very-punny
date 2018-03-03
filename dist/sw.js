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
    "revision": "13d1c003e2fe24132932b0a62a32dd5a"
  },
  {
    "url": "/static/scripts/2.js",
    "revision": "237011216dfd1567af7037b1cf5fea44"
  },
  {
    "url": "/static/scripts/3.js",
    "revision": "2b4c0e55503d9f57122cb72fc9eb9bd8"
  },
  {
    "url": "/static/scripts/4.js",
    "revision": "761715302135a2860e3ad8eaebb95e5a"
  },
  {
    "url": "static/scripts/5.js",
    "revision": "cff9f474bc4a59eb72ca5095db61b745"
  },
  {
    "url": "/static/scripts/app.js",
    "revision": "245c4692f0e584ab5f002dee05ae3280"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "4035ee41d3054656a0579c1a5c5be38b"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "d3828a441413f350d9566ecbfc0107c8"
  },
  {
    "url": "/static/styles/common.css",
    "revision": "768f3991d68bde890832571d5306fc36"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
