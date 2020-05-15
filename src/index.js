function component() {
  const element = document.createElement('div');

  element.innerHTML = ['Hello', 'webpack'].join(' ');

  return element;
}

const rootEl = document.querySelector('#container');

rootEl.appendChild(component());