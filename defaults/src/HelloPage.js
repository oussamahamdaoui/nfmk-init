const { html, $ } = require('@forgjs/noframework');

const HelloPage = () => {
  const DomElement = html`<div>
    <h1>Hello world!</h1>
  </div>`;

  return DomElement;
}

module.exports = HelloPage;