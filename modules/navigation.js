const home = document.getElementById('list');
const addNew = document.getElementById('addNew');
const Contact = document.getElementById('Contact');
const index = document.getElementById('index');
const addBook = document.getElementById('addBook');
const contact = document.getElementById('contact');


const Navigator = () => {
  home.addEventListener('click', () => {
    addBook.classList.add('d-none');
    contact.classList.add('d-none');
    index.classList.remove('d-none');
  });

  addNew.addEventListener('click', () => {
    index.classList.add('d-none');
    contact.classList.add('d-none');
    addBook.classList.remove('d-none');
  });

  Contact.addEventListener('click', () => {
    index.classList.add('d-none');
    addBook.classList.add('d-none');
    contact.classList.remove('d-none');
  });
};

export default Navigator;
