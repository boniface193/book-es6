const showItem = document.getElementById('showItems');

const showBook = () => {
  
  showItem.innerHTML = '';
  const getpayLoad = JSON.parse(localStorage.getItem('payLoad'));

  if (getpayLoad !== null) {
    getpayLoad.forEach((item, index) => {
      showItem.innerHTML += `
        <div class="d-flex justify-between mt-1 px-2 mb-1">
          <p class="indent">"${item.title}" by ${item.author.toUpperCase()}</p>
          <button type="submit" id="removeItem" btn_id=${index} class="card-strip removeItem">Remove</button>
        </div>
      `;
    });

    const removeItemBYClass = document.querySelectorAll('.removeItem');
    const storage = JSON.parse(localStorage.getItem('payLoad'));
    removeItemBYClass.forEach((rvBtn, index) => {
      rvBtn.addEventListener('click', () => {
        storage.splice(index, 1);
        localStorage.setItem('payLoad', JSON.stringify(storage));
        showBook();
      });
    });
  }
};

export default showBook;
