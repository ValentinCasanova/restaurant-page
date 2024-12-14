import './styles.css';
import {home} from './home.js';

function initialLoad(){
    const content = document.querySelector('#content');
    console.log(home);
    content.appendChild(home);
}

initialLoad();