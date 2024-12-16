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
for (let i = 0; i < 3; i++) {
    let section = document.createElement('div');
    section.className = 'section';
    let heading = document.createElement('h1');
    heading.appendChild(document.createTextNode(sectionHeadings[i]));
    section.appendChild(heading);
    sections.push(section);
}

// create main's items
const mainItems = document.createElement('div');
mainItems.className = 'items';
const mainImg = images.slice(0, 4);
const mainH1 = ['Burrito $8.99', 'Flautas $7.99', 'Tacos $1.50/ea', 'Enchiladas $7.99']
const mainP = ['A hearty burrito stuffed with your choice of protein, beans, rice, and creamy guacamole, all wrapped in a warm flour tortilla.',
    'Crispy rolled tortillas filled with your choice of savory meat or cheese, served with fresh guacamole, sour cream, and zesty salsa.',
    'Delicious tacos with your choice of protein, topped with fresh cilantro, onions, and a squeeze of lime on soft corn tortillas.',
    'Flavorful enchiladas filled with your choice of protein or cheese, rolled in corn tortillas, and smothered in rich sauce and melted cheese.'
];

// Create each item and append to Main's items div
for (let i = 0; i < 4; i++) {
    let item = document.createElement('div');
    item.className = 'item'

    // Item's image
    let itemImg = document.createElement('img');
    itemImg.src = mainImg[i];
    item.appendChild(itemImg);

    // Item's header
    let itemH = document.createElement('h1');
    itemH.appendChild(document.createTextNode(mainH1[i]));
    item.appendChild(itemH);

    //Item's description
    let itemP = document.createElement('p');
    itemP.appendChild(document.createTextNode(mainP[i]));
    item.appendChild(itemP);

    mainItems.append(item);
}

// create Side's items
const sideItems = document.createElement('div');
sideItems.className = 'items';
const sideImg = images.slice(4, 7);
const sideH1 = ['Tortilas $1.99', 'Rice $2.50', 'Beans $2.50'];
const sideP = ['Soft, warm handmade tortillas crafted from fresh masa, perfect for wrapping or savoring on their own.',
    'Fluffy, seasoned rice cooked to perfection with a blend of spices for a flavorful side dish.',
    'Creamy, slow-cooked beans seasoned with traditional spices for a hearty and flavorful side.'
];

for (let i = 0; i < 3; i++) {
    let item = document.createElement('div');
    item.className = 'item'

    // Item's image
    let itemImg = document.createElement('img');
    itemImg.src = sideImg[i];
    item.appendChild(itemImg);

    // Item's header
    let itemH = document.createElement('h1');
    itemH.appendChild(document.createTextNode(sideH1[i]));
    item.appendChild(itemH);

    //Item's description
    let itemP = document.createElement('p');
    itemP.appendChild(document.createTextNode(sideP[i]));
    item.appendChild(itemP);

    sideItems.append(item);
}

// create Drink's items
const drinkItems = document.createElement('div');
drinkItems.className = 'items';
const drinkImg = images.slice(-2, 10);
const drinkH1 = ['Aguas Frescas $2.99', 'Canned Soft Drink $1.50'];
const drinkP = ['Refreshing aguas frescas in your choice of horchata, tamarindo, or passion fruit, bursting with vibrant, natural flavors.',
    'Chilled soft drinks in a variety of classic flavors to complement your meal.'
];

for (let i = 0; i < 2; i++) {
    let item = document.createElement('div');
    item.className = 'item'

    // Item's image
    let itemImg = document.createElement('img');
    itemImg.src = drinkImg[i];
    item.appendChild(itemImg);

    // Item's header
    let itemH = document.createElement('h1');
    itemH.appendChild(document.createTextNode(drinkH1[i]));
    item.appendChild(itemH);

    //Item's description
    let itemP = document.createElement('p');
    itemP.appendChild(document.createTextNode(drinkP[i]));
    item.appendChild(itemP);

    drinkItems.append(item);
}

const items = [mainItems, sideItems, drinkItems];

for (let i = 0; i < 3; i++) {
    menu.appendChild(sections[i]);
    menu.appendChild(items[i]);
}

export { menu };