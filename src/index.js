import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const tasks = [{
  description: 'wash the dishes',
  completed: false,
  index: 1,
},
{
  description: 'walk the dog',
  completed: false,
  index: 2,
},
];

const container = document.querySelector('.container');
tasks.forEach((task) => {
  const list = document.createElement('li');
  list.classList.add('thelist');
  const input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('check');
  const vertical = document.createElement('div');
  vertical.innerHTML = ' <i class="fa-solid fa-ellipsis-vertical"></i>';
  vertical.classList.add('elipsis');
  list.innerHTML = task.description;
  list.style.listStyleType = 'none';
  list.appendChild(vertical);
  list.appendChild(input);
  container.appendChild(list);
});
