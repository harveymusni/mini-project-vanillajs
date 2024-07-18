self.addEventListener('install', event => {
  console.log('Service worker installing...');
});

self.addEventListener('activate', event => {
  console.log('Service worker activating...');
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('isUnderMaintenance.json')) {
      event.respondWith(
          fetch(event.request).then(response => {
              if (response.status === 200) {
                  self.clients.matchAll().then(clients => {
                      clients.forEach(client => client.postMessage('maintenance'));
                  });
              } else {
                  self.clients.matchAll().then(clients => {
                      clients.forEach(client => client.postMessage('no-maintenance'));
                  });
              }
              return response;
          })
      );
  }
});

self.addEventListener('message', event => {
  if (event.data === 'check-maintenance') {
      self.clients.matchAll().then(clients => {
          clients.forEach(client => client.postMessage('check-maintenance'));
      });
  }
});
