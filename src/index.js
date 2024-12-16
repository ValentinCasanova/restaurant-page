import './styles.css';
import {home} from './home.js';
import {menu} from './menu.js';

const content = document.querySelector('#content');

function loadHome(){
    content.appendChild(home);
}

function loadMenu() {{
    content.appendChild(menu);
}}

//loadHome();

//loadMenu();