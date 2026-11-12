// SEBROX · Registro — service worker mínimo (permite instalar la app). No guarda nada en caché.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
