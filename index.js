import showBook from './modules/showBook.js';
import createBook from './modules/createBook.js';
import Navigator from './modules/navigation.js';
import { DateTime } from './node_modules/luxon/src/luxon.js';

showBook();
createBook();
Navigator();

document.getElementById('currentDate').innerHTML = DateTime.now();
document.getElementById('CurrentYear').innerHTML = new Date().getFullYear();
