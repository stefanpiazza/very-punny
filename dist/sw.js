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
    "revision": "fda0095680a07a81c08806073908919e"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "c92bf36c675afd40a0b995a2f5c42fbe"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "785c26759b382ecb5ee8c4927ed62e93"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "ad66ed67219066e8bd6b9670f667d335"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "7b1628a9f94d35c0ccd4b7aee0236760"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "d5386f93d0e6e234ca11bc0048589c25"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "167eb5c7f0ae89e3d2a7aa1516567c84"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
