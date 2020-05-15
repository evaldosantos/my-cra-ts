import './style.scss';

function component() {
  const element = document.createElement('div');
  const person = { name: "John Doe" };
  const { name } = person; 
  element.innerHTML = ['Hello', name].join(' ');

  return element;
}

const rootEl = document.querySelector('#container');

rootEl.appendChild(component());