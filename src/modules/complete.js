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

export default completeItem;