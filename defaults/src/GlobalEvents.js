const { EventManager } = require('@forgjs/noframework');

const GlobalEvents = new EventManager();

window.addEventListener('popstate', () => {
  GlobalEvents.emit('reroute', document.location.pathname);
});

module.exports = GlobalEvents;