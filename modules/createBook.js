import showBook from './showBook.js';

let idCounter = 0;
const collectAllObj = [];
const form = document.getElementById('form');
const collectItems = document.getElementsByTagName('input');

const createBook = () => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const payLoad = {
      title: collectItems[0].value,
      author: collectItems[1].value,
      id: idCounter += 1,
    };

    collectAllObj.push(payLoad);
    localStorage.setItem('payLoad', JSON.stringify(collectAllObj));
    form.reset();
    showBook();
  });
};

export default createBook;