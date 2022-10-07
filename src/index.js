import './style.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

class List {
  constructor(description, completed, id) {
    this.description = description,
      this.completed = completed,
      this.id = id
  }
}

const clearbutton = document.querySelector('.btn');
const container = document.querySelector('.container');
const form = document.querySelector('.form');
const inputtxt = document.querySelector('#inp')
let tasks = [] || JSON.parse(localStorage.getItem("todo"))






const addItems = (newDescription) => {
  const li = document.createElement("li");
  li.classList.add("eachitem");
  li.innerHTML = `<span class = "span">
<input class = "checker" type = "checkbox" >
${newDescription}
</span>
<span class = "vertical">
 <i class="fa-solid fa-ellipsis-vertical more"></i> 
 </span>
<span class ="trashcan">
 <i  style="display:none;" class="fa-solid fa-trash delete"></i>
</span>`;

}

form.addEventListener('submit', (e) => {
  e.preventDefault()

})


const populate = (tasks) => {
  tasks.forEach((task) => {
    container.innerHTML +=
      ` <li class = "eachitem" id = ${task.id}> 
         
        </li>
    `

  })
}




function load() {
  const tasks = JSON.parse(localStorage.getItem('taskInfo'));
  if (tasks) {
    populate(tasks);
  }
}
load()

