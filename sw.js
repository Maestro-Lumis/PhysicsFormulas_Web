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
    './images/mechanics/kinematics/1.png',
    './images/mechanics/kinematics/2.png',
    './images/mechanics/kinematics/3.png',
    './images/mechanics/kinematics/4.png',
    './images/mechanics/kinematics/5.png',
    './images/mechanics/kinematics/6.png',
    './images/mechanics/kinematics/7.png',
    './images/mechanics/kinematics/8.png',
    './images/mechanics/kinematics/9.png',
    './images/mechanics/kinematics/10.png',
    './images/mechanics/kinematics/11.png',
    './images/mechanics/kinematics/12.png',
    './images/mechanics/kinematics/13.png',
    './images/mechanics/kinematics/14.png',
    './images/mechanics/kinematics/15.png',
];

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE).then(cache => cache.addAll(FILES))
    );
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