import './styles.css';
import {home} from './home.js';
import {menu} from './menu.js';
import {about} from './about.js';

const content = document.querySelector('#content');

function loadHome(){
    content.appendChild(home);
}

function loadMenu() {{
    content.appendChild(menu);
}}

function loadAbout() {{
    content.appendChild(about);
}}

//loadHome();

//loadMenu();