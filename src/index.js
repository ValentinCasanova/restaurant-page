import './styles.css';
import {home} from './home.js';

function loadHome(){
    const content = document.querySelector('#content');
    console.log(home);
    content.appendChild(home);
}

//loadHome();