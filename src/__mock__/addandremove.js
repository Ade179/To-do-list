const container = document.querySelector('.container');
let itemArray = [] || JSON.parse(localStorage.getItem('items'));

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
  // Update index of elements5.
  localData.map((item) => {
    item.id = count;
    count += 1;
    return null;
  });
  localStorage.setItem('items', JSON.stringify(localData));
};

module.exports = removeItems;