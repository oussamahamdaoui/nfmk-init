const { html, $ } = require('@forgjs/noframework');
const router = require('./Router');

const App = () => {
  const DomElement = html`<div class="app">
    ${router.init()}
  </div>`;

  return DomElement;
}

document.body.appendChild(App());