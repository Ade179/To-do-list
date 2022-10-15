/**
  @jest-environment jsdom
 */
import store from '../modules/store.js';
import renderList from '../modules/function.js';

document.body.innerHTML = '<input type="text" name="task" class="text-field full" placeholder="Add to your list..." required> <ul class="task-list"> </ul> <a class="clear-btn" href="">Clear all completed</a>';

describe('Store', () => {
  test('Should add element when its called', () => {
    store('Hello');
    renderList();
    const list = document.querySelectorAll('textarea');
    expect(list).toHaveLength(1);
  });
});

describe('Delete task', () => {
  test('Should remove added task', () => {
    const deleteBtn = document.querySelector('.delete');
    deleteBtn.click();
    const listElement = document.querySelectorAll('textarea');
    expect(listElement).toHaveLength(0);
  });
});
