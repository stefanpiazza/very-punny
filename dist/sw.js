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
    "revision": "f0e352f1b5b33f17f26739cc854818a3"
  },
  {
    "url": "/static/scripts/1.js",
    "revision": "0e1ef0d5425f8bb6d002ba97e6657899"
  },
  {
    "url": "/static/scripts/2.js",
    "revision": "922a9d4d66f23c9ad5f3aa9a927e9400"
  },
  {
    "url": "/static/scripts/3.js",
    "revision": "4cdec00b4088f90ba9493425f3555817"
  },
  {
    "url": "/static/scripts/app.js",
    "revision": "c7af74424362dd3423163dec9af30bfd"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "6e97a82e9161dffb73eb4e53d6c7754a"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "164f7e1273155d241bb7045bf204f771"
  },
  {
    "url": "/static/styles/common.css",
    "revision": "bcace371bde45bd68761d9c749d9b930"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
