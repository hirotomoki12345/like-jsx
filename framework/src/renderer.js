// src/renderer.js

function render(template, data) {
  return template.replace(/\{\{(.*?)\}\}/g, (match, key) => {
    return data[key.trim()] || '';
  });
}

function renderComponent(content) {
  const template = `<div>{{ content }}</div>`;
  return render(template, { content });
}

module.exports = { render, renderComponent };
