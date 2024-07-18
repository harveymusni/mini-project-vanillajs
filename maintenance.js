export function checkMaintenance() {
  fetch('/static/isUnderMaintenance.json')
      .then(response => {
          if (response.status === 200) {
              document.getElementById('maintenance-overlay').classList.remove('hidden');
          } else {
              document.getElementById('maintenance-overlay').classList.add('hidden');
          }
      })
      .catch((e) => {
          document.getElementById('maintenance-overlay').classList.add('hidden');
      });
}
