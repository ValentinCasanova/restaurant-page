import burritoImg from './assets/menu/burrito.jpg'
import flautaImg from './assets/menu/flautas.jpg'
import tacosImg from './assets/menu/tacos.jpg'
import enchiladasImg from './assets/menu/enchiladas.jpg'
import tortillasImg from './assets/menu/tortillas.jpg'
import riceImg from './assets/menu/rice.jpg'
import beansImg from './assets/menu/beans.jpg'
import juiceImg from './assets/menu/juice.jpg'
import sodaImg from './assets/menu/soda.jpg'

const images = [burritoImg, flautaImg, tacosImg, enchiladasImg, 
    tortillasImg, riceImg, beansImg, juiceImg, sodaImg];

const menu = document.createElement('div');
menu.className = 'menu';

// create section headings
const sectionHeadings = ['Mains', 'Sides', 'Drinks'];
const sections = [];
for(let i = 0; i < 3; i++){
    let section = document.createElement('div');
    section.className = 'section';
    let heading = document.createElement('h1');
    heading.appendChild(document.createTextNode(sectionHeadings[i]));
    section.appendChild(heading);
    sections.push(section);
}
