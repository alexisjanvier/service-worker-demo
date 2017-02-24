var version = '04';

self.addEventListener('install', event => {
  console.log('Log from event "INSTALL" in service worker version ' + version);
  return self.skipWaiting();
});

self.addEventListener('fetch', event => {
  console.log('Log from event "FETCH" in service worker version ' + version);
});

self.addEventListener('activate', event => {
  console.log('Log from event "ACTIVATE" in service worker version ' + version);
  return self.clients.claim();
});
