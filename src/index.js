import './styles.css';
import {home} from './home.js';
import {menu} from './menu.js';
import {about} from './about.js';

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');
let currPage = 'home';

content.appendChild(home);

function changePage(nextPage) {
    if(nextPage == currPage) return;
    content.removeChild(content.children[0]);
}

for(let button of buttons){
    button.addEventListener('click', () => changePage(button.innerText.toLowerCase()));
}



//loadMenu();

//loadAbout();