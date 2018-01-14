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
    "revision": "74d6f8fec0a56cd7bd3f6b12cf04a82c"
  },
  {
    "url": "static/scripts/1.js",
    "revision": "274a0407f3706ee5f84ec35f1725597b"
  },
  {
    "url": "static/scripts/2.js",
    "revision": "1f4c0157a1dcaa4753e0cba40c8fcbf7"
  },
  {
    "url": "static/scripts/3.js",
    "revision": "8ba0353a576ede58193afabf39ba517d"
  },
  {
    "url": "static/scripts/4.js",
    "revision": "97d7ca66b323b488f9313ef3395b3cfd"
  },
  {
    "url": "static/scripts/5.js",
    "revision": "98f5a0d7463f30fdfc4b13d71bb8da42"
  },
  {
    "url": "static/scripts/6.js",
    "revision": "f8e10c0d567f4a760ac0aeb8d25221fd"
  },
  {
    "url": "static/scripts/app.js",
    "revision": "ef60862b5f76597bdf9e5477fd1b6f70"
  },
  {
    "url": "/static/scripts/common.js",
    "revision": "dee55a69fc4fd2d6bf291863d9fa90d1"
  },
  {
    "url": "/static/styles/app.css",
    "revision": "5108cd09a6e7d854f6a8f69565d0b28f"
  }
];

const workboxSW = new self.WorkboxSW({
  "skipWaiting": true,
  "clientsClaim": true
});
workboxSW.precache(fileManifest);
