'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "d99cb0898d382ddca65f20966b3f3b59",
"index.html": "e8f043945f6f2e74a21c8efd4d73b9c9",
"/": "e8f043945f6f2e74a21c8efd4d73b9c9",
"main.dart.js": "60bbcf380c2ae97817db19fff7c28240",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "d336bc108d6a7d73e99a38f597abbb0d",
"icons/Icon-192.png": "d336bc108d6a7d73e99a38f597abbb0d",
"icons/Icon-maskable-192.png": "d336bc108d6a7d73e99a38f597abbb0d",
"icons/Icon-maskable-512.png": "d336bc108d6a7d73e99a38f597abbb0d",
"icons/Icon-512.png": "d336bc108d6a7d73e99a38f597abbb0d",
"manifest.json": "95d063bc3826d1d12171ace3c9ca6543",
".git/config": "f35e399e2fb96e256ebb3559e7573adb",
".git/objects/61/2e875f6ea060d16f2391dcf5ffb42dee7ad6a4": "732237cab56e5d69aff8de2419b3e126",
".git/objects/61/665c231858277f7d641ea1193c8b33c1d14144": "a52e003b5607f4a5021950dd0f19bb40",
".git/objects/95/adb1ec0e775a5b82fb79a7cf3e59ec5062ad31": "b45d3da44cf2889cd44754cfffa107dd",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/0c/1c571feff4caa7144077c3a6ea2bb3ddc05250": "52a42543545c73efa1308e9727918e41",
".git/objects/3e/a5536e383f7b5dad45c38a99d6548f8b7a1b29": "f185a13d0208de5d0dd91dff517ce516",
".git/objects/50/b31ecf88f4e76ee5db3530db40edf5f60f0548": "a307fa509785de87bbac848146be2d30",
".git/objects/04/b200ba504c4b2f9969ea9990e47d75a7977473": "29f1b6fd7c4465a4d85dcb45c9f634f1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/51/1efbccaee147470da58f5527eaf503d3a1babe": "2c14a91e1f96f72f2bfe86971945aba2",
".git/objects/67/d14422822f37d450640bb3175f49eb7ea9da19": "147ebf3dd7a3fceaf835c3cff889a7a6",
".git/objects/0e/982dd5cabeacfc3b5699d48def4f9e668cb459": "20b311a52259278fb995c6ce8aa7bcd6",
".git/objects/9d/5f886353dcff6c222439cc1118e77eb1b007ea": "a87ff240c6e149d1ce495643e49417f9",
".git/objects/9d/f043624cf86b7895df049b8d4b157f1e54bc8c": "ce1651928e65d025057a1a409381ba7a",
".git/objects/02/ce519de43cf87aa96e3984dd17398c899c4bc6": "6c041ccfeaed75eab939cae64b88e0fb",
".git/objects/ac/ac6695d78da8e11e8a7a70762d416f19d2f163": "14714753933f89d269f69edd76356bd8",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d0/5e563de88b8215c69747eeb1099028e55c0c2e": "35e58be411732c3cbba684717d338dbf",
".git/objects/be/17d74268262d809316dee45f3af2fcf3b372a0": "0c7e144cc86f4f0cd4aa2c7153ecadf4",
".git/objects/be/8b7609694b6425926802995f50813734786659": "b7b12879876d7f47813cd9fab4211fa8",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/d6/aa5a89ef496b0fcdf803d83270bd6878f82eb7": "dc24aa24d2fdf5f8007833ffc7870037",
".git/objects/ab/5f4f4e40256fe573d49e20e6485a5b30c74978": "7074ff01fa7dbb513aad14a33611c48a",
".git/objects/e2/ff5865b192241d53935e77de70a4e6dff2847a": "cad1058aedc6c21a518b3cb00af21fac",
".git/objects/f4/74e2b8ffbe192cc80509f3d8f61513da0830b6": "fa1100feeb7c994eee6552e2ccc8409a",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/f5/a116f96a249352378d4f44ffd63b72e88af59e": "9f9e8af35d0accfb65ae3e608b3d14af",
".git/objects/cf/901d5197d45f89ea04a7c324053084166d4285": "cd7cb375d35c51038ec7ca9b41c32009",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/18/4a01962220d4d82da8d877662f0d17b741fc21": "f0df12b649532ec3efb79e195fd2d667",
".git/objects/18/7ecee758242eadbc68d0afbf5f81a6c7089df6": "a0b643e6e17fddec60b2f14820b6d55c",
".git/objects/11/6c66f330893c59071f8ccf0ca72e96ec0ee638": "77f340f430ae0bde743d10720c8b50df",
".git/objects/87/3efddf0596c6c3d1bc3c41735aa8152384075f": "23112859daa5ae7a3604d3ce54e8c29f",
".git/objects/1a/f9e8039f89141821ad65d094553ebd52c439aa": "02c72ac4b834534b89a966198398e846",
".git/objects/28/e6b9dabbf634d02b25d3509adf1d43d48ed619": "11eada3a64fb7c1be5f7edf398b79689",
".git/objects/81/50defa09e0e08478c441fa095d098814a8cb86": "2dbeb96efb7ca8bb80138eccc5244a0c",
".git/objects/43/2388a9dff42406eddc9828fe8a953f7c4f311d": "21663731d3cd696dd8735121761aafa8",
".git/objects/07/26c1c483478409bd279c587e685de2897a8593": "27766b2007571a7e5afe3e12e7bdb75f",
".git/objects/09/e36e6b7320e6b2e2080513c6bb915b98709f00": "f5f041fdf0692014c59bdc3df2a33f6b",
".git/objects/31/2486f874e1135b3c916886e4a2e4929a430e15": "f2f0f4361d41065fb6d1bcdbdf867ffc",
".git/objects/31/dd29b95323243ac88de24b6d1c09d73b97f67f": "d7f4a946f7841a4794f79298dbf4be24",
".git/objects/53/2a12ba393e6c63180f8adce7fee811080459ea": "ff376e5e1fe44ff3a1665d10b132eb8c",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/37/e02d1c7da68bc41552f28b2e67d17039e80916": "5fc50528ea8b648c9e661ad494fd10f9",
".git/objects/6c/0b61645635ea35582ea7c86f6768d0111e6b74": "cfcbb8243477c760d751ae6e6f6f71dd",
".git/objects/52/12cd17f79ddadc563bba17fea80733ce169a21": "ec155416ba5e9926d7708643e35be43e",
".git/objects/55/3bbe64627c70c82b0a8c7b8d6ad3a5b9c41a37": "f1e00c5904679f7a3a7b50ab0c115781",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/a6/9280ac8e252b5a299862dfab8b4a417e967194": "b74d202dd47a4a0442ae4a49a5a14aad",
".git/objects/b9/c6e3767357f4bf5016a21dc0b6015d08be3c99": "ed3aa2529b39652d96e835b68d09298c",
".git/objects/e6/46d591f99adb142edab348e5d728ad2bddc4a3": "7630b34441d494db3bf4d884cd250e72",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/c2/d8d2f44dd987786bbc249d4ad7bac3360f4811": "1926a57b256d9def261ccf6dc2914f65",
".git/objects/e0/49c81f7cb35ebc411a3e1b547bf4ccf91292e8": "efad70dc0ca77a90ee53b5cc3be528ca",
".git/objects/2c/360dfa47bad4d6c47524b1c10a41f1363cbc37": "424cd1abc9c96dc548d98ce96ff8353d",
".git/objects/41/d8a6138e5147f20070ff9ebd321eefbe1d0f2b": "a3621b8f6d0fd60544c1e702dfeb507f",
".git/objects/70/1e8012e875a10fc27a744901b346979c2145f8": "2b41279affdb369d59f8b5b33f4566e1",
".git/objects/1e/7ea82d259d97063a8cb431c595feaed74533f1": "b2e7dcb52d6a3b4803e729df5349d092",
".git/objects/84/29ef5a45b30cd65f1542b9735ddef2c667d32d": "6f764e362ad433d1034d7ea8551c38fd",
".git/objects/76/8550e33121ecc2124b561cf1d5674c18007ae8": "0cf88ec8e0bb2ee622a31509766e57ba",
".git/objects/47/fdecea96e7e403484b1fb8a6a77060eb56f3e1": "29eb6db0e0dd2e55ca4cde541604e9ec",
".git/objects/7f/7544a789bafa6b633bcd9cac989d49b9ee8339": "87a3616be7fb04002b3ec277d2dbac93",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "286cbc47d44ff52a2d17628a15843b98",
".git/logs/refs/heads/main": "95d87abfb22b0580c2c70f41ac858a8a",
".git/logs/refs/remotes/origin/main": "5800998463d8ef7b5b5f34902e7abaa2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "e0d956aed93064753e7b800caa946191",
".git/refs/remotes/origin/main": "40f0d9eb12037baf4a75c117b5220349",
".git/index": "a219607ecc146880d265ef73fcb7b4c1",
".git/COMMIT_EDITMSG": "1657b8ee2bab81bc971c2b99c62489ec",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.json": "4bfa7c90d1a16ba19a0cabfecfcf58cc",
"assets/NOTICES": "5eb69df8b12858578cbbe35769508ab8",
"assets/FontManifest.json": "0c82d5c362dfc43cbb1e237af90bb750",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "5efc0e0d3673238538fa79779abda25f",
"assets/fonts/MaterialIcons-Regular.otf": "a2e9564421361bcef20aac7a403d379e",
"assets/assets/email.png": "8f0212e7a9a53853932cdfd9734f640e",
"assets/assets/design.png": "bd2e1cac86bfb7b481a5d498e6b5fe63",
"assets/assets/mypic.png": "0bf73130da48619b07c9fd38263a962c",
"assets/assets/schoolbus.png": "cc9d40188ddb63210450df5e6c5a6bbb",
"assets/assets/address.png": "a826c7b7526eec88fb314a3c18678536",
"assets/assets/zeed.png": "ab286a2a070acf4d7f720973ae5584d5",
"assets/assets/promote.png": "bef297da314f46329f9175df8d5531e8",
"assets/assets/portfolio.png": "bc7107b7a3b16e402d47bff8923dcaaa",
"assets/assets/develop.png": "0764a6445b112ed0d6291ace9d082344",
"assets/assets/phone.png": "7147ca19cb88338682ba6ede7f2f6f53",
"assets/assets/write.png": "83e41f73c6bb1231868656f26829e28b",
"assets/assets/fonts/Oswald-Bold.ttf": "c95751378db3c5c8bfd993b164e13422",
"assets/assets/fonts/Oswald-Medium.ttf": "64cd7cbc3170606b84d7a1d8a295d2fb",
"assets/assets/whatsapp.png": "973e2c7a11c69a6321c79433b9ba1d6f",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
