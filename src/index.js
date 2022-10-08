import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

class List {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

const container = document.querySelector('.container');
const form = document.querySelector('.form');
const inputtxt = document.querySelector('#inp');

let itemArray = [] || JSON.parse(localStorage.getItem('items'));

const completeItem = () => {
  const localData = localStorage.getItem('items');
  const parsedData = JSON.parse(localData);
  const eachItem = document.querySelectorAll('.span');
  for (let i = 0; i < eachItem.length; i += 1) {
    if (eachItem[i].classList.contains('strike')) {
      parsedData[i].completed = true;
    } else {
      parsedData[i].completed = false;
    }
    localStorage.setItem('items', JSON.stringify(parsedData));
  }
};

// Edit items
const editItems = (oldItem, newy, spano) => {
  const newInput = document.createElement('input');
  newInput.type = 'text';
  newInput.classList.add('new-input');
  newInput.value = oldItem.textContent;
  oldItem.replaceWith(newInput);
  const local = localStorage.getItem('items');
  const data = JSON.parse(local);
  newInput.addEventListener('keypress', (e) => {
    const newId = newy.id;

    if (e.key === 'Enter') {
      const oldItem = spano;
      oldItem.textContent = newInput.value;
      newInput.replaceWith(oldItem);
      const editedContainers = document.querySelectorAll('.eachitem');
      for (let i = 0; i < editedContainers.length; i += 1) {
        if ((editedContainers[i].id) === newId) {
          data[i].description = newInput.value;
          localStorage.setItem('items', JSON.stringify(data));
        }
      }
    }
  });
};

// Remove items
const removeItems = (li) => {
  container.removeChild(li);
  let count = 1;
  const parsedItems = localStorage.getItem('items');
  let localData = JSON.parse(parsedItems);
  // Filter elements that are true
  localData = localData.filter((item) => item.completed === false);
  itemArray = JSON.parse(localStorage.getItem('items'));
  itemArray.splice((li.index) - 1, 1);
  localData = itemArray;
  // Update index of elements
  localData.map((item) => {
    item.id = count;
    count += 1;
    return null;
  });
  localStorage.setItem('items', JSON.stringify(localData));
};

// create remove update delete
const crud = (newDescription) => {
  const newItem = document.createElement('li');
  newItem.classList.add('eachitem');
  newItem.innerHTML += ` <input class = "checker" type = "checkbox" >
  <span class = "span"> ${newDescription} </span>
  <span class = "vertical  more">
  <i class="fa-solid fa-ellipsis-vertical"></i> 
  </span>
  <span style = "display: none;" class ="trashcan">
  <i  class="delete fa-solid fa-trash "></i>
  </span>`;

  container.appendChild(newItem);
  const checkbox = document.querySelectorAll('.checker');
  const spanText = document.querySelectorAll('.span');
  const more = document.querySelectorAll('.more');
  const trash = document.querySelectorAll('.trashcan');
  const each = document.querySelectorAll('.eachitem');

  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('click', () => {
      if (checkbox[i].checked) {
        spanText[i].classList.add('strike');
        each[i].classList.add('clicked-on');
        more[i].style.display = 'none';
        trash[i].style.display = 'block';
      } else {
        spanText[i].classList.remove('strike');
        each[i].classList.remove('clicked-on');
        more[i].style.display = 'block';
        trash[i].style.display = 'none';
      }
      completeItem();
    });
  }

  // Create and send new item to local storage
  const newListItem = new List(newDescription, false, checkbox.length);
  itemArray.push(newListItem);
  const stringedItems = JSON.stringify(itemArray);
  localStorage.setItem('items', stringedItems);

  // Edit items
  for (let i = 0; i < more.length; i += 1) {
    more[i].addEventListener('click', () => {
      editItems(spanText[i], each[i], spanText[i]);
    });
  }
  // Delete item
  for (let i = 0; i < trash.length; i += 1) {
    trash[i].addEventListener('click', () => {
      removeItems(each[i]);
    });
  }
};

// Add event listener to form
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (inputtxt.value) {
    crud(inputtxt.value);
    inputtxt.value = null;
  }
});

const getItemsLocal = () => {
  const localItems = localStorage.getItem('items');
  const items = JSON.parse(localItems);
  items.map((item) => {
    itemArray.push(item);
    const flag = item.completed ? 'checked' : '';
    const flag2 = item.completed ? 'strike' : '';
    const flag3 = item.completed ? 'clicked-on' : '';
    const flag4 = item.completed ? 'block' : 'none;';
    const flag5 = item.completed ? 'none' : 'block;';
    const newItem = document.createElement('li');
    newItem.setAttribute('class', `eachitem ${flag3}`);
    const newId = item.id;
    newItem.setAttribute('id', newId);
    newItem.innerHTML = `<input class = "checker" type = "checkbox" id="${item.id}" ${flag}>
    <span class = "span ${flag2}">${item.description}</span>
    <span style = "display:${flag5};" id="ellipsis${item.id}" class = "vertical more">
    <i class="fa-solid fa-ellipsis-vertical "></i> 
    </span>
    <span style = "display:${flag4};" class ="trashcan">
    <i id ="trash${item.id}"  class="delete fa-solid fa-trash "></i>
    </span>`;

    container.appendChild(newItem);
    return null;
  });

  const checkbox = document.querySelectorAll('.checker');
  const spanText = document.querySelectorAll('.span');
  const more = document.querySelectorAll('.more');
  const trash = document.querySelectorAll('.trashcan');
  const each = document.querySelectorAll('.eachitem');

  for (let i = 0; i < checkbox.length; i += 1) {
    checkbox[i].addEventListener('click', () => {
      if (checkbox[i].checked) {
        spanText[i].classList.add('strike');
        more[i].style.display = 'none';
        trash[i].style.display = 'block';
      } else {
        spanText[i].classList.remove('strike');
        more[i].style.display = 'block';
        trash[i].style.display = 'none';
      }
      completeItem();
    });
  }

  for (let i = 0; i < more.length; i += 1) {
    more[i].addEventListener('click', () => {
      editItems(spanText[i], each[i], spanText[i]);
    });
  }

  // Remove items
  for (let i = 0; i < trash.length; i += 1) {
    trash[i].addEventListener('click', () => {
      removeItems(each[i]);
    });
  }

  localStorage.setItem('items', JSON.stringify(itemArray));
};
window.addEventListener('load', getItemsLocal);
