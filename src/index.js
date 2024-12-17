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
    currPage = nextPage;
    let currLoad = '';
    switch(currPage){
        case 'home':
            currLoad = home;
            break;
        case 'about':
            currLoad = about;
            break;
        case 'menu':
            currLoad = menu;
            break;
    }
    content.appendChild(currLoad);
    document.querySelector('body').style.backgroundColor = '#BFD2BF';
}

for(let button of buttons){
    button.addEventListener('click', () => changePage(button.innerText.toLowerCase()));
}
