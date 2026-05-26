const CACHE = 'physics-v1';
const FILES = [
    './',
    './index.html',
    './style.css',
    './index.js',
    './data.js',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    // Kinematics 1–15
    ...Array.from({length: 15}, (_, i) => `./images/mechanics/kinematics/${i+1}.png`),
    // Dynamics 16–24
    ...Array.from({length: 9}, (_, i) => `./images/mechanics/dynamics/${i+16}.png`),
    // Conservation of Energy 25–36
    ...Array.from({length: 12}, (_, i) => `./images/mechanics/conservationOfEnergy/${i+25}.png`),
    // Statics 37–42
    ...Array.from({length: 6}, (_, i) => `./images/mechanics/statics/${i+37}.png`),
    // Колебания и волны 43–49
    ...Array.from({length: 7}, (_, i) => `./images/oscillationsAndWaves/${i+43}.png`),
    // Молекулярная физика + Термодинамика 50–74
    ...Array.from({length: 25}, (_, i) => `./images/molecularPhysics/${i+50}.png`),
];

self.addEventListener('install', e => {
    e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
    self.skipWaiting();
});

self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request).then(cached => cached || fetch(e.request))
    );
});

self.addEventListener('activate', e => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});